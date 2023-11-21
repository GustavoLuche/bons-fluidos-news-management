"use client";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import loadingAnimation from "../../assets/Animations/LoadingCircleWhiteAnimation.json";
import logo from "../../assets/LogosSVG/Logo.svg";
import background from "../../assets/WomenWithLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  // const { user, loading, signIn, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signIn = () => {
    router.push("/");
  };

  // useEffect(() => {
  //   if (user) {
  //   }
  // }, [user]);

  const handleOpenRegister = () => {
    router.push("/register");
  };

  // const handleSuccess = () => {
  //   router.push("/loginSuccess");
  // };

  // useEffect(() => {
  //   if (user) handleSuccess();
  // }, [user]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-6">
      <div className="flex flex-col items-center justify-center min-h-screen bg-Magenta hidden sm:block order-last sm:order-first sm:col-span-4 overflow-hidden h-screen ">
        <Image
          src={background}
          alt="Imagem de fundo contendo logo do Bons fluidos e uma mulher com os braços abertos em liberto"
          // width={2000}
          // height={1050}
          className="w-screen h-screen absolute"
          priority
        />
      </div>

      <div className="col-span-2 ">
        <div className="relative w-full px-6 flex flex-col h-screen items-center justify-self-center justify-center bg-gradient-to-b from-RoseLighter to-White">
          <Image
            src={logo}
            alt="Bons Fluidos Logo"
            className="drop-shadow-[0_0_0.3rem_#ffffff70]"
            width={150}
            height={150}
            priority
          />
          {!user && (
            <div>
              <h1 className="text-xl text-center font-semibold mb-4 text-Black mt-10">
                Faz login ai
              </h1>

              <div className="mt-1 ">
                <button
                  className="flex mx-auto items-center justify-center drop-shadow-[0_0_0.3rem_#ffffff70] bg-gradient-to-b text-Black from-transparent backdrop-blur-2xl bg-Magenta static w-auto rounded-xl px-6 py-4 w-100"
                  onClick={signIn}
                >
                  {loading ? (
                    <Lottie
                      animationData={loadingAnimation}
                      loop={true}
                      style={{ height: 30, padding: 0 }}
                    />
                  ) : (
                    <>Entrar</>
                  )}
                </button>

                <h1 className="text-xl text-center font-regular text-slate-700 mt-4">
                  —— OU ——
                </h1>
                <button
                  className="col-span-3 mt-4 mx-auto flex items-center justify-center drop-shadow-[0_0_0.3rem_#ffffff70] bg-gradient-to-b text-Black from-transparent backdrop-blur-2xl bg-white static w-auto rounded-xl px-6 py-4 "
                  onClick={() => handleOpenRegister()}
                >
                  Cadastre-se
                </button>
              </div>
            </div>
          )}

          <div className="fixed bottom-5 flex flex-col justify-center items-center">
            <p className="text-xs text-Black mt-5">
              <a href="/aboutus" target="_blank" className="hover:underline">
                Sobre nós
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
