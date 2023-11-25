"use client";
import React, { useEffect, useState } from "react";
import CustomHeader from "@/components/CustomHeaderHeader"; // Corrigido o nome do componente
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import { useSearchParams } from "next/navigation";
import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/Animations/LoadingCircleMagentaAnimation.json";
import Image from "next/image";
import { getPostByID } from "@/services/api";

const Article = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    try {
      const postsFromApi = await getPostByID(id);
      console.log("Teste:", postsFromApi);
      setPost(postsFromApi);
      console.log("Post recuperados com sucesso:", postsFromApi);
    } catch (error) {
      console.error("Erro ao buscar posts da API:", error);
    }
  };

  const convertDate = (date) => {
    const newDate = new Date(date).toLocaleDateString();
    const newTime = new Date(date).toLocaleTimeString();
    return `${newDate} - ${newTime}`;
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if (post) {
      setLoading(false);
    }
  }, [post]);

  if (loading) {
    return (
      <main className="flex-auto bg-white h-screen overflow-hidden">
        <Navbar selectedTab="" />
        <div className="flex items-center justify-center h-full">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{ height: 150 }}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="" />
      <div className=" bg-white mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 mt-5">
        <div className="uppercase tracking-wide text-sm font-semibold text-Magenta m-3">
          {post.tag}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-poppins m-3">
          {post.title}
        </h1>
        <p className="text-lg font-normal tracking-tight text-Grey font-poppins m-3">
          {post.lead}
        </p>
        <img
          src={post.previewImageUrl}
          alt={post.title}
          className="object-cover w-full h-[60vh] object-center rounded-md m-3"
        />

        <p className="text-lg font-normal tracking-tight text-Black font-poppins m-5">
          {post.content}
        </p>

        <p className="text-lg font-normal tracking-tight text-Grey font-poppins m-3">
          Por: {post.writer}
        </p>
        <p className="text-lg font-normal tracking-tight text-Grey font-poppins m-3">
          {convertDate(post.createdAt)}
        </p>
      </div>
      <NewsletterSection />
    </main>
  );
};

export default Article;
