"use client";

import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972506619114", "_blank");
  };

  return (
    <Button
      variant="link"
      className="p-0 h-auto text-purple-700"
      onClick={handleWhatsAppClick}
    >
      Connect on WhatsApp
    </Button>
  );
}
