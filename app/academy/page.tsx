import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Clock,
  Video,
  CheckCircle,
  Calendar,
  User,
  FolderOpen,
  Gift,
  Lightbulb,
  Zap,
} from "lucide-react";

export default function AcademyPage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            PurpleScript Academy
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            AI-Oriented Software Development Academy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn software development in the new AI era. Tailored courses for
            non-tech professionals who want to enter the world of modern
            software development with AI tools and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI Development Foundations
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Master the fundamentals of modern software development with AI
                tools. Perfect for beginners with no technical background.
              </p>
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="text-xs">
                  Beginner Level
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs bg-green-50 text-green-700"
                >
                  Available Now
                </Badge>
              </div>
              <Link href="/academy/ai-foundations">
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
                <Zap className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI-Powered Web Development
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Build modern web applications using AI-assisted development
                tools and frameworks. Create real industry projects.
              </p>
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="text-xs">
                  Intermediate
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs bg-blue-50 text-blue-700"
                >
                  Starting Soon
                </Badge>
              </div>
              <Link href="/academy/ai-web-development">
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
                <Lightbulb className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI Business Solutions
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Learn to create AI-powered business applications and automation
                tools. Focus on practical business solutions.
              </p>
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="text-xs">
                  Advanced
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs bg-orange-50 text-orange-700"
                >
                  Coming Soon
                </Badge>
              </div>
              <Link href="/academy/ai-business-solutions">
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

        <div className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            What Makes Our Academy Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-semibold mb-2">First Meeting Free</h3>
              <p className="text-sm text-muted-foreground">
                Try our approach risk-free. Understand if our academy fits your
                learning style.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-semibold mb-2">Tailored Learning</h3>
              <p className="text-sm text-muted-foreground">
                Each course is customized to your specific needs and learning
                pace.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-semibold mb-2">100% Remote</h3>
              <p className="text-sm text-muted-foreground">
                Flexible scheduling with all sessions conducted remotely for
                your convenience.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FolderOpen className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-semibold mb-2">Industry Projects</h3>
              <p className="text-sm text-muted-foreground">
                Complete real-world projects that you can showcase to potential
                employers.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Course Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">3 Core Meetings</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">120 minutes per session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Interactive learning format</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Hands-on coding exercises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">All sessions recorded</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">1-on-1 Guidance</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Personal tutor sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Between each meeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Expert mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Personalized feedback</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Project Management
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Notion task board</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Industry-standard tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Track your progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Access all recordings</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-purple-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your AI Development Journey?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join our next cohort and learn software development the modern way.
            Book your free introductory session with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-100"
              >
                Book Free Session
              </Button>
            </Link>
            <Link href="/academy/ai-foundations">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-purple-800 hover:text-white"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
