"use client";
import CustomHeader from "@/components/CustomHeaderHeader";
import Navbar from "@/components/Navbar";
import diguinidade from "../../../assets/WomemDiguinidade.jpg";
import Image from "next/image";

export default function AboutUs() {
  const stats = [
    {
      id: 1,
      name: "De pessoas mestruam em todo o planeta",
      value: "1.8 BILHÃO",
    },
    {
      id: 2,
      name: "De pessoas não tem acesso a itens de cuidados mestuiais",
      value: "+4 MILHÕES",
    },
    {
      id: 3,
      name: "Pessoas que mestruam vivem sem acesso a banheiro em casa",
      value: "713 MIL",
    },
    {
      id: 4,
      name: "De pessoas no Brasil não tem banheiro em casa",
      value: "1.6 MILHÃO",
    },
    { id: 5, name: "Não recebem água tratada em casa", value: "15 MILHÕES" },
    {
      id: 6,
      name: "De estudantes no Brasil deixam de ir à escola por não terem absorvente",
      value: "25%",
    },
  ];

  const values = [
    {
      id: 1,
      name: "Promover um diálogo aberto e saudável sobre menstruação na sociedade.",
    },
    {
      id: 2,
      name: "Contribuir para a normalização da menstruação e do entendimento do ciclo menstrual.",
    },
    {
      id: 3,
      name: "Combater ativamente a pobreza menstrual, garantindo acesso a produtos adequados para todas as mulheres.",
    },
  ];

  return (
    <main className="flex-auto bg-white">
  
      <Navbar selectedTab="Sobre nós" />
      <CustomHeader title="Sobre nosso projeto" />
  
      <div className="bg-white mx-auto max-w-2xl py-6 sm:py-12 lg:py-24 flex flex-col sm:flex-row items-center">
        <div className="text-center sm:text-left sm:w-1/2 pr-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Bons Fluidos
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Levar dignidade para meninas através do projeto de extensão. O
            Projeto de Extensão "Bons Fluidos", coordenado pela Profa. Dra.
            Katia Romero Felizardo, tem como objetivo principal proporcionar
            dignidade para meninas que têm o direito à educação prejudicado por
            questões relacionadas à menstruação.
          </p>
        </div>
        <Image
          src={diguinidade}
          alt="description"
          className="h-auto max-w-full sm:w-1/2 mt-4 sm:mt-0"
        />
      </div>
  
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-2"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
  
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Objetivos do Projeto
          </h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.id}
                className="mx-auto flex max-w-xs flex-col gap-y-2"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {value.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
  
      <div className="mx-auto max-w-2xl py-12 sm:py-8 lg:py-20">
        <div className="text-center mt-2">
          <a
            href="https://linktr.ee/bonsfluidosutfpr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-Magenta hover:bg-MagentaLight text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Conheça mais sobre o projeto Bons Fluidos UTFPR
          </a>
        </div>
      </div>
  
      <div className="w-screen bg-white" />
    </main>
  );
  
            }  
