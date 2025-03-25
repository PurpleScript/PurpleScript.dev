"use client";

import { Button } from "@/components/ui/button";

export default function EmailButton() {
  const handleEmailClick = () => {
    window.location.href = "mailto:shaharz97@gmail.com";
  };

  return (
    <Button
      variant="link"
      className="p-0 h-auto text-purple-700"
      onClick={handleEmailClick}
    >
      shaharz97@gmail.com
    </Button>
  );
}
