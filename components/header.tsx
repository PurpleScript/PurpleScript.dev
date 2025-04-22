"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-purple-650 text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={handleLogoClick}
        >
          <div className="relative h-10 w-10">
            <Image
              src="/images/logo.svg"
              alt="PurpleScript Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold">PurpleScript</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/services"
            className="text-sm font-medium hover:text-white/80"
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:text-white/80"
          >
            Products
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium hover:text-white/80"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-white/80"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-white text-purple-700 hover:bg-white/20"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-purple-650 text-white">
              <SheetTitle className="text-xl font-bold text-white mb-4">
                Menu
              </SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/services"
                  className="text-lg font-medium hover:text-white/80"
                >
                  Services
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-medium hover:text-white/80"
                >
                  Products
                </Link>
                <Link
                  href="/#about"
                  className="text-lg font-medium hover:text-white/80"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-white/80"
                >
                  Blog
                </Link>
                <Button
                  className="mt-4 bg-white text-purple-700 hover:bg-purple-100"
                  onClick={scrollToContact}
                >
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
