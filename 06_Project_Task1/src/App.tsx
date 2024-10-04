import { Navbar } from "./components/Navbar";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader";

export const App = () => {
  const [loading, setLoading] = useState(true)
  const {theme} = useContext(ThemeContext )

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className={`${
      theme === "dark" ? "dark" : ""
    } `}>
      {
        loading ? (<Loader />) :
        <>
        <Navbar />
        <Outlet/>
        </>
      }
    </div>
  );
};
