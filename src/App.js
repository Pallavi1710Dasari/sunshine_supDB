import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/formComponents/LoginForm";
import RegisterForm from "./components/formComponents/RegisterForm";
import { Welcome } from "./pages/Welcome";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
