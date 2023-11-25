import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

const registerEmailToNewsletter = async (email) => {
  try {
    const newsletterRef = collection(db, "newsletter");
    await addDoc(newsletterRef, {
      email,
    });
    console.log("E-mail cadastrado com sucesso no Firebase!");
    return true;
  } catch (error) {
    console.error("Erro ao cadastrar o e-mail no Firebase:", error);
    return false;
  }
};

const getAllPosts = async () => {
  try {
    const postsRef = collection(db, "posts");

    const querySnapshot = await getDocs(postsRef);

    // Mapear os documentos para um array de objetos
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return posts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
};

const getPostById = async (id) => {
  try {
    const postRef = doc(db, "posts", id);
    const postSnapshot = await getDoc(postRef);

    if (postSnapshot.exists()) {
      const post = {
        id: postSnapshot.id,
        ...postSnapshot.data(),
      };
      return post;
    } else {
      console.error("No such post!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching post: ", error);
    throw error;
  }
};

const addNews = async (title, description) => {
  try {
    const postsRef = collection(db, "posts");
    await addDoc(postsRef, {
      title,
      description,
      tag,
      previewImageUrl,
    });
    console.log("Notícia cadastrada com sucesso!");
    return true;
  } catch (error) {
    console.error("Erro ao cadastrar a notícia no Firebase:", error);
    return false;
  }
};

const excluirNoticia = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
    console.log(`Notícia com ID ${postId} excluída do Firebase com sucesso!`);
    return true;
  } catch (error) {
    console.error(
      `Erro ao excluir notícia do Firebase com ID ${postId}:`,
      error
    );
    return false;
  }
};

export {
  registerEmailToNewsletter,
  getAllPosts,
  addNews,
  excluirNoticia,
  getPostById,
};
