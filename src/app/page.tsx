"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
