// components/ProtectedRoute.js
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // Recuperar isUserAdmin do armazenamento local se disponível
  const storedAuth = typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem("auth")) : null;
  const isUserAdmin = storedAuth ? storedAuth.isUserAdmin : false;

  if (!isUserAdmin) {
    // Redirecionar para a página de login se o usuário não estiver autenticado
    router.push("/");
    return null; // ou uma mensagem de carregamento, etc.
  }

  // Renderizar o conteúdo protegido se o usuário estiver autenticado
  return <>{children}</>;
};

export default ProtectedRoute;
