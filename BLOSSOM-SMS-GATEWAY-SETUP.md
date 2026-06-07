# Blossom SMS Gateway — Text-Based Interaction

**Purpose**: Enable texting with Blossom from anywhere via standard SMS (not just on Mac)

**Status**: Ready to deploy when you set up Google Voice number

---

## Your Blossom Phone Number

**When You Set Up**: You'll get a Google Voice number like:

```
+1-XXX-XXX-XXXX
```

**How It Works**: 
1. You text any message to this number
2. Blossom receives it, processes it
3. Response comes back as text within 10-30 seconds

**Who Can Use**: You, Ian, anyone you give the number to

---

## Setup Instructions (You Do This)

### Step 1: Create Google Voice Number (Free)

1. Go to `https://voice.google.com`
2. Sign in with your Google account
3. Click "Create a Google Voice Account"
4. Choose a phone number (pick one you like, or let Google suggest)
5. Verify with your mobile phone
6. You now have a number like `+1-555-123-4567`

**Save this number** — this is Blossom's texting contact.

### Step 2: Forward Messages to Webhook (Requires Setup Service)

Google Voice alone can't forward to a custom server. You need one of these:

**Option A: Twilio (Recommended — easiest)**
1. Sign up at `https://www.twilio.com` (free trial included)
2. Buy a phone number (cheaper than Google Voice: ~$1.25/month)
3. In Twilio console, set up "Webhook" to forward messages to: `https://[your-server]/blossom-sms`
4. Use this Twilio number instead of Google Voice

**Option B: Google Cloud (More Complex)**
1. Set up Google Cloud project
2. Create Cloud Function to receive SMS
3. Forward to your webhook endpoint
4. More involved but integrates with Google ecosystem

**For Now**: Use **Twilio** — it's the simplest path.

---

## The Server Code (We Build This)

Once you have a number and Twilio set up, deploy this code to handle messages:

### Webhook Receiver (`blossom-sms-gateway.js`)

```javascript
const express = require('express');
const twilio = require('twilio');
const { Anthropic } = require('@anthropic-ai/sdk');

const app = express();
app.use(express.urlencoded({ extended: false }));

const client = new Anthropic();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

app.post('/blossom-sms', async (req, res) => {
  const messageBody = req.body.Body;
  const fromNumber = req.body.From;

  console.log(`SMS from ${fromNumber}: ${messageBody}`);

  try {
    // Send to Claude
    const response = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 1024,
      system: `You are Blossom, an AI assistant. Respond to text messages concisely (keep under 160 chars when possible for SMS). Be helpful, warm, and direct.`,
      messages: [
        {
          role: 'user',
          content: messageBody
        }
      ]
    });

    const responseText = response.content[0].text;

    // Split into SMS-friendly chunks (160 chars each)
    const chunks = responseText.match(/[\s\S]{1,160}/g) || [responseText];

    // Send each chunk as separate SMS
    for (const chunk of chunks) {
      await twilioClient.messages.create({
        body: chunk,
        from: req.body.To,      // Your Blossom number
        to: fromNumber           // The person who texted
      });
    }

    res.sendStatus(200);
  } catch (err) {
    console.error('Error:', err);
    
    // Send error message back
    await twilioClient.messages.create({
      body: 'Blossom encountered an error. Please try again.',
      from: req.body.To,
      to: fromNumber
    });

    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log('Blossom SMS Gateway listening on port 3000');
});
```

### Environment Variables (Store Securely)

```bash
# Create .env file (add to .gitignore)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
ANTHROPIC_API_KEY=your_claude_api_key
```

### Deployment Options

**Option 1: Heroku (Easiest)**
```bash
npm install -g heroku-cli
heroku login
heroku create blossom-sms-gateway
git push heroku main
```

**Option 2: Google Cloud Run**
```bash
gcloud run deploy blossom-sms-gateway --source .
```

**Option 3: AWS Lambda + API Gateway**
- Deploy as Lambda function
- API Gateway handles webhook

---

## Usage Examples

**You**: `How long will the prototype take to build?`
**Blossom**: `Depends on scope. Basic: 1-2 weeks. Full featured: 4-6 weeks. What's your timeline?`

**You**: `Change blossom's colors to dark mode`
**Blossom**: `Edit config.json, change "background": "#2c3e2c", save, restart app. Let me know if you need the exact values.`

**Ian**: `What testing do you recommend?`
**Blossom**: `6 levels: smoke (2min) → functional (10min) → performance → accessibility → integration → real-world. Which matter most to you?`

---

## Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Google Voice | Free-$10/yr | Alternative to Twilio |
| Twilio | $1.25/month + $0.0075/SMS | Pay-as-you-go |
| Claude API | ~$0.01 per message | In your existing budget |
| Server Hosting | Free-$7/month | Heroku free tier or paid tier |
| **Total** | ~$2-10/month | Very reasonable |

---

## Testing Your Setup

Once deployed, test with:

```bash
curl -X POST http://localhost:3000/blossom-sms \
  -d "Body=Hello+Blossom" \
  -d "From=+1-555-123-4567" \
  -d "To=+1-555-987-6543"
```

You should get a response back.

---

## Security & Privacy

**What's Shared**:
- Your text messages (go to Twilio, then to Claude, then back)
- Phone numbers (Twilio stores these)

**What's NOT Shared**:
- Your Google account password
- Mac files or code
- System information
- Configuration beyond what's in messages

**Recommendations**:
- Store API keys in environment variables, not code
- Use `.gitignore` to exclude `.env`
- Both Google accounts should have 2FA enabled
- Regularly audit Twilio logs
- Consider rate-limiting to prevent spam

---

## When to Deploy

This is **Phase 2** — after Blossom on Mac is working perfectly (which it is).

**Phase 1 (Current)**: Desktop app on Mac ✓
**Phase 2 (This)**: SMS gateway for remote access
**Phase 3 (Future)**: Web app, iOS app, integrations

---

**Created**: June 7, 2026  
**Status**: Architecture ready, awaiting your Google Voice setup  
**Cost**: ~$2-10/month to run  
**Maintenance**: Minimal (Twilio handles SMS routing)
