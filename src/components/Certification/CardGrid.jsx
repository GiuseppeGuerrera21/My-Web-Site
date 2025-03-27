import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cards } from "../../data";
import Vanta from "./Vanta";


export default function ExpandableCards() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [isExpanding, setIsExpanding] = useState(false);

    useEffect(() => {
        if (selectedCard) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedCard]);

    const handleCardClick = (card) => {
        setIsExpanding(true);
        setTimeout(() => setSelectedCard(card), 600);
    };

    const handleClose = () => {
        setSelectedCard(null);
        setIsExpanding(false);
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto">
            {cards.map((card) => (
                <motion.div
                    key={card.id}
                    layoutId={`card-${card.id}`}
                    className={`relative cursor-pointer p-6 rounded-xl shadow-lg text-white ${card.color}`}
                    whileHover={!isMobile ? { scale: 1.05 } : {}}
                    onClick={() => handleCardClick(card)}
                >
                    <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-40 md:h-60 object-center rounded-md"
                        animate={isExpanding ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <motion.h1
                        className="mt-4 text-2xl md:text-3xl text-center font-title font-semibold"
                        animate={isExpanding ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        {card.title}
                    </motion.h1>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        layoutId={`card-${selectedCard.id}`}
                        className={`fixed inset-0 z-50 ${selectedCard.color}`}
                        initial={{ scale: 1 }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut"
                            }
                        }}
                        exit={{
                            scale: 1,
                            transition: { duration: 0.3 }
                        }}
                        onClick={handleClose}
                    >
                        <Vanta />
                        <motion.div
                            className="w-full h-full flex flex-col items-center justify-start p-6 overflow-y-auto"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.6 }
                            }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedCard.image}
                                alt={selectedCard.title}
                                className="w-full md:w-2/3 h-auto md:h-[650px] object-center rounded-md"
                            />
                            <h1 className="mt-4 text-2xl md:text-3xl font-bold font-title">{selectedCard.title}</h1>
                            <p className="mt-4 text-white text-base md:text-lg leading-relaxed p-6 backdrop-blur-md bg-black/10 shadow-xl rounded-2xl">
                                {selectedCard.description}
                            </p>
                            <button
                                className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                                onClick={handleClose}
                            >
                                Chiudi
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}