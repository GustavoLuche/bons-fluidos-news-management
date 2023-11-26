"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeed from "@/components/NewsFeed";

const Newsletter = () => {
  return (
    <main className="flex-auto bg-White">
      <Navbar selectedTab="Newsletter" />
      <div className="bg-MagentaLight min-h-screen backdrop-blur-md jus">
        <NewsletterSection />
      </div>
    </main>
  );
};

export default Newsletter;
