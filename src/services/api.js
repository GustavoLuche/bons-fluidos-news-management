// src/services/api.js
import { db, auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  documentId,
  where,
  query,
} from "firebase/firestore";

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

const addNews = async (
  title,
  lead,
  tag,
  previewImageUrl,
  content,
  createdAt,
  writer
) => {
  try {
    const postsRef = collection(db, "posts");
    await addDoc(postsRef, {
      title,
      lead,
      tag,
      previewImageUrl,
      content,
      createdAt,
      writer,
    });
    console.log("Notícia cadastrada com sucesso!");
    return true;
  } catch (error) {
    console.error("Erro ao cadastrar a notícia no Firebase:", error);
    return false;
  }
};

const autenticar = async (email, password) => {
  try {
    // Verificar o formato do e-mail antes de chamar a autenticação
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Formato de e-mail inválido");
    }

    const userLogged = await signInWithEmailAndPassword(auth, email, password);

    // Verificar se o usuário foi autenticado com sucesso
    if (userLogged.user) {
      const userDocRef = doc(db, "users", userLogged.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userDetails = userDoc.data();
        console.log("Logado com sucesso:", { ...userLogged, userDetails });
        return userDetails;
      } else {
        throw new Error("Documento do usuário não encontrado");
      }
    } else {
      throw new Error("Erro ao autenticar usuário no Firebase");
    }
  } catch (error) {
    console.error("Erro durante o login:", error);
    throw error;
  }
};

const cadastrar = async (email, password, firstName, lastName, imageUrl) => {
  try {
    // Verificar o formato do e-mail antes de cadastrar
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Formato de e-mail inválido");
    }

    const userLogged = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (userLogged.user) {
      const userDocRef = doc(db, "users", userLogged.user.uid);
      await setDoc(userDocRef, {
        firstName,
        lastName,
        email,
        password,
        imageUrl,
        isAdmin: false,
      });

      console.log(
        "Usuário cadastrado com sucesso: " + JSON.stringify(userLogged)
      );
      router.push("/");
    } else {
      console.error("Erro ao criar usuário no Firebase");
    }
  } catch (error) {
    console.log("Erro durante o cadastro: " + JSON.stringify(error));
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

const isAdminUser = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);

    // Obtendo o documento do usuário para verificar o valor atual de isAdmin
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const currentIsAdminStatus = userDoc.data().isAdmin;
      console.log(
        `Campo isAdmin do usuário com ID ${userId} recuperado com sucesso no Firebase!`
      );
      return currentIsAdminStatus;
    } else {
      console.error(`Usuário com ID ${userId} não encontrado no Firebase.`);
      return false;
    }
  } catch (error) {
    console.error(
      `Erro ao recuperar o campo isAdmin do usuário no Firebase com ID ${userId}:`,
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
  autenticar,
  cadastrar,
  isAdminUser,
};
