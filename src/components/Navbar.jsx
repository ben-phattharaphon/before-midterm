import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="flex justify-center items-center gap-3 bg-[#D2F3E0] w-auto h-15 text-3xl p-2">
      <NavLink
        to="/"
        className="text-4xl font-bold cursor-pointer transition-all duration-300
           hover:scale-110 hover:text-[#F6A7BA] hover:drop-shadow-[#FEB9C8]"
      >
        Home
      </NavLink>
      <p>|</p>
      <NavLink
        to="Register"
        className="text-4xl font-bold cursor-pointer transition-all duration-300
           hover:scale-110 hover:text-[#F6A7BA] hover:drop-shadow-[#FEB9C8]"
      >
        Register
      </NavLink>
      <p>|</p>
      <NavLink
        to="Posts"
        className="text-4xl font-bold cursor-pointer transition-all duration-300
           hover:scale-110 hover:text-[#F6A7BA] hover:drop-shadow-[#FEB9C8]"
      >
        Posts
      </NavLink>
    </div>
  );
}

export default Navbar;
