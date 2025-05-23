import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PurpleScript</h3>
            <p className="text-white/70 mb-4">
              Custom technology solutions for small and medium businesses.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/PurpleScript.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/purplescript.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/purplescript/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-white/70 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/70 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-white/70 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-purple-800 border-purple-700 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-white text-purple-700 hover:bg-purple-100">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>© {new Date().getFullYear()} PurpleScript. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
