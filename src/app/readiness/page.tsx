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
    title: "Digital Presence & Online Visibility",
    description: "Are customers finding and engaging with you online?",
    questions: [
      "Do you have a website or verified business page (Google, Facebook, LinkedIn)?",
      "Are your hours, contact, and location visible via search or maps?",
      "Do customers message you digitally on a regular basis?",
      "Do you actively post, reply, or update content on social platforms?",
      "Do you have credible online reviews or testimonials?"
    ]
  },
  customerCommunication: {
    title: "Customer Communication & Responsiveness",
    description: "How well do you handle inquiries and conversations?",
    questions: [
      "How many customer inquiries arrive daily - and how fast do you respond?",
      "Are replies mostly manual, or supported by staff/tools?",
      "Do you use WhatsApp Business, Messenger, or similar apps?",
      "Do you track conversations using a CRM or spreadsheet?",
      "Are follow-ups organized and timely?"
    ]
  },
  dataInfrastructure: {
    title: "Data Management & Organization",
    description: "Can your business data actually support automation?",
    questions: [
      "Are transactions and leads digitally recorded or mostly on paper?",
      "Do you store customer info in one central place (CRM, Google Sheets, etc.)?",
      "Can you easily access a client’s history or preferences?",
      "Do you analyze performance data (sales trends, peak inquiry times)?",
      "Is your data accurate and accessible when needed?"
    ]
  },
  operationalWorkflow: {
    title: "Operational Workflow & Process Efficiency",
    description: "How streamlined are your daily operations?",
    questions: [
      "Do repetitive tasks (emails, reports, updates) consume hours weekly?",
      "Are processes standardized or person-dependent?",
      "Do you experience workflow bottlenecks that delay progress?",
      "Have you mapped your processes (so automation can plug in easily)?",
      "Could automation save you noticeable time weekly?"
    ]
  },
  financialReadiness: {
    title: "Financial & Strategic Readiness",
    description: "Are you mentally and financially ready to invest in automation?",
    questions: [
      "Would you invest a small budget to save time weekly?",
      "Do you view automation as a long-term investment, not an expense?",
      "Are you and your team open to learning new tools?",
      "Have you allocated any technology improvement budget this year?",
      "Do you understand automation ROI (hours saved = money gained)?"
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
    const total = scores.reduce((sum, score) => sum + score, 0); // 0-25
    return Math.round((total / (5 * 5)) * 100); // percentage 0-100
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
          Rate (0–5): {formData[pillar]}/5
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
          <span>0️⃣ Not Ready</span>
          <span>5️⃣ Highly Ready</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">Your Automation Readiness Score</h2>
          <p className="text-gray-300">Based on your ratings across five core dimensions:</p>
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
              href={`/contact?source=readiness&score=${totalScore}&business=${encodeURIComponent(formData.businessName)}&type=${encodeURIComponent(formData.businessType)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`}
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
            🧠 Sajedar Automation Readiness Scorecard
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Discover Your Automation Readiness
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            In just 5 minutes, find out how prepared your business is to adopt automation and AI - and receive a personalized action plan with expert insights.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-8">
            Only 13% of companies feel fully prepared for AI. Don’t let readiness be your bottleneck. (Sources: Innovectus, RAND, Salesforce, Adact)
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-semibold">
            <span className="text-xl">⚡</span>
            Takes only 5 minutes
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Five Core Dimensions: Each section reflects a pillar of automation success.</li>
            <li>• Rate Yourself (0–5): 0 = Not Ready, 5 = Highly Ready.</li>
            <li>• Instant Score & Insights: Get a readiness score and next-step recommendations.</li>
          </ul>
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
            <h3 className="text-xl font-bold text-white mb-4">Business Profile (for Personalized Report)</h3>
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
                <label className="block text-sm font-medium text-white mb-2">Industry / Sector</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select industry</option>
                  <option value="retail">Retail</option>
                  <option value="services">Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="hospitality">Hospitality</option>
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
              Get My Score
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
