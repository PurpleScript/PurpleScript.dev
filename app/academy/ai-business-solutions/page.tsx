
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Clock, 
  Users, 
  CheckCircle,
  Calendar,
  Video,
  Gift,
  FolderOpen,
  Briefcase,
  Code,
  Brain
} from "lucide-react";

export default function AIBusinessSolutionsPage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
            AI Business Solutions
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Create AI-Powered Business Applications
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the creation of AI-powered business solutions and automation tools. 
            Learn to build applications that solve real business problems using cutting-edge AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-orange-700" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-muted-foreground mb-6">
              This advanced course focuses on creating AI-powered business solutions that drive 
              real value. Learn to identify business opportunities, design intelligent systems, 
              and implement automation tools that transform how businesses operate.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Gift className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Free Consultation</h4>
                  <p className="text-muted-foreground">Discuss your business goals and explore course fit</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">3 Advanced Sessions (120 minutes each)</h4>
                  <p className="text-muted-foreground">Strategic sessions focused on business application development</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Business-Focused Mentoring</h4>
                  <p className="text-muted-foreground">Work with experts who understand both technology and business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Enterprise-Grade Solution</h4>
                  <p className="text-muted-foreground">Build a complete business solution ready for implementation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-8">
            <Card className="border-orange-100">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">AI Business Solutions</h3>
                  <div className="text-3xl font-bold text-orange-700 mb-2">Coming Soon</div>
                  <Badge variant="outline" className="mb-4 bg-orange-50 text-orange-700">Advanced Level</Badge>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-orange-700" />
                    <span className="text-sm">Executive-Level Sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-orange-700" />
                    <span className="text-sm">Business Project Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-orange-700" />
                    <span className="text-sm">Enterprise AI Integration</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/#contact" className="block w-full">
                    <Button className="w-full bg-orange-700 hover:bg-orange-800">
                      Get Notified
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">What You'll Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Business Process Automation
                </h3>
                <p className="text-muted-foreground">
                  Design and implement AI-powered automation systems that streamline 
                  business operations and increase efficiency across departments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Intelligent Data Analysis
                </h3>
                <p className="text-muted-foreground">
                  Create AI systems that analyze business data, generate insights, 
                  and provide actionable recommendations for decision making.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Custom AI Solutions
                </h3>
                <p className="text-muted-foreground">
                  Build tailored AI applications that address specific business challenges 
                  and create competitive advantages in your industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be among the first to know when this advanced course launches. 
            Learn to create AI solutions that drive real business value and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-orange-700 hover:bg-orange-800">
                Get Early Access
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
