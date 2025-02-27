import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState("dark");

    useEffect(() => {
        document.body.className = darkMode ? "bg-gray-900 text-white" : "bg-white text-black";
    }, [darkMode]);

    return (
        <div className={`flex mt-4 p-2 rounded-full shadow-md transition-all duration-300 ${darkMode === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`}>
            <button
                onClick={() => setDarkMode("light")}
                className={`px-4 py-2 text-lg rounded-full transition-all duration-300 ${darkMode === "light" ? "bg-white shadow-inner" : "bg-transparent"}`}
            >
                Light
            </button>
            <button
                onClick={() => setDarkMode("dark")}
                className={`px-4 py-2 text-lg rounded-full transition-all duration-300 ${darkMode === "dark" ? "bg-gray-700 shadow-inner text-white" : "bg-transparent"}`}
            >
                Dark
            </button>
        </div>
    );
}

// import { useState } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <section
//       className={`w-full h-screen flex flex-col items-center justify-center transition-all duration-700 ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-gray-100"}`}
//     >
//       <header className="text-center">
//         <h2 className="uppercase tracking-wider text-lg font-medium">
//           Dark + Light Mode
//         </h2>
//         <h1 className="text-3xl font-bold">So hot right now.</h1>
//       </header>
//       <div className="flex mt-4 p-2 rounded-full shadow-md transition-all duration-300 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`">
//         <button
//           onClick={() => setTheme("light")}
//           className={`px-4 py-2 text-lg rounded-full transition-all duration-300 ${theme === "light" ? "bg-white shadow-inner" : "bg-transparent"}`}
//         >
//           Light
//         </button>
//         <button
//           onClick={() => setTheme("dark")}
//           className={`px-4 py-2 text-lg rounded-full transition-all duration-300 ${theme === "dark" ? "bg-gray-700 shadow-inner text-white" : "bg-transparent"}`}
//         >
//           Dark
//         </button>
//       </div>
//     </section>
//   );
// }
