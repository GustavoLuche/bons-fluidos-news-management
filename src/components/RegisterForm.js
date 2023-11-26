"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cadastrar } from "@/services/api";

// Componente de formulário
export default function RegisterForm() {
  // Configurar o estado para os dados do formulário
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    password: "",
    confirmPassword: "",
  });

  // Configurar o estado para o carregamento e notificação
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Configurar o roteador Next.js
  const router = useRouter();

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Consegui");
    setLoading(true);

    try {
      alert("Consegui2");
      await cadastrar(formData.email, formData.password, formData.firstName, formData.lastName, formData.imageUrl);
      setShowNotification(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showNotification) {
      // Exibir notificação usando alert
      alert("Usuário cadastrada com sucesso!");

      // Ocultar a notificação após ser exibida
      setShowNotification(false);
    }
  }, [showNotification]);

  const handleOpenLogin = () => {
    router.push("/auth/login");
  };

  const handleOpenAbout = () => {
    router.push("/common/aboutus");
  };

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Primeiro nome
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Maria"
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sobrenome
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Da Silva"
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Endereço de email
                </label>
                <div className="mt-2">
                  <input
                    placeholder="@gmail.com"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Foto de perfil (Link da imagem)
                </label>
                <div className="mt-2">
                  <input
                    placeholder="http//"
                    type="url"
                    name="imageUrl"
                    id="url"
                    autoComplete="url"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="mt-2">
                  <input
                    placeholder="********"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Repetir senha
                </label>
                <div className="mt-2">
                  <input
                    placeholder="********"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-Magenta px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-Rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Magenta"
          >
            Finalizar Cadastro
          </button>
        </div>
        <div>
          <label className="flex w-full justify-center px-3 py-1.5 text-sm text-xl font-regular text-slate-700 leading-6 text-black mt-4">
            —— OU ——
          </label>
        </div>
      </form>
      <div>
        <button
          className="col-span-3 mt-4 mx-auto flex items-center justify-center drop-shadow-[0_0_0.3rem_#ffffff70] bg-gradient-to-b text-Black from-transparent backdrop-blur-2xl bg-white static w-auto rounded-xl hover:underline px-3 py-1.5 text-sm font-bold"
          onClick={() => handleOpenLogin()}
        >
          Faça Login
        </button>
      </div>
      <div>
        <button
          className="text-xs text-Black  col-span-3 mt-5 mx-auto flex items-center justify-center drop-shadow-[0_0_0.3rem_#ffffff70] bg-gradient-to-b text-Black from-transparent backdrop-blur-2xl bg-white static w-auto rounded-xl hover:underline px-3 py-1.5 text-sm"
          onClick={() => handleOpenAbout()}
        >
          Sobre nós
        </button>
      </div>
    </div>
  );
}
