"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeed from "@/components/NewsFeed";

const AboutUs = () => {
  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Sobre nós" />
      <CustomHeader title="Sobre nosso projeto" />
    </main>
  );
};

export default AboutUs;
