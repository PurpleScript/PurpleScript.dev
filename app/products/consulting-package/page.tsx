
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Clock, 
  Users, 
  Lightbulb, 
  Target, 
  CheckCircle,
  CreditCard,
  Phone
} from "lucide-react";

export default function ConsultingPackagePage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Consulting Package
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            10-Hour Expert Technology Consulting
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get 10 hours of personalized guidance from our experienced team to optimize your technology strategy, 
            system architecture, and business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-6">
              <MessageCircle className="h-8 w-8 text-purple-700" />
            </div>
            <h2 className="text-2xl font-bold mb-4">What's Included</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">10 Dedicated Consulting Hours</h4>
                  <p className="text-muted-foreground">Direct access to our technology experts for strategic guidance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Technology Assessment</h4>
                  <p className="text-muted-foreground">Comprehensive review of your current systems and processes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Strategic Roadmap</h4>
                  <p className="text-muted-foreground">Customized action plan to achieve your business goals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Ongoing Support</h4>
                  <p className="text-muted-foreground">Follow-up sessions and implementation guidance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-8">
            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">10-Hour Consulting Package</h3>
                  <div className="text-3xl font-bold text-purple-700 mb-2">₪2,990</div>
                  <Badge variant="outline" className="mb-4">10 Hours Expert Guidance</Badge>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-700" />
                    <span className="text-sm">Flexible scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-purple-700" />
                    <span className="text-sm">Expert consultants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-700" />
                    <span className="text-sm">Customized solutions</span>
                  </div>
                </div>

                <div className="space-y-3">
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
                  <Phone className="h-8 w-8 text-purple-700 mb-2" />
                  <h4 className="font-semibold">Remote & On-site</h4>
                  <p className="text-sm text-muted-foreground">
                    Available via video call or in-person
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Lightbulb className="h-8 w-8 text-purple-700 mb-2" />
                  <h4 className="font-semibold">Actionable Insights</h4>
                  <p className="text-sm text-muted-foreground">
                    Practical recommendations you can implement
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Consulting Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Technology Strategy
                </h3>
                <p className="text-muted-foreground">
                  Develop comprehensive technology roadmaps aligned with your business objectives and growth plans.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  System Architecture
                </h3>
                <p className="text-muted-foreground">
                  Design scalable, secure, and efficient system architectures for your applications and infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Process Optimization
                </h3>
                <p className="text-muted-foreground">
                  Identify inefficiencies and implement solutions to streamline your business processes and workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a consultation today and discover how our expertise can help you 
            optimize your technology strategy and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-purple-700 hover:bg-purple-800">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline">View Other Products</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
