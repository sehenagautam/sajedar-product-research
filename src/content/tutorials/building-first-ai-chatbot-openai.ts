import { Tutorial } from '../../types/tutorial';

export const buildingFirstAiChatbot: Tutorial = {
  id: '1',
  title: 'Building Your First AI Chatbot with OpenAI',
  slug: 'building-first-ai-chatbot-openai',
  description: "Learn how to create an intelligent chatbot using OpenAI GPT models. This comprehensive guide covers everything from API setup to deployment.",
  content: `# Building Your First AI Chatbot with OpenAI

## Introduction

Creating an AI chatbot has never been easier with OpenAI's powerful API. In this tutorial, we'll build a complete chatbot from scratch.

## Prerequisites

- Node.js installed
- OpenAI API key
- Basic JavaScript knowledge

## Step 1: Setup OpenAI API

First, get your API key from OpenAI:

\`\`\`bash
npm install openai
\`\`\`

\`\`\`javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
\`\`\`

## Step 2: Create Chat Function

\`\`\`javascript
async function chatWithAI(message) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: message }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}
\`\`\`

## Step 3: Build the Interface

Create a simple HTML interface:

\`\`\`html
<div id="chat-container">
  <div id="messages"></div>
  <input type="text" id="user-input" placeholder="Type your message...">
  <button onclick="sendMessage()">Send</button>
</div>
\`\`\`

## Conclusion

You now have a working AI chatbot! This is just the beginning - you can add features like conversation memory, file uploads, and more advanced AI capabilities.`,
  author: 'Sajedar Team',
  publishedAt: '2024-01-15',
  updatedAt: '2024-01-15',
  tags: ['openai', 'chatbot', 'ai', 'javascript', 'api'],
  category: 'ai-chatbots',
  difficulty: 'beginner',
  readTime: 8,
  featured: true,
  seo: {
    metaTitle: 'Building Your First AI Chatbot with OpenAI - Complete Guide',
    metaDescription: 'Learn to build an AI chatbot using OpenAI GPT models. Step-by-step tutorial with code examples and deployment guide.',
    keywords: ['ai chatbot', 'openai', 'gpt', 'javascript', 'tutorial']
  }
}; 