
"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Calendar,
  Bot,
  Zap,
  CreditCard,
  Clock,
  Shield,
  MessageSquare,
  Users,
  Smartphone,
} from "lucide-react";

export default function AiBookingSystemPage() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-700 text-white hover:bg-purple-700 border-none">
                AI-Powered Booking
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                AI Booking System with Smart Agents
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-xl">
                Transform your appointment booking with our intelligent system powered by AI agents. Perfect for medical clinics, consultancies, and service businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="block w-full sm:w-auto">
                  <button className="h-10 py-2 px-4 min-w-36 rounded-md bg-white text-purple-900 hover:bg-purple-100 w-full text-base font-medium">
                    Get Started
                  </button>
                </a>
                <button
                  className="h-10 py-2 px-4 min-w-36 rounded-md border-2 border-white text-white hover:bg-purple-800 text-base font-medium"
                  onClick={scrollToPricing}
                >
                  View Pricing
                </button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl bg-purple-800 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="h-24 w-24 mx-auto mb-4 opacity-80" />
                <p className="text-lg opacity-90">AI Booking Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              Simple Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI Booking System comes with everything you need to streamline your appointment scheduling and enhance customer experience.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white rounded-t-lg">
                  <h3 className="text-2xl font-bold mb-2">
                    AI Booking System Complete Package
                  </h3>
                  <p className="opacity-90">
                    Custom booking system with smart AI agents for any business
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold text-purple-700">
                      ₪4,890
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /one-time
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Custom booking interface design</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Smart AI booking agents</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Automated appointment confirmations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Calendar integration (Google, Outlook)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>SMS and email notifications</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Website integration and setup</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>30 days of post-launch support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Mobile-responsive design</span>
                    </div>
                  </div>

                  <Link href="/#contact" className="block w-full">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-purple-100">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <CreditCard className="h-8 w-8 text-purple-700 mb-2" />
                  <h4 className="font-semibold">Flexible Payment Options</h4>
                  <p className="text-sm text-muted-foreground">
                    Multiple payment methods accepted
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Clock className="h-8 w-8 text-purple-700 mb-2" />
                  <h4 className="font-semibold">Quick Setup</h4>
                  <p className="text-sm text-muted-foreground">
                    Get up and running in 1-2 weeks
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Shield className="h-8 w-8 text-purple-700 mb-2" />
                  <h4 className="font-semibold">Secure & Reliable</h4>
                  <p className="text-sm text-muted-foreground">
                    GDPR compliant and data protected
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-purple-50" id="features">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              Key Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Smart Booking Meets AI Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI Booking System combines intelligent automation with seamless user experience to revolutionize appointment scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Smart AI Agents
                </h3>
                <p className="text-muted-foreground">
                  Intelligent chatbots that handle booking inquiries, answer questions, and guide customers through the appointment process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Real-time Scheduling
                </h3>
                <p className="text-muted-foreground">
                  Live calendar integration with automatic conflict detection and optimal time slot suggestions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Automated Notifications
                </h3>
                <p className="text-muted-foreground">
                  Smart reminders via SMS, email, and push notifications to reduce no-shows and keep everyone informed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Mobile-First Design
                </h3>
                <p className="text-muted-foreground">
                  Fully responsive design optimized for mobile devices, ensuring smooth booking experience on any screen size.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Seamless Integration
                </h3>
                <p className="text-muted-foreground">
                  Easy integration with existing websites, CRM systems, and popular calendar applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Perfect for Medical Clinics
                </h3>
                <p className="mb-6">
                  Specially designed for healthcare providers with HIPAA-compliant features and medical-specific workflows.
                </p>
                <Link href="/#contact">
                  <Button variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple Booking, Powered by AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI Booking System streamlines the entire appointment process from initial inquiry to confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">
                Customer Initiates Booking
              </h3>
              <p className="text-muted-foreground">
                Customers visit your website and interact with the AI booking agent through a chat interface or booking form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">
                AI Agent Processes Request
              </h3>
              <p className="text-muted-foreground">
                The smart AI agent understands the request, checks availability in real-time, and suggests optimal appointment slots.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">
                Automatic Confirmation & Follow-up
              </h3>
              <p className="text-muted-foreground">
                Once booked, the system automatically sends confirmations, updates calendars, and schedules reminders for both parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-purple-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Choose Our AI Booking System
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the advantages of implementing AI-powered booking automation for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Reduce No-Shows by 60%
                </h3>
                <p className="text-muted-foreground">
                  Smart reminder system and easy rescheduling options significantly reduce missed appointments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  24/7 Booking Availability
                </h3>
                <p className="text-muted-foreground">
                  Customers can book appointments anytime, even outside business hours, increasing conversion rates.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Save 10+ Hours Per Week
                </h3>
                <p className="text-muted-foreground">
                  Eliminate manual scheduling tasks and phone calls, freeing up staff time for more important work.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Enhanced Customer Experience
                </h3>
                <p className="text-muted-foreground">
                  Instant responses and easy booking process improve customer satisfaction and loyalty.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Intelligent Scheduling
                </h3>
                <p className="text-muted-foreground">
                  AI optimizes appointment scheduling to maximize efficiency and minimize gaps in your calendar.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Scalable Solution
                </h3>
                <p className="text-muted-foreground">
                  Grows with your business - handles increasing booking volume without additional staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our AI Booking System.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Can the system integrate with my existing website?
                </h3>
                <p className="text-muted-foreground">
                  Yes, our AI Booking System is designed to integrate seamlessly with any website platform including WordPress, Shopify, Wix, and custom-built sites.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How long does implementation take?
                </h3>
                <p className="text-muted-foreground">
                  Typically, implementation takes 1-2 weeks depending on customization requirements and existing system integration complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Is the system suitable for medical practices?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! Our system is specifically designed for medical clinics with HIPAA-compliant features, patient data protection, and healthcare-specific workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  What kind of support is included?
                </h3>
                <p className="text-muted-foreground">
                  Your purchase includes 30 days of premium support, staff training, and comprehensive documentation. Extended support packages are available after the initial period.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Revolutionize Your Booking Process?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get started today for just ₪4,890 and transform how your customers book appointments with intelligent AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="block w-full sm:w-auto">
              <button className="h-10 py-2 px-4 min-w-36 rounded-md bg-white text-purple-900 hover:bg-purple-100 w-full text-base font-medium">
                Get Started
              </button>
            </a>
            <a href="/products" className="block w-full sm:w-auto">
              <button className="h-10 py-2 px-4 min-w-36 rounded-md border-2 border-white text-white hover:bg-purple-800 w-full text-base font-medium">
                Explore Other Products
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
