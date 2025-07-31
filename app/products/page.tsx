import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, CreditCard, MessageCircle } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Our Products
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Ready-to-Use Technology Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our range of ready-made technology products designed to
            help your business grow immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Smart CRM with AI Analytics
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Intelligent customer relationship management with AI-powered
                business data analysis.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-purple-700">
                  ₪3,490
                </span>
                <Badge variant="outline" className="text-xs">
                  Most Popular
                </Badge>
              </div>
              <Link href="/products/smart-crm">
                <Button
                  variant="default"
                  className="w-full bg-purple-700 hover:bg-purple-800"
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI Booking System
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Custom booking system with smart AI agents for medical clinics and businesses. Seamlessly integrates with any website.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-purple-700">
                  ₪4,890
                </span>
                <Badge variant="outline" className="text-xs">
                  AI-Powered
                </Badge>
              </div>
              <Link href="/products/ai-booking-system">
                <Button
                  variant="default"
                  className="w-full bg-purple-700 hover:bg-purple-800"
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                10-Hour Consulting Package
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                10 hours of expert consulting for technology strategy, system architecture, and business optimization. Get personalized guidance from our experienced team.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-purple-700">
                  ₪2,990
                </span>
                <Badge variant="outline" className="text-xs">
                  Expert Guidance
                </Badge>
              </div>
              <Link href="/products/consulting-package">
                <Button
                  variant="default"
                  className="w-full bg-purple-700 hover:bg-purple-800"
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-dashed border-2 border-gray-200 bg-gray-50 flex">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full w-full text-gray-400">
              <p className="text-center">More products coming soon</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need a Custom Solution Instead?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If our products don't exactly match your needs, our team can craft a
            tailored technology solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-purple-700 hover:bg-purple-800">
                Contact Us
              </Button>
            </Link>
            <Link href="/#services">
              <Button variant="outline">View Our Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
