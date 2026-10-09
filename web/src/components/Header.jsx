import { FaRegCalendarCheck, FaIdCard, FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaRightToBracket, FaUserPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
// import ThemeToggle from "./ThemeToggle";
import flag from "../assets/flagK.png";
// import logo from "../assets/logo.png";
// import authService from "../../services/authService";
import { getBanglaDate } from "../utils/getBanglaDate";
import { getBanglaHijriDate } from "../utils/getBanglaHijriDate";
import { useState } from "react";

const Header = () => {
  const today = new Date();
  const token = localStorage.getItem("token");
  let user = null;

  if (token) {
    try {
      const payload = token.split(".")[1];
      const decodedPayload = atob(payload);
      user = JSON.parse(decodedPayload);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  const engDay = today.toLocaleDateString("en-US", { weekday: "long" });
  const engDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const todayIso = today.toISOString().split("T")[0];
  const todayBangla = getBanglaDate(todayIso);
  const hijriDate = getBanglaHijriDate(todayIso);

  const navigate = useNavigate();

  const handleGotoHome = () => navigate("/");
  const handleGoToLogin = () => navigate("/login");
  const handleGoToRegister = () => navigate("/register");

  const navlist = [
    {
      id: "about",
      name: "About",
      link: "/about",
    },
    {
      id: "academics",
      name: "Academics",
      link: "/academics",
    },
    {
      id: "curriculum",
      name: "Curriculum",
      link: "/curriculum",
    },
    {
      id: "notices",
      name: "Notices",
      link: "/notices",
    },
    {
      id: "gallery",
      name: "Gallery",
      link: "/gallery",
    },
    {
      id: "contact",
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);     
    if (isOpen) {
        document.body.style.overflow = "auto";  
    } else {
        document.body.style.overflow = "hidden";    
    }
  }

  const handleLogout = async () => {
    // try {
    //   await authService.logout();
    //   localStorage.removeItem("token");
    //   navigate("/login");
    // } catch (error) {
    //   console.error("Logout error:", error);
    // }
  };

  return (
    <div className="flex w-full flex-col">
      {/* Top Bar: Date & Auth */}
      <div className="bg-[#127492] text-white text-sm dark:bg-[#127492] dark:text-gray-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 sm:px-6 md:flex-row lg:px-8">
          {/* Date Info */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-center md:justify-start">
            <FaRegCalendarCheck />
            <span>{engDay} |</span>
            <span>{engDate} |</span>
            <span>{todayBangla} |</span>
            <span>{hijriDate}</span>
          </div>

          {/* Auth Links */}
          <div className="flex items-center gap-3 font-medium">
            {user ? (
              <div className="flex items-center gap-2 cursor-pointer">
                <span>{user?.name}</span>
                {user?.role !== "user" && (
                  <>
                    <span className="text-xs text-gray-400">|</span>
                    <span
                      className="text-xs text-gray-400"
                      onClick={() => navigate("/dashboard")}
                    >
                      ({user?.role})
                    </span>
                  </>
                )}

                <FaRightToBracket title="Logout" onClick={handleLogout} />
              </div>
            ) : (
              <>
                <div
                  className="flex items-center gap-1 cursor-pointer hover:underline"
                  onClick={handleGoToLogin}
                >
                  <FaRightToBracket />
                  <span>Login</span>
                </div>
                <span>|</span>
                <div
                  className="flex items-center gap-1 cursor-pointer hover:underline"
                  onClick={handleGoToRegister}
                >
                  <FaUserPlus />
                  <span>Register</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Header Body: Logo + Tagline */}
      <div className="bg-white transition-colors">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:px-6 md:flex-row lg:px-8">
          {/* Logo Section */}
          <div
            className="flex cursor-pointer flex-row items-center gap-2 transition-transform duration-200 hover:scale-105"
            onClick={handleGotoHome}
          >
            <img
              src={flag}
              alt="logo"
              className="w-[90px] rounded-full border-2 border-emerald-800 sm:w-[90px] md:w-[80px] lg:w-[80px]"
            />
            <h1 className="text-center text-2xl font-bold text-emerald-800 sm:text-3xl md:text-6xl lg:text-6xl">
              Al-Hikmah Residential School
            </h1>
          </div>

          <div className="w-[200px] bg-gray-200 p-2 text-sm transition-transform duration-200 hover:scale-105">
            <div className="flex flex-row items-center gap-2">
              <FaPhoneSquareAlt />
              <span>Phone:</span>
              <span className="font-bold">+880 2 888 8888</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <FaIdCard />
              <span>EIIN</span>
              <span className="font-bold">123456</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#127492] text-white shadow-md dark:bg-[#127492] dark:text-gray-200">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Left - Logo/Home */}
          <div className="flex items-center gap-2">
            <NavLink to="/" className="flex items-center gap-2 text-xl font-bold">
              <FaHome />
              <span className="hidden sm:inline">Home</span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FaBars size={22} />
            </button>
          </div>

          {/* Menu items */}
          <div
            className={`w-full transition-all duration-300 ease-in-out md:flex md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="mt-3 flex flex-col md:mt-0 md:flex md:flex-row md:space-x-4">
              {navlist.map((cat) => (
                <li key={cat.id}>
                  <NavLink
                    to={cat.link}
                    className={({ isActive }) =>
                      `block rounded px-4 py-2 text-sm font-medium transition duration-300 ${
                        isActive
                          ? "bg-gray-800 text-white dark:bg-gray-800 dark:text-white"
                          : "hover:bg-gray-700 hover:text-white"
                      }`
                    }
                  >
                    {cat.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;