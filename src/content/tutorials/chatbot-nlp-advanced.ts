import { Tutorial } from '../../types/tutorial';

export const chatbotNlpTutorial: Tutorial = {
  id: '10',
  title: 'Advanced NLP for Chatbots',
  slug: 'chatbot-nlp-advanced',
  description: 'Implement advanced natural language processing techniques including intent recognition, entity extraction, and sentiment analysis.',
  content: `# Advanced NLP for Chatbots

## Introduction

Advanced NLP techniques enable chatbots to understand context, extract meaning, and respond intelligently. This tutorial covers intent recognition, entity extraction, and sentiment analysis.

## Prerequisites

- Python with spaCy/NLTK
- Node.js for API integration
- Machine learning libraries
- Training data

## Step 1: Intent Recognition

\`\`\`python
import spacy
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
import joblib

class IntentRecognizer:
    def __init__(self):
        self.nlp = spacy.load('en_core_web_sm')
        self.vectorizer = TfidfVectorizer(max_features=1000)
        self.classifier = SVC(kernel='linear', probability=True)
        self.intents = {}
        
    def preprocess_text(self, text):
        doc = self.nlp(text.lower())
        tokens = [token.lemma_ for token in doc if not token.is_stop and not token.is_punct]
        return ' '.join(tokens)
    
    def train_intent_model(self, training_data):
        texts = [self.preprocess_text(item['text']) for item in training_data]
        labels = [item['intent'] for item in training_data]
        
        X = self.vectorizer.fit_transform(texts)
        self.classifier.fit(X, labels)
        
        # Save model
        joblib.dump(self.classifier, 'intent_model.pkl')
        joblib.dump(self.vectorizer, 'vectorizer.pkl')
    
    def predict_intent(self, text):
        processed_text = self.preprocess_text(text)
        X = self.vectorizer.transform([processed_text])
        probabilities = self.classifier.predict_proba(X)[0]
        
        intent = self.classifier.predict(X)[0]
        confidence = max(probabilities)
        
        return {
            'intent': intent,
            'confidence': confidence,
            'probabilities': dict(zip(self.classifier.classes_, probabilities))
        }
\`\`\`

## Step 2: Entity Extraction

\`\`\`python
class EntityExtractor:
    def __init__(self):
        self.nlp = spacy.load('en_core_web_sm')
        self.custom_entities = {}
        
    def extract_entities(self, text):
        doc = self.nlp(text)
        entities = []
        
        for ent in doc.ents:
            entities.append({
                'text': ent.text,
                'label': ent.label_,
                'start': ent.start_char,
                'end': ent.end_char,
                'confidence': 0.9  # spaCy doesn't provide confidence
            })
        
        # Extract custom entities
        custom_entities = self.extract_custom_entities(text)
        entities.extend(custom_entities)
        
        return entities
    
    def extract_custom_entities(self, text):
        entities = []
        
        # Email pattern
        import re
        email_pattern = r'\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b'
        emails = re.findall(email_pattern, text)
        for email in emails:
            entities.append({
                'text': email,
                'label': 'EMAIL',
                'confidence': 0.95
            })
        
        # Phone pattern
        phone_pattern = r'\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b'
        phones = re.findall(phone_pattern, text)
        for phone in phones:
            entities.append({
                'text': phone,
                'label': 'PHONE',
                'confidence': 0.9
            })
        
        return entities
\`\`\`

## Step 3: Sentiment Analysis

\`\`\`python
from textblob import TextBlob
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

class SentimentAnalyzer:
    def __init__(self):
        self.sia = SentimentIntensityAnalyzer()
        
    def analyze_sentiment(self, text):
        # VADER sentiment analysis
        vader_scores = self.sia.polarity_scores(text)
        
        # TextBlob sentiment analysis
        blob = TextBlob(text)
        textblob_polarity = blob.sentiment.polarity
        textblob_subjectivity = blob.sentiment.subjectivity
        
        # Combine results
        combined_score = (vader_scores['compound'] + textblob_polarity) / 2
        
        return {
            'sentiment': self.classify_sentiment(combined_score),
            'confidence': abs(combined_score),
            'scores': {
                'vader': vader_scores,
                'textblob': {
                    'polarity': textblob_polarity,
                    'subjectivity': textblob_subjectivity
                },
                'combined': combined_score
            }
        }
    
    def classify_sentiment(self, score):
        if score >= 0.1:
            return 'positive'
        elif score <= -0.1:
            return 'negative'
        else:
            return 'neutral'
\`\`\`

## Step 4: Context Understanding

\`\`\`python
class ContextAnalyzer:
    def __init__(self):
        self.nlp = spacy.load('en_core_web_sm')
        self.context_history = []
        
    def analyze_context(self, current_message, conversation_history):
        # Analyze conversation flow
        context_features = {
            'topic_continuity': self.check_topic_continuity(current_message, conversation_history),
            'question_type': self.classify_question_type(current_message),
            'urgency_level': self.assess_urgency(current_message),
            'user_emotion': self.detect_emotion(current_message)
        }
        
        return context_features
    
    def check_topic_continuity(self, current_message, history):
        if not history:
            return 0.0
        
        # Simple topic continuity based on word overlap
        current_words = set(current_message.lower().split())
        history_words = set(' '.join(history).lower().split())
        
        overlap = len(current_words.intersection(history_words))
        total_words = len(current_words.union(history_words))
        
        return overlap / total_words if total_words > 0 else 0.0
    
    def classify_question_type(self, message):
        question_words = ['what', 'how', 'when', 'where', 'why', 'who', 'which']
        message_lower = message.lower()
        
        for word in question_words:
            if word in message_lower:
                return word
        
        if '?' in message:
            return 'general_question'
        
        return 'statement'
    
    def assess_urgency(self, message):
        urgent_keywords = ['urgent', 'asap', 'immediately', 'emergency', 'critical']
        message_lower = message.lower()
        
        urgency_score = 0
        for keyword in urgent_keywords:
            if keyword in message_lower:
                urgency_score += 1
        
        return min(urgency_score / len(urgent_keywords), 1.0)
\`\`\`

## Step 5: Response Generation

\`\`\`python
class ResponseGenerator:
    def __init__(self):
        self.templates = {
            'greeting': [
                "Hello! How can I help you today?",
                "Hi there! What can I do for you?",
                "Good to see you! How may I assist you?"
            ],
            'question': [
                "That's a great question. Let me help you with that.",
                "I'd be happy to answer that for you.",
                "Let me provide you with the information you need."
            ],
            'complaint': [
                "I understand your concern. Let me help resolve this.",
                "I'm sorry to hear about this issue. Let's work together to fix it.",
                "I appreciate you bringing this to my attention. Let me assist you."
            ]
        }
    
    def generate_response(self, intent, entities, sentiment, context):
        # Select appropriate template based on intent and sentiment
        template_key = self.select_template(intent, sentiment)
        base_response = self.get_template(template_key)
        
        # Personalize response based on entities and context
        personalized_response = self.personalize_response(
            base_response, entities, context
        )
        
        # Adjust tone based on sentiment
        final_response = self.adjust_tone(personalized_response, sentiment)
        
        return final_response
    
    def select_template(self, intent, sentiment):
        if intent == 'greeting':
            return 'greeting'
        elif intent == 'question':
            return 'question'
        elif sentiment == 'negative':
            return 'complaint'
        else:
            return 'general'
    
    def personalize_response(self, response, entities, context):
        # Add personalization based on extracted entities
        if entities:
            name_entity = next((e for e in entities if e['label'] == 'PERSON'), None)
            if name_entity:
                response = response.replace('you', name_entity['text'])
        
        return response
    
    def adjust_tone(self, response, sentiment):
        if sentiment == 'negative':
            response = "I understand this might be frustrating. " + response
        elif sentiment == 'positive':
            response = "Great! " + response
        
        return response
\`\`\`

## Step 6: Integration with Node.js

\`\`\`javascript
const { spawn } = require('child_process');

class NLPProcessor {
    constructor() {
        this.pythonProcess = null;
    }
    
    async processText(text) {
        return new Promise((resolve, reject) => {
            const python = spawn('python', ['nlp_processor.py', text]);
            let result = '';
            
            python.stdout.on('data', (data) => {
                result += data.toString();
            });
            
            python.on('close', (code) => {
                if (code === 0) {
                    resolve(JSON.parse(result));
                } else {
                    reject(new Error('Python process failed'));
                }
            });
        });
    }
    
    async analyzeMessage(message) {
        const analysis = await this.processText(message);
        
        return {
            intent: analysis.intent,
            entities: analysis.entities,
            sentiment: analysis.sentiment,
            context: analysis.context
        };
    }
}
\`\`\`

## Best Practices

1. **Data Quality**: Use high-quality training data
2. **Regular Updates**: Retrain models with new data
3. **Performance Monitoring**: Track NLP accuracy metrics
4. **Fallback Handling**: Handle cases where NLP fails
5. **Privacy**: Ensure user data privacy in processing

## Conclusion

Advanced NLP techniques significantly improve chatbot capabilities. Start with basic intent recognition and gradually implement more sophisticated features.`,
  author: 'Sajedar Team',
  publishedAt: '2024-03-01',
  updatedAt: '2024-03-01',
  tags: ['nlp', 'intent recognition', 'entity extraction', 'sentiment analysis', 'machine learning'],
  category: 'nlp',
  difficulty: 'advanced',
  readTime: 30,
  featured: true,
  seo: {
    metaTitle: 'Advanced NLP for Chatbots - Complete Guide',
    metaDescription: 'Learn advanced natural language processing techniques for chatbots including intent recognition and entity extraction.',
    keywords: ['chatbot nlp', 'intent recognition', 'entity extraction', 'sentiment analysis', 'machine learning']
  }
};
