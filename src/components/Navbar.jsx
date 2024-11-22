import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSalesforce } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b
    boder-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-cyan-700 to-yellow-400 bg-clip-text
      text-transparent opacity-80 text-2xl font-semibold transition-all duration-300
      hover:opacity-100">Francisco</a>

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

      {isOpen ? (
        <BiX className="block md:hidden text-4xl opacity-80 hover:opacity-100 cursor-pointer"
              onClick={menuOpen}/>
      ) : (
        <BiMenu className="block md:hidden text-4xl opacity-80 hover:opacity-100 cursor-pointer"
              onClick={menuOpen}/>
      )}

      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2
        flex-col item-start justify-start gap-10 border-1 border-gray-800
        bg-black/90 p-12 md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-8">
            <a href="#home" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100">
              <li>Home</li>
            </a>
            <a href="#tech" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100">
              <li>Tech</li>
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
          <ul className="flex flex-wrap gap-5">
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

        </div>
      )}
    </nav>
  )
}

export default Navbar;