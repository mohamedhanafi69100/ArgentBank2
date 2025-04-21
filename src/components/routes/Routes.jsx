import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
// import SignIn from "../../pages/SignIn"; (si tu l’as déjà créé)

const Navigation = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
      </Routes>
    </main>
  );
};

export default Navigation;
