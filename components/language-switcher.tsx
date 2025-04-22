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
    // Skip if trying to switch to the same locale
    if (newLocale === currentLocale) return;

    // Get path without the locale prefix
    let path = window.location.pathname;
    const pathParts = path.split("/").filter(Boolean);

    // If the first part is a locale, remove it
    if (pathParts.length > 0 && ["en", "he"].includes(pathParts[0])) {
      pathParts.shift();
    }

    // Build the new path with the new locale
    const newPath =
      newLocale === "en"
        ? pathParts.length > 0
          ? "/en/" + pathParts.join("/")
          : "/en"
        : pathParts.length > 0
        ? "/he/" + pathParts.join("/")
        : "/he";

    router.push(newPath);
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
