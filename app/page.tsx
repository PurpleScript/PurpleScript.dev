import { redirect } from "next/navigation";
import { defaultLocale } from "../middleware";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton from "./components/WhatsAppButton";
import EmailButton from "./components/EmailButton";
import HeroSection from "./components/HeroSection";
import ScrollToContactButton from "./components/ScrollToContactButton";
import ProfilePicture from "./components/ProfilePicture";
import {
  CheckCircle,
  Code,
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  Zap,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

// TODO: divide the sections into components
export default function Home() {
  redirect(`/${defaultLocale}`);
}
