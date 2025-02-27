// import Sidebar from "./Sidebar";
import ChangeTheme from "./ChangeTheme";
import LanguageToggle from "../LanguageSelector";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../data";
import { scrollToSection } from "../../data";

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let closestIndex = -1;
            let closestDistance = Infinity;

            navLinks.slice(0, 4).forEach((item, index) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);

                    if (distanceFromCenter < closestDistance) {
                        closestDistance = distanceFromCenter;
                        closestIndex = index;
                    }
                }
            });

            if (closestIndex !== -1 && closestIndex !== activeIndex) {
                setActiveIndex(closestIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeIndex]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="w-full flex items-center justify-between p-4">
                <div className="flex items-center font-bold text-2xl">
                    JS
                </div>
                <div className="hidden font-medium pe-20 sm:flex gap-3 flex-grow justify-center">
                    {navLinks.slice(0, 4).map((item, index) => (
                        <div key={index} className="relative">
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                                className="relative px-3 py-2 pb-4 transition-all duration-300 ease-in-out"
                            >
                                <span className="relative z-10">{item.name}</span>
                                {activeIndex === index && (
                                    <motion.span
                                        layoutId="background"
                                        className="absolute -inset-x-2 -inset-y-1 top-0 bottom-2 rounded-2xl bg-gradient-to-t from-primary via-primary/40 to-transparent"
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                )}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <ChangeTheme />
                    <LanguageToggle/>
                </div>
                {/* <Sidebar /> */}
            </div>
        </nav>
    );
}
