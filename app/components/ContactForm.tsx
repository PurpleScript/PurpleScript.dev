"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description:
          "Please fill in all required fields (name, email, message).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        toast({
          title: "Message sent!",
          description:
            "Thank you for contacting us. We'll respond as soon as possible.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        // Error from API
        toast({
          title: "Something went wrong",
          description:
            data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Network or other errors
      toast({
        title: "Connection error",
        description:
          "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name *
          </label>
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your email"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          value={formData.company}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your company"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium">
          Service Interested In
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select a service</option>
          <option value="landing-pages">Landing Pages</option>
          <option value="crm">Custom CRM</option>
          <option value="automation">Business Automation</option>
          <option value="whatsapp">WhatsApp Business</option>
          <option value="shopify">Shopify Integration</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message *
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about your project"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-purple-700 hover:bg-purple-800"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
