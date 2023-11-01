import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menu from '../assets/menu.png';
import { LogoData, NavbarData } from "@/lib/data";
import { LightMode, DarkMode } from "@mui/icons-material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  return (
    <nav className={`bg-${isDarkMode ? 'black' : 'pink-700'} p-4 sm:p-2 md:p-4 lg:p-4 xl:p-4 ${isOpen ? 'h-auto' : 'h-16'} transition-all duration-300`}>
      <div className="container mx-auto sm:w-full flex justify-between items-center">
        <Link href="/">
          <p className={`text-${isDarkMode ? 'white' : 'black'} text-2xl font-bold `}>{LogoData.name}</p>
        </Link>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className={`text-${isDarkMode ? 'white' : 'black'} text-xl focus:outline-none flex items-center `}>
            <Image src={menu} alt="Menu" width={30} height={30} />
          </button>
        </div>
        <div className={`sm:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {NavbarData.items.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className={`text-${isDarkMode ? 'white' : 'black'} hover:underline cursor-pointer`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`text-xl focus:outline-none flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}
        >
          {isDarkMode ? <DarkMode /> : <LightMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
