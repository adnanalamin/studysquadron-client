import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import "./NavBar.css";
import { IoMoon, IoSunny } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  //   Add Nav items
  const navItems = (
    <>
      <li id="nav">
        <NavLink to="/">Home</NavLink>
      </li>
      <li id="nav">
        <NavLink to="/a">Assignments</NavLink>
      </li>
      <li id="nav">
        <NavLink to="/b">create assignments</NavLink>
      </li>
      <li id="nav">
        <NavLink to="/c">pending assignments</NavLink>
      </li>
    </>
  );
  return (
    <div className=" ">
      <div
        className={`navbar bg-[#003C43] z-50  text-white fixed   ${
          scrolling
            ? "bg-[#003C43] h-14  transition duration-500 ease-in-out"
            : "bg-[#135D66] h-14 w-full lg:max-w-6xl lg:mx-auto top-0 left-0 right-0 z-none transition duration-500 ease-in-out"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="w-24">
            <img src={logo} alt="Logo" className="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => darkModeHandler()}
            className="md:mr-2 w-10 h-10"
          >
            {dark && <IoSunny className="w-6 h-6"></IoSunny>}
            {!dark && <IoMoon className="w-6 h-6"></IoMoon>}
          </button>
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <CiLogin className="w-4 h-4 me-2"></CiLogin>
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
