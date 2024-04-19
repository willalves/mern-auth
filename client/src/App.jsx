import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  const firstNavItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
  ];
  const secondNavItems = [
    { label: "Sign in", to: "/sign-in" },
    {
      label: "Sign up",
      to: "/sign-up",
      classes: "border px-4 py-1 rounded-lg hover:border-indigo-600",
    },
  ];

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar firstNavItems={firstNavItems} secondNavItems={secondNavItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
