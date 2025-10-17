'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ScoreData {
  digitalPresence: number;
  customerCommunication: number;
  dataInfrastructure: number;
  operationalWorkflow: number;
  financialReadiness: number;
}

interface FormData {
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
  digitalPresence: number;
  customerCommunication: number;
  dataInfrastructure: number;
  operationalWorkflow: number;
  financialReadiness: number;
}

const readinessQuestions = {
  digitalPresence: {
    title: "Digital Presence",
    description: "How strong is your online visibility and digital systems?",
    questions: [
      "Do you have a functional website or Facebook Page?",
      "Do customers regularly message you online?",
      "Are you active on social media platforms?",
      "Do you have online reviews or testimonials?",
      "Is your business information easily findable online?"
    ]
  },
  customerCommunication: {
    title: "Customer Communication Flow",
    description: "How do you handle customer interactions and inquiries?",
    questions: [
      "How many customer messages do you receive daily?",
      "Do you manually handle every inquiry?",
      "Do you use WhatsApp for business communications?",
      "How quickly do you typically respond to customers?",
      "Do you have a system for tracking customer conversations?"
    ]
  },
  dataInfrastructure: {
    title: "Data Infrastructure",
    description: "How well do you manage and organize your business information?",
    questions: [
      "Do you keep digital records of inquiries and sales?",
      "Do you use spreadsheets or databases for customer data?",
      "Do you track customer preferences and history?",
      "Do you have a system for storing contact information?",
      "Do you analyze your business data for insights?"
    ]
  },
  operationalWorkflow: {
    title: "Operational Workflow",
    description: "How repetitive are your daily business tasks?",
    questions: [
      "How often do the same tasks repeat daily/weekly?",
      "Do you spend time on manual follow-ups and reminders?",
      "Are there bottlenecks in your current processes?",
      "Do you have standardized procedures for common tasks?",
      "Would automation save you significant time daily?"
    ]
  },
  financialReadiness: {
    title: "Financial Readiness & ROI Awareness",
    description: "Are you ready to invest in automation solutions?",
    questions: [
      "Would you invest NPR 10,000–50,000 if it saves 3+ hours daily?",
      "Do you see automation as a strategic investment?",
      "Are you willing to learn new digital tools?",
      "Do you have budget allocated for business improvements?",
      "Do you understand the ROI potential of automation?"
    ]
  }
};

const scoreRanges = {
  notReady: { min: 0, max: 40, color: 'bg-red-500', label: 'Not Ready', description: 'Manual-first stage' },
  emerging: { min: 41, max: 70, color: 'bg-yellow-500', label: 'Emerging', description: 'Hybrid stage' },
  ready: { min: 71, max: 100, color: 'bg-green-500', label: 'Automation-Ready', description: 'AI Integration Stage' }
};

