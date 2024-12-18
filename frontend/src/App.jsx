import { AuthProvider } from "./contexts/auth";
import AppRoutes from "./routes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>

  );
}

export default App;
