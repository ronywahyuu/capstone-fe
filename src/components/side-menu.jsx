import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLogOutCircle } from "react-icons/bi";

import PropTypes from "prop-types";
import { useEffect } from "react";
import USER_API from "../api/user-api";

const SideMenu = ({ offCanvas, setOffCanvas }) => {
  const navigate = useNavigate();
  const responsiveBreakpoint = {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  };

  const offCanvasClass = offCanvas
    ? "-translate-x-full fixed"
    : "translate-x-0 sticky ";

  // translate sidebar when screen size is less than 768px or offCanvas is true
  // const translateSidebar = window.innerWidth < responsiveBreakpoint.md || offCanvas;

  useEffect(() => {
    if (window.innerWidth < responsiveBreakpoint.md) {
      setOffCanvas(true);
    }
  }, [offCanvas, responsiveBreakpoint.md, setOffCanvas]);

  const navLinkActive =
    "flex  items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700";

  const navLinkInactive =
    "flex text-white items-center gap-2 rounded-lg hover:bg-gray-100 hover:text-gray-700 px-4 py-2 text-gray-700";

  const logout = () => {
    localStorage.removeItem("auth_user");
    USER_API.logoutFn();
    navigate("/login");
  };

  return (
    <div
      className={`flex h-screen  bg-gray-800 flex-col justify-between border-e  transition duration-200 top-0 bottom-0 left-0 md:w-1/5  ${offCanvasClass}`}
    >
      <div className="px-4 py-6 sticky top-0  ">
        <div className="flex items-center justify-between">
          <Link to="/" className="">
            <img src="/logo.svg" width="80px" className="" alt="" />
          </Link>
          <RxHamburgerMenu
            onClick={() => setOffCanvas(!offCanvas)}
            aria-label="hamburger menu"
            className="cursor-pointer text-2xl text-gray-500"
          />
        </div>

        <nav
          aria-label="Main Nav"
          className=" mt-16 flex flex-col gap-3 space-y-1  "
        >
          <NavLink
            to="/home/timeline"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? navLinkActive : navLinkInactive
            }
          >
            <MdOutlineExplore />
            <span className="text-lg font-medium"> Jelajahi </span>
          </NavLink>

          <NavLink
            to="/home/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? navLinkActive : navLinkInactive
            }
          >
            <TfiWrite />
            <span className="text-lg font-medium"> Blog </span>
          </NavLink>

          <NavLink
            to="/home/saved"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? navLinkActive : navLinkInactive
            }
          >
            <BiBookmark />
            <span className="text-lg font-medium"> Disimpan </span>
          </NavLink>

          <button onClick={logout} className="flex text-white items-center gap-2 rounded-lg hover:bg-gray-100 hover:text-gray-700 px-4 py-2 ">
            <BiLogOutCircle/>
            <span className="text-lg font-medium"> Sign Out </span>
          </button>
        </nav>
      </div>

      {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div> */}
    </div>
  );
};

SideMenu.propTypes = {
  offCanvas: PropTypes.bool,
  setOffCanvas: PropTypes.func,
};

export default SideMenu;
