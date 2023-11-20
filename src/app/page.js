"use client";
import CustomHeader from "@/components/CustomHeaderHeader";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import NewsFeed from "@/components/NewsFeed";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Como melhorar sua produtividade no trabalho remoto',
      description: 'Descubra dicas práticas para aumentar sua produtividade enquanto trabalha remotamente. Encontre o equilíbrio certo entre vida profissional e pessoal.',
      previewImageUrl: 'https://picsum.photos/800/600',
      href: '/post/1', // Substitua pelo link real do post
    },
    {
      id: 2,
      title: 'Inovações tecnológicas que estão moldando o futuro',
      description: 'Explore as últimas inovações tecnológicas que estão transformando o cenário atual. Saiba como essas tecnologias impactarão diferentes setores.',
      previewImageUrl: 'https://picsum.photos/800/600',
      href: '/post/2', // Substitua pelo link real do post
    },
    {
      id: 3,
      title: 'Outro Título',
      description: 'Descrição do terceiro post.',
      previewImageUrl: 'https://picsum.photos/800/600',
      href: '/post/3', // Substitua pelo link real do post
    },
    {
      id: 4,
      title: 'Imagem',
      description: 'Descrição do quarto post.',
      previewImageUrl: 'https://picsum.photos/800/600',
      href: '/post/4', // Substitua pelo link real do post
    },
  ];
  

  

  return (
    <main className="flex-auto bg-white">
      <Navbar selectedTab="Inicio" />
      <CustomHeader title="Inicio" />
      <NewsletterSection />
      <div className=" w-screen bg-white" />
    </main>
  );
};

export default Home;
