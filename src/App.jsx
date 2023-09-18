import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatBot from "./pages/ChatBot";
import ExitPage from "./pages/ExitPage";
import ErrorPage from "./pages/ErrorPage";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/exitpage" element={<ExitPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
