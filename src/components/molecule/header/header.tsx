import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Brandlogo } from "../../../assets";

const Header = () => {
  const location = useLocation();
  const currLocation = location.pathname;

  return (
    <header className="flex items-center justify-between px-20 py-5">
      <div className="left-side flex items-center gap-6">
        <div className="logo flex items-center gap-2">
          <img src={Brandlogo} alt="brand-logo" className="h-6 w-[133px]" />
          <div className="line h-6 w-[2px] bg-abu"></div>
          <p className="text-sm text-abu">Assesment</p>
        </div>
        <nav>
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
        <p className="cursor-pointer font-normal text-biru-2">Login</p>
      </div>
    </header>
  );
};

export default Header;
