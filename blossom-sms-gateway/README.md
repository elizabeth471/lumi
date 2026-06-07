# Blossom SMS Gateway

Text messaging interface to Blossom. Send SMS to a phone number, get responses from Claude.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment
```bash
cp .env.example .env
# Edit .env with your Twilio and Claude API credentials
```

### 3. Test Locally (No Twilio Needed Yet)
```bash
npm test
```

This tests that Claude API works and Blossom can respond to messages.

### 4. Run Server
```bash
npm start     # Production
npm run dev   # Development (with nodemon)
```

Server listens on port 3000.

### 5. Set Up Twilio Webhook (When Ready)
- Create account at https://www.twilio.com
- Buy a phone number (~$1.25/month)
- In Twilio console, set webhook for SMS to:
  ```
  http://your-deployed-server.com/sms
  ```

## What You Need to Do Manually

These require your own accounts and API keys:

### Get Twilio Credentials
1. Go to https://www.twilio.com
2. Sign up (includes free trial)
3. Verify your phone number
4. Buy a phone number (~$1.25/month)
5. Go to Twilio Console
6. Find your: ACCOUNT_SID, AUTH_TOKEN
7. Add to .env

### Get Claude API Key
1. Go to https://console.anthropic.com
2. Sign in with your Anthropic account
3. Create API key
4. Add to .env as ANTHROPIC_API_KEY

### Deploy Server
Choose one:

**Option A: Heroku (Easiest)**
```bash
npm install -g heroku-cli
heroku login
heroku create blossom-sms-gateway
git push heroku main
```

**Option B: Google Cloud Run**
```bash
gcloud run deploy blossom-sms-gateway --source .
```

**Option C: AWS Lambda + API Gateway**
- Create Lambda function
- Set handler to `server.js`
- Create API Gateway endpoint

## File Structure

```
blossom-sms-gateway/
├── server.js           # Main SMS server
├── test-local.js       # Test without Twilio
├── package.json        # Dependencies
├── .env.example        # Environment template
├── .gitignore          # Don't commit secrets
└── README.md           # This file
```

## How It Works

```
You text +1-555-123-4567
    ↓
Twilio receives SMS
    ↓
Twilio sends to /sms webhook
    ↓
Server receives message
    ↓
Sends to Claude API
    ↓
Claude processes & responds
    ↓
Server sends response back via SMS
    ↓
You receive text message
```

## API Endpoints

### POST /sms
Twilio webhook endpoint. Receives incoming SMS and sends response.

**Input** (from Twilio):
```
Body: "Your message text"
From: "+1-555-555-5555"
To: "+1-555-123-4567"
```

**Response**: 200 OK (response sent asynchronously)

### GET /health
Health check endpoint.

**Response**:
```json
{
  "status": "ok",
  "timestamp": "2026-06-07T20:00:00.000Z"
}
```

## Testing

### Local Test (No Twilio)
```bash
npm test
```

Runs Blossom against test messages using only Claude API.

### Curl Test (With Server Running)
```bash
curl -X POST http://localhost:3000/sms \
  -d "Body=Hello+Blossom" \
  -d "From=+1-555-555-5555" \
  -d "To=+1-555-123-4567"
```

### Real SMS Test (After Twilio Setup)
Just text your Blossom number from your phone!

## Environment Variables

| Variable | Required | Example | Notes |
|----------|----------|---------|-------|
| TWILIO_ACCOUNT_SID | Yes | AC... | From Twilio console |
| TWILIO_AUTH_TOKEN | Yes | auth_token_... | From Twilio console |
| BLOSSOM_PHONE_NUMBER | Yes | +1-555-123-4567 | Your Twilio number |
| ANTHROPIC_API_KEY | Yes | sk-ant-... | From Claude console |
| PORT | No | 3000 | Default: 3000 |
| NODE_ENV | No | development | Default: development |

## Troubleshooting

### "API key not found"
```
Solution: Add ANTHROPIC_API_KEY to .env
Get key: https://console.anthropic.com/api_keys
```

### "Twilio credentials invalid"
```
Solution: Check TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN in .env
Get credentials: https://www.twilio.com/console
```

### "Server not receiving SMS"
```
Solution: Check Twilio webhook URL
1. Go to Twilio Console
2. Find your phone number
3. Set webhook URL to: https://your-server.com/sms
4. Ensure server is deployed and running
```

### "Messages too slow"
```
Possible causes:
- Claude API slow (check status: https://status.anthropic.com)
- Server location far from Twilio (regional issue)
- Too many concurrent requests

Solution: Consider rate limiting or queueing
```

## Cost

| Service | Cost | Notes |
|---------|------|-------|
| Twilio Phone Number | $1.25/month | SMS inbound/outbound ~$0.0075 each |
| Claude API | ~$0.01 per message | In your existing budget |
| Server Hosting | Free-$7/month | Heroku free tier or paid tier |
| **Total** | ~$2-10/month | Very reasonable |

## Security

**Never commit**:
- `.env` file (has in .gitignore)
- API keys
- Twilio tokens

**Best practices**:
- Use environment variables for secrets
- Rotate API keys regularly
- Monitor Twilio logs for abuse
- Consider rate-limiting if public number
- Use HTTPS for webhook (Twilio requires it)

## Next Steps

1. ✓ Code is ready (you're looking at it)
2. Get Twilio account + API keys
3. Get Claude API key
4. Fill in `.env`
5. Run `npm test` to verify Claude works
6. Deploy server (Heroku/Cloud Run/Lambda)
7. Configure Twilio webhook
8. Start texting!

---

**Questions?** Check `BLOSSOM-SMS-GATEWAY-SETUP.md` in parent directory for full setup guide.
