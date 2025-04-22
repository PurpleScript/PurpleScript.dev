"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    // Get current URL path
    const currentPath = window.location.pathname;

    // Handle the localized paths
    if (currentLocale === "he" && newLocale === "en") {
      // Going from Hebrew to English (default)
      router.push(currentPath.replace(/^\/he/, ""));
    } else if (currentLocale === "en" && newLocale === "he") {
      // Going from English to Hebrew
      router.push(`/he${currentPath}`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-purple-650 border-purple-500"
      >
        <DropdownMenuItem
          className={`text-white hover:bg-purple-600 cursor-pointer ${
            currentLocale === "en" ? "font-bold" : ""
          }`}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`text-white hover:bg-purple-600 cursor-pointer ${
            currentLocale === "he" ? "font-bold" : ""
          }`}
          onClick={() => handleLanguageChange("he")}
        >
          עברית
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
