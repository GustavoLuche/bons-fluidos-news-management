"use client";
import CustomHeader from "@/components/CustomHeaderHeader";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Statistics from "@/components/Statistics";
import Objetivo from "@/components/Objetivo";
import Image from "next/image";


export default function About() {
  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Sobre nós" />
      <CustomHeader title="About" />
      <Banner />
      <Statistics />
      <Objetivo />
      <div className=" w-screen bg-white" />
    </main>
  );
}
