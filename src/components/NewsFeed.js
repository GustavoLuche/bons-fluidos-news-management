import React from "react";

const NewsFeed = ({ posts }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-Magenta">Notícias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-RoseLight p-4 rounded-md shadow-md">
            <div className="mb-4">
              {/* Adicionando um link ao redor da imagem */}
              <a href={post.href}>
                <img src={post.previewImageUrl} alt={post.title} className="w-full h-auto rounded-md" />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-Magenta">
              {/* Adicionando um link ao redor do título */}
              <a href={post.href} className="text-Magenta hover:underline">
                {post.title}
              </a>
            </h3>
            <p className="text-Black">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;