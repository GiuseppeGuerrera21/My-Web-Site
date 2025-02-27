import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState("dark");

    useEffect(() => {
        document.body.className = darkMode ? "bg-background text-white" : "bg-white text-black";
    }, [darkMode]);

    return (
        <button
            className={`flex items-center justify-start w-20 h-10 p-1 border-2 rounded-full border-primary bg-primary/20 relative overflow-hidden cursor-pointer transition duration-1100  ${darkMode ? "text-white shadow-[6px_4px_5px_rgba(255,255,255,0.4)]" : "shadow-[7px_4px_5px_rgba(0,0,0,0.7)]"}`}
            onClick={() => setDarkMode(!darkMode)}
        >
            <div
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 absolute 
                ${darkMode ? "translate-x-9 rotate-180 bg-black text-white shadow-[7px_-2px_10px_rgba(255,255,255,0.3)]" : "translate-x-0 bg-white text-black shadow-[10px_3px_10px_rgba(0,0,0,0.5)]"}`}
            >
                {darkMode ? <Moon size={16} /> : <Sun size={16} />}
            </div>
        </button>
    );
}
