import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const [theme,setTheme] = useState("light");

    useEffect(()=>{
        localStorage.setItem("theme",theme);
        const toggleTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme",toggleTheme);
    },[theme])

    const handleToogle =(e)=>{
        if(e.target.checked){
            setTheme("synthwave");
        }else{
            setTheme("light");
        }
    }
  return (
    <div className="navbar bg-base-100 shadow-lg px-4 md:px-8 fixed z-10">
      <div className="flex-1">
        <NavLink
          to="/"
          className="btn btn-ghost text-2xl md:text-3xl font-bold"
        >
          Byte<span className="text-primary">Blaze</span>
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
              to={"/bookmarks"}
            >
              Bookmarks
            </NavLink>
          </li>
        </ul>
      </div>
      <label className="toggle text-base-content">
        <input onChange={handleToogle} type="checkbox" value="synthwave" className="theme-controller" />

        <svg
          aria-label="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>

        <svg
          aria-label="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
