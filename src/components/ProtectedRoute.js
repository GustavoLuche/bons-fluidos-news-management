// components/ProtectedRoute.js
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isUserAdmin } = useAuth();
  const router = useRouter();

  if (!isUserAdmin) {
    // Redirecionar para a página de login se o usuário não estiver autenticado
    router.push("/");
    return null; // ou uma mensagem de carregamento, etc.
  }

  // Renderizar o conteúdo protegido se o usuário estiver autenticado
  return <>{children}</>;
};

export default ProtectedRoute;
