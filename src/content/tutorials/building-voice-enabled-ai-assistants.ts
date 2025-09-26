import { Tutorial } from '../../types/tutorial';

export const voiceEnabledAssistants: Tutorial = {
  id: '5',
  title: 'Building Voice-Enabled AI Assistants',
  slug: 'building-voice-enabled-ai-assistants',
  description: 'Create voice-enabled AI assistants using speech recognition and text-to-speech technologies.',
  content: `# Building Voice-Enabled AI Assistants

## Introduction

Voice-enabled AI assistants provide hands-free interaction with your applications. This tutorial covers speech recognition, natural language processing, and text-to-speech synthesis.

## Prerequisites

- Python 3.8+
- OpenAI API key
- Microphone access
- Basic Python knowledge

## Step 1: Setup Dependencies

\`\`\`bash
pip install openai speechrecognition pyaudio pyttsx3
\`\`\`

## Step 2: Speech Recognition

\`\`\`python
import speech_recognition as sr
import openai

# Initialize recognizer
r = sr.Recognizer()

def listen_for_voice():
    with sr.Microphone() as source:
        print("Listening...")
        audio = r.listen(source)
        
    try:
        text = r.recognize_google(audio)
        print(f"You said: {text}")
        return text
    except sr.UnknownValueError:
        print("Could not understand audio")
        return None
    except sr.RequestError as e:
        print(f"Error: {e}")
        return None
\`\`\`

## Step 3: AI Processing

\`\`\`python
import openai

openai.api_key = "your-api-key"

def process_with_ai(user_input):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful AI assistant."},
            {"role": "user", "content": user_input}
        ]
    )
    
    return response.choices[0].message.content
\`\`\`

## Step 4: Text-to-Speech

\`\`\`python
import pyttsx3

def speak_text(text):
    engine = pyttsx3.init()
    engine.setProperty('rate', 150)  # Speed of speech
    engine.setProperty('volume', 0.9)  # Volume level
    
    engine.say(text)
    engine.runAndWait()
\`\`\`

## Step 5: Complete Voice Assistant

\`\`\`python
def voice_assistant():
    while True:
        # Listen for voice input
        user_input = listen_for_voice()
        
        if user_input:
            # Process with AI
            ai_response = process_with_ai(user_input)
            
            # Speak the response
            speak_text(ai_response)
            
            # Check for exit command
            if "goodbye" in user_input.lower():
                speak_text("Goodbye! Have a great day!")
                break

if __name__ == "__main__":
    voice_assistant()
\`\`\`

## Advanced Features

### Wake Word Detection

\`\`\`python
def detect_wake_word(text):
    wake_words = ["hey assistant", "wake up", "hello ai"]
    return any(word in text.lower() for word in wake_words)
\`\`\`

### Context Awareness

\`\`\`python
class VoiceAssistant:
    def __init__(self):
        self.conversation_history = []
    
    def process_with_context(self, user_input):
        # Add to conversation history
        self.conversation_history.append({"role": "user", "content": user_input})
        
        # Keep only last 10 messages for context
        if len(self.conversation_history) > 10:
            self.conversation_history = self.conversation_history[-10:]
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful AI assistant."},
                *self.conversation_history
            ]
        )
        
        ai_response = response.choices[0].message.content
        self.conversation_history.append({"role": "assistant", "content": ai_response})
        
        return ai_response
\`\`\`

### Multi-language Support

\`\`\`python
def detect_language(text):
    # Simple language detection
    if any(char in text for char in 'ñáéíóúü'):
        return 'es'  # Spanish
    elif any(char in text for char in 'àâäéèêëïîôöùûüÿç'):
        return 'fr'  # French
    else:
        return 'en'  # English

def speak_in_language(text, language):
    engine = pyttsx3.init()
    
    # Set voice based on language
    voices = engine.getProperty('voices')
    for voice in voices:
        if language in voice.id:
            engine.setProperty('voice', voice.id)
            break
    
    engine.say(text)
    engine.runAndWait()
\`\`\`

## Best Practices

1. **Error Handling**: Implement robust error handling
2. **Privacy**: Consider data privacy and security
3. **Performance**: Optimize for real-time processing
4. **Accessibility**: Ensure accessibility features

## Conclusion

Voice-enabled AI assistants provide natural, hands-free interaction. Start with basic functionality and gradually add advanced features like context awareness and multi-language support.`,
  author: 'Sajedar Team',
  publishedAt: '2024-02-05',
  updatedAt: '2024-02-05',
  tags: ['voice assistant', 'speech recognition', 'text-to-speech', 'ai', 'python'],
  category: 'voice-assistants',
  difficulty: 'advanced',
  readTime: 20,
  featured: false,
  seo: {
    metaTitle: 'Building Voice-Enabled AI Assistants - Complete Tutorial',
    metaDescription: 'Learn to build voice-enabled AI assistants with speech recognition, NLP, and text-to-speech. Python tutorial with code examples.',
    keywords: ['voice assistant', 'speech recognition', 'text-to-speech', 'ai assistant', 'python']
  }
}; 