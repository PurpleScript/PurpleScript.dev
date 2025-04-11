"use client";

import { Button } from "@/components/ui/button";

export default function EmailButton() {
  const handleEmailClick = () => {
    window.location.href = "mailto:sales@purplescript.dev";
  };

  return (
    <Button
      variant="link"
      className="p-0 h-auto text-purple-700"
      onClick={handleEmailClick}
    >
      sales@purplescript.dev
    </Button>
  );
}
