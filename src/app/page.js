"use client"
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader";  // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeed from "@/components/NewsFeed";


const Home = () => {

  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Inicio" />
      <CustomHeader title="Inicio" />
      <NewsFeed />
       <NewsletterSection />
      <div className=" w-screen bg-white" />
    </main>
  );
};

export default Home;
