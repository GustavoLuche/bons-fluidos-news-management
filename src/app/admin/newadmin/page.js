"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeedAdmin from "@/components/NewsFeedAdmin";
import NavbarAdmin from "@/components/NavbarAdmin";

const Home = () => {
  return (
    <main className="flex-auto bg-white">
      <NavbarAdmin selectedTab="Novo Admin"/>
      <CustomHeader title="Gerenciar Administradores" />
      <h1>Colocar lista de admin</h1>
    </main>
  );
};

export default Home;
