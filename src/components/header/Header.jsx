import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/argentBankLogo.webp";

const Header = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === "/sign-in";

  return (
    <header className="header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="ArgentBank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {!isSignInPage && (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
