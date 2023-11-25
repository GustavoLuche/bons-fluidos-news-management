import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
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

const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "login");
    const querySnapshot = await getDocs(usersRef);

    // Mapear os documentos para um array de objetos
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Usuários retornado com sucesso!.");

    return users;
  } catch (error) {
    console.error("Erro ao buscar users:", error);
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

const toggleIsAdminStatus = async (userId) => {
  try {
    const userRef = doc(db, "login", userId);

    // Obtendo o documento do usuário para verificar o valor atual de isAdmin
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const currentIsAdminStatus = userDoc.data().isAdmin;

      // Atualizando o campo isAdmin para o oposto do valor atual
      await updateDoc(userRef, { isAdmin: !currentIsAdminStatus });

      console.log(
        `Campo isAdmin do usuário com ID ${userId} alterado com sucesso no Firebase!`
      );
      return true;
    } else {
      console.error(`Usuário com ID ${userId} não encontrado no Firebase.`);
      return false;
    }
  } catch (error) {
    console.error(
      `Erro ao alterar o campo isAdmin do usuário no Firebase com ID ${userId}:`,
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
  getAllUsers,
  toggleIsAdminStatus,
};
