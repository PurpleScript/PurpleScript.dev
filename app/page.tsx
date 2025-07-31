import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WhatsAppButton from "./components/WhatsAppButton";
import EmailButton from "./components/EmailButton";
import HeroSection from "./components/HeroSection";
import ScrollToContactButton from "./components/ScrollToContactButton";
import ProfilePicture from "./components/ProfilePicture";
import ContactForm from "@/app/components/ContactForm";
import {
  CheckCircle,
  Code,
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  Zap,
  Linkedin,
  BrainCircuit,
  Users,
  LineChart,
  Calendar,
} from "lucide-react";
import Link from "next/link";

// TODO: divide the sections into components
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

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
              <div className="flex gap-4">
                <ScrollToContactButton />
                <Link href="/services">
                  <Button variant="secondary">View All Services</Button>
                </Link>
              </div>
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

      {/* Products Section */}
      <section className="py-20 bg-white" id="products">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
              Our Products
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready-to-Use Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our range of ready-made products designed to solve
              specific business challenges.
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {/* Smart CRM Product */}
              <CarouselItem>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Featured Product
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">
                      Smart CRM with AI Analytics
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Transform your customer relationships and business insights with
                      our intelligent CRM system powered by advanced AI analytics. Get
                      a complete view of your customers, predict trends, and make
                      data-driven decisions.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <BrainCircuit className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>AI-powered business intelligence</span>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Complete 360° customer view</span>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <LineChart className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Predictive sales analytics</span>
                    </div>
                    <div className="flex items-baseline gap-4 mb-8">
                      <span className="text-3xl font-bold text-purple-700">
                        ₪3,490
                      </span>
                      <span className="text-muted-foreground">One-time payment</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/products/smart-crm">
                        <Button className="bg-purple-700 hover:bg-purple-800">
                          Learn More
                        </Button>
                      </Link>
                      <Link href="/#contact">
                        <Button variant="outline">Contact Sales</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/crm-dashboard.jpg"
                      alt="Smart CRM Dashboard"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-purple-900/10"></div>
                  </div>
                </div>
              </CarouselItem>

              {/* AI Booking System Product */}
              <CarouselItem>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      AI-Powered
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">
                      AI Booking System
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Custom booking system with smart AI agents for medical clinics and businesses. 
                      Seamlessly integrates with any website and automates appointment scheduling 
                      with intelligent conversation handling.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Smart AI conversation agents</span>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Automated appointment scheduling</span>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <Code className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Easy website integration</span>
                    </div>
                    <div className="flex items-baseline gap-4 mb-8">
                      <span className="text-3xl font-bold text-purple-700">
                        ₪4,890
                      </span>
                      <span className="text-muted-foreground">One-time payment</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/products/ai-booking-system">
                        <Button className="bg-purple-700 hover:bg-purple-800">
                          Learn More
                        </Button>
                      </Link>
                      <Link href="/#contact">
                        <Button variant="outline">Contact Sales</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="rounded-full bg-purple-700 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="h-10 w-10 text-white" />
                      </div>
                      <p className="text-purple-700 font-semibold">AI Booking Interface</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Consulting Package Product */}
              <CarouselItem>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Expert Guidance
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">
                      8-Hour Consulting Package
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      8 hours of expert consulting for technology strategy, system architecture, 
                      and business optimization. Get personalized guidance from our experienced 
                      team to solve complex challenges and accelerate your growth.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Personalized expert guidance</span>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Technology strategy optimization</span>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center">
                        <LayoutDashboard className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>System architecture review</span>
                    </div>
                    <div className="flex items-baseline gap-4 mb-8">
                      <span className="text-3xl font-bold text-purple-700">
                        ₪2,990
                      </span>
                      <span className="text-muted-foreground">8 hours included</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/products/consulting-package">
                        <Button className="bg-purple-700 hover:bg-purple-800">
                          Learn More
                        </Button>
                      </Link>
                      <Link href="/#contact">
                        <Button variant="outline">Schedule Consultation</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="rounded-full bg-purple-700 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <p className="text-purple-700 font-semibold">Expert Consulting</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
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
              say about working with PurpleScript.
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
                      "PurpleScript transformed our online store with custom
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
                      "The landing page PurpleScript created for our product
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
                      "The custom CRM PurpleScript built for our fitness studio
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
                        <span className="text-purple-700 font-bold">RH</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Ron Hazan</h4>
                        <p className="text-sm text-muted-foreground">
                          Fromer CBO, All Services
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "PurpleScript's advanced landing page solution has
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
                      "The automation system PurpleScript implemented has cut
                      our invoice processing time by 75%. Their team took the
                      time to understand our complex workflows and delivered a
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
                      "PurpleScript developed an internal tool that has
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
                Founded in 2024, PurpleScript has been helping small and medium
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
                  <div className="flex flex-col items-center text-center">
                    <ProfilePicture />
                    <h4 className="font-semibold mt-2">Shahar Zidon</h4>
                    <p className="text-sm text-muted-foreground">
                      Founder & CEO
                    </p>
                    <Link
                      href="https://www.linkedin.com/in/shahar-zidon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-purple-700 hover:text-purple-800 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <span className="text-purple-700 font-bold">RH</span>
                    </div>
                    <h4 className="font-semibold mt-2">Ron Shapsa Hazan</h4>
                    <p className="text-sm text-muted-foreground">
                      CBO & Developer
                    </p>
                    <Link
                      href="https://www.linkedin.com/in/ron-sapsa-hazan-797366326/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-purple-700 hover:text-purple-800 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Add the team members here for future use*/}
              {/* <div className="space-y-4 mt-8">
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
              </div> */}
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
                    <WhatsAppButton />
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
                    <EmailButton />
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
                  <ContactForm />
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
