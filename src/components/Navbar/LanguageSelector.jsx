import { useState, useEffect } from "react";
import i18n from "../../i18n";

export default function LanguageToggle() {
  const [language, setLanguage] = useState(localStorage.getItem("preferredLanguage") || "it");

  useEffect(() => {
    i18n.changeLanguage(language); // Cambia lingua in base allo stato
    localStorage.setItem("preferredLanguage", language);
  }, [language]); // Effetto dipende da language

  const handleToggle = () => {
    setLanguage((prev) => (prev === "it" ? "en" : "it")); // Cambia lingua
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-30 h-10 rounded-full border-2 border-primary cursor-pointer transition-colors duration-500 ease-in-out ${
          language === "en" ? "bg-blue-900/50" : "bg-green-600/50"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white bg-cover bg-center transition-transform duration-500 ease-in-out ${
            language === "en" ? "translate-x-20" : "translate-x-0"
          }`}
          style={{
            backgroundImage: `url(${
              language === "en"
                ? "https://m.media-amazon.com/images/I/61dHFpZmRSL._AC_UF1000,1000_QL80_.jpg"
                : "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
            })`,
          }}
        ></div>
        <span
          className={`absolute top-1/2 transform -translate-y-1/2 text-white font-bold text-lg transition-all duration-500 ease-in-out ${
            language === "en" ? "left-2" : "left-11"
          }`}
        >
          {language === "en" ? "English" : "Italiano"}
        </span>
      </div>
    </div>
  );
}
