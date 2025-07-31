
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Clock, 
  Users, 
  CheckCircle,
  Calendar,
  Video,
  Gift,
  FolderOpen,
  Globe,
  Code,
  Brain
} from "lucide-react";

export default function AIWebDevelopmentPage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            AI-Powered Web Development
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Build Modern Web Applications with AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master web development using AI-assisted tools and frameworks. Create responsive, 
            interactive web applications while leveraging the power of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-blue-700" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-muted-foreground mb-6">
              Take your development skills to the next level with this intermediate course focused 
              on modern web development. Learn to build professional web applications using AI tools, 
              modern frameworks, and industry best practices.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Gift className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">First Meeting Free</h4>
                  <p className="text-muted-foreground">Experience our teaching methodology before committing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">3 Intensive Sessions (120 minutes each)</h4>
                  <p className="text-muted-foreground">Deep-dive sessions with practical web development projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Expert 1-on-1 Mentoring</h4>
                  <p className="text-muted-foreground">Personal guidance sessions with senior web developers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Live Web Application</h4>
                  <p className="text-muted-foreground">Deploy a fully functional web app that showcases your skills</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <Card className="border-blue-100">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">AI Web Development</h3>
                  <div className="text-3xl font-bold text-blue-700 mb-2">Starting Soon</div>
                  <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700">Intermediate Level</Badge>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-blue-700" />
                    <span className="text-sm">Flexible Remote Sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-700" />
                    <span className="text-sm">Notion Project Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-blue-700" />
                    <span className="text-sm">AI-Powered Development</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/#contact" className="block w-full">
                    <Button className="w-full bg-blue-700 hover:bg-blue-800">
                      Join Waitlist
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Course Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Modern Frontend Frameworks
                </h3>
                <p className="text-muted-foreground">
                  Master React, Next.js, and other modern frameworks with AI-assisted development 
                  for rapid prototyping and production-ready applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Backend & Database Integration
                </h3>
                <p className="text-muted-foreground">
                  Learn to build robust backend systems and integrate databases 
                  using AI tools for faster development and better architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  AI-Enhanced Development
                </h3>
                <p className="text-muted-foreground">
                  Integrate AI capabilities into your web applications and use 
                  advanced AI tools for code generation and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Build Professional Web Applications?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our waitlist to be notified when this course becomes available. 
            Build modern, scalable web applications with the power of AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-blue-700 hover:bg-blue-800">
                Join Waitlist
              </Button>
            </Link>
            <Link href="/academy">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
