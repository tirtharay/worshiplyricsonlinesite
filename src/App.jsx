import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import worshipLogo from './assets/worship_lyrics_logo_heart_cross.png'
import bgvideo from './assets/hero-worship-lyrics-online.mp4'
import appvideo from './assets/interface-demo-compressed.mp4'
import founderPhoto from './assets/tirtha-ray-worship-lyrics-online-founder.jpg'

import { 
  Music, 
  Users, 
  Monitor, 
  Zap, 
  Shield, 
  Globe, 
  Star, 
  Check, 
  ArrowRight,
  Play,
  ChevronRight,
  Heart,
  BookOpen,
  Mic,
  Settings,
  Clock,
  MessageSquare,
  Smartphone,
  Cloud,
  Lock,
  Award,
  Headphones,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Quote,
  X,
  ArrowLeft,
  Eye
} from 'lucide-react'
import './App.css'

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showRegistration, setShowRegistration] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const features = [
    {
      icon: Music,
      title: "Smart Song Management",
      description: "Organize thousands of songs with AI-powered search, tagging, and automatic chord detection. Store unlimited songs with version control."
    },
    {
      icon: Monitor,
      title: "Live Projection",
      description: "Seamless lyrics projection with multiple display options, custom backgrounds, and real-time editing during services."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multiple worship leaders can plan services together with real-time sync and role-based permissions."
    },
    {
      icon: Smartphone,
      title: "Mobile Control",
      description: "Control presentations from anywhere in your sanctuary with our mobile-optimized interface."
    },
    {
      icon: Cloud,
      title: "Cloud Sync",
      description: "Access your song library from any device with automatic cloud synchronization and backup."
    },
    {
      icon: Lock,
      title: "Copyright Management",
      description: "Built-in CCLI integration and copyright tracking to keep your church compliant."
    }
  ]

  const testimonials = [
    {
      name: "Pastor Michael Johnson",
      church: "Grace Community Church",
      location: "Austin, TX",
      content: "Worship Lyrics Online has transformed our worship experience. The real-time collaboration features allow our team to work seamlessly together, and the professional display quality enhances our congregation's worship.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      church: "New Life Fellowship",
      location: "Denver, CO", 
      content: "The mobile control feature is a game-changer. I can manage our worship presentation from anywhere in the sanctuary. The song management system is incredible.",
      rating: 5
    },
    {
      name: "David Chen",
      church: "City Church International",
      location: "Seattle, WA",
      content: "Outstanding support and reliability. We've had zero downtime since switching to this platform. The copyright management features give us peace of mind.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for small churches getting started",
      features: [
        "Up to 500 songs",
        "2 display screens",
        "Basic templates",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: 59,
      period: "month",
      description: "Most popular for growing churches",
      features: [
        "Unlimited songs",
        "5 display screens",
        "Custom templates",
        "Priority support",
        "Team collaboration",
        "CCLI integration",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 99,
      period: "month", 
      description: "For large churches and multi-site organizations",
      features: [
        "Everything in Professional",
        "Unlimited screens",
        "White-label options",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager"
      ],
      popular: false
    }
  ]

  const stats = [
    { number: "1,000+", label: "Churches" },
    { number: "50,000+", label: "Songs Managed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ]

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in minutes with our quick setup wizard and pre-loaded song database."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Support for 12+ languages with automatic translation and localization features."
    },
    {
      icon: Award,
      title: "Professional Templates",
      description: "Beautiful, customizable templates designed specifically for worship environments."
    },
    {
      icon: Headphones,
      title: "Audio Integration",
      description: "Seamless integration with popular audio systems and streaming platforms."
    }
  ]

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan)
    setShowRegistration(true)
  }

  const handleStartTrial = () => {
    setShowRegistration(true)
  }

  const closeAllModals = () => {
    setIsSignInOpen(false)
    setShowRegistration(false)
    setShowInvitation(false)
    setShowForgotPassword(false)
  }

  const openSignIn = () => {
    setIsSignInOpen(true)
    setShowRegistration(false)
    setShowInvitation(false)
    setShowForgotPassword(false)
  }

  const openRegister = () => {
    setShowRegistration(true)
    setIsSignInOpen(false)
    setShowInvitation(false)
    setShowForgotPassword(false)
  }

  const openInvitation = () => {
    setShowInvitation(true)
    setIsSignInOpen(false)
    setShowRegistration(false)
    setShowForgotPassword(false)
  }

  const openForgotPassword = () => {
    setShowForgotPassword(true)
    setIsSignInOpen(false)
    setShowRegistration(false)
    setShowInvitation(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src={worshipLogo} 
                alt="Worship Lyrics Online" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold">Worship Lyrics Online</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <Button 
                variant="ghost" 
                onClick={() => setIsSignInOpen(true)}
                className="text-gray-300 hover:text-white"
              >
                Sign In
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleStartTrial}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        {window.location.origin.startsWith('file://') || !window?.fetch
          ? null
          : (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover filter brightness-30" 
            >
              <source src={bgvideo} type="video/mp4" />
            </video>
          )
        }

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-gray-900/60"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-radial from-white/5 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-36">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Tested by Churches Worldwide
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight lg:px-[100px]">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Church's Worship
            </span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional song management, live projection, and real-time collaboration for modern churches. 
            Create seamless worship experiences that inspire your congregation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Start Free Trial Button */}
            <button 
              onClick={handleStartTrial}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
            >
                <span className="flex items-center">
                ✨ Start Free Trial
                <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                </svg>
                </span>
            </button>

            {/* Watch Demo Button */}
            <button className="group bg-gray-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-gray-600 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                    />
                </svg>
                Watch Demo
                </span>
            </button>
        </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              30-day free trial
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
          </div>

          {/* Interface Demo Video */}
          <div className="mt-20 max-w-4xl lg:max-w-7xl mx-auto">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full rounded-xl shadow-2xl border border-gray-700"
              poster="/interface-preview.jpg"
            >
              <source src={appvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Founder Story Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
              <Heart className="w-4 h-4 mr-2" />
              The Real Story Behind This Platform
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Why I Built This Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sometimes the best solutions come from simply observing real problems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Photo & Info */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                <img 
                  src={founderPhoto} 
                  alt="Tirtha Ray - Founder" 
                  className="w-full aspect-square object-cover rounded-2xl mb-6 shadow-xl border border-gray-600/50"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Tirtha Ray</h3>
                  <p className="text-blue-400 font-medium mb-6">Founder & Developer</p>
                  
                  {/* Enhanced Social Links */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <a 
                      href="https://tirtharay.com.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-900 hover:bg-[var(--color-blue-700)] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Globe className="w-5 h-5 text-white group-hover:text-white" />
                    </a>
                    <a 
                      href="mailto:contato@tirtharay.com.br"
                      className="group w-12 h-12 bg-gray-900 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Mail className="w-5 h-5 text-white group-hover:text-white" />
                    </a>
                    <a 
                      href="https://x.com/tirtharay_dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-900 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Twitter className="w-5 h-5 text-white group-hover:text-white" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/tirtharay/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-900 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
                    </a>
                    <a 
                      href="https://www.instagram.com/tirtharay/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-900 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Instagram className="w-5 h-5 text-white group-hover:text-white" />
                    </a>
                    <a 
                      href="https://www.facebook.com/papaitirtha" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-900 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <Facebook className="w-5 h-5 text-white group-hover:text-white" />
                    </a>
                  </div>

                  {/* Bible Verse */}
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 mt-6">
                    <p className="text-blue-300 font-medium italic text-center mb-2">
                      "Sing to him a new song; play skillfully, and shout for joy."
                    </p>
                    <p className="text-blue-400 text-sm text-center">- Psalm 33:3</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">The Problem I Observed</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      As a tech enthusiast attending church services, I couldn't help but notice the struggles our worship and production teams faced every Sunday. The setup was complex: 3 monitors, 2 different PCs, and software that simply wouldn't let them work together seamlessly.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300">Only one person could control the system at a time</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300">No easy way to sync between different computers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300">Limited collaboration and backup options</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">The Sunday Morning Reality</h3>
                    <p className="text-gray-300 leading-relaxed">
                      I watched our dedicated volunteers arrive hours early, troubleshooting technical issues instead of preparing their hearts for worship. The stress was visible – hoping nothing would crash during service, praying the software would cooperate, and having no backup plan when things went wrong.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">The Solution Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      That's when I decided to build something different. A platform designed specifically for worship teams who need real collaboration, cloud synchronization, and multi-device control. Something that just works, without the complexity, without breaking the budget, and without the stress.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Quote */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6">
                <Quote className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <p className="text-lg text-blue-100 italic text-center mb-2">
                  "Every church deserves technology that enhances worship, not hinders it. That's the mission behind Worship Lyrics Online."
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Team-First Design</h4>
              <p className="text-gray-300">Every feature is built around real team collaboration needs, not individual use.</p>
            </div>
            
            <div className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Community Driven</h4>
              <p className="text-gray-300">Built by the worship community, for the worship community. Your feedback shapes every update.</p>
            </div>
            
            <div className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Modern Solutions</h4>
              <p className="text-gray-300">Cloud sync, real-time collaboration, and multi-device support built from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Worship Team
              </span>{' '}
              Needs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful features designed specifically for modern worship teams and church services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Pricing
              </span>{' '}
              for Every Church
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your worship team. All plans include a 30-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 bg-blue-600/10' : 'border-gray-700 bg-gray-800/50'} hover:border-blue-500/50 transition-all`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-400 mb-2">${plan.price}</div>
                  <div className="text-gray-400">per {plan.period}</div>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                    onClick={() => handlePlanSelect(plan)}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">All plans include a 30-day free trial. No credit card required.</p>
            <p className="text-sm text-gray-500">Cancel anytime. No hidden fees.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Worship Leaders
              </span>{' '}
              Are Saying
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real feedback from worship teams using our platform every Sunday
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.church}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Support
              </span>{' '}
              When You Need It
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our team is here to help you succeed. Reach out anytime for support, questions, or feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Live Chat */}
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-blue-500/50 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Live Chat Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Get instant help from our support team</p>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300">Start Chat →</Button>
              </CardContent>
            </Card>

            {/* Phone Support */}
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📞</span>
                </div>
                <CardTitle className="text-white">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">1-800-WORSHIP<br />Mon-Fri 9AM-6PM EST</p>
                <Button variant="ghost" className="text-green-400 hover:text-green-300">Call Now →</Button>
              </CardContent>
            </Card>

            {/* Help Center */}
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-purple-500/50 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Help Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Comprehensive guides and documentation</p>
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300">Browse Docs →</Button>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-orange-500/50 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Send us a message and we'll respond quickly</p>
                <Button variant="ghost" className="text-orange-400 hover:text-orange-300">Send Message →</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Worship Experience?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of churches already using Worship Lyrics Online to create seamless, 
            engaging worship services every Sunday.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
              onClick={handleStartTrial}
            >
              ✨ Start Your Free Trial →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 hover:border-gray-500 text-lg px-8 py-6"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-gray-400 mt-6">30-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={worshipLogo} alt="Worship Lyrics Online" className="h-8 w-8" />
                <span className="text-xl font-bold">Worship Lyrics Online</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The modern worship platform designed by worship leaders, for worship leaders. 
                Transform your church's worship experience with seamless technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">System Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Worship Lyrics Online. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-md border border-gray-700 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="flex items-center space-x-3">
                <img src={worshipLogo} alt="Worship Lyrics Online" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-bold text-white">Welcome back</h2>
                  <p className="text-gray-400 text-sm">Sign in to your worship team account</p>
                </div>
              </div>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="px-6 pb-6">
              {/* Google Sign In */}
              <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-lg mb-4 flex items-center justify-center space-x-2 transition-all">
                <span className="text-lg">G</span>
                <span>Continue with Google</span>
              </button>
              
              <div className="text-center text-gray-500 text-sm mb-4">or with email</div>
              
              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              
              {/* Password */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              
              {/* Sign In Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-all">
                Sign In
              </button>
              
              {/* Links */}
              <div className="text-center space-y-2">
                <button onClick={openForgotPassword} className="text-gray-400 hover:text-white text-sm">Forgot your password?</button>
                <div className="text-gray-500 text-sm">Don't have an account?</div>
                <button onClick={openRegister} className="text-blue-400 hover:text-blue-300 font-medium">Register a new church</button>
                <div className="text-gray-500 text-sm">or</div>
                <button onClick={openInvitation} className="text-purple-400 hover:text-purple-300 font-medium">Join with invitation link</button>
              </div>
            </div>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pb-4">
              Free 14-day trial • No credit card required
            </div>
          </div>
        </div>
      )}

      {/* Compact Register Modal with 2 Columns */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-4xl border border-gray-700 shadow-2xl max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4 sticky top-0 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <img src={worshipLogo} alt="Worship Lyrics Online" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-bold text-white">Create Your Account</h2>
                  <p className="text-gray-400 text-sm">Set up your church workspace</p>
                </div>
              </div>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content in 2 Columns */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Church Info */}
                <div>
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Church Info</h3>
                    <p className="text-gray-400 text-sm">Tell us about your church to get started</p>
                  </div>
                  
                  {/* Church Name */}
                  <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Church Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your church name"
                    />
                  </div>
                  
                  {/* Full Name */}
                  <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Your Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Right Column - Account Details */}
                <div>
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Account Details</h3>
                    <p className="text-gray-400 text-sm">Secure your account and location</p>
                  </div>
                  
                  {/* Password */}
                  <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                    <input 
                      type="password" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Create a password"
                    />
                  </div>
                  
                  {/* Country */}
                  <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Country</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                      <option>Select your country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Brazil</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-3">What you'll get:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">14-day free trial</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Team collaboration tools</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Cloud-based access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Create Account Button - Full Width */}
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-all">
                  Create Account
                </button>
                
                {/* Links */}
                <div className="text-center space-y-2">
                  <button onClick={openSignIn} className="text-gray-400 hover:text-white text-sm">Back to Sign In</button>
                  <div className="text-gray-500 text-sm">or</div>
                  <button onClick={openInvitation} className="text-purple-400 hover:text-purple-300 font-medium">Join with invitation link</button>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pb-4">
              Free 14-day trial • No credit card required
            </div>
          </div>
        </div>
      )}

      {/* Invitation Modal */}
      {showInvitation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-md border border-gray-700 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="flex items-center space-x-3">
                <img src={worshipLogo} alt="Worship Lyrics Online" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-bold text-white">Join your church</h2>
                  <p className="text-gray-400 text-sm">Complete your invitation to get started</p>
                </div>
              </div>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="px-6 pb-6">
              {/* Back Button */}
              <button onClick={openSignIn} className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to login</span>
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Join Your Church</h3>
                <p className="text-gray-400 text-sm">Enter your invitation token to get started</p>
              </div>
              
              {/* Invitation Token */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">Invitation Token</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Enter your invitation token"
                />
              </div>
              
              {/* Validate Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-all">
                Validate Invitation
              </button>
            </div>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pb-6">
              Free 14-day trial • No credit card required
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-md border border-gray-700 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="flex items-center space-x-3">
                <img src={worshipLogo} alt="Worship Lyrics Online" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-bold text-white">Reset Password</h2>
                  <p className="text-gray-400 text-sm">We'll send you a reset link</p>
                </div>
              </div>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="px-6 pb-6">
              {/* Back Button */}
              <button onClick={openSignIn} className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to sign in</span>
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Forgot Your Password?</h3>
                <p className="text-gray-400 text-sm">Enter your email address and we'll send you a link to reset your password</p>
              </div>
              
              {/* Email */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              
              {/* Send Reset Link Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-all">
                Send Reset Link
              </button>
              
              {/* Remember Password Link */}
              <div className="text-center">
                <button onClick={openSignIn} className="text-gray-400 hover:text-white text-sm">Remember your password? Sign in</button>
              </div>
            </div>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pb-6">
              Free 14-day trial • No credit card required
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

