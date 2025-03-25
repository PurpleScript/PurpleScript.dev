"use client";

import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 overflow-hidden relative">
      <Image
        src="/images/shahar-profile.jpg"
        alt="Shahar Zidon"
        fill
        className="object-cover"
        onError={(e) => {
          // If image fails to load, show initials
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          target.parentElement?.classList.add("fallback-initials");
        }}
      />
      <span className="text-purple-700 font-bold hidden fallback-content">
        SZ
      </span>
    </div>
  );
}
