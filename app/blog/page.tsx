import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | PurpleScript - Custom Software Development",
  description:
    "Insights and thoughts about custom software development, technology trends, and digital transformation.",
};

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: "custom-software-2025",
    title: "Why Custom Software Development is Essential in 2025",
    excerpt:
      "In an era where no-code and low-code platforms promise to democratize software development, the value of custom software development has never been more critical.",
    date: "2024-03-20",
    readTime: "5 min read",
  },
  {
    id: "ai-development-2024",
    title: "The Impact of AI on Modern Software Development",
    excerpt:
      "Artificial Intelligence is revolutionizing how we develop software. Learn how AI-powered tools are enhancing developer productivity and code quality.",
    date: "2024-03-15",
    readTime: "4 min read",
  },
  {
    id: "microservices-vs-monolith",
    title: "Microservices vs Monolith: Making the Right Choice",
    excerpt:
      "Choosing between microservices and monolithic architecture is a crucial decision. We break down the pros and cons to help you make an informed choice.",
    date: "2024-03-10",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Latest Insights
          </h1>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block bg-white rounded-lg shadow-xl transform transition-transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <article className="p-6">
                  <div className="flex items-center text-sm text-purple-600 mb-2">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-purple-600">
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
