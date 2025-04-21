// src/components/routes/Routes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import User from "../../pages/User";

const Navigation = () => {
  const location = useLocation();
  const isDarkBackground =
    location.pathname === "/sign-in" || location.pathname === "/user";

  return (
    <main className={isDarkBackground ? "main bg-dark" : "main"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </main>
  );
};

export default Navigation;
