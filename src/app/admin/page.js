"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeedAdmin from "@/components/NewsFeedAdmin";
import NavbarAdmin from "@/components/NavbarAdmin";
import ProtectedRoute from "@/components/ProtectedRoute";

const Home = () => {
  return (
    <ProtectedRoute>
      <main className="flex-auto bg-white h-screen">
        <NavbarAdmin selectedTab="Gerenciar" />
        <CustomHeader title="Gerenciar Postagens" />
        <NewsFeedAdmin />
      </main>
    </ProtectedRoute>
  );
};

export default Home;
