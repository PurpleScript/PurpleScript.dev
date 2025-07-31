
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Clock, 
  Users, 
  CheckCircle,
  Calendar,
  Video,
  Gift,
  FolderOpen,
  Lightbulb,
  Code,
  Brain
} from "lucide-react";

export default function AIFoundationsPage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            AI Development Foundations
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Software Development in the AI Era
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive beginner-friendly course designed for non-tech professionals who want to 
            enter the world of modern software development with AI-powered tools and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-6">
              <GraduationCap className="h-8 w-8 text-purple-700" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-muted-foreground mb-6">
              This course is specifically designed for professionals without a technical background 
              who want to learn modern software development using AI tools. You'll learn how to 
              leverage AI to accelerate your development process and build real-world applications.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Gift className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">First Meeting Absolutely Free</h4>
                  <p className="text-muted-foreground">Get to know our teaching style and see if this course is right for you</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">3 Core Sessions (120 minutes each)</h4>
                  <p className="text-muted-foreground">Intensive, interactive sessions with hands-on coding practice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Personal 1-on-1 Guidance</h4>
                  <p className="text-muted-foreground">Expert tutor sessions between each meeting for personalized support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FolderOpen className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Industry-Demanded Project</h4>
                  <p className="text-muted-foreground">Complete a real-world project you can showcase to employers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-8">
            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">AI Development Foundations</h3>
                  <div className="text-3xl font-bold text-purple-700 mb-2">Contact for Pricing</div>
                  <Badge variant="outline" className="mb-4">Beginner Friendly</Badge>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-purple-700" />
                    <span className="text-sm">100% Remote & Flexible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-700" />
                    <span className="text-sm">Notion Task Management Board</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-purple-700" />
                    <span className="text-sm">Tailored to Your Needs</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/#contact" className="block w-full">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800">
                      Book Free Session
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  AI-Powered Development
                </h3>
                <p className="text-muted-foreground">
                  Learn to use AI tools like GitHub Copilot, ChatGPT, and other AI assistants 
                  to accelerate your coding process and productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Modern Programming Fundamentals
                </h3>
                <p className="text-muted-foreground">
                  Master the basics of programming concepts, data structures, and algorithms 
                  with practical, AI-assisted examples.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Problem-Solving with AI
                </h3>
                <p className="text-muted-foreground">
                  Develop critical thinking skills for software development and learn 
                  how to effectively collaborate with AI tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Course Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-purple-700 font-bold">1</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Week 1: AI Tools & Basics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Introduction to AI development tools</li>
                  <li>• Setting up your development environment</li>
                  <li>• Basic programming concepts with AI assistance</li>
                  <li>• Your first AI-assisted code</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-purple-700 font-bold">2</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Week 2: Building Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Creating interactive applications</li>
                  <li>• Working with databases and APIs</li>
                  <li>• AI-powered debugging and testing</li>
                  <li>• Starting your industry project</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-purple-700 font-bold">3</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Week 3: Project Completion</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Finalizing your industry project</li>
                  <li>• Code review and optimization</li>
                  <li>• Deployment and presentation</li>
                  <li>• Career guidance and next steps</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Why Choose PurpleScript Academy?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our unique approach combines expert instruction with cutting-edge AI tools, 
            giving you practical skills that are immediately applicable in today's job market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div className="text-left">
                <h4 className="font-semibold">Tailored Learning Experience</h4>
                <p className="text-sm text-muted-foreground">Course content adapted to your specific goals and learning pace</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div className="text-left">
                <h4 className="font-semibold">Industry-Standard Tools</h4>
                <p className="text-sm text-muted-foreground">Learn with the same tools used by professional developers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div className="text-left">
                <h4 className="font-semibold">Expert Mentorship</h4>
                <p className="text-sm text-muted-foreground">Personal guidance from experienced software developers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div className="text-left">
                <h4 className="font-semibold">Portfolio Project</h4>
                <p className="text-sm text-muted-foreground">Graduate with a real project to showcase your new skills</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-purple-700 hover:bg-purple-800">
                Start Your Free Session
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
