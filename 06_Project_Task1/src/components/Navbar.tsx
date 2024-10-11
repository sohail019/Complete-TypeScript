import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { logoutUser } from "../features/userSlice";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()


  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/login")
  }

  return (
    <nav className="relative container mx-auto p-6 border-b-2 border-b-brightRed mb-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">Project Task 1</div>

        {/* Theme Toggle */}
        <div
          onClick={toggleTheme}
          className="md:hidden flex items-center cursor-pointer mr-4 text-xl"
        >
          {theme === "light" ? (
            <MdLightMode className="text-gray-900" />
          ) : (
            <MdDarkMode className="text-gray-100" />
          )}
          <p className="ml-2 text-sm text-gray-900 dark:text-gray-100">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </p>
        </div>

        {/* Menu Items */}
        <div className="hidden space-x-10 md:flex">
          <Link
            to="/"
            className="hover:text-brightRed dark:hover:text-brightRedLight"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-brightRed dark:hover:text-brightRedLight"
          >
            About
          </Link>
          {!currentUser && (
            <>
              <Link
                to="/signup"
                className="hover:text-brightRed dark:hover:text-brightRedLight"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="hover:text-brightRed dark:hover:text-brightRedLight"
              >
                Login
              </Link>
            </>
          )}
          <Link
            to="/contact"
            className="hover:text-brightRed dark:hover:text-brightRedLight"
          >
            Contact
          </Link>
          <Link
            to="/formik-signup"
            className="hover:text-brightRed dark:hover:text-brightRedLight"
          >
            Formik Signup
          </Link>
          <Link
            to="/default-data"
            className="hover:text-brightRed dark:hover:text-brightRedLight"
          >
            Default Data
          </Link>
        </div>
        <div
          onClick={toggleTheme}
          className="hidden p-2 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight cursor-pointer  md:flex items-center"
        >
          <motion.div
            key={theme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex items-center"
          >
            {theme === "light" ? (
              <MdLightMode className="text-gray-900" />
            ) : (
              <MdDarkMode className="text-gray-100" />
            )}
          </motion.div>
          <motion.p
            key={`${theme}-text`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="ml-2 text-sm text-gray-900 dark:text-gray-100"
          >
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </motion.p>
        </div>
        {/* Button */}
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Login
          </Link>
        )}

        {/* Hamburger Icon */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={`${
              toggleMenu
                ? "absolute flex flex-col items-center self-end py-8 mt-8 space-y-4 font-bold bg-brightRedLight text-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md animate-fadeInDown"
                : "hidden"
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
