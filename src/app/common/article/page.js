"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeed from "@/components/NewsFeed";

const Artigo = () => {
  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="" />
      <CustomHeader title="Artigo" />
      <div className=" w-screen h-screen bg-white" />
      <NewsletterSection />
    </main>
  );
};

export default Artigo;
