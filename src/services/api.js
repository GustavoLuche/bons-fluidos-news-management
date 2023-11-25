import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  documentId,
  where,
  query,
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

const getPostByID = async (id) => {
  try {
    const postsRef = collection(db, "posts");
    const querySnapshot = await getDocs(postsRef);
    // Mapear os documentos para um array de objetos
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const PostFinded = posts.filter((item) => item.id === id);

    return PostFinded[0];
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
};

const addNews = async (title, description, tag, previewImageUrl, text) => {
  try {
    const postsRef = collection(db, "posts");
    await addDoc(postsRef, {
      title,
      description,
      tag,
      previewImageUrl,
      text,
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
  getPostByID,
};
