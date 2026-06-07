#!/usr/bin/env node

require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const { Anthropic } = require('@anthropic-ai/sdk');

const app = express();
app.use(express.urlencoded({ extended: false }));

// Initialize clients
const client = new Anthropic();
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const PORT = process.env.PORT || 3000;
const BLOSSOM_NUMBER = process.env.BLOSSOM_PHONE_NUMBER;

// System prompt for Blossom
const BLOSSOM_SYSTEM = `You are Blossom, an AI assistant for Elizabeth and Ian. You help with:
- Answering questions about the Blossom project
- Providing technical guidance
- Discussing design and architecture
- Sharing information about testing, resource management, learning

Be concise in SMS (prefer under 160 characters when possible, but longer responses are fine).
Be warm, helpful, and direct. Remember: you're texting, not writing an essay.

If asked about how you work or your capabilities, be honest about what you can and can't do.`;

// Request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// SMS webhook (handles incoming messages)
app.post('/sms', async (req, res) => {
  const messageBody = req.body.Body || '';
  const fromNumber = req.body.From;
  const toNumber = req.body.To;

  console.log(`📱 SMS from ${fromNumber}: "${messageBody}"`);

  // Immediately return 200 to Twilio (we'll respond asynchronously)
  res.sendStatus(200);

  try {
    // Check that message is to Blossom's number
    if (toNumber !== BLOSSOM_NUMBER && !BLOSSOM_NUMBER.includes('*')) {
      console.log(`⚠️  Message to different number: ${toNumber}`);
      return;
    }

    // Send to Claude
    console.log(`🧠 Sending to Claude: "${messageBody}"`);
    const response = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 1024,
      system: BLOSSOM_SYSTEM,
      messages: [
        {
          role: 'user',
          content: messageBody
        }
      ]
    });

    const responseText = response.content[0].text;
    console.log(`✓ Claude response: "${responseText}"`);

    // Split into SMS-friendly chunks (Twilio handles up to 1600 chars, but we'll keep to 160 for mobile)
    // Actually, let's be more flexible and send as-is if reasonable
    const chunks = [];
    if (responseText.length > 400) {
      // For long responses, try to split at sentence boundaries
      const sentences = responseText.split(/(?<=[.!?])\s+/);
      let currentChunk = '';

      for (const sentence of sentences) {
        if ((currentChunk + sentence).length > 400) {
          if (currentChunk) chunks.push(currentChunk.trim());
          currentChunk = sentence;
        } else {
          currentChunk += (currentChunk ? ' ' : '') + sentence;
        }
      }
      if (currentChunk) chunks.push(currentChunk.trim());
    } else {
      chunks.push(responseText);
    }

    // Send each chunk as separate SMS
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      console.log(`📤 Sending SMS ${i + 1}/${chunks.length}: "${chunk.substring(0, 50)}..."`);

      try {
        await twilioClient.messages.create({
          body: chunk,
          from: BLOSSOM_NUMBER,
          to: fromNumber
        });
        console.log(`✓ SMS ${i + 1} sent successfully`);
      } catch (err) {
        console.error(`✗ Failed to send SMS ${i + 1}:`, err.message);
      }
    }

    console.log(`✓ All responses sent to ${fromNumber}`);

  } catch (err) {
    console.error(`✗ Error processing message:`, err.message);

    // Try to send error message back
    try {
      await twilioClient.messages.create({
        body: `Blossom encountered an error: ${err.message.substring(0, 100)}. Please try again.`,
        from: BLOSSOM_NUMBER,
        to: fromNumber
      });
    } catch (sendErr) {
      console.error(`✗ Failed to send error message:`, sendErr.message);
    }
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🌵 Blossom SMS Gateway listening on port ${PORT}`);
  console.log(`📱 Blossom Number: ${BLOSSOM_NUMBER || '(not configured)'}`);
  console.log(`🔗 SMS Webhook URL: http://localhost:${PORT}/sms`);
  console.log(`💚 Health check: http://localhost:${PORT}/health\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\n🛑 Interrupted. Shutting down...');
  process.exit(0);
});
