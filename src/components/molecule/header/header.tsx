import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Brandlogo } from "../../../assets";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const currLocation = location.pathname;
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="sticky flex items-center justify-between p-5 sm:px-20 sm:py-5">
      <div className="left-side flex items-center gap-6">
        <div className="logo flex items-center gap-2">
          <img src={Brandlogo} alt="brand-logo" className="h-6 w-[133px]" />
          <div className="line h-6 w-[2px] bg-abu"></div>
          <p className="text-sm text-abu">Assesment</p>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-12 font-normal">
            <li
              className={`cursor-pointer ${
                currLocation === "/" ? "text-merah" : "text-black"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`cursor-pointer ${
                currLocation === "/article" ? "text-merah" : "text-black"
              }`}
            >
              <Link to="/article">Article</Link>
            </li>
            <li
              className={`cursor-pointer ${
                currLocation === "/create" ? "text-merah" : "text-black"
              }`}
            >
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <p className="hidden cursor-pointer font-normal text-biru-2 sm:block">
          Login
        </p>
        <div className="hamburger">
          {menu ? (
            <IoClose
              className="cursor-pointer text-2xl sm:hidden"
              onClick={handleMenu}
            />
          ) : (
            <BiMenu
              className="cursor-pointer text-2xl sm:hidden"
              onClick={handleMenu}
            />
          )}
        </div>
      </div>
      <div
        className={
          menu
            ? "absolute top-full left-0 block h-screen w-full bg-white"
            : "hidden"
        }
      >
        <nav>
          <ul className="flex flex-col items-center gap-8 py-4 text-lg font-normal">
            <li
              className={`cursor-pointer ${
                currLocation === "/" ? "text-merah" : "text-black"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`cursor-pointer ${
                currLocation === "/article" ? "text-merah" : "text-black"
              }`}
            >
              <Link to="/article">Article</Link>
            </li>
            <li
              className={`cursor-pointer ${
                currLocation === "/create" ? "text-merah" : "text-black"
              }`}
            >
              <Link to="/create">Create</Link>
            </li>
            <li className={`cursor-pointer text-biru-2`}>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
