import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  return (
    <div className="logo-container flex items-center justify-between w-full px-4 py-2 bg-amber-200 border-2">
      <img
        className="logo w-25 h-25"
        src={LOGO_URL}
        alt="logo"
      />

      <ul className="links flex space-x-6 p-4 m-4 items-center">
        <li><a>About</a></li>
        <li>Contact Us</li>
        <li>Home Page</li>
        <li>Cart</li>
        <button
          className="login-btn border px-3 py-1 cursor-pointer"
          onClick={() => {
            loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
          }}
        >
          {loginText}
        </button>
      </ul>
    </div>
  );
};

export default Header;
