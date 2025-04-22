import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  LayoutDashboard,
  Code,
  Zap,
  MessageCircle,
  ShoppingBag,
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
            We help small and medium businesses grow and operate more
            efficiently through tailored technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <LayoutDashboard className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                High-Converting Landing Pages
              </h3>
              <p className="text-muted-foreground mb-4">
                Beautifully designed landing pages that convert visitors into
                customers with clear CTAs and optimized user flows.
              </p>
              <Link href="/#contact">
                <Button variant="outline" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Custom CRMs & Internal Tools
              </h3>
              <p className="text-muted-foreground mb-4">
                Tailor-made solutions that streamline your operations and help
                your team work more efficiently.
              </p>
              <Link href="/#contact">
                <Button variant="outline" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Business Automations
              </h3>
              <p className="text-muted-foreground mb-4">
                Automate repetitive tasks like invoicing and data flows to save
                time and reduce errors.
              </p>
              <Link href="/#contact">
                <Button variant="outline" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                WhatsApp Business Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                Engage with your customers where they are with custom WhatsApp
                Business integrations.
              </p>
              <Link href="/#contact">
                <Button variant="outline" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Shopify Integrations
              </h3>
              <p className="text-muted-foreground mb-4">
                Enhance your e-commerce store with custom Shopify integrations
                that boost sales and improve user experience.
              </p>
              <Link href="/#contact">
                <Button variant="outline" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Looking for a ready-to-use solution?
              </h3>
              <p className="mb-6">
                Check out our Smart CRM with AI Analytics in our products
                section.
              </p>
              <Link href="/products">
                <Button variant="secondary" className="w-full">
                  View Our Products
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our streamlined process ensures we deliver high-quality solutions
            that meet your specific needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex flex-col items-center">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold">Discovery</h3>
              <p className="text-sm text-muted-foreground text-center">
                Understanding your business needs
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold">Strategy</h3>
              <p className="text-sm text-muted-foreground text-center">
                Developing a tailored roadmap
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold">Development</h3>
              <p className="text-sm text-muted-foreground text-center">
                Building your solution
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full w-12 h-12 bg-purple-700 text-white flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-semibold">Launch & Support</h3>
              <p className="text-sm text-muted-foreground text-center">
                Ensuring long-term success
              </p>
            </div>
          </div>
          <Link href="/#contact">
            <Button className="bg-purple-700 hover:bg-purple-800">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
