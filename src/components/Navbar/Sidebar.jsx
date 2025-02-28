import { useState } from "react";
import "./Sidebar.css";
import ChangeTheme from "./ChangeTheme";
import LanguageToggle from "./LanguageSelector";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="lg:hidden md:hidden fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="relative">
                {/* Bottone Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`btn ${isOpen ? "active" : "not-active"} fixed top-5 right-5 z-50`}
                >
                    <span className="spanPers"></span>
                    <span className="spanPers"></span>
                    <span className="spanPers"></span>
                </button>

                {/* Menu Sidebar */}
                <ul
                    className={`fixed top-0 left-0 w-full h-full bg-background/10 backdrop-blur-xs flex flex-col items-center justify-center space-y-6 text-xl transform transition-transform duration-500 ${
                        isOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
                >
                    <li><a href="#" className="text-white hover:text-primary font-semibold">Home</a></li>
                    <li><a href="about" className="text-white hover:text-primary font-semibold">About</a></li>
                    <li><a href="#" className="text-white hover:text-primary font-semibold">Info</a></li>
                    <li><a href="#" className="text-white hover:text-primary font-semibold">Contact</a></li>
                    <li><a href="#" className="text-white hover:text-primary font-semibold">More</a></li>

                    {/* ChangeTheme e LanguageToggle scendono con il menu */}
                    <div className="flex flex-col items-center space-y-10 mt-6">
                        <ChangeTheme />
                        <LanguageToggle />
                    </div>
                </ul>
            </div>
        </nav>
    );
}
