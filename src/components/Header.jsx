import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => (
  <header
    className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-3 bg-transparent text-white z-50"
  >
    <img
      src={Logo}
      alt="M3M The Line Logo"
      className="h-10 ml-2"
    />
    <a href="tel:+91 99993 08625">
      <button className="bg-yellow-400 px-4 py-2 rounded text-black font-semibold hover:bg-yellow-300 transition">
        Enquire Now
      </button>
    </a>
  </header>
);

export default Header;
