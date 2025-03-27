import { useRef, useState, useEffect } from "react";
import ArrowNav from "./ArrowNav";
import { sliderData } from "../../data";
import "./Slider.css";
import Detail from "./Detail";
import { motion } from "framer-motion";

const Slider = () => {
    const [animateNext, setAnimateNext] = useState(false);
    const [animatePrev, setAnimatePrev] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [currentItem, setCurrentItem] = useState(sliderData[0]);
    const sliderRef = useRef(null);

    const handleNext = () => {
        const items = sliderRef.current.querySelectorAll(".item");
        sliderRef.current.append(items[0]);

        // Aggiorna currentItem con il nuovo elemento centrale (che ora è items[1])
        const newCurrentIndex = (sliderData.findIndex(item =>
            item.largeImage === items[1].dataset.large
        )) % sliderData.length; // Parentesi aggiunta
        setCurrentItem(sliderData[newCurrentIndex]);

        if (!animateNext) {
            setAnimateNext(true);
            setTimeout(() => {
                setAnimateNext(false);
            }, 1600);
        }
        updateBackgroundImages();
    };

    const handlePrev = () => {
        const items = sliderRef.current.querySelectorAll(".item");
        sliderRef.current.prepend(items[items.length - 1]);

        // Aggiorna currentItem con il nuovo elemento centrale (che ora è items[1])
        const newCurrentIndex = (sliderData.findIndex(item =>
            item.largeImage === items[1].dataset.large
        )) % sliderData.length; // Parentesi aggiunta
        setCurrentItem(sliderData[newCurrentIndex]);

        if (!animatePrev) {
            setAnimatePrev(true);
            setTimeout(() => {
                setAnimatePrev(false);
            }, 1600);
        }
        updateBackgroundImages();
    };
    const updateBackgroundImages = () => {
        setTimeout(() => {
            if (!sliderRef.current) return;
            const items = sliderRef.current.querySelectorAll(".item");
            items.forEach((item, index) => {
                const img = new Image();
                img.src = index === 1 ? item.dataset.large : item.dataset.small;
                img.onload = () => {
                    item.style.backgroundImage = `url(${img.src})`;
                };
            });
        }, 150);
    };


    useEffect(() => {
        if (showDetail) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showDetail]);

    useEffect(() => {
        updateBackgroundImages();
    }, []);

    const preloadImages = () => {
        sliderData.forEach(item => {
            const imgLarge = new Image();
            imgLarge.src = item.largeImage;

            const imgSmall = new Image();
            imgSmall.src = item.smallImage;
        });
    };

    useEffect(() => {
        preloadImages();
    }, []);

    return (
        <div className="slidermain">
            <ul className="slider" ref={sliderRef}>
                {sliderData.map((item, index) => (
                    <li
                        key={`${item.title}-${index}`}  // Key più univoca
                        className="item"
                        data-small={item.smallImage}
                        data-large={item.largeImage}
                        style={{ backgroundImage: `url('${item.smallImage}')` }}
                        onClick={() => setCurrentItem(item)}  // Aggiorna currentItem al click
                    >
                        <div className="content">
                            <div className="space-y-3 md:p-6 text-start backdrop-blur-sm bg-black/50 shadow-xl rounded-2xl">
                                <h2 className="font-bold text-md md:text-xl px-2">{item.title}</h2>
                                <p className="leading-relaxed text-sm md:text-[15px] px-2">
                                    {item.description}  {/* Usa la descrizione reale */}
                                </p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentItem(item); // Imposta correttamente l'elemento selezionato
                                        setShowDetail(true);
                                    }}
                                    className="outline outline-white p-2 text-xs md:text-md md:p-3 rounded-xl mb-2 hover:text-primary duration-200"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {showDetail && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/70 z-50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                            scale: { type: "spring", damping: 15, stiffness: 300 }
                        }}
                        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] max-h-[800px] overflow-y-auto relative scrollbar-custom"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setShowDetail(false)}
                            className="absolute top-4 right-4 text-2xl font-bold px-2 rounded-full hover:bg-primary  duration-200"
                        >
                            X
                        </motion.button>
                        <Detail setShowDetail={setShowDetail} item={currentItem} />
                    </motion.div>
                </div>
            )}
            <ArrowNav
                onNext={handleNext}
                onPrev={handlePrev}
                animateNext={animateNext}
                animatePrev={animatePrev}
            />
        </div>
    );
};

export default Slider;