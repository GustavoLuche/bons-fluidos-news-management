// components/ProtectedRoute.js
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // Recuperar isUserAdmin do armazenamento local
  const isUserAdmin = JSON.parse(localStorage.getItem("auth")).isUserAdmin;

  if (!isUserAdmin) {
    // Redirecionar para a página de login se o usuário não estiver autenticado
    router.push("/");
    return null; // ou uma mensagem de carregamento, etc.
  }

  // Renderizar o conteúdo protegido se o usuário estiver autenticado
  return <>{children}</>;
};

export default ProtectedRoute;
