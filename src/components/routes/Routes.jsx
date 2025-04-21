import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import User from "../../pages/User";
const Navigation = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </main>
  );
};

export default Navigation;
