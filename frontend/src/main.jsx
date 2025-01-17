import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { WelcomeScreen } from "./components/WelcomeScreen.jsx";
import { Login } from "./components/Login.jsx";
import { SignUp } from "./components/SignUp.jsx";
import { Home } from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<WelcomeScreen />}></Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
