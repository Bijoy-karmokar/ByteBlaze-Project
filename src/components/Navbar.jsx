import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <NavLink to='/' className="btn btn-ghost text-2xl">Byte<span className="text-primary">Blaze</span></NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({isActive})=>isActive? "text-primary font-bold" : "font-bold"} to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? "text-primary font-bold" : "font-bold"} to={"/blogs"}>Blogs</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? "text-primary font-bold" : "font-bold"} to={"/bookmarks"}>Bookmarks</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
