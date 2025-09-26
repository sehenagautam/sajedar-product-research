import { Tutorial } from '../../types/tutorial';

export const whatsappBusinessApi: Tutorial = {
  id: '4',
  title: 'WhatsApp Business API Integration',
  slug: 'whatsapp-business-api-integration',
  description: 'Learn to integrate WhatsApp Business API for customer support and marketing automation.',
  content: `# WhatsApp Business API Integration

## Introduction

WhatsApp Business API allows businesses to send and receive messages at scale. This tutorial covers the complete integration process.

## Prerequisites

- WhatsApp Business Account
- Meta Business Account
- Node.js environment

## Step 1: Setup WhatsApp Business API

### Create Meta App

1. Go to Meta for Developers
2. Create a new app
3. Add WhatsApp product
4. Configure webhook

### Get Access Token

\`\`\`javascript
const ACCESS_TOKEN = 'your_access_token';
const PHONE_NUMBER_ID = 'your_phone_number_id';
const VERIFY_TOKEN = 'your_verify_token';
\`\`\`

## Step 2: Webhook Setup

\`\`\`javascript
const express = require('express');
const app = express();

// Verify webhook
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Handle incoming messages
app.post('/webhook', (req, res) => {
  const body = req.body;
  
  if (body.object === 'whatsapp_business_account') {
    body.entry.forEach(entry => {
      entry.changes.forEach(change => {
        if (change.field === 'messages') {
          const messages = change.value.messages;
          messages.forEach(message => {
            handleIncomingMessage(message);
          });
        }
      });
    });
  }
  
  res.status(200).send('OK');
});
\`\`\`

## Step 3: Send Messages

\`\`\`javascript
async function sendMessage(to, message) {
  const response = await fetch(
    \`https://graph.facebook.com/v18.0/\$\{PHONE_NUMBER_ID\}/messages\`,
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \$\{ACCESS_TOKEN\}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: to,
        type: 'text',
        text: { body: message }
      })
    }
  );
  
  return response.json();
}
\`\`\`

## Advanced Features

### Media Messages

\`\`\`javascript
async function sendImage(to, imageUrl, caption) {
  const response = await fetch(
    \`https://graph.facebook.com/v18.0/\$\{PHONE_NUMBER_ID\}/messages\`,
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \$\{ACCESS_TOKEN\}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: to,
        type: 'image',
        image: {
          link: imageUrl,
          caption: caption
        }
      })
    }
  );
  
  return response.json();
}
\`\`\`

### Interactive Messages

\`\`\`javascript
async function sendInteractiveMessage(to) {
  const response = await fetch(
    \`https://graph.facebook.com/v18.0/\$\{PHONE_NUMBER_ID\}/messages\`,
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \$\{ACCESS_TOKEN\}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: to,
        type: 'interactive',
        interactive: {
          type: 'button',
          body: { text: 'Choose an option:' },
          action: {
            buttons: [
              {
                type: 'reply',
                reply: { id: 'option1', title: 'Option 1' }
              },
              {
                type: 'reply',
                reply: { id: 'option2', title: 'Option 2' }
              }
            ]
          }
        }
      })
    }
  );
  
  return response.json();
}
\`\`\`

## Best Practices

1. **Rate Limiting**: Respect WhatsApp's rate limits
2. **Message Templates**: Use approved templates for marketing
3. **Error Handling**: Implement proper error handling
4. **Security**: Secure your webhook endpoints

## Conclusion

WhatsApp Business API opens up powerful communication channels for your business. Start with simple text messages and gradually implement more advanced features.`,
  author: 'Sajedar Team',
  publishedAt: '2024-01-30',
  updatedAt: '2024-01-30',
  tags: ['whatsapp', 'business api', 'messaging', 'automation', 'integration'],
  category: 'whatsapp-bots',
  difficulty: 'intermediate',
  readTime: 18,
  featured: true,
  seo: {
    metaTitle: 'WhatsApp Business API Integration - Complete Guide',
    metaDescription: 'Learn to integrate WhatsApp Business API for customer support and marketing. Step-by-step tutorial with code examples.',
    keywords: ['whatsapp business api', 'whatsapp integration', 'messaging api', 'customer support']
  }
}; 