// NewsletterSection.js

import React, { useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { registerEmailToNewsletter  } from '@/services/api';

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubscribe = async () => {
    try {
      const cadastradoComSucesso = await registerEmailToNewsletter (email);

      if (cadastradoComSucesso) {
        setMensagem("Assinatura realizada com sucesso!");
      } else {
        setMensagem("Erro ao processar a assinatura.");
      }
    } catch (error) {
      console.error("Erro ao assinar:", error);
      setMensagem("Erro ao processar a assinatura.");
    }
  };
  return (
    <div className=" z-10 relative isolate overflow-hidden max-w-[100vw] bg-MagentaLight py-8
    sm:py-24 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Assine a nossa newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Bem-vindo(a) à nossa comunidade Bons Fluidos! Inscreva-se na nossa
              newsletter para ficar por dentro das últimas novidades. Digite seu
              endereço de e-mail abaixo para começar!
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Endereço de email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white text-black px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-Rose sm:text-sm sm:leading-6"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-Magenta px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-Rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Rose"
                onClick={handleSubscribe}
              >
                Inscrever-se
              </button>
            </div>
            {mensagem && <p className="mt-4 text-white">{mensagem}</p>}
          </div>
          {
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Artigos semanais
                </dt>
                <dd className="mt-2 leading-7 text-gray-300">
                  Acompanhe toda comunicação oficial do projeto! Fique por
                  dentro de nossas ações, eventos, pronunciamentos e noticias!
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Nada de Spam, Apenas Bons Fluidos!
                </dt>
                <dd className="mt-2 leading-7 text-gray-300">
                  Nós valorizamos a sua privacidade, ao se inscrever em nossa
                  newsletter, você está garantindo que receberá apenas conteúdos
                  relevantes e informativos. Nada de spam!
                </dd>
              </div>
            </dl>
          }
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        {/* bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] */}
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-MagentaLight to-Rose opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
