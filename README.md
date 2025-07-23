# Sajedar - Custom AI Chatbot Agency

A modern, responsive landing page for Sajedar, a custom AI chatbot agency specializing in tailored solutions for ambitious brands.

## 🚀 About

Sajedar offers custom AI chatbot solutions that transform customer engagement and automate interactions. Our platform combines cutting-edge technologies with modern design to create exceptional user experiences.

## ✨ Features

### 🎨 Design & UX
- **Modern Design**: Glassmorphism, gradients, and smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Advanced Animations**: 
  - Animated flow diagrams with Framer Motion
  - Interactive particles with tsparticles
  - Lottie animations for illustrations
  - Smooth transitions and micro-interactions

### 💬 Interactive Demonstrations
- **Chat Demo**: Interactive demonstration of the chatbot in action
- **Chat Dashboard**: Conversation management interface
- **Agentic Flow Diagrams**: Animated visualization of the AI process

### 📱 Pages & Sections
- **Homepage**: Comprehensive service presentation
- **Contact Form**: Formspree integration for lead management
- **Legal Pages**: Privacy Policy and Terms of Service
- **Smooth Navigation**: Responsive menu with animations

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for modern, responsive design
- **Animations**: 
  - Framer Motion for React animations
  - Anime.js for JavaScript animations
  - tsparticles for particle effects
  - Lottie React for vector animations

### UI/UX
- **Icons**: Lucide React for consistent iconography
- **Fonts**: DM Serif Display and Inter for modern typography
- **Components**: Headless UI for accessible components
- **Heroicons**: Optimized SVG icons

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Build**: Automatic optimization with Next.js
- **Deployment**: Vercel-ready configuration

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone [REPO_URL]
cd sajedar-landing
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🏗️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build application for production
npm run start        # Start application in production mode
npm run lint         # Check code with ESLint
```

## 📁 Project Structure

```
sajedar-landing/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   └── app/
│       ├── ChatDashboard.tsx    # Interactive chat dashboard
│       ├── ChatDemo.tsx         # Chatbot demonstration
│       ├── Contact/
│       │   └── page.tsx         # Contact page
│       ├── PrivacyPolicy/
│       │   └── page.tsx         # Privacy policy
│       ├── TermsOfService/
│       │   └── page.tsx         # Terms of service
│       ├── globals.css          # Global styles
│       ├── layout.tsx           # Main layout
│       └── page.tsx             # Homepage
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── vercel.json                 # Vercel configuration
```

## 🎯 Key Features

### Agentic Flow Animations
The project includes sophisticated animated flow diagrams that illustrate the AI request processing workflow:
- Colored particle animations
- Smooth transitions between steps
- AI decision process visualization

### Interactive Demonstration
- Real-time chat interface
- User interaction simulation
- Chatbot capabilities showcase

### Consistent Design System
- Unified color palette (emerald green)
- Hierarchical typography
- Reusable components
- Consistent animations

## 🚀 Deployment

### Vercel (Recommended)
The project is configured for automatic deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Automatic builds trigger on pushes to `main`
3. Automatic deployment with Next.js optimizations

### Other Platforms
The project can be deployed on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment variables:

```env
# Formspree (for contact form)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Customization
- **Colors**: Modify CSS variables in `globals.css`
- **Animations**: Adjust parameters in Framer Motion components
- **Content**: Update texts in React components

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under private license. All rights reserved to Sajedar.

## 📞 Contact

- **Website**: [sajedar.com](https://sajedar.com)
- **Email**: contact@sajedar.com
- **LinkedIn**: [Sajedar](https://linkedin.com/company/sajedar)

---

© 2025 Sajedar. All rights reserved. 