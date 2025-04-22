"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  BarChart4,
  Users,
  Zap,
  BrainCircuit,
  LineChart,
  CreditCard,
  Clock,
  Shield,
} from "lucide-react";

export default function SmartCrmPage() {
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
                AI-Powered Solution
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Smart CRM with AI Business Data Analysis
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-xl">
                Transform your customer relationships and business insights with
                our intelligent CRM system powered by advanced AI analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-white text-purple-900 hover:bg-purple-100 w-full"
                  >
                    Get Started
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-purple-800 border-2"
                  onClick={scrollToPricing}
                >
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-bg-snow.jpg"
                alt="Smart CRM Dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-purple-900/20"></div>
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
              Our Smart CRM comes with everything you need to transform your
              business data into actionable insights.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white rounded-t-lg">
                  <h3 className="text-2xl font-bold mb-2">
                    Smart CRM Complete Package
                  </h3>
                  <p className="opacity-90">
                    Everything you need to manage and analyze your business data
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold text-purple-700">
                      ₪3,490
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /one-time
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>AI-powered customer insights</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Complete 360° customer view</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Predictive sales analytics</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Automated workflows and tasks</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Interactive dashboards and reports</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Full implementation and setup</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>30 days of post-launch support</span>
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
                    Get up and running in days, not months
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Shield className="h-8 w-8 text-purple-700 mb-2" />
                  <h4 className="font-semibold">Secure & Reliable</h4>
                  <p className="text-sm text-muted-foreground">
                    Your data is protected and backed up
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
              Intelligence Meets Relationship Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Smart CRM combines powerful relationship management tools with
              cutting-edge AI analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <BrainCircuit className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  AI-Powered Insights
                </h3>
                <p className="text-muted-foreground">
                  Leverage machine learning to analyze customer behavior,
                  predict trends, and identify business opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  360° Customer View
                </h3>
                <p className="text-muted-foreground">
                  Get a complete picture of your customers with integrated data
                  from all touchpoints and interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Predictive Analytics
                </h3>
                <p className="text-muted-foreground">
                  Forecast sales trends, customer churn, and potential growth
                  areas with advanced predictive models.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Automated Workflows
                </h3>
                <p className="text-muted-foreground">
                  Save time with intelligent automation of repetitive tasks and
                  customer communications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart4 className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Interactive Dashboards
                </h3>
                <p className="text-muted-foreground">
                  Visualize your business data with customizable dashboards that
                  provide actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to transform your business?
                </h3>
                <p className="mb-6">
                  Our Smart CRM is designed for businesses of all sizes, from
                  startups to enterprises.
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
              Turning Data Into Business Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Smart CRM combines your business data with AI to deliver
              actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">
                Data Collection & Integration
              </h3>
              <p className="text-muted-foreground">
                Seamlessly integrate data from all your business
                touchpoints—website, social media, email, sales, and customer
                service.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">
                AI Analysis & Pattern Recognition
              </h3>
              <p className="text-muted-foreground">
                Our advanced AI algorithms analyze your data to identify
                patterns, trends, and opportunities that human analysis might
                miss.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">
                Actionable Insights & Automation
              </h3>
              <p className="text-muted-foreground">
                Receive clear, actionable insights and automated recommendations
                to optimize your business decisions and customer relationships.
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
              Why Choose Our Smart CRM
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the advantages of integrating AI-powered analytics into
              your customer relationship management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Increased Customer Retention
                </h3>
                <p className="text-muted-foreground">
                  Identify at-risk customers before they churn and implement
                  targeted retention strategies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Higher Conversion Rates
                </h3>
                <p className="text-muted-foreground">
                  Use AI insights to optimize your sales funnel and improve
                  conversion at every stage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Data-Driven Decisions
                </h3>
                <p className="text-muted-foreground">
                  Make strategic business decisions based on real data and
                  predictive analytics, not just intuition.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Enhanced Personalization
                </h3>
                <p className="text-muted-foreground">
                  Deliver personalized experiences to your customers based on
                  their preferences and behavior.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Operational Efficiency
                </h3>
                <p className="text-muted-foreground">
                  Streamline your operations with automated workflows and
                  integrated business processes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Competitive Advantage
                </h3>
                <p className="text-muted-foreground">
                  Stay ahead of your competition with cutting-edge AI technology
                  that continuously evolves.
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
              Get answers to common questions about our Smart CRM solution.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How long does implementation take?
                </h3>
                <p className="text-muted-foreground">
                  Typically, our Smart CRM implementation takes 1-2 weeks
                  depending on the complexity of your existing systems and data.
                  Our team will provide a detailed timeline during the initial
                  consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Can I integrate with my existing tools?
                </h3>
                <p className="text-muted-foreground">
                  Yes, our Smart CRM is designed to integrate with most popular
                  business tools and platforms. We support integrations with
                  email marketing software, e-commerce platforms, accounting
                  systems, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Is training included in the price?
                </h3>
                <p className="text-muted-foreground">
                  Yes, the ₪3,490 price includes comprehensive training for your
                  team to ensure you get the most out of your Smart CRM. We also
                  provide documentation and video tutorials for future
                  reference.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  What kind of support is available after purchase?
                </h3>
                <p className="text-muted-foreground">
                  Your purchase includes 30 days of premium support to help you
                  with any questions or issues. After that, we offer various
                  support packages to ensure your CRM continues to perform
                  optimally.
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
            Ready to Transform Your Business with Smart CRM?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get started today for just ₪3,490 and experience the power of
            AI-driven business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="block w-full sm:w-auto">
              <button className="h-12 px-8 rounded-md bg-white text-purple-900 hover:bg-purple-100 w-full text-base font-medium">
                Get Started
              </button>
            </a>
            <a href="/products" className="block w-full sm:w-auto">
              <button className="h-12 px-8 rounded-md border-2 border-white text-white hover:bg-purple-800 w-full text-base font-medium">
                Explore Other Products
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
