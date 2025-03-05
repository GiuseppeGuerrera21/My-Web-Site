import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import delle immagini
import AulabImage from "../assets/aulab.png";
import ReactImage from "../assets/react.png";

const images = [
    { url: AulabImage, title: "Aulab" },
    { url: ReactImage, title: "Udemy" }
];

export default function Slider() {
    const [items, setItems] = useState(images);

    const nextSlide = () => {
        setItems((prev) => [...prev.slice(1), prev[0]]);
    };

    const prevSlide = () => {
        setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    };

    return (
        <main className="relative flex items-center justify-center h-screen overflow-hidden bg-background">
            <ul className="relative flex items-center justify-center w-full h-full">
                {items.map((item, index) => (
                    <motion.li
                        key={item.url}
                        className={`absolute bg-center bg-cover rounded-xl shadow-lg transition-all duration-700 flex justify-center items-center ${
                            index === 0
                                ? "w-[80vw] h-[70vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 rounded-lg shadow-xl"
                                : index === 1
                                ? "w-[250px] h-[350px] left-[calc(50%+280px)] top-[60%] opacity-80"
                                : index === 2
                                ? "w-[200px] h-[300px] left-[calc(50%+500px)] opacity-60"
                                : index === 3
                                ? "w-[180px] h-[280px] left-[calc(50%+700px)] opacity-40"
                                : "hidden"
                        }`}
                    >
                        <img src={item.url} alt={item.title} className="w-full h-full object-contain rounded-xl" />
                        {index === 0 && (
                            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white w-[30vw] max-w-[200px]">
                                <h2 className="text-2xl font-black uppercase">{item.title}</h2>
                                <p className="mt-2 text-sm text-gray-200">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <button className="mt-4 px-4 py-2 border border-white text-white bg-opacity-20 hover:bg-opacity-40 transition-all">
                                    Read More
                                </button>
                            </div>
                        )}
                    </motion.li>
                ))}
            </ul>
            <nav className="absolute bottom-10 flex gap-4 z-10">
                <button
                    onClick={prevSlide}
                    className="p-3 bg-white bg-opacity-50 hover:bg-opacity-30 border border-black rounded-full"
                >
                    <ChevronLeft className="w-6 h-6 text-black opacity-70" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 bg-white bg-opacity-50 hover:bg-opacity-30 border border-black rounded-full"
                >
                    <ChevronRight className="w-6 h-6 text-black opacity-70" />
                </button>
            </nav>
        </main>
    );
}
