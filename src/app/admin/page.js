"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeed from "@/components/NewsFeed";
import NavbarAdmin from "@/components/NavbarAdmin";

const Home = () => {
  return (
    <main className="flex-auto bg-white">
      <NavbarAdmin selectedTab="Gerenciar" />
      <CustomHeader title="Gerenciar Postagens" />
      <NewsFeed />
    </main>
  );
};

export default Home;
