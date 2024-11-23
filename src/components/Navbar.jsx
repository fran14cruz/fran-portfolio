import { useState, useEffect, useRef } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSalesforce } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // track menu container

  // function to toggle the menu
  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  }

  // Close the menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menu when link clicked on mobile menu
  const handleMenuClick = () => {
    setIsOpen(false);
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b
    boder-b-gray-700 bg-slate-950/75 px-16 py-6 text-white backdrop-blur-md md:justify-evenly" ref={menuRef}>
      <a href="#home" className="bg-gradient-to-r from-cyan-700 to-yellow-400 bg-clip-text
      text-transparent opacity-80 text-2xl font-semibold transition-all duration-300
      hover:opacity-100">Francisco</a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100">
          <li>Technologies</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70
        transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>
      </ul>

      {/* Desktop Social Links */}
      <ul className="hidden md:flex gap-5">
        <li className="text-xl opacity-70 transition-all
        duration-300 hover:text-[#9cae02] hover:opacity-100">
          <a href="https://www.linkedin.com/in/fran14cruz" target="_blank">
            <BsLinkedin />
          </a>
        </li>
        <li className="text-xl opacity-70 transition-all
        duration-300 hover:text-[#9cae02] hover:opacity-100">
          <a href="https://www.github.com/fran14cruz" target="_blank">
            <BsGithub />
          </a>
        </li>
        <li className="text-2xl opacity-70 transition-all
        duration-300 hover:text-[#9cae02] hover:opacity-100">
          <a href="https://www.salesforce.com/trailblazer/fran14a" target="_blank">
            <FaSalesforce />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl opacity-80 hover:opacity-100 cursor-pointer"
              onClick={toggleMenu} />
      ) : (
        <BiMenu className="block md:hidden text-4xl opacity-80 hover:opacity-100 cursor-pointer"
              onClick={toggleMenu} />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2
        flex-col item-start justify-start gap-10 border-1 border-gray-800
        bg-black/85 p-12 md:hidden block`}>
          <ul className="flex flex-col gap-8">
            <a href="#home" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100" onClick={handleMenuClick}>
              <li>Home</li>
            </a>
            <a href="#tech" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100" onClick={handleMenuClick}>
              <li>Tech</li>
            </a>
            <a href="#projects" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100" onClick={handleMenuClick}>
              <li>Projects</li>
            </a>
            <a href="#contact" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100" onClick={handleMenuClick}>
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="text-xl opacity-70 transition-all
            duration-300 hover:text-[#9cae02] hover:opacity-100">
              <a href="https://www.linkedin.com/in/fran14cruz"
                target="_blank" onClick={handleMenuClick}>
                <BsLinkedin />
              </a>
            </li>
            <li className="text-xl opacity-70 transition-all
            duration-300 hover:text-[#9cae02] hover:opacity-100">
              <a href="https://www.github.com/fran14cruz"
                target="_blank" onClick={handleMenuClick}>
                <BsGithub />
              </a>
            </li>
            <li className="text-2xl opacity-70 transition-all
            duration-300 hover:text-[#9cae02] hover:opacity-100">
              <a href="https://www.salesforce.com/trailblazer/fran14a"
                target="_blank" onClick={handleMenuClick}>
                <FaSalesforce />
              </a>
          </li>
          </ul>

        </div>
      )}
    </nav>
  )
}

export default Navbar;