import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/formComponents/LoginForm";
import RegisterForm from "./components/formComponents/RegisterForm";
import { Welcome } from "./pages/Welcome";
import YojanaRegistrationPage from "./pages/YojanaRegistrationPage";
import "./App.css";
import EditAndPay from "./pages/EditAndPay";
import { EditRecord } from "./pages/EditRecord";
import {YojanaListPage} from "./pages/YojanaListPage";
import { DownloadPdf } from "./pages/DownloadPdf";


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path='/yojanaRegister' element={<YojanaRegistrationPage/>} />
          <Route path='/editAndPay' element={<EditAndPay/>} />
          <Route path='/editRecord' element={<EditRecord/>} />
          <Route path="/listpage" element={<YojanaListPage/>}/>
          <Route path="/downloadPdf" element={<DownloadPdf/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
