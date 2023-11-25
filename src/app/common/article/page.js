"use client";
import React, { useEffect, useState } from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import { useSearchParams } from "next/navigation";
import { getPostByID } from "@/services/api";
import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/Animations/LoadingCircleMagentaAnimation.json";

const Article = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    try {
      const postsFromApi = await getPostByID(id);
      setPost(postsFromApi);
      console.log("Post recuperados com sucesso:", postsFromApi);
    } catch (error) {
      console.error("Erro ao buscar posts da API:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPost();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="flex-auto bg-white h-screen">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          style={{ height: 30, padding: 0 }}
        />
      </main>
    );
  }

  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="" />
      <CustomHeader title={post.title} />
      <div className=" w-screen h-screen bg-white" />
      <NewsletterSection />
    </main>
  );
};

export default Article;
