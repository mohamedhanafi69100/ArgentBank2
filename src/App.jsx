// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navigation from "./components/routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
