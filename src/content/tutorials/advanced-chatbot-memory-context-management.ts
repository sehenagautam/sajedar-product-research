import { Tutorial } from '../../types/tutorial';

export const advancedChatbotMemoryTutorial: Tutorial = {
    id: '6',
    title: 'Advanced Chatbot Memory and Context Management',
    slug: 'advanced-chatbot-memory-context-management',
    description: 'Implement sophisticated memory systems for chatbots to maintain context across conversations.',
    content: `# Advanced Chatbot Memory and Context Management

## Introduction

Building chatbots that remember previous conversations and maintain context is crucial for creating engaging user experiences. This tutorial covers advanced memory management techniques.

## Prerequisites

- Node.js and Express
- Database (MongoDB/PostgreSQL)
- OpenAI API key
- Redis for caching

## Step 1: Database Schema

### User Sessions Table

\`\`\`sql
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY,
    user_id VARCHAR(255),
    session_data JSONB,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
\`\`\`

### Conversation History

\`\`\`sql
CREATE TABLE conversations (
    id UUID PRIMARY KEY,
    session_id UUID REFERENCES user_sessions(id),
    user_message TEXT,
    bot_response TEXT,
    timestamp TIMESTAMP,
    context_data JSONB
);
\`\`\`

## Step 2: Memory Management Class

\`\`\`javascript
class ChatbotMemory {
    constructor(db, redis) {
        this.db = db;
        this.redis = redis;
        this.maxContextLength = 10;
    }

    async getSessionContext(sessionId) {
        // Try Redis first
        const cached = await this.redis.get('session:' + sessionId);
        if (cached) {
            return JSON.parse(cached);
        }

        // Fallback to database
        const session = await this.db.query(
            'SELECT session_data FROM user_sessions WHERE id = $1',
            [sessionId]
        );

        if (session.rows.length > 0) {
            const context = session.rows[0].session_data;
            // Cache in Redis
            await this.redis.setex('session:' + sessionId, 3600, JSON.stringify(context));
            return context;
        }

        return { messages: [], userProfile: {}, context: {} };
    }

    async updateSessionContext(sessionId, newMessage, botResponse) {
        const context = await this.getSessionContext(sessionId);

        // Add new messages
        if (!context.messages) context.messages = [];
        context.messages.push({
            user: newMessage,
            bot: botResponse,
            timestamp: new Date()
        });

        // Keep only recent messages
        if (context.messages.length > this.maxContextLength) {
            context.messages = context.messages.slice(-this.maxContextLength);
        }

        // Update database
        await this.db.query(
            'UPDATE user_sessions SET session_data = $1, updated_at = $2 WHERE id = $3',
            [JSON.stringify(context), new Date(), sessionId]
        );

        // Update Redis cache
        await this.redis.setex('session:' + sessionId, 3600, JSON.stringify(context));

        return context;
    }
}
\`\`\`

## Step 3: Context-Aware Chatbot

\`\`\`javascript
class ContextAwareChatbot {
    constructor(openai, memory) {
        this.openai = openai;
        this.memory = memory;
    }

    async processMessage(sessionId, userMessage) {
        // Get conversation context
        const context = await this.memory.getSessionContext(sessionId);

        // Build conversation history for AI
        const messages = [
            {
                role: "system",
                content: 'You are a helpful assistant. Previous context: ' + JSON.stringify(context.context)
            }
        ];

        // Add recent conversation history
        if (context.messages) {
            context.messages.slice(-5).forEach(msg => {
                messages.push({ role: "user", content: msg.user });
                messages.push({ role: "assistant", content: msg.bot });
            });
        }

        // Add current message
        messages.push({ role: "user", content: userMessage });

        // Get AI response
        const response = await this.openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 0.7
        });

        const botResponse = response.choices[0].message.content;

        // Update memory
        await this.memory.updateSessionContext(sessionId, userMessage, botResponse);

        return botResponse;
    }
}
\`\`\`

## Step 4: User Profile Management

\`\`\`javascript
class UserProfileManager {
    constructor(db) {
        this.db = db;
    }

    async updateUserProfile(sessionId, userData) {
        if (!this.memory) {
            throw new Error('Memory instance not set on UserProfileManager');
        }
        const context = await this.memory.getSessionContext(sessionId);

        // Extract user information from conversation
        const profile = {
            name: this.extractName(userData),
            preferences: this.extractPreferences(userData),
            lastInteraction: new Date()
        };

        context.userProfile = { ...context.userProfile, ...profile };

        await this.db.query(
            'UPDATE user_sessions SET session_data = $1 WHERE id = $2',
            [JSON.stringify(context), sessionId]
        );

        return profile;
    }

    extractName(userData) {
        // Use NLP to extract name
        const namePattern = /(?:my name is|i'm|i am|call me)\\s+([a-zA-Z]+)/i;
        const match = userData.match(namePattern);
        return match ? match[1] : null;
    }

    extractPreferences(userData) {
        // Extract preferences from conversation
        const preferences = {};

        if (userData.includes('vegetarian') || userData.includes('vegan')) {
            preferences.diet = 'vegetarian';
        }

        if (userData.includes('morning') || userData.includes('early')) {
            preferences.timePreference = 'morning';
        }

        return preferences;
    }
}
\`\`\`

## Step 5: Advanced Context Features

### Topic Tracking

\`\`\`javascript
class TopicTracker {
    constructor() {
        this.topics = new Map();
    }

    trackTopic(sessionId, message) {
        const topics = this.extractTopics(message);

        topics.forEach(topic => {
            if (!this.topics.has(sessionId)) {
                this.topics.set(sessionId, new Map());
            }

            const sessionTopics = this.topics.get(sessionId);
            sessionTopics.set(topic, (sessionTopics.get(topic) || 0) + 1);
        });
    }

    extractTopics(message) {
        // Simple topic extraction
        const topicKeywords = {
            'technology': ['computer', 'software', 'tech', 'programming'],
            'travel': ['trip', 'vacation', 'travel', 'destination'],
            'food': ['restaurant', 'cooking', 'recipe', 'meal']
        };

        const topics = [];
        Object.keys(topicKeywords).forEach(topic => {
            if (topicKeywords[topic].some(keyword =>
                message.toLowerCase().includes(keyword))) {
                topics.push(topic);
            }
        });

        return topics;
    }

    getTopTopics(sessionId, limit = 3) {
        const sessionTopics = this.topics.get(sessionId);
        if (!sessionTopics) return [];

        return Array.from(sessionTopics.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit)
            .map(([topic, count]) => ({ topic, count }));
    }
}
\`\`\`

### Sentiment Analysis

\`\`\`javascript
class SentimentAnalyzer {
    constructor() {
        this.sentimentKeywords = {
            positive: ['happy', 'great', 'awesome', 'excellent', 'love'],
            negative: ['sad', 'terrible', 'awful', 'hate', 'disappointed'],
            neutral: ['okay', 'fine', 'alright', 'normal']
        };
    }

    analyzeSentiment(message) {
        const words = message.toLowerCase().split(' ');
        let positiveScore = 0;
        let negativeScore = 0;

        words.forEach(word => {
            if (this.sentimentKeywords.positive.includes(word)) {
                positiveScore++;
            }
            if (this.sentimentKeywords.negative.includes(word)) {
                negativeScore++;
            }
        });

        if (positiveScore > negativeScore) return 'positive';
        if (negativeScore > positiveScore) return 'negative';
        return 'neutral';
    }

    adjustResponseTone(botResponse, sentiment) {
        if (sentiment === 'negative') {
            return 'I understand you might be feeling frustrated. ' + botResponse;
        }
        if (sentiment === 'positive') {
            return 'That\\'s great to hear! ' + botResponse;
        }
        return botResponse;
    }
}
\`\`\`

## Step 6: Complete Implementation

\`\`\`javascript
class AdvancedChatbot {
    constructor(openai, db, redis) {
        this.openai = openai;
        this.memory = new ChatbotMemory(db, redis);
        this.profileManager = new UserProfileManager(db);
        this.profileManager.memory = this.memory;
        this.topicTracker = new TopicTracker();
        this.sentimentAnalyzer = new SentimentAnalyzer();
    }

    async handleMessage(sessionId, userMessage) {
        // Analyze sentiment
        const sentiment = this.sentimentAnalyzer.analyzeSentiment(userMessage);

        // Track topics
        this.topicTracker.trackTopic(sessionId, userMessage);

        // Get context
        const context = await this.memory.getSessionContext(sessionId);

        // Build enhanced prompt
        const systemPrompt = [
            "You are a helpful assistant.",
            'User profile: ' + JSON.stringify(context.userProfile),
            'Recent topics: ' + JSON.stringify(this.topicTracker.getTopTopics(sessionId)),
            'User sentiment: ' + sentiment
        ].join('\\n');

        const messages = [
            { role: "system", content: systemPrompt },
            ...(context.messages ? context.messages.slice(-5).flatMap(msg => [
                { role: "user", content: msg.user },
                { role: "assistant", content: msg.bot }
            ]) : []),
            { role: "user", content: userMessage }
        ];

        // Get AI response
        const response = await this.openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 0.7
        });

        let botResponse = response.choices[0].message.content;

        // Adjust tone based on sentiment
        botResponse = this.sentimentAnalyzer.adjustResponseTone(botResponse, sentiment);

        // Update memory
        await this.memory.updateSessionContext(sessionId, userMessage, botResponse);

        // Update user profile
        await this.profileManager.updateUserProfile(sessionId, userMessage);

        return botResponse;
    }
}
\`\`\`

## Best Practices

1. **Memory Limits**: Set reasonable limits on conversation history
2. **Privacy**: Implement data privacy and user consent
3. **Performance**: Use caching for frequently accessed data
4. **Security**: Sanitize user inputs and implement rate limiting

## Conclusion

Advanced memory and context management create more engaging agent experiences. Start with basic context tracking and gradually implement more sophisticated features like sentiment analysis and topic tracking.`,
    author: 'Sajedar Team',
    publishedAt: '2024-02-10',
    updatedAt: '2024-02-10',
    tags: ['chatbot memory', 'context management', 'nlp', 'database', 'redis'],
    category: 'ai-chatbots',
    difficulty: 'advanced',
    readTime: 25,
    featured: true,
    seo: {
        metaTitle: 'Advanced Chatbot Memory and Context Management - Complete Guide',
        metaDescription: 'Learn to implement sophisticated memory systems for chatbots. Context management, user profiles, and conversation history.',
        keywords: ['chatbot memory', 'context management', 'conversation ai', 'nlp', 'database']
    }
};
