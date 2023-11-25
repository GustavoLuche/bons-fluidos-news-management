"use client";
import React, { useState } from "react";
import CustomHeader from "@/components/CustomHeaderHeader";
import loadingAnimation from "../../../assets/Animations/LoadingCircleWhiteAnimation.json";
import Navbar from "@/components/Navbar";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [user, setUser] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const signUp = () => {
    setLoading(true);

    // adicionar o post no banco aqui
    // router.push("/");
    setLoading(false);
  };

  const handleOpenRegister = () => {
    router.push("/auth/login");
  };

  return (
    <main className="flex-auto bg-white h-screen">
      <Navbar selectedTab="Register" />
      <CustomHeader title="Faça seu cadastro" />
      <div className=" m-10">
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12 ">
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
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Maria"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="da Silva Sauro"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="@gmail.com"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Foto de perfil (Link da imagem)
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="url"
                        name="url"
                        id="url"
                        autoComplete="url"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="http//"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Senha
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      placeholder="********"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Repetir senha
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      placeholder="********"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-1 ">
          <button
            className="w-full flex mx-auto items-center justify-center drop-shadow-[0_0_0.3rem_#ffffff70] bg-gradient-to-b text-White from-transparent backdrop-blur-2xl bg-Magenta static w-auto rounded-xl px-6 py-4 w-200"
            onClick={() => signUp()}
          >
            {loading ? (
              <Lottie
                animationData={loadingAnimation}
                loop={true}
                style={{ height: 30, padding: 0 }}
              />
            ) : (
              <>Finalizar Cadastro</>
            )}
          </button>

          <h1 className="text-xl text-center font-regular text-slate-700 mt-4">
            —— OU ——
          </h1>
          <button
            className="col-span-3 mt-4 mx-auto flex items-center justify-center drop-shadow-[0_0_0.3rem_#ffffff70] bg-gradient-to-b text-Black from-transparent backdrop-blur-2xl bg-white static w-auto rounded-xl px-6 py-4 hover:underline "
            onClick={() => handleOpenRegister()}
          >
            Faça login
          </button>
        </div>
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <p className="text-xs text-Black mt-5">
            <a href="/aboutus" target="_blank" className="hover:underline">
              Sobre nós
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
