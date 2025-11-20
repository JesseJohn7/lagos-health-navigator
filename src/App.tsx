import { Routes, Route, Link } from 'react-router-dom'
import {FaSun, FaMoon, FaPhone, FaMapMarkerAlt, FaShieldAlt, FaHeart,FaStethoscope, FaClock, FaUsers, FaSearch, FaStar, FaCheckCircle,FaBookOpen, FaBrain, FaApple,FaMapPin} from "react-icons/fa";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import HealthTips from './pages/HealthTips'
import YoungAdultHealth from './pages/YoungAdultHealth'
import MentalHealthSupport from './pages/MentalHealthSupport'
import PreventiveCare from './pages/PreventiveCare'
import './App.css'
import { useState } from 'react'
import { useDarkMode } from './contexts/DarkModeContext';

function HomePage() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const [searchQuery, setSearchQuery] = useState('')

  const emergencyNumbers = [
    { number: '122', label: 'Primary Emergency', description: '24/7 Federal Ministry of Health' },
    { number: '199', label: 'Alternative Emergency', description: 'Universal emergency access' },
    { number: '112', label: 'Additional Emergency', description: 'Emergency contact' }
  ]

  const quickActions = [
    { icon: FaMapMarkerAlt, label: 'Find Hospitals', color: 'bg-primary' },
    { icon: FaShieldAlt, label: 'Check Insurance', color: 'bg-secondary' },
    { icon: FaPhone, label: 'Emergency Guide', color: 'bg-accent' }
  ]

  const facilities = [
    {
      name: 'Lagos State University Teaching Hospital (LASUTH)',
      type: 'Tertiary Hospital',
      address: 'Ikeja, Lagos State',
      phone: '+234 1 234 5678',
      rating: 4.2,
      insurance: ['LASHMA', 'Private Insurance'],
      hours: '24/7'
    },
    {
      name: 'Lagos State Accident & Emergency Centre',
      type: 'Emergency Center',
      address: 'Old Toll-Gate, Lagos-Ibadan Expressway',
      phone: '+234 1 234 5679',
      rating: 4.0,
      insurance: ['LASHMA', 'Emergency Services'],
      hours: '24/7'
    },
    {
      name: 'Emergency Response Services Ltd',
      type: 'Emergency Services',
      address: '6 Adeshina Street, Ikeja',
      phone: '+234 814 682 1431',
      rating: 4.5,
      insurance: ['Private', 'LASHMA'],
      hours: '24/7'
    }
  ]

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const query = `hospitals health centers clinics ${searchQuery.trim()} Lagos Nigeria`
      const encodedQuery = encodeURIComponent(query)
      window.open(`https://www.google.com/maps/search/${encodedQuery}`, '_blank')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-primary-50 to-secondary-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-primary-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-bold text-green-500 dark:text-white">Lagos Health Navigator</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Your Guide to Better Healthcare 🏥✨</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleDarkMode}
            className="p-2"
          >
            {darkMode ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-10 dark:opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6 space-x-4">
            <FaStethoscope className="h-12 w-12 text-secondary animate-bounce" />
            <FaHeart className="h-12 w-12 text-primary animate-pulse" />
            
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Your Trusted Guide to <br /> Quality Healthcare <span> in Lagos</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Get the right care, at the right time, for the right cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {quickActions.map((action, index) => (
              <Button 
                key={index} 
                className={`${action.color} hover:opacity-90 text-white px-9 py-6`}
                onClick={() => {
                  const sectionMap: { [key: string]: string } = {
                    'Find Hospitals': 'facilities-section' ,
                    'Check Insurance': 'insurance-section', 
                    'Emergency Guide': 'emergency-section'
                  };
                  const sectionId = sectionMap[action.label];
                  if (sectionId) {
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <action.icon className="h-5 w-5 mr-2" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section id="emergency-section" className="py-16 px-4 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
              <FaPhone className="h-8 w-8 text-red-600 dark:text-red-400 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">🚨 EMERGENCY NUMBERS</h3>
            <p className="text-slate-600 dark:text-slate-300">Quick access to emergency medical services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {emergencyNumbers.map((emergency, index) => (
              <Card key={index} className="border-2 border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-colors cursor-pointer">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-3xl font-bold text-red-600 dark:text-red-400">{emergency.number}</CardTitle>
                  <CardDescription className="font-semibold text-slate-900 dark:text-white">{emergency.label}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">{emergency.description}</p>
                  <Button 
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white w-full"
                    onClick={() => window.open(`tel:${emergency.number}`, '_self')}
                  >
                    <FaPhone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Facility Finder */}
      <section id="facilities-section" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
              <FaMapMarkerAlt className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Find Healthcare Facilities</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">Locate hospitals, clinics, and health centers near you</p>
            <div className="max-w-md mx-auto mb-8">
              <div className="relative flex">
                <div className="relative flex-1">
                  <FaSearch className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input 
                    placeholder="Search by location, facility name, or service..." 
                    className="pl-10 py-4 pr-4 dark:text-slate-100 bg-white dark:bg-slate-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="ml-2 bg-green-500 hover:bg-primary-600 px-6"
                  disabled={!searchQuery.trim()}
                >
                  <FaMapPin className="h-4 w-4 mr-2" />
                  Search Maps
                </Button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{facility.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{facility.type}</Badge>
                    </div>
                    <div className="flex items-center">
                      <FaStar className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{facility.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <FaMapPin className="h-4 w-4 mr-2" />
                      {facility.address}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <FaPhone className="h-4 w-4 mr-2" />
                      {facility.phone}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <FaClock className="h-4 w-4 mr-2" />
                      {facility.hours}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {facility.insurance.map((ins, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{ins}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-green-500 hover:bg-primary-600"
                    onClick={() => {
                      const encodedAddress = encodeURIComponent(facility.address);
                      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
                    }}
                  >
                    <FaMapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Navigator */}
      <section id="insurance-section" className="py-16 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-full mb-4">
              <FaShieldAlt className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">LASHMA Insurance Navigator</h3>
            <p className="text-slate-600 dark:text-slate-300">Your guide to Lagos State Health Management Agency benefits</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                 {/*  <FaCheckCircle className="h-6 w-6 text-success mr-2" /> */}
                  Registration Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-success mr-2" />
                    <span>Cancer treatment coverage up to ₦5 million</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-success mr-2" />
                    <span>Access to 326 Primary Health Centers</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-success mr-2" />
                    <span>Digital health records via Lagos SHIP</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="h-4 w-4 text-success mr-2" />
                    <span>Reduced wait times (15-20 minutes)</span>
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-green-500 hover:bg-secondary-600"
                  onClick={() => window.open('https://www.lashmaregulations.com.ng/', '_blank')}
                >
                  <FaShieldAlt className="h-4 w-4 mr-2" />
                  Register for LASHMA
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaUsers className="h-6 w-6 text-accent mr-2" />
                  How to Register
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Visit Registration Portal</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Access lashmaregulations.com.ng</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Get CIN Number</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Company Identification Number system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Complete Registration</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Submit required documents</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <p className="text-sm font-medium mb-2">Contact Information:</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">17/19 Kafi Street, Alausa Ikeja Lagos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Resources Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full mb-4">
              <FaBookOpen className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Health Resources & Guides</h3>
            <p className="text-slate-600 dark:text-slate-300">Comprehensive health information tailored for Lagos residents</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/health-tips" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-3 mx-auto">
                    <FaApple className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Health Tips</CardTitle>
                  <CardDescription>Daily wellness advice for Lagos living</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Nutrition &amp; Exercise</li>
                    <li>• Preventive Care</li>
                    <li>• Mental Wellness</li>
                    <li>• Emergency Preparedness</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
            <Link to="/young-adult-health" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 mx-auto">
                    <FaUsers className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Young Adult Health</CardTitle>
                  <CardDescription>Health guidance for ages 18-35</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Mental Health &amp; Stress</li>
                    <li>• Reproductive Health</li>
                    <li>• Lifestyle &amp; Nutrition</li>
                    <li>• Digital Wellness</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
            <Link to="/mental-health-support" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3 mx-auto">
                    <FaBrain className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Mental Health Support</CardTitle>
                  <CardDescription>Access trusted health tips, guides, and resources for Lagos residents.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Professional Counseling</li>
                    <li>• Crisis Support 24/7</li>
                    <li>• Community Support</li>
                    <li>• Self-Care Resources</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
            <Link to="/preventive-care" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-3 mx-auto">
                    <FaShieldAlt className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Preventive Care</CardTitle>
                  <CardDescription>Stay healthy with regular screenings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Health Screenings</li>
                    <li>• Vaccinations</li>
                    <li>• Early Detection</li>
                    <li>• LASHMA Benefits</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 dark:bg-slate-950 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
              
                <div>
                  <h4 className="font-bold ">Lagos Health Navigator</h4>
                  <p className="text-sm text-slate-400">Better Healthcare Access</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Your comprehensive guide to navigating Lagos healthcare system with confidence.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Emergency Services</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Emergency: 122</li>
                <li>Alternative: 199</li>
                <li>Additional: 112</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://www.lashmaregulations.com.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LASHMA Registration</a></li>
                <li><a href="https://lagosministryofhealth.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Lagos Ministry of Health</a></li>
                <li>
                  <button 
                    className="hover:text-primary cursor-pointer bg-transparent border-none text-sm text-slate-400 p-0"
                    onClick={() => document.getElementById('facilities-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Find Hospitals
                  </button>
                </li>
                <li>
                  <button 
                    className="hover:text-primary cursor-pointer bg-transparent border-none text-sm text-slate-400 p-0"
                    onClick={() => document.getElementById('insurance-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Insurance Guide
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/health-tips" className="hover:text-primary transition-colors">
                    Health Tips
                  </Link>
                </li>
                <li>
                  <Link to="/young-adult-health" className="hover:text-primary transition-colors">
                    Young Adult Health
                  </Link>
                </li>
                <li>
                  <Link to="/mental-health-support" className="hover:text-primary transition-colors">
                    Mental Health Support
                  </Link>
                </li>
                <li>
                  <Link to="/preventive-care" className="hover:text-primary transition-colors">
                    Preventive Care
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect with Raimon</h5>
              <div className="grid grid-cols-4 gap-3">
                <a href="https://x.com/raimonvibe/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg transition-colors duration-200">
                  <i className="fa-brands fa-x-twitter text-white"></i>
                  <span className="sr-only">X</span>
                </a>
                <a href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-lg transition-colors duration-200">
                  <i className="fab fa-youtube text-white"></i>
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="https://www.tiktok.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-black rounded-lg transition-colors duration-200">
                  <i className="fab fa-tiktok text-white"></i>
                  <span className="sr-only">TikTok</span>
                </a>
                <a href="https://www.instagram.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-pink-500 rounded-lg transition-colors duration-200">
                  <i className="fab fa-instagram text-white"></i>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://medium.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg transition-colors duration-200">
                  <i className="fab fa-medium text-white"></i>
                  <span className="sr-only">Medium</span>
                </a>
                <a href="https://github.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-gray-700 rounded-lg transition-colors duration-200">
                  <i className="fab fa-github text-white"></i>
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/raimonvibe/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors duration-200">
                  <i className="fab fa-linkedin-in text-white"></i>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61563450007849" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                  <i className="fab fa-facebook-f text-white"></i>
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 Lagos Health Navigator. Built to improve healthcare access in Lagos State.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/health-tips" element={<HealthTips />} />
      <Route path="/young-adult-health" element={<YoungAdultHealth />} />
      <Route path="/mental-health-support" element={<MentalHealthSupport />} />
      <Route path="/preventive-care" element={<PreventiveCare />} />
    </Routes>
  )
}

export default App
