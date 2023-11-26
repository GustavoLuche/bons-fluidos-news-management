import React, { createContext, useContext, useState } from "react";
import { auth } from "../services/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useRouter } from "next/navigation";

import { isAdminUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isUserAdmin, setUserAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const signup = async (email, password) => {
    try {
      const userLogged = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userLogged.user) {
        console.log("Usuário cadastrado com sucesso");
      } else {
        console.error("Erro ao criar usuário");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const userLogged = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userLogged.user) {
        setAuthenticated(true);
        console.log("Usuário autenticado com sucesso!");

        const isAdmin = await isAdminUser(userLogged.user.uid);
        if (isAdmin) {
          setUserAdmin(true);
          router.push("/admin");
        } else {
          router.push("/");
        }
      } else {
        console.error("Erro ao autenticar usuário");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const logout = async () => {
    setAuthenticated(false);
    signOut(auth)
      .then(() => {
        console.log("Logout bem-sucedido.");
      })
      .catch((error) => {
        console.error("Erro ao fazer logout:", error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signup,
        login,
        logout,
        currentUser,
        loading,
        isUserAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