export default function ReadinessPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    businessType: '',
    email: '',
    phone: '',
    digitalPresence: 0,
    customerCommunication: 0,
    dataInfrastructure: 0,
    operationalWorkflow: 0,
    financialReadiness: 0
  });
  const [showResults, setShowResults] = useState(false);

  const updateScore = (pillar: keyof ScoreData, score: number) => {
    setFormData(prev => ({ ...prev, [pillar]: score }));
  };

  const calculateTotalScore = () => {
    const scores = [
      formData.digitalPresence,
      formData.customerCommunication,
      formData.dataInfrastructure,
      formData.operationalWorkflow,
      formData.financialReadiness
    ];
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  };

  const getScoreCategory = (score: number) => {
    if (score >= scoreRanges.ready.min) return scoreRanges.ready;
    if (score >= scoreRanges.emerging.min) return scoreRanges.emerging;
    return scoreRanges.notReady;
  };

  const getRecommendations = (score: number) => {
    const category = getScoreCategory(score);
    
    if (category === scoreRanges.ready) {
      return {
        title: "You're Automation-Ready! 🚀",
        description: "Your business is well-positioned for AI automation. Let's implement advanced solutions.",
        recommendations: [
          "Implement AI chatbots for customer service",
          "Set up automated lead qualification",
          "Integrate CRM with messaging platforms",
          "Deploy advanced analytics and reporting"
        ],
        nextSteps: "Schedule a consultation to discuss your automation roadmap and implementation timeline."
      };
    } else if (category === scoreRanges.emerging) {
      return {
        title: "You're in the Emerging Stage 📈",
        description: "You have good foundations but need some improvements before full automation.",
        recommendations: [
          "Improve your digital presence with a website or Facebook Page",
          "Start using digital tools for customer data management",
          "Implement basic automation for repetitive tasks",
          "Build awareness of automation ROI in your team"
        ],
        nextSteps: "Let's work together to strengthen your digital foundation and prepare for automation."
      };
    } else {
      return {
        title: "Manual-First Stage - Let's Build Your Foundation 🔧",
        description: "Your business needs digital transformation before automation. We'll help you get there.",
        recommendations: [
          "Create a professional online presence",
          "Start collecting customer data digitally",
          "Learn about digital tools and their benefits",
          "Understand the value of automation for your business"
        ],
        nextSteps: "We'll guide you through digital transformation and prepare you for automation success."
      };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const resetForm = () => {
    setFormData({
      businessName: '',
      businessType: '',
      email: '',
      phone: '',
      digitalPresence: 0,
      customerCommunication: 0,
      dataInfrastructure: 0,
      operationalWorkflow: 0,
      financialReadiness: 0
    });
    setCurrentStep(0);
    setShowResults(false);
  };

  const renderScoreInput = (pillar: keyof ScoreData, title: string, description: string, questions: string[]) => (
    <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="space-y-4 mb-6">
        {questions.map((question, index) => (
          <div key={index} className="p-3 bg-white/5 rounded-lg">
            <p className="text-sm text-gray-300">{question}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2">
          Rate your readiness (0-5): {formData[pillar]}/5
        </label>
        <div className="flex space-x-2">
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => updateScore(pillar, value)}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
                formData[pillar] >= value
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : 'border-gray-400 text-gray-400 hover:border-emerald-400 hover:text-emerald-400'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Not Ready</span>
          <span>Highly Ready</span>
        </div>
      </div>
    </div>
  );

  const renderResults = () => {
    const totalScore = calculateTotalScore();
    const category = getScoreCategory(totalScore);
    const recommendations = getRecommendations(totalScore);

    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Your Automation Readiness Results</h2>
          <p className="text-gray-300">Based on your responses, here's your business automation assessment:</p>
        </div>

        {/* Score Visualization */}
        <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full text-2xl font-bold mb-4">
              <span className="text-3xl">📊</span>
              {totalScore}% Ready
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${category.color} text-white rounded-full font-semibold`}>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              {category.label} - {category.description}
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {Object.entries(readinessQuestions).map(([key, data], index) => (
              <div key={key} className="text-center">
                <div className="text-sm text-gray-300 mb-2">{data.title}</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(formData[key as keyof ScoreData] / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400">{formData[key as keyof ScoreData]}/5</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-8 p-6 bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/30 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">💡</span>
            {recommendations.title}
          </h3>
          <p className="text-gray-300 mb-6">{recommendations.description}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-emerald-300 mb-3">Recommended Next Steps:</h4>
            <ul className="space-y-2">
              {recommendations.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p className="text-emerald-300 font-semibold">{recommendations.nextSteps}</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Your Free Automation Consultation</h3>
          <p className="text-gray-300 text-center mb-6">
            Ready to transform your business with AI automation? Let's discuss your specific needs and create a personalized roadmap.
          </p>
          
          <div className="text-center">
            <Link
              href={`/Contact?source=readiness&score=${totalScore}&business=${encodeURIComponent(formData.businessName)}&type=${encodeURIComponent(formData.businessType)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-xl">🚀</span>
              Get Free Automation Consultation
            </Link>
            <p className="text-xs text-gray-400 mt-2">
              We'll contact you within 24 hours to discuss your automation needs
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={resetForm}
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Take the assessment again
          </button>
        </div>
      </div>
    );
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {renderResults()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Sajedar.com Automation Readiness Scorecard
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Discover Your Automation Readiness
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Take our comprehensive assessment to understand how ready your business is for AI automation. 
            Get personalized recommendations and a free consultation with our automation experts.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-semibold">
            <span className="text-xl">⚡</span>
            Takes only 5 minutes
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {Object.entries(readinessQuestions).map(([key, data], index) => (
              <div key={key} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  formData[key as keyof ScoreData] > 0 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-600 text-gray-300'
                }`}>
                  {index + 1}
                </div>
                {index < Object.keys(readinessQuestions).length - 1 && (
                  <div className={`w-12 h-1 mx-2 ${
                    formData[Object.keys(readinessQuestions)[index + 1] as keyof ScoreData] > 0
                      ? 'bg-emerald-500'
                      : 'bg-gray-600'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {Object.entries(readinessQuestions).map(([key, data], index) => (
            <div key={key}>
              {renderScoreInput(
                key as keyof ScoreData,
                data.title,
                data.description,
                data.questions
              )}
            </div>
          ))}

          {/* Business Information */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Business Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Business Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your business name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Business Type</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select your business type</option>
                  <option value="retail">Retail/E-commerce</option>
                  <option value="restaurant">Restaurant/Food Service</option>
                  <option value="healthcare">Healthcare/Medical</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="education">Education/Training</option>
                  <option value="consulting">Consulting/Professional Services</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-xl">📊</span>
              Get My Automation Readiness Score
            </button>
            <p className="text-sm text-gray-400 mt-3">
              Your information is secure and will only be used to provide personalized recommendations
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
