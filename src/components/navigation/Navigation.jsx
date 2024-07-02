import { useState, useRef, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaChevronCircleDown } from "react-icons/fa";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import MoreNavigation from "./MoreNavigation";

const Navigation = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [shadowNavbar, setShadowNavbar] = useState(false);
  const [moreNavbarIsOpen, setMoreNavbarIsOpen] = useState(false);

  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navbarRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
        setNavbarIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadowNavbar(true);
      } else {
        setShadowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`sticky z-50 top-0 right-0 flex items-center justify-between p-3 lg:justify-center lg:gap-8 bg-primary ${shadowNavbar ? "shadow-lg" : ""}`}>
      <div className="w-14 lg:w-20">
        <img src={Logo} alt="Logo" />
      </div>
      <div onClick={() => setNavbarIsOpen(!navbarIsOpen)} ref={menuRef} className="md:hidden">
        <IoMdMenu size={24} />
      </div>
      <div ref={navbarRef} className={`absolute top-0 bg-primary p-8 h-screen shadow-lg transition-all duration-300 ${navbarIsOpen ? "right-0" : "right-[-100%]"} md:static md:h-full md:shadow-none md:flex md:items-center md:gap-52`}>
        <div className="flex justify-between ">
          <ul className="font-bold flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-10">
            <li className="cursor-pointer">
              <Link to="/">Episodes</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer flex items-center relative" onClick={() => setMoreNavbarIsOpen(!moreNavbarIsOpen)}>
              More
              <FaChevronCircleDown className="inline-block ms-2" />
              {moreNavbarIsOpen && <MoreNavigation />}
            </li>
          </ul>
          <IoMdClose onClick={() => setNavbarIsOpen(!navbarIsOpen)} className="md:hidden" />
        </div>
        <div className="flex gap-2 text-[10px] mt-3 md:text-[12px] md:mt-0 lg:text-[14px]">
          <button className="px-2 py-1 rounded-md border-2 border-black lg:px-6 lg:py-2 hover:bg-black hover:text-white duration-300">RECENT EPISODES</button>
          <button className="px-2 py-1 rounded-md border-2 bg-black text-white border-black lg:px-6 lg:py-2 hover:bg-white hover:text-black duration-300 shadow-btnShadowSmall">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
