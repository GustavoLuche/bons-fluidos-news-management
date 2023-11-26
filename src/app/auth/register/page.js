"use client";
import React, { useState } from "react";
import CustomHeader from "@/components/CustomHeaderHeader";
import loadingAnimation from "../../../assets/Animations/LoadingCircleWhiteAnimation.json";
import Navbar from "@/components/Navbar";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { cadastrar } from "@/services/api";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {

  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Register" />
      <CustomHeader title="Faça seu cadastro" />
      <RegisterForm />
    </main>
  );
};

export default Register;
