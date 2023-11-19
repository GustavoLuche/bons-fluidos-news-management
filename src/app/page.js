"use client";
import CustomHeader from "@/components/CustomHeaderHeader";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Inicio" />
      <CustomHeader title="Inicio" />
      <div className=" w-screen bg-white" />
    </main>
  );
}
