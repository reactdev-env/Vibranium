import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="logo-container flex items-center justify-between w-full px-4 py-2 bg-amber-200 border-2">
      <img
        className="logo w-25 h-25"
        src={LOGO_URL}
        alt="logo"
      />

      <ul className="links flex space-x-6 p-4 m-4 items-center">
        <li>Online Status: {onlineStatus ? "😊" : "😒" }</li>
        <li><Link to="/about" className="hover:text-blue-500">AboutPage</Link></li>
        <li><Link to="/ContactUs" className="hover:text-blue-500">Contact Us</Link></li>
        <li><Link to="/" className="hover:text-blue-500">Home Page</Link></li>
        <li><Link to="/Grocery" className="hover:text-blue-500">Grocery</Link></li>
        <li><Link to="/cart">Cart</Link></li>

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
