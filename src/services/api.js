// src/services/api.js
import { collection, addDoc, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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

const addNews = async (title, description) => {
  try {
    const postsRef = collection(db, "posts");
    await addDoc(postsRef, {
      title,
      description,
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

const cadastrar = async (email, password, nome) => {

  try {
    // Verificar o formato do e-mail antes de cadastrar
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Formato de e-mail inválido");
    }  

    const userLogged = await createUserWithEmailAndPassword(auth, email, password);
    
    if (userLogged.user) {
      const userDocRef = doc(db, "users", userLogged.user.uid);
      await setDoc(userDocRef, {nome, email, password });
  
      console.log("Usuário cadastrado com sucesso: " + JSON.stringify(userLogged));
      router.push("/");
    }else {
      console.error("Erro ao criar usuário no Firebase");
    }
 
  } catch (error) {
    console.log("Erro durante o cadastro: " + JSON.stringify(error));
  }
};

export { registerEmailToNewsletter, getAllPosts, addNews, autenticar, cadastrar };
