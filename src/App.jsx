import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import worshipLogo from './assets/worship_lyrics_logo_heart_cross.png'
import bgvideo from './assets/hero-worship-lyrics-online.mp4'
import appvideo from './assets/interface-demo-compressed.mp4'
import founderPhoto from './assets/tirtha-ray-worship-lyrics-online-founder.jpg'
import { signIn, signUp, resetPassword, validateInvitation } from './lib/auth-handlers.js'
import { supabase } from './lib/supabase-config.js'

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

  // Form state
  const [signInData, setSignInData] = useState({ email: '', password: '' })
  const [signUpData, setSignUpData] = useState({ 
    churchName: '', 
    fullName: '', 
    email: '', 
    password: '', 
    country: '' 
  })
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')
  const [invitationToken, setInvitationToken] = useState('')
  const [loading, setLoading] = useState(false)

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

  // Form Handlers
  const handleSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const result = await signIn(signInData.email, signInData.password)
      
      if (result.success) {
        alert('Successfully signed in!')
        closeAllModals()
        // Redirect to app or update UI
      } else {
        alert(`Sign in failed: ${result.error}`)
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const result = await signUp(
        signUpData.email, 
        signUpData.password, 
        signUpData.fullName,
        signUpData.churchName,
        signUpData.country
      )
      
      if (result.success) {
        alert('Account created! Please check your email for confirmation.')
        closeAllModals()
      } else {
        alert(`Registration failed: ${result.error}`)
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const result = await resetPassword(forgotPasswordEmail)
      
      if (result.success) {
        alert('Password reset link sent! Check your email.')
        closeAllModals()
      } else {
        alert(`Reset failed: ${result.error}`)
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleValidateInvitation = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const result = await validateInvitation(invitationToken)
      
      if (result.success) {
        alert('Invitation validated successfully!')
        closeAllModals()
      } else {
        alert(`Validation failed: ${result.error}`)
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

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
    // Reset form data
    setSignInData({ email: '', password: '' })
    setSignUpData({ churchName: '', fullName: '', email: '', password: '', country: '' })
    setForgotPasswordEmail('')
    setInvitationToken('')
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
                onClick={openSignIn}
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
                  alt="Tirtharaj Ghimire - Founder" 
                  className="w-full aspect-square object-cover rounded-2xl mb-6 shadow-xl"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Tirtharaj Ghimire</h3>
                <p className="text-blue-400 font-medium mb-6">Founder & Developer</p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://tirtharay.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                  <a 
                    href="mailto:contato@tirtharay.com.br"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a 
                    href="https://x.com/tirtharay_dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tirtharay/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/tirtharay/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/papaitirtha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  "As a worship leader and tech enthusiast, I've experienced firsthand the frustration of 
                  outdated presentation software that crashes during service, complicated setups that take 
                  hours to configure, and expensive solutions that small churches simply can't afford."
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  "I remember countless Sunday mornings spent troubleshooting technical issues instead of 
                  focusing on worship. Our team would arrive hours early just to make sure everything worked, 
                  and even then, we'd hold our breath hoping nothing would go wrong during the service."
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  "That's when I decided to build something different. A platform designed by worship leaders, 
                  for worship leaders. Something that just works, without the complexity, without breaking the 
                  budget, and without the stress."
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-xl text-blue-100 font-medium italic leading-relaxed">
                    "Every church deserves technology that enhances worship, not hinders it. 
                    That's the mission behind Worship Lyrics Online."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">Built with Purpose</h4>
              <p className="text-gray-300 leading-relaxed">Every feature is designed with real worship teams in mind, solving actual problems we've all faced.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">Community Driven</h4>
              <p className="text-gray-300 leading-relaxed">Built by the worship community, for the worship community. Your feedback shapes every update.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-white">Simply Powerful</h4>
              <p className="text-gray-300 leading-relaxed">Powerful features that are actually easy to use. No technical degree required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Modern Worship
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features designed specifically for worship teams, with the simplicity your volunteers will love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Even More
              </span>{' '}
              Powerful Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
                Transparent
              </span>{' '}
              Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your church size and needs. All plans include a 30-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                  onClick={() => handlePlanSelect(plan)}
                >
                  Start Free Trial
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400">
              All plans include 30-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Worship Leaders
              </span>{' '}
              Everywhere
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what worship leaders are saying about their experience with our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-400">{testimonial.church}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </div>
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team is here to help you succeed. Reach out anytime for support, questions, or feedback.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Live Chat Support</h3>
              <p className="text-gray-300 mb-4">Get instant help from our support team</p>
              <Button className="bg-green-600 hover:bg-green-700">Start Chat</Button>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Phone Support</h3>
              <p className="text-gray-300 mb-4">1-800-WORSHIP<br />Mon-Fri 9AM-6PM EST</p>
              <Button className="bg-blue-600 hover:bg-blue-700">Call Now</Button>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Help Center</h3>
              <p className="text-gray-300 mb-4">Comprehensive guides and documentation</p>
              <Button className="bg-purple-600 hover:bg-purple-700">Browse Docs</Button>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Quick Contact</h3>
              <form className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Church Name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm"
                />
                <textarea 
                  placeholder="Message"
                  rows="3"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm"
                ></textarea>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-sm py-2">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Worship Experience?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of churches already using Worship Lyrics Online to create amazing worship experiences.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
            onClick={handleStartTrial}
          >
            Start Your Free Trial Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-gray-400 mt-4">30-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={worshipLogo} 
                  alt="Worship Lyrics Online" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold">Worship Lyrics Online</span>
              </div>
              <p className="text-gray-400">
                Modern worship management platform designed for churches of all sizes.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Worship Lyrics Online. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700 relative">
            {/* Close Button */}
            <button 
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Header */}
            <div className="text-center pt-6 pb-4 px-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
              <p className="text-gray-400">Sign in to your worship team account</p>
            </div>
            
            {/* Content */}
            <form onSubmit={handleSignIn} className="px-6 pb-6">
              {/* Google Sign In */}
              <button 
                type="button"
                className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-lg mb-4 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
              
              <div className="text-center text-gray-500 mb-4">or with email</div>
              
              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  value={signInData.email}
                  onChange={(e) => setSignInData({...signInData, email: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              {/* Password */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  value={signInData.password}
                  onChange={(e) => setSignInData({...signInData, password: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              {/* Sign In Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-all disabled:opacity-50"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
              
              {/* Forgot Password */}
              <div className="text-center mb-4">
                <button 
                  type="button"
                  onClick={openForgotPassword}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  Forgot your password?
                </button>
              </div>
              
              {/* Links */}
              <div className="text-center space-y-3">
                <p className="text-gray-400 text-sm">Don't have an account?</p>
                <button 
                  type="button"
                  onClick={openRegister}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Register a new church
                </button>
                <div className="text-gray-500 text-sm">or</div>
                <button 
                  type="button"
                  onClick={openInvitation}
                  className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  Join with invitation link
                </button>
              </div>
            </form>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pb-4">
              Free 14-day trial • No credit card required
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-700 relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Header */}
            <div className="text-center pt-6 pb-4 px-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
              <p className="text-gray-400">Set up your church workspace</p>
            </div>
            
            {/* Content */}
            <form onSubmit={handleSignUp} className="px-6 pb-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Church Info</h3>
                <p className="text-gray-400 text-sm">Tell us about your church to get started</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Church Name */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Church Name</label>
                    <input 
                      type="text" 
                      value={signUpData.churchName}
                      onChange={(e) => setSignUpData({...signUpData, churchName: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your church name"
                      required
                    />
                  </div>
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Your Full Name</label>
                    <input 
                      type="text" 
                      value={signUpData.fullName}
                      onChange={(e) => setSignUpData({...signUpData, fullName: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-4">
                  {/* Password */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                    <input 
                      type="password" 
                      value={signUpData.password}
                      onChange={(e) => setSignUpData({...signUpData, password: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Create a password"
                      required
                    />
                  </div>
                  
                  {/* Country */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Country</label>
                    <select 
                      value={signUpData.country}
                      onChange={(e) => setSignUpData({...signUpData, country: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="BR">Brazil</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IN">India</option>
                      <option value="JP">Japan</option>
                      <option value="MX">Mexico</option>
                    </select>
                  </div>
                  
                  {/* Benefits */}
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-3">What you'll get:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">14-day free trial</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">Team collaboration tools</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">Cloud-based access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Create Account Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg mb-4 mt-6 transition-all disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
              
              {/* Back to Sign In */}
              <div className="text-center">
                <button 
                  type="button"
                  onClick={openSignIn}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  Back to Sign In
                </button>
              </div>
              
              {/* Join with Invitation Link */}
              <div className="text-center mt-4">
                <div className="text-gray-500 text-sm mb-2">or</div>
                <button 
                  type="button"
                  onClick={openInvitation}
                  className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  Join with invitation link
                </button>
              </div>
            </form>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pb-4">
              Free 14-day trial • No credit card required
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700 relative">
            {/* Close Button */}
            <button 
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Header */}
            <div className="text-center pt-6 pb-4 px-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
              <p className="text-gray-400">Enter your email to receive a reset link</p>
            </div>
            
            {/* Back Button */}
            <div className="px-6 mb-4">
              <button 
                onClick={openSignIn}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to login
              </button>
            </div>
            
            {/* Content */}
            <form onSubmit={handleForgotPassword} className="px-6 pb-6">
              {/* Email */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              {/* Send Reset Link Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-all disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pb-4">
              Check your email for the reset link
            </div>
          </div>
        </div>
      )}

      {/* Join with Invitation Link Modal */}
      {showInvitation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700 relative">
            {/* Close Button */}
            <button 
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Header */}
            <div className="text-center pt-6 pb-4 px-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Join your church</h2>
              <p className="text-gray-400">Complete your invitation to get started</p>
            </div>
            
            {/* Back Button */}
            <div className="px-6 mb-4">
              <button 
                onClick={openSignIn}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to login
              </button>
            </div>
            
            {/* Content */}
            <form onSubmit={handleValidateInvitation} className="px-6 pb-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Join Your Church</h3>
                <p className="text-gray-400 text-sm">Enter your invitation token to get started</p>
              </div>
              
              {/* Invitation Token */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">Invitation Token</label>
                <input 
                  type="text" 
                  value={invitationToken}
                  onChange={(e) => setInvitationToken(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Enter your invitation token"
                  required
                />
              </div>
              
              {/* Validate Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition-all disabled:opacity-50"
              >
                {loading ? 'Validating...' : 'Validate Invitation'}
              </button>
            </form>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pb-4">
              Free 14-day trial • No credit card required
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
