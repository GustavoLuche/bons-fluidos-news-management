"use client";
import CustomHeader from "@/components/CustomHeaderHeader";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function login() {
  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Newsletter" />
      <CustomHeader title="Login" />
      <div className=" w-screen bg-white" />
    </main>
  );
}
