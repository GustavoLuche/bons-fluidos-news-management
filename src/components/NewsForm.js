import React, { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { addNews } from "@/services/api";

export default function NewsForm() {
  const [title, setTitle] = useState("");
  const [lead, setLead] = useState("");
  const [tag, setTag] = useState("");
  const [writer, setWriter] = useState("");
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const dateNow = new Date().toISOString();
    try {
      const cadastradoComSucesso = await addNews(
        title,
        lead,
        tag,
        previewImageUrl,
        content,
        dateNow,
        writer
      );

      if (cadastradoComSucesso) {
        // Limpar campos do formulário
        setTitle("");
        setLead("");
        setTag("");
        setPreviewImageUrl("");
        setContent("");
        setWriter("");

        // Exibir notificação
        setShowNotification(true);
      } else {
        console.error("Erro ao processar o cadastro da notícia.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar a notícia:", error);
    }
  };

  useEffect(() => {
    if (showNotification) {
      // Exibir notificação usando alert
      alert("Postagem cadastrada com sucesso!");

      // Ocultar a notificação após ser exibida
      setShowNotification(false);
    }
  }, [showNotification]);

  return (
    <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:py-32 p-5">
      <form onSubmit={handleFormSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Criar Notícia
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Título
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="lead"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Lead
                </label>
                <div className="mt-2">
                  <textarea
                    id="lead"
                    name="lead"
                    rows={5}
                    className="block w-full h-300 h-[sm:300] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                    value={lead}
                    onChange={(e) => setLead(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tag
                </label>
                <div className="mt-2">
                  <select
                    id="tag"
                    name="tag"
                    autoComplete="tag"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="Selecione uma opção"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Artigo">Artigo</option>
                    <option value="Notícia">Notícia</option>
                    <option value="Nota de esclarecimento">Nota de esclarecimento</option>
                    <option value="Nota de Repúdio">Nota de Repúdio</option>
                    <option value="Evento">Evento</option>
                    {/* Adicione mais opções conforme necessário */}
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="previewImageUrl"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  URL da Imagem de Capa:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="previewImageUrl"
                    id="previewImageUrl"
                    autoComplete="previewImageUrl"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                    value={previewImageUrl}
                    onChange={(e) => setPreviewImageUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="previewImageUrl"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Autor:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="writer"
                    id="writer"
                    autoComplete="writer"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                    value={writer}
                    onChange={(e) => setWriter(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Conteudo:
                </label>
                <div className="mt-2">
                  <textarea
                    id="content"
                    name="content"
                    rows={8}
                    className="block w-full h-300 h-[sm:300] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Magenta sm:text-sm sm:leading-6"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => {
              // Limpar campos do formulário e ocultar notificação
              setTitle("");
              setLead("");
              setTag("");
              setPreviewImageUrl("");
              setContent("");
              setShowNotification(false);
              setWriter("");
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-Magenta px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Magenta"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
