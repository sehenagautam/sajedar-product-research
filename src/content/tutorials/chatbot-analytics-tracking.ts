import { Tutorial } from '../../types/tutorial';

export const chatbotAnalyticsTutorial: Tutorial = {
    id: '7',
    title: 'Chatbot Analytics and Performance Tracking',
    slug: 'chatbot-analytics-tracking',
    description: 'Implement comprehensive analytics and tracking for your agent to measure performance, user engagement, and business metrics.',
    content: `# Chatbot Analytics and Performance Tracking

## Introduction

Analytics are crucial for understanding how your agent performs and how users interact with it. This tutorial covers implementing comprehensive tracking, metrics collection, and performance analysis.

## Prerequisites

- Node.js and Express
- Database (MongoDB/PostgreSQL)
- Analytics service (Google Analytics, Mixpanel, or custom)
- Redis for real-time metrics

## Step 1: Analytics Schema Design

### Events Table

\`\`\`sql
CREATE TABLE chatbot_events (
    id UUID PRIMARY KEY,
    session_id VARCHAR(255),
    user_id VARCHAR(255),
    event_type VARCHAR(100),
    event_data JSONB,
    timestamp TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

### Metrics Table

\`\`\`sql
CREATE TABLE chatbot_metrics (
    id UUID PRIMARY KEY,
    metric_name VARCHAR(100),
    metric_value DECIMAL,
    dimensions JSONB,
    date DATE,
    created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

## Step 2: Analytics Service

\`\`\`javascript
class ChatbotAnalytics {
    constructor(db, redis) {
        this.db = db;
        this.redis = redis;
        this.events = [];
    }

    async trackEvent(sessionId, userId, eventType, eventData) {
        const event = {
            id: this.generateId(),
            sessionId,
            userId,
            eventType,
            eventData,
            timestamp: new Date()
        };

        // Store in database
        await this.db.query(
            'INSERT INTO chatbot_events (id, session_id, user_id, event_type, event_data, timestamp) VALUES ($1, $2, $3, $4, $5, $6)',
            [event.id, sessionId, userId, eventType, JSON.stringify(eventData), event.timestamp]
        );

        // Cache for real-time metrics
        await this.redis.lpush('recent_events', JSON.stringify(event));
        await this.redis.ltrim('recent_events', 0, 999); // Keep last 1000 events

        return event;
    }

    async getSessionMetrics(sessionId) {
        const events = await this.db.query(
            'SELECT * FROM chatbot_events WHERE session_id = $1 ORDER BY timestamp',
            [sessionId]
        );

        return this.calculateSessionMetrics(events.rows);
    }

    calculateSessionMetrics(events) {
        const metrics = {
            totalMessages: 0,
            userMessages: 0,
            botMessages: 0,
            averageResponseTime: 0,
            satisfactionScore: 0,
            topics: new Set(),
            sentiment: 'neutral'
        };

        events.forEach(event => {
            if (event.event_type === 'message_sent') {
                metrics.totalMessages++;
                if (event.event_data.sender === 'user') {
                    metrics.userMessages++;
                } else {
                    metrics.botMessages++;
                }
            }

            if (event.event_type === 'topic_identified') {
                metrics.topics.add(event.event_data.topic);
            }

            if (event.event_type === 'sentiment_analyzed') {
                metrics.sentiment = event.event_data.sentiment;
            }
        });

        return {
            ...metrics,
            topics: Array.from(metrics.topics)
        };
    }
}
\`\`\`

## Step 3: Real-time Metrics Dashboard

\`\`\`javascript
class MetricsDashboard {
    constructor(analytics) {
        this.analytics = analytics;
    }

    async getRealTimeMetrics() {
        const recentEvents = await this.analytics.redis.lrange('recent_events', 0, -1);
        const events = recentEvents.map(event => JSON.parse(event));

        return {
            activeUsers: this.getActiveUsers(events),
            messagesPerMinute: this.getMessagesPerMinute(events),
            averageResponseTime: this.getAverageResponseTime(events),
            topTopics: this.getTopTopics(events),
            satisfactionScore: this.getSatisfactionScore(events)
        };
    }

    getActiveUsers(events) {
        const activeSessions = new Set();
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

        events.forEach(event => {
            if (new Date(event.timestamp) > oneHourAgo) {
                activeSessions.add(event.sessionId);
            }
        });

        return activeSessions.size;
    }

    getMessagesPerMinute(events) {
        const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
        const recentMessages = events.filter(event => 
            event.eventType === 'message_sent' && 
            new Date(event.timestamp) > oneMinuteAgo
        );

        return recentMessages.length;
    }

    getTopTopics(events) {
        const topicCounts = {};
        
        events.forEach(event => {
            if (event.eventType === 'topic_identified') {
                const topic = event.eventData.topic;
                topicCounts[topic] = (topicCounts[topic] || 0) + 1;
            }
        });

        return Object.entries(topicCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([topic, count]) => ({ topic, count }));
    }
}
\`\`\`

## Step 4: Performance Monitoring

\`\`\`javascript
class PerformanceMonitor {
    constructor(analytics) {
        this.analytics = analytics;
        this.responseTimes = [];
    }

    async trackResponseTime(sessionId, startTime, endTime) {
        const responseTime = endTime - startTime;
        
        this.responseTimes.push({
            sessionId,
            responseTime,
            timestamp: new Date()
        });

        // Keep only last 1000 response times
        if (this.responseTimes.length > 1000) {
            this.responseTimes = this.responseTimes.slice(-1000);
        }

        await this.analytics.trackEvent(sessionId, null, 'response_time', {
            responseTime,
            timestamp: new Date()
        });

        return responseTime;
    }

    getPerformanceMetrics() {
        if (this.responseTimes.length === 0) return null;

        const times = this.responseTimes.map(r => r.responseTime);
        const sorted = times.sort((a, b) => a - b);

        return {
            average: times.reduce((a, b) => a + b, 0) / times.length,
            median: sorted[Math.floor(sorted.length / 2)],
            p95: sorted[Math.floor(sorted.length * 0.95)],
            p99: sorted[Math.floor(sorted.length * 0.99)],
            min: Math.min(...times),
            max: Math.max(...times)
        };
    }

    async checkPerformanceAlerts() {
        const metrics = this.getPerformanceMetrics();
        const alerts = [];

        if (metrics && metrics.average > 5000) {
            alerts.push({
                type: 'high_response_time',
                message: 'Average response time is above 5 seconds',
                severity: 'warning'
            });
        }

        if (metrics && metrics.p95 > 10000) {
            alerts.push({
                type: 'very_high_response_time',
                message: '95th percentile response time is above 10 seconds',
                severity: 'critical'
            });
        }

        return alerts;
    }
}
\`\`\`

## Step 5: Business Metrics

\`\`\`javascript
class BusinessMetrics {
    constructor(analytics) {
        this.analytics = analytics;
    }

    async calculateConversionRate(startDate, endDate) {
        const totalSessions = await this.analytics.db.query(
            'SELECT COUNT(DISTINCT session_id) FROM chatbot_events WHERE timestamp BETWEEN $1 AND $2',
            [startDate, endDate]
        );

        const convertedSessions = await this.analytics.db.query(
            'SELECT COUNT(DISTINCT session_id) FROM chatbot_events WHERE event_type = $1 AND timestamp BETWEEN $2 AND $3',
            ['conversion', startDate, endDate]
        );

        return {
            totalSessions: totalSessions.rows[0].count,
            convertedSessions: convertedSessions.rows[0].count,
            conversionRate: (convertedSessions.rows[0].count / totalSessions.rows[0].count) * 100
        };
    }

    async getUserEngagementMetrics(startDate, endDate) {
        const metrics = await this.analytics.db.query(\`
            SELECT 
                AVG(CASE WHEN event_type = 'message_sent' THEN 1 ELSE 0 END) as avg_messages_per_session,
                COUNT(DISTINCT session_id) as total_sessions,
                COUNT(DISTINCT user_id) as unique_users
            FROM chatbot_events 
            WHERE timestamp BETWEEN $1 AND $2
        \`, [startDate, endDate]);

        return metrics.rows[0];
    }

    async getTopPerformingFeatures() {
        const features = await this.analytics.db.query(\`
            SELECT 
                event_data->>'feature' as feature,
                COUNT(*) as usage_count,
                AVG((event_data->>'satisfaction_score')::numeric) as avg_satisfaction
            FROM chatbot_events 
            WHERE event_type = 'feature_used' 
            AND timestamp > NOW() - INTERVAL '7 days'
            GROUP BY event_data->>'feature'
            ORDER BY usage_count DESC
        \`);

        return features.rows;
    }
}
\`\`\`

## Step 6: Integration with External Analytics

\`\`\`javascript
class ExternalAnalyticsIntegration {
    constructor(analytics) {
        this.analytics = analytics;
        this.googleAnalytics = new GoogleAnalytics();
        this.mixpanel = new Mixpanel();
    }

    async trackToGoogleAnalytics(event) {
        await this.googleAnalytics.track({
            event: event.eventType,
            properties: {
                sessionId: event.sessionId,
                userId: event.userId,
                ...event.eventData
            }
        });
    }

    async trackToMixpanel(event) {
        await this.mixpanel.track(event.eventType, {
            distinct_id: event.userId,
            session_id: event.sessionId,
            ...event.eventData
        });
    }

    async syncAllEvents() {
        const events = await this.analytics.db.query(
            'SELECT * FROM chatbot_events WHERE synced = false ORDER BY timestamp'
        );

        for (const event of events.rows) {
            try {
                await Promise.all([
                    this.trackToGoogleAnalytics(event),
                    this.trackToMixpanel(event)
                ]);

                await this.analytics.db.query(
                    'UPDATE chatbot_events SET synced = true WHERE id = $1',
                    [event.id]
                );
            } catch (error) {
                console.error('Failed to sync event:', error);
            }
        }
    }
}
\`\`\`

## Best Practices

1. **Privacy Compliance**: Ensure GDPR/CCPA compliance for data collection
2. **Data Retention**: Implement data retention policies
3. **Real-time Monitoring**: Set up alerts for performance issues
4. **A/B Testing**: Track different agent versions
5. **User Segmentation**: Analyze different user groups

## Conclusion

Comprehensive analytics help you understand user behavior, optimize performance, and make data-driven decisions for your chatbot. Start with basic metrics and gradually implement more sophisticated tracking.`,
    author: 'Sajedar Team',
    publishedAt: '2024-02-15',
    updatedAt: '2024-02-15',
    tags: ['analytics', 'tracking', 'performance', 'metrics', 'dashboard'],
    category: 'analytics',
    difficulty: 'intermediate',
    readTime: 20,
    featured: false,
    seo: {
        metaTitle: 'Chatbot Analytics and Performance Tracking - Complete Guide',
        metaDescription: 'Learn to implement comprehensive analytics and tracking for your chatbot. Performance monitoring, user engagement, and business metrics.',
        keywords: ['chatbot analytics', 'performance tracking', 'user engagement', 'metrics', 'dashboard']
    }
};
