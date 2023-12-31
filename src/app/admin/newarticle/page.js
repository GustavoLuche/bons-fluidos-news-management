"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeed from "@/components/NewsFeed";
import NavbarAdmin from "@/components/NavbarAdmin";
import NewsForm from "@/components/NewsForm";
import ProtectedRoute from "@/components/ProtectedRoute";

const Home = () => {
  return (
    <ProtectedRoute>
      <main className="flex-auto bg-white">
        <NavbarAdmin selectedTab="Novo Artigo" />
        <CustomHeader title="Envie seu Artigo" />
        <NewsForm />
      </main>
    </ProtectedRoute>
  );
};

export default Home;
