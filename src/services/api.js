import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-UF3gSE1lZFJvFgqVhBxHEsmJXrqH02s",
  authDomain: "precise-airship-398418.firebaseapp.com",
  projectId: "precise-airship-398418",
  storageBucket: "precise-airship-398418.appspot.com",
  messagingSenderId: "271597864169",
  appId: "1:271597864169:web:f2f3fdef59cd4eb56b5c78",
  measurementId: "G-XHGXL4MQ00"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const subscribeToNewsletter = async (email) => {
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
const getPosts = async () => {
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

export { subscribeToNewsletter, db, getPosts };
