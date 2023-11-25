import React, { useEffect, useState } from "react";
import { getPosts } from "@/services/api";

const Post = ({ post }) => (
  <div className="md:flex mb-2 border border-gray-300 bg-white rounded-xl shadow-md overflow-hidden">
    <div className="md:shrink-0">
      <a href={`/news/${post.id}`}>
        <img
          src={post.previewImageUrl}
          alt={post.title}
          className="h-48 w-full object-cover md:h-full md:w-48"
        />
      </a>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm font-semibold text-Magenta">
        {post.tag}
      </div>
      <h3 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        <a href={post.href} className="text-black hover:underline">
          {post.title}
        </a>
      </h3>
      <p className="mt-2 text-black">{post.description}</p>
    </div>
  </div>
);

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsFromApi = await getPosts();
        setPosts(postsFromApi);
        console.log("Posts recuperados com sucesso:", postsFromApi);
      } catch (error) {
        console.error("Erro ao buscar posts da API:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-400 mx-auto my-2 ml-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default NewsFeed;
