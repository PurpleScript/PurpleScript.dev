import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Code,
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/hero-bg-snow.jpg"
          alt="Snow covered mountains"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-purple-900/30 z-10"></div>
        <div className="container relative z-20 text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            PurpleByte
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8">
            Make your software vision become a reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-100"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-purple-700 hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Custom Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We help small and medium businesses grow and operate more
              efficiently through tailored technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <LayoutDashboard className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  High-Converting Landing Pages
                </h3>
                <p className="text-muted-foreground">
                  Beautifully designed landing pages that convert visitors into
                  customers with clear CTAs and optimized user flows.
                </p>
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
                <p className="text-muted-foreground">
                  Tailor-made solutions that streamline your operations and help
                  your team work more efficiently.
                </p>
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
                <p className="text-muted-foreground">
                  Automate repetitive tasks like invoicing and data flows to
                  save time and reduce errors.
                </p>
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
                <p className="text-muted-foreground">
                  Engage with your customers where they are with custom WhatsApp
                  Business integrations.
                </p>
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
                <p className="text-muted-foreground">
                  Enhance your e-commerce store with custom Shopify integrations
                  that boost sales and improve user experience.
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg text-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Ready to transform your business?
                </h3>
                <p className="mb-4">
                  Let's discuss how our custom technology solutions can help
                  your business grow.
                </p>
              </div>
              <Button className="bg-white text-purple-700 hover:bg-purple-100 w-full">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-purple-50" id="process">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures we deliver high-quality solutions
              that meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                1
              </div>
              <Card className="mt-12 border-purple-100 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business, goals, and
                    challenges to identify the right solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                2
              </div>
              <Card className="mt-12 border-purple-100 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                  <p className="text-muted-foreground">
                    We develop a tailored strategy and roadmap to achieve your
                    business objectives.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                3
              </div>
              <Card className="mt-12 border-purple-100 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Development</h3>
                  <p className="text-muted-foreground">
                    Our team builds your solution with regular updates and
                    feedback sessions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                4
              </div>
              <Card className="mt-12 border-purple-100 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Launch & Support
                  </h3>
                  <p className="text-muted-foreground">
                    We deploy your solution and provide ongoing support to
                    ensure long-term success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with PurpleByte.
            </p>
          </div>

          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tab1">E-commerce</TabsTrigger>
              <TabsTrigger value="tab2">Service Business</TabsTrigger>
              <TabsTrigger value="tab3">Manufacturing</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 font-bold">AC</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Alex Chen</h4>
                        <p className="text-sm text-muted-foreground">
                          Founder, StyleHub
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "PurpleByte transformed our online store with custom
                      Shopify integrations that increased our conversion rate by
                      35%. Their team was responsive, professional, and
                      delivered exactly what we needed."
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 font-bold">SP</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Sarah Patel</h4>
                        <p className="text-sm text-muted-foreground">
                          CEO, EcoGoods
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "The landing page PurpleByte created for our product
                      launch was stunning and effective. We saw a 40% increase
                      in sign-ups compared to our previous campaigns. I highly
                      recommend their services!"
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 font-bold">MJ</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Michael Johnson</h4>
                        <p className="text-sm text-muted-foreground">
                          Owner, Elite Fitness
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "The custom CRM PurpleByte built for our fitness studio
                      has streamlined our entire operation. We've reduced
                      administrative work by 60% and improved client retention
                      through better follow-ups."
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 font-bold">LR</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Lisa Rodriguez</h4>
                        <p className="text-sm text-muted-foreground">
                          Director, Bright Consulting
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "PurpleByte's WhatsApp Business solution has
                      revolutionized our client communication. We're now able to
                      provide faster support and close deals more efficiently.
                      The ROI has been incredible."
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 font-bold">DM</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">David Miller</h4>
                        <p className="text-sm text-muted-foreground">
                          Operations Manager, TechFab
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "The automation system PurpleByte implemented has cut our
                      invoice processing time by 75%. Their team took the time
                      to understand our complex workflows and delivered a
                      solution that exceeded our expectations."
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 font-bold">JT</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">James Thompson</h4>
                        <p className="text-sm text-muted-foreground">
                          CEO, Precision Parts
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "PurpleByte developed an internal tool that has
                      transformed how we track inventory and manage production.
                      The system is intuitive, reliable, and has helped us
                      reduce waste by 30%."
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-purple-50" id="about">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
                About Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                We're a team of tech enthusiasts passionate about helping
                businesses grow
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, PurpleByte has been helping small and medium
                businesses leverage technology to achieve their goals. Our team
                combines technical expertise with business acumen to deliver
                solutions that drive real results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-purple-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Client-Focused Approach</h3>
                    <p className="text-muted-foreground">
                      We prioritize understanding your business needs to deliver
                      tailored solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-purple-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Technical Excellence</h3>
                    <p className="text-muted-foreground">
                      Our team stays at the forefront of technology to build
                      robust, future-proof solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-purple-700 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      We measure our success by the tangible results we deliver
                      for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-purple-700 font-bold">JS</span>
                  </div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-purple-700 font-bold">RK</span>
                  </div>
                  <h4 className="font-semibold">Robert Kim</h4>
                  <p className="text-sm text-muted-foreground">CTO</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-purple-700 font-bold">MP</span>
                  </div>
                  <h4 className="font-semibold">Maria Patel</h4>
                  <p className="text-sm text-muted-foreground">
                    Lead Developer
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-purple-700 font-bold">TJ</span>
                  </div>
                  <h4 className="font-semibold">Tom Jackson</h4>
                  <p className="text-sm text-muted-foreground">Design Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
                Get in Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our custom technology solutions can help your
                business grow and operate more efficiently.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp Business</h3>
                    <p className="text-muted-foreground">
                      Get quick responses via WhatsApp
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-purple-700"
                      onClick={() =>
                        window.open("https://wa.me/972506619114", "_blank")
                      }
                    >
                      Connect on WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      Send us a detailed message
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-purple-700"
                    >
                      hello@purplebyte.com
                    </Button>
                  </div>
                </div>

                {/* Phone section commented out because it's not needed for now but might be in use in the future
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">Call us directly</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-purple-700"
                    >
                      +1 (555) 123-4567
                    </Button>
                  </div>
                </div>
                */}
              </div>
            </div>

            <div>
              <Card className="border-purple-100">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <input
                        id="company"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="landing-pages">Landing Pages</option>
                        <option value="crm">Custom CRM</option>
                        <option value="automation">Business Automation</option>
                        <option value="whatsapp">WhatsApp Business</option>
                        <option value="shopify">Shopify Integration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your project"
                      />
                    </div>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The section below is commented out because it's not needed for now but might be in use in the future */}
      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to grow your business with custom technology?
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Let's work together to create solutions that drive real results for
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-100"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section> */}
    </main>
  );
}
