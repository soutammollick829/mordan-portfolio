import logo from "../../../assets/logo/Clean Software Developer Circle Logo Design.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="font-semibold hover:text-sky-700 hover:underline font-serif">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold hover:text-sky-700 hover:underline font-serif">
        <a>About Me</a>
      </li>
      <li className="font-semibold hover:text-sky-700 hover:underline font-serif">
        <a>Services</a>
      </li>
      <li className="font-semibold hover:text-sky-700 hover:underline font-serif">
        <a>Project</a>
      </li>
      <li className="font-semibold hover:text-sky-700 hover:underline font-serif">
        <a>Contact Me</a>
      </li>
    </>
  );
  return (
    <>
      <div className="lg:flex justify-between items-center bg-[#E9BA48] text-sky-700 text-center space-y-2 lg:space-y-0">
        <p className="inline-flex items-center ml-5 mt-2 lg:mt-0"><FaPhoneAlt /> +8801941238258</p>
        <p className="inline-flex items-center gap-2"><FaRegEnvelope/>    soutammollick829@gmail.com</p>
        <div className="flex gap-5 ml-32 lg:ml-0">
        <a href="https://www.facebook.com/mallick.somudro" target="blank">
        <FaFacebook className="text-3xl hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/soutam-mallick-158897285/" target="blank">
        <FaLinkedin className="text-3xl hover:text-white"/>
        </a>
        <a href="https://github.com/soutammollick829?tab=repositories" target="blank">
        <FaGithub className="text-3xl hover:text-white"/>
        </a>
        </div>
        <button className="btn btn-outline rounded-none text-white border-1 bg-sky-700 border-sky-700 w-full lg:w-32 uppercase">Hire Me !</button>
      </div>
      <div className="navbar bg-black bg-opacity-10 h-14">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 h-72 space-y-5"
            >
              {navOptions}
            </ul>
          </div>
          <img className="w-48 ml-12 lg:ml-0" src={logo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-52">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
