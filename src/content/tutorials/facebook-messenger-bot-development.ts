import { Tutorial } from '../../types/tutorial';

export const facebookMessengerBot: Tutorial = {
  id: '2',
  title: 'Facebook Messenger Bot Development Guide',
  slug: 'facebook-messenger-bot-development',
  description: 'Complete guide to building Facebook Messenger bots. Learn webhooks, message handling, and advanced features.',
  content: `# Facebook Messenger Bot Development Guide

## Overview

Facebook Messenger bots allow you to create interactive experiences for your customers. This guide covers everything from setup to advanced features.

## Prerequisites

- Facebook Developer Account
- Node.js and npm
- ngrok for local development

## Step 1: Create Facebook App

1. Go to Facebook Developers
2. Create a new app
3. Add Messenger product
4. Generate access token

## Step 2: Setup Webhook

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});
\`\`\`

## Step 3: Handle Messages

\`\`\`javascript
app.post('/webhook', (req, res) => {
  const body = req.body;

  if (body.object === 'page') {
    body.entry.forEach(entry => {
      const webhookEvent = entry.messaging[0];
      
      if (webhookEvent.message) {
        handleMessage(webhookEvent);
      }
    });
    
    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404);
  }
});
\`\`\`

## Advanced Features

- Quick Replies
- Persistent Menu
- Typing Indicators
- Rich Media

## Conclusion

You now have a fully functional Facebook Messenger bot!`,
  author: 'Sajedar Team',
  publishedAt: '2024-01-20',
  updatedAt: '2024-01-20',
  tags: ['facebook', 'messenger', 'bot', 'webhook', 'api'],
  category: 'facebook-messenger',
  difficulty: 'intermediate',
  readTime: 12,
  featured: true,
  seo: {
    metaTitle: 'Facebook Messenger Bot Development - Complete Tutorial',
    metaDescription: 'Learn to build Facebook Messenger bots with webhooks, message handling, and advanced features. Step-by-step guide.',
    keywords: ['facebook messenger bot', 'webhook', 'messenger api', 'chatbot development']
  }
}; 