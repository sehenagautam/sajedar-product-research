import { Tutorial } from '../../types/tutorial';

export const chatbotDeploymentTutorial: Tutorial = {
  id: '9',
  title: 'Chatbot Deployment and Production Setup',
  slug: 'chatbot-deployment-production',
  description: 'Deploy your chatbot to production with proper monitoring, scaling, and maintenance strategies.',
  content: `# Chatbot Deployment and Production Setup

## Introduction

Deploying a chatbot to production requires careful planning for scalability, monitoring, and maintenance. This tutorial covers the complete deployment process.

## Prerequisites

- Docker and containerization
- Cloud platform (AWS, GCP, Azure)
- CI/CD pipeline
- Monitoring tools

## Step 1: Containerization with Docker

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]
\`\`\`

## Step 2: Environment Configuration

\`\`\`javascript
class EnvironmentConfig {
    constructor() {
        this.config = {
            development: {
                database: process.env.DEV_DB_URL,
                redis: process.env.DEV_REDIS_URL,
                openai: process.env.DEV_OPENAI_KEY
            },
            production: {
                database: process.env.PROD_DB_URL,
                redis: process.env.PROD_REDIS_URL,
                openai: process.env.PROD_OPENAI_KEY
            }
        };
    }

    getConfig() {
        const env = process.env.NODE_ENV || 'development';
        return this.config[env];
    }
}
\`\`\`

## Step 3: Health Monitoring

\`\`\`javascript
class HealthMonitor {
    constructor() {
        this.checks = new Map();
        this.setupHealthChecks();
    }

    setupHealthChecks() {
        this.checks.set('database', () => this.checkDatabase());
        this.checks.set('redis', () => this.checkRedis());
        this.checks.set('openai', () => this.checkOpenAI());
    }

    async checkHealth() {
        const results = {};
        let overallHealth = true;

        for (const [name, check] of this.checks) {
            try {
                const result = await check();
                results[name] = { status: 'healthy', ...result };
            } catch (error) {
                results[name] = { status: 'unhealthy', error: error.message };
                overallHealth = false;
            }
        }

        return {
            status: overallHealth ? 'healthy' : 'unhealthy',
            checks: results,
            timestamp: new Date().toISOString()
        };
    }

    async checkDatabase() {
        // Database connectivity check
        return { responseTime: 50 };
    }

    async checkRedis() {
        // Redis connectivity check
        return { responseTime: 10 };
    }

    async checkOpenAI() {
        // OpenAI API check
        return { responseTime: 200 };
    }
}
\`\`\`

## Step 4: Load Balancing

\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  chatbot:
    build: .
    replicas: 3
    environment:
      - NODE_ENV=production
    depends_on:
      - database
      - redis
    networks:
      - chatbot-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - chatbot
    networks:
      - chatbot-network

  database:
    image: postgres:13
    environment:
      POSTGRES_DB: chatbot
      POSTGRES_USER: chatbot
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - chatbot-network

  redis:
    image: redis:6-alpine
    networks:
      - chatbot-network

networks:
  chatbot-network:
    driver: bridge

volumes:
  postgres_data:
\`\`\`

## Step 5: CI/CD Pipeline

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy Chatbot

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker image
        run: docker build -t chatbot:$\{\{ github.sha \}\} .
      - name: Push to registry
        run: docker push chatbot:$\{\{ github.sha \}\}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          docker-compose -f docker-compose.prod.yml up -d
\`\`\`

## Step 6: Monitoring and Logging

\`\`\`javascript
class ProductionLogger {
    constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.File({ filename: 'error.log', level: 'error' }),
                new winston.transports.File({ filename: 'combined.log' }),
                new winston.transports.Console()
            ]
        });
    }

    logRequest(req, res, responseTime) {
        this.logger.info('HTTP Request', {
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            responseTime: responseTime,
            userAgent: req.get('User-Agent'),
            ip: req.ip
        });
    }

    logError(error, context) {
        this.logger.error('Application Error', {
            error: error.message,
            stack: error.stack,
            context: context,
            timestamp: new Date().toISOString()
        });
    }
}
\`\`\`

## Step 7: Scaling Strategies

\`\`\`javascript
class AutoScaler {
    constructor() {
        this.metrics = {
            cpuUsage: 0,
            memoryUsage: 0,
            requestRate: 0
        };
    }

    async checkScalingNeeds() {
        const metrics = await this.getCurrentMetrics();
        
        if (metrics.cpuUsage > 80 || metrics.memoryUsage > 80) {
            await this.scaleUp();
        } else if (metrics.cpuUsage < 30 && metrics.memoryUsage < 30) {
            await this.scaleDown();
        }
    }

    async scaleUp() {
        // Increase replica count
        console.log('Scaling up chatbot instances');
    }

    async scaleDown() {
        // Decrease replica count
        console.log('Scaling down chatbot instances');
    }
}
\`\`\`

## Best Practices

1. **Health Checks**: Implement comprehensive health monitoring
2. **Logging**: Use structured logging for better debugging
3. **Security**: Secure all endpoints and data
4. **Backup**: Regular database backups
5. **Monitoring**: Set up alerts for critical metrics
6. **Testing**: Comprehensive testing before deployment
7. **Rollback**: Plan for quick rollback if issues arise

## Conclusion

Proper deployment ensures your chatbot runs reliably in production. Focus on monitoring, scaling, and maintenance for long-term success.`,
  author: 'Sajedar Team',
  publishedAt: '2024-02-25',
  updatedAt: '2024-02-25',
  tags: ['deployment', 'production', 'docker', 'monitoring', 'scaling'],
  category: 'deployment',
  difficulty: 'advanced',
  readTime: 25,
  featured: false,
  seo: {
    metaTitle: 'Chatbot Deployment and Production Setup - Complete Guide',
    metaDescription: 'Learn to deploy chatbots to production with proper monitoring, scaling, and maintenance strategies.',
    keywords: ['chatbot deployment', 'production setup', 'docker', 'monitoring', 'scaling']
  }
};
