import React, { useEffect, useState } from "react";
import { getAllPosts } from "@/services/api";

const Post = ({ post }) => {
  const handleClick = () => {
    window.location.href = `/common/article?id=${post.id}`;
  };

  return (
    <div
      className="md:flex mb-2 border border-gray-300 bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group relative"
      onClick={handleClick}
    >
      <div className="md:shrink-0 group-hover:opacity-75">
        <img
          src={post.previewImageUrl}
          alt={post.title}
          className="h-48 w-full object-cover object-center md:h-full md:w-48 "
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm font-semibold text-Magenta">
          {post.tag}
        </div>
        <h3 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 text-black">{post.lead}</p>
      </div>
    </div>
  );
};

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

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

  return (
    <div className="w-400 mx-auto my-2 ml-4">
      {currentPosts.map((post) => (
        <Post key={post.id} post={post} />
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
    </div>
  );
};

export default NewsFeed;
