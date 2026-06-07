#!/usr/bin/env node

require('dotenv').config();
const { Anthropic } = require('@anthropic-ai/sdk');

const client = new Anthropic();

const BLOSSOM_SYSTEM = `You are Blossom, an AI assistant for Elizabeth and Ian. You help with:
- Answering questions about the Blossom project
- Providing technical guidance
- Discussing design and architecture
- Sharing information about testing, resource management, learning

Be concise in SMS (prefer under 160 characters when possible, but longer responses are fine).
Be warm, helpful, and direct. Remember: you're texting, not writing an essay.`;

// Test messages
const testMessages = [
  "How do I change Blossom's colors?",
  "What's the resource management budget?",
  "Can I text you from my phone?",
  "How do I run the prototype?",
  "What testing levels do you recommend?"
];

async function testBlossom() {
  console.log('🌵 Testing Blossom SMS Gateway (Local)\n');
  console.log('Checking API key...');

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ ANTHROPIC_API_KEY not set in .env');
    console.error('Get your key from: https://console.anthropic.com/api_keys');
    process.exit(1);
  }

  console.log('✓ API key found\n');

  // Test each message
  for (const message of testMessages) {
    console.log(`📱 Test message: "${message}"`);

    try {
      const response = await client.messages.create({
        model: 'claude-opus-4-8',
        max_tokens: 1024,
        system: BLOSSOM_SYSTEM,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      });

      const responseText = response.content[0].text;
      console.log(`✓ Response: "${responseText}"\n`);
    } catch (err) {
      console.error(`✗ Error: ${err.message}\n`);
    }
  }

  console.log('✓ Local testing complete!');
  console.log('\nNext steps:');
  console.log('1. Set up Twilio account (https://www.twilio.com)');
  console.log('2. Get your Twilio phone number');
  console.log('3. Fill in .env with Twilio credentials');
  console.log('4. Deploy server (Heroku, Google Cloud, AWS)');
  console.log('5. Configure Twilio webhook to point to your deployed server');
  console.log('6. Start texting!');
}

testBlossom().catch(console.error);
