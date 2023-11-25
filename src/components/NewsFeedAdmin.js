import React, { useEffect, useState } from "react";
import { getAllPosts, excluirNoticia } from "@/services/api";  

const Post = ({ post, onDelete }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = () => {
    window.location.href = `/news/${post.id}`;
  };

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    onDelete(post.id);
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="md:flex mb-2 border border-gray-300 bg-white rounded-xl shadow-md overflow-hidden group relative">
      <div className="md:shrink-0 group-hover:opacity-75">
        <img
          src={post.previewImageUrl}
          alt={post.title}
          className="h-48 w-full object-cover object-center md:h-full md:w-48"
        />
      </div>
      <div className="p-8 relative flex flex-col">
        <div className="uppercase tracking-wide text-sm font-semibold text-black mb-2">
          {post.tag}
        </div>
        <h3 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 text-black">{post.lead}</p>
        <div className="mt-4 flex items-end">
          <button
            onClick={handleDeleteClick}
            className="p-2 bg-red-500 text-white hover:bg-red-600 rounded-full cursor-pointer"
          >
            Excluir
          </button>
        </div>
        {showConfirmation && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md border border-gray-300 z-50">
            <p className="mb-2 text-black text-center">
              Tem certeza de que deseja excluir?
            </p>
            <button
              onClick={handleConfirmDelete}
              className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
            >
              Confirmar
            </button>
            <button
              onClick={handleCancelDelete}
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md"
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsFromApi = await getAllPosts();
        setPosts(postsFromApi);
        console.log("Posts recuperados com sucesso:", postsFromApi);
      } catch (error) {
        console.error("Erro ao buscar posts da API:", error);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (postId) => {
    const success = await excluirNoticia(postId);
    if (success) {
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
      console.log(`Notícia com ID ${postId} excluída do vetor com sucesso!`);
      setShowSuccessMessage(true);
    } else {
      console.log(`Erro ao excluir notícia com ID ${postId} do vetor e do Firebase`);
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div className="w-400 mx-auto my-2 ml-4">
      {currentPosts.map((post) => (
        <Post key={post.id} post={post} onDelete={handleDelete} />
      ))}
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-3 py-2 rounded-full ${
                currentPage === index + 1
                  ? "bg-Magenta text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 m-4 p-4 bg-green-500 text-white rounded-md">
          Item excluído com sucesso!
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
