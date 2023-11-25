"use client";
import React, { useEffect, useState } from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import { useSearchParams } from "next/navigation";
import { getPostByID } from "@/services/api";
import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/Animations/LoadingCircleMagentaAnimation.json";
import Image from "next/image";

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
    setPost({
      id: "34453",
      title:
        "A consolidação do meio corporativo ja consolidado de maneira independete e chata pra caralho",
      lead: "A consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralho A consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralho",
      content:
        "A consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralhoA consolidação do meio corporativo ja consolidado de maneira independete e chata pra pra caralho",
      CoverImage: "https://picsum.photos/500/500",
      createdAt: "123231412342341",
    });
    // fetchPost();
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
      <div className=" bg-white mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 mt-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-poppins">
          {post.title}
        </h1>
        <p className="text-lg font-normal tracking-tight text-Grey font-poppins mt-3">
          {post.lead}
        </p>
        <img
          src={post.CoverImage}
          alt={post.title}
          className="object-cover w-full h-[60vh] object-center rounded my-3"
        />

        <p className="text-lg font-normal tracking-tight text-Black font-poppins m-5">
          {post.content}
        </p>
      </div>
      <NewsletterSection />
    </main>
  );
};

export default Article;
