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
        id: "accademics",
        name: "Academics",
        link: "/accademics",
    },
    {
        id: "carriculum", 
        name: "Curriculum",
        link: "/carriculum",
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
    <div className="flex flex-col w-full">
      {/* Top Bar: Date & Auth */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-4 py-2 bg-[#127492] text-white text-sm dark:bg-[#127492] dark:text-gray-200">
        {/* Date Info */}
        <div className="flex flex-wrap items-center gap-2 text-center">
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

      {/* Header Body: Logo + Tagline */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-16 py-4 items-center px-4 py-2 gap-2 bg-white  transition-colors">
        {/* Logo Section */}
        <div
          className="flex flex-row gap-2 items-center cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={handleGotoHome}
        >
          <img
            src={flag}
            alt="logo"
            className="w-[90px] sm:w-[90px] md:w-[80px] lg:w-[80px] rounded-full border-2 border-emerald-800"
          />
          <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-6xl font-bold text-center text-emerald-800">
            Al-Hikmah Residential School
          </h1>
        </div>

        {/* Tagline or Right Content */}
        {/* <div className="">
          <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-center text-emerald-800">
            Al-Hikmah Residential School
          </h1>
        </div> */}

         <div
          className="w-[200px] bg-gray-200 p-2 text-sm cursor-pointer transition-transform duration-200 hover:scale-105"
          // onClick={handleGotoHome}
          
        >
          <div className="flex flex-row gap-2 items-center">
            <FaPhoneSquareAlt />
            <span>Phone:</span>
            <span className="font-bold">+880 2 888 8888</span>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <FaIdCard />
            <span>EIIN</span>
            <span className="font-bold">123456</span>
          </div>
          
        </div>
      </div>

        <nav className="bg-[#127492] text-white dark:bg-[#127492] dark:text-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
            {/* Left - Logo/Home */}
            <div className="flex items-center gap-2">
            <NavLink to="/" className="text-xl font-bold flex items-center gap-2">
                <FaHome />
                <span className="hidden sm:inline">Home</span>
            </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="block md:hidden">
            <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
            >
                <FaBars size={22} />
            </button>
            </div>

            {/* Menu items */}
            <div
            className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${
                isOpen ? "block" : "hidden"
            }`}
            >
            <ul className="md:flex md:space-x-4 flex flex-col md:flex-row mt-3 md:mt-0">
                {navlist.map((cat) => (
                <li key={cat.id}>
                    <NavLink
                    to={`/newsfeed/${cat.id}`}
                    className={({ isActive }) =>
                        `block px-4 py-2 text-sm font-medium rounded transition duration-300 ${
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

            {/* Search bar */}
            {/* <div className="mt-3 md:mt-0 md:ml-4 flex items-center w-full md:w-auto">
                <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-l bg-white text-gray-800 w-full md:w-64 focus:outline-none dark:bg-gray-100 dark:text-gray-900"
                />
                <button className="bg-[#116A7B] hover:bg-[#0F4C5C] text-white px-4 py-1 rounded-r transition duration-300">
                Search
                </button>
            </div> */}

            {/* <div className="flex items-center gap-2 position-absolute">
                <ThemeToggle />
            </div> */}
            </div>
        </div>
        </nav>
      
    </div>
  );
};

export default Header;