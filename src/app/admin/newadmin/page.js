"use client";
import React from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import NewsFeedAdmin from "@/components/NewsFeedAdmin";
import NavbarAdmin from "@/components/NavbarAdmin";
import UserList from "@/components/UserList";

const Home = () => {
  return (
    <main className="flex-auto bg-white">
      <NavbarAdmin selectedTab="Novo Admin" />
      <CustomHeader title="Gerenciar Adimistradores" />
      <UserList />
    </main>
  );
};

export default Home;
