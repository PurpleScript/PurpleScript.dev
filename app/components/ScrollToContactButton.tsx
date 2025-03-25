"use client";

import { Button } from "@/components/ui/button";

export default function ScrollToContactButton() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      className="bg-white text-purple-700 hover:bg-purple-100 w-full"
      onClick={scrollToContact}
    >
      Get in Touch
    </Button>
  );
}
