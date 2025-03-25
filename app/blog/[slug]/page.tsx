import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  content: string;
}

// This would typically come from a CMS or database
const blogPosts: Record<string, BlogPost> = {
  "custom-software-2025": {
    title: "Why Custom Software Development is Essential in 2025",
    date: "2024-03-20",
    readTime: "5 min read",
    content: `
      <p>
        In an era where no-code and low-code platforms promise to democratize software development, 
        the value of custom software development has never been more critical. While these platforms 
        offer quick solutions for basic needs, they fall short when it comes to creating truly 
        innovative, scalable, and competitive solutions.
      </p>

      <h2>The Limitations of No-Code Solutions</h2>
      <p>
        No-code platforms like WordPress and Wix have revolutionized how we create websites and 
        basic applications. However, they come with significant limitations:
      </p>
      <ul>
        <li>Limited customization options that can't match your unique business needs</li>
        <li>Performance bottlenecks due to generic code and unnecessary features</li>
        <li>Security vulnerabilities from widely-used templates and plugins</li>
        <li>Scalability issues when your business grows beyond basic needs</li>
        <li>Vendor lock-in that makes it difficult to migrate or modify your solution</li>
      </ul>

      <h2>The Power of Custom Software Development</h2>
      <p>
        Custom software development offers several key advantages that are becoming increasingly 
        important in 2025:
      </p>
      <ul>
        <li>Tailored solutions that perfectly align with your business processes</li>
        <li>Optimized performance and resource utilization</li>
        <li>Enhanced security through custom-built protection mechanisms</li>
        <li>Seamless integration with your existing systems and workflows</li>
        <li>Scalability that grows with your business</li>
        <li>Competitive advantage through unique features and capabilities</li>
      </ul>

      <h2>The Role of Professional Developers</h2>
      <p>
        Professional developers bring more than just coding skills to the table. They provide:
      </p>
      <ul>
        <li>Deep technical expertise and best practices</li>
        <li>Problem-solving abilities for complex business challenges</li>
        <li>Experience with security, scalability, and performance optimization</li>
        <li>Understanding of user experience and interface design</li>
        <li>Ability to implement cutting-edge technologies and methodologies</li>
      </ul>

      <h2>Making the Right Choice</h2>
      <p>
        While no-code solutions might seem attractive for their speed and low initial cost, 
        they often lead to technical debt and limitations that become apparent as your business 
        grows. Custom software development, though requiring more initial investment, provides 
        a foundation for sustainable growth and innovation.
      </p>
    `,
  },
  // Add other blog posts here...
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) return {};

  return {
    title: `${post.title} | PurpleScript Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-white mb-8 hover:text-purple-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <article className="bg-white rounded-xl shadow-xl p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-sm text-purple-600">
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div
              className="prose prose-purple prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-xl font-semibold text-purple-900 mb-4">
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-purple-800 mb-4">
                Let's discuss how we can help you create a custom software
                solution that perfectly fits your business needs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
