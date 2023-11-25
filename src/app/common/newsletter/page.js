"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeed from "@/components/NewsFeed";

const Newsletter = () => {
  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Newsletter" />
      <div className=" bg-MagentaLight flex flex-col">
        <NewsletterSection />
      </div>
    </main>
  );
};

export default Newsletter;
