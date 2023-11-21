"use client";
import CustomHeader from "@/components/CustomHeaderHeader";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Sobre nós" />
      <CustomHeader title="About" />
      <Banner />
      <div className=" w-screen bg-white" />
    </main>
  );
}
