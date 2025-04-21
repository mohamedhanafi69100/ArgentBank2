import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import User from "../../pages/User";

const Navigation = () => {
  const location = useLocation(); // récupère l'URL actuelle

  // ✅ Cette ligne est la clé : on vérifie si on est sur /sign-in OU /user
  const isDarkBackground =
    location.pathname === "/sign-in" || location.pathname === "/user";

  return (
    // ✅ Classe dynamique : applique "bg-dark" si on est sur /sign-in ou /user
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
