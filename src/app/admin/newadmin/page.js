"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import NewsFeedAdmin from "@/components/NewsFeedAdmin";
import NavbarAdmin from "@/components/NavbarAdmin";
import UserList from "@/components/UserList";
import ProtectedRoute from "@/components/ProtectedRoute";

const Home = () => {
  return (
    <ProtectedRoute>
      <main className="flex-auto bg-white h-screen">
        <NavbarAdmin selectedTab="Novo Admin" />
        <CustomHeader title="Gerenciar Adimistradores" />
        <UserList />
      </main>
    </ProtectedRoute>
  );
};

export default Home;
