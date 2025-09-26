import { Tutorial } from '../../types/tutorial';

export const chatbotSecurityTutorial: Tutorial = {
  id: '8',
  title: 'Chatbot Security Best Practices',
  slug: 'chatbot-security-best-practices',
  description: 'Implement robust security measures for your chatbot including authentication, data protection, and threat prevention.',
  content: `# Chatbot Security Best Practices

## Introduction

Security is critical for chatbot applications. This tutorial covers authentication, data protection, input validation, and threat prevention strategies.

## Prerequisites

- Node.js and Express
- Authentication system (JWT, OAuth)
- Database with encryption
- Security monitoring tools

## Step 1: Authentication & Authorization

\`\`\`javascript
class ChatbotSecurity {
    constructor(jwt, bcrypt) {
        this.jwt = jwt;
        this.bcrypt = bcrypt;
        this.rateLimiter = new Map();
    }

    async authenticateUser(token) {
        try {
            const decoded = this.jwt.verify(token, process.env.JWT_SECRET);
            return { userId: decoded.userId, role: decoded.role };
        } catch (error) {
            throw new Error('Invalid token');
        }
    }

    async authorizeAction(userId, action, resource) {
        const user = await this.getUserPermissions(userId);
        return user.permissions.includes(action + ':' + resource);
    }

    async validateInput(input, schema) {
        const result = schema.validate(input);
        if (result.error) {
            throw new Error('Invalid input: ' + result.error.message);
        }
        return result.value;
    }
}
\`\`\`

## Step 2: Input Sanitization

\`\`\`javascript
class InputSanitizer {
    constructor() {
        this.xssFilter = new XSSFilter();
        this.sqlInjectionPatterns = [
            /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)\b)/i,
            /(\b(UNION|OR|AND)\b.*\b(SELECT|INSERT|UPDATE|DELETE)\b)/i
        ];
    }

    sanitizeText(text) {
        // Remove XSS attempts
        text = this.xssFilter.process(text);
        
        // Remove SQL injection attempts
        this.sqlInjectionPatterns.forEach(pattern => {
            text = text.replace(pattern, '');
        });
        
        // Trim and normalize
        return text.trim().normalize('NFC');
    }

    validateMessage(message) {
        if (!message || typeof message !== 'string') {
            throw new Error('Invalid message format');
        }
        
        if (message.length > 1000) {
            throw new Error('Message too long');
        }
        
        return this.sanitizeText(message);
    }
}
\`\`\`

## Step 3: Rate Limiting

\`\`\`javascript
class RateLimiter {
    constructor() {
        this.requests = new Map();
        this.cleanupInterval = setInterval(() => this.cleanup(), 60000);
    }

    async checkRateLimit(identifier, limit = 100, windowMs = 60000) {
        const now = Date.now();
        const key = identifier + ':' + Math.floor(now / windowMs);
        
        if (!this.requests.has(key)) {
            this.requests.set(key, 0);
        }
        
        const count = this.requests.get(key);
        if (count >= limit) {
            throw new Error('Rate limit exceeded');
        }
        
        this.requests.set(key, count + 1);
        return true;
    }

    cleanup() {
        const now = Date.now();
        for (const [key, timestamp] of this.requests.entries()) {
            if (now - timestamp > 300000) { // 5 minutes
                this.requests.delete(key);
            }
        }
    }
}
\`\`\`

## Step 4: Data Encryption

\`\`\`javascript
class DataEncryption {
    constructor() {
        this.algorithm = 'aes-256-gcm';
        this.key = crypto.scryptSync(process.env.ENCRYPTION_KEY, 'salt', 32);
    }

    encrypt(text) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipher(this.algorithm, this.key);
        cipher.setAAD(Buffer.from('chatbot-data'));
        
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        
        const authTag = cipher.getAuthTag();
        
        return {
            encrypted,
            iv: iv.toString('hex'),
            authTag: authTag.toString('hex')
        };
    }

    decrypt(encryptedData) {
        const decipher = crypto.createDecipher(this.algorithm, this.key);
        decipher.setAAD(Buffer.from('chatbot-data'));
        decipher.setAuthTag(Buffer.from(encryptedData.authTag, 'hex'));
        
        let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        
        return decrypted;
    }
}
\`\`\`

## Step 5: Security Monitoring

\`\`\`javascript
class SecurityMonitor {
    constructor() {
        this.suspiciousActivities = [];
        this.blockedIPs = new Set();
    }

    async monitorActivity(sessionId, activity) {
        const riskScore = this.calculateRiskScore(activity);
        
        if (riskScore > 0.7) {
            await this.handleSuspiciousActivity(sessionId, activity, riskScore);
        }
        
        await this.logActivity(sessionId, activity, riskScore);
    }

    calculateRiskScore(activity) {
        let score = 0;
        
        // Check for suspicious patterns
        if (activity.message.includes('admin') || activity.message.includes('password')) {
            score += 0.3;
        }
        
        if (activity.frequency > 10) { // More than 10 messages per minute
            score += 0.4;
        }
        
        if (activity.ipAddress && this.blockedIPs.has(activity.ipAddress)) {
            score += 0.5;
        }
        
        return Math.min(score, 1.0);
    }

    async handleSuspiciousActivity(sessionId, activity, riskScore) {
        this.suspiciousActivities.push({
            sessionId,
            activity,
            riskScore,
            timestamp: new Date()
        });
        
        if (riskScore > 0.9) {
            await this.blockSession(sessionId);
        }
    }
}
\`\`\`

## Best Practices

1. **Input Validation**: Always validate and sanitize user inputs
2. **Authentication**: Implement proper user authentication
3. **Rate Limiting**: Prevent abuse with rate limiting
4. **Data Encryption**: Encrypt sensitive data at rest and in transit
5. **Monitoring**: Continuously monitor for suspicious activities
6. **Updates**: Keep dependencies and systems updated
7. **Backup**: Regular backups of important data

## Conclusion

Security should be a priority from day one. Implement these practices to protect your chatbot and users from various threats.`,
  author: 'Sajedar Team',
  publishedAt: '2024-02-20',
  updatedAt: '2024-02-20',
  tags: ['security', 'authentication', 'encryption', 'validation', 'monitoring'],
  category: 'security',
  difficulty: 'advanced',
  readTime: 15,
  featured: true,
  seo: {
    metaTitle: 'Chatbot Security Best Practices - Complete Guide',
    metaDescription: 'Learn essential security practices for chatbot development. Authentication, data protection, and threat prevention.',
    keywords: ['chatbot security', 'authentication', 'data protection', 'input validation', 'threat prevention']
  }
};
