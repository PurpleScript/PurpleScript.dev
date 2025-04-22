import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  LineChart,
  PieChart,
  BrainCircuit,
  Users,
  MessageSquare,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            Our Services
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technology Solutions for Business Growth
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our range of specialized technology services designed to
            help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Smart CRM with AI Analytics
              </h3>
              <p className="text-muted-foreground mb-4">
                Intelligent customer relationship management with AI-powered
                business data analysis.
              </p>
              <Link href="/services/smart-crm">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Placeholder for future services */}
          <Card className="border-dashed border-2 border-gray-200 bg-gray-50">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full text-gray-400">
              <p className="text-center">More services coming soon</p>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-gray-200 bg-gray-50">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full text-gray-400">
              <p className="text-center">More services coming soon</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team specializes in crafting tailored technology solutions to
            address your unique business challenges.
          </p>
          <Link href="/contact">
            <Button className="bg-purple-700 hover:bg-purple-800">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
