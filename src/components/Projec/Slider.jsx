import { useRef, useState, useEffect } from "react";
import ArrowNav from "./ArrowNav";
import { sliderData } from "../../data";
import "./Slider.css";
import Detail from "./Detail";

const Slider = () => {
    const [animateNext, setAnimateNext] = useState(false);
    const [animatePrev, setAnimatePrev] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const sliderRef = useRef(null);


    useEffect(() => {
        if (showDetail) {
            document.body.style.overflow = "hidden"; // Blocca lo scroll del body
        } else {
            document.body.style.overflow = "auto"; // Ripristina lo scroll quando si chiude la modale
        }
    }, [showDetail]);

    const handleNext = () => {
        const items = sliderRef.current.querySelectorAll(".item");
        sliderRef.current.append(items[0]);

        if (!animateNext) {
            setAnimateNext(true);
            setTimeout(() => {
                setAnimateNext(false);
            }, 1600);
        }
        updateBackgroundImages(); // Aggiorna immagini dopo lo spostamento
    };

    const handlePrev = () => {
        const items = sliderRef.current.querySelectorAll(".item");
        sliderRef.current.prepend(items[items.length - 1]);

        if (!animatePrev) {
            setAnimatePrev(true);
            setTimeout(() => {
                setAnimatePrev(false);
            }, 1600);
        }
        updateBackgroundImages(); // Aggiorna immagini dopo lo spostamento
    };

    const updateBackgroundImages = () => {
        setTimeout(() => {
            const items = sliderRef.current.querySelectorAll(".item");

            items.forEach((item, index) => {
                if (index === 1) {
                    item.style.backgroundImage = `url(${item.dataset.large})`;
                } else {
                    item.style.backgroundImage = `url(${item.dataset.small})`;
                }
            });
        }, 50); // Piccolo delay per evitare problemi di reflow
    };

    useEffect(() => {
        updateBackgroundImages();
    }, []);

    return (
        <div className="slidermain">
            <ul className="slider" ref={sliderRef}>
                {sliderData.map((item, index) => (
                    <li
                        key={index}
                        className="item"
                        data-small={item.smallImage}
                        data-large={item.largeImage}
                        style={{ backgroundImage: `url('${item.smallImage}')` }}
                    >
                        <div className="content">
                            <div className="space-y-3 md:p-6 text-start backdrop-blur-sm bg-black/50 shadow-xl rounded-2xl">
                                <h2 className="font-bold text-md md:text-xl px-2">{item.title}</h2>
                                <p className="leading-relaxed text-xs md:text-[15px] px-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Tempore fuga voluptatum, iure corporis inventore praesentium
                                    nisi. Id laboriosam ipsam enim.
                                </p>
                                <button onClick={() => setShowDetail(true)} className="outline outline-white p-2 text-xs md:text-md md:p-3 rounded-xl mb-2 hover:text-primary duration-200">
                                    Read More
                                </button>
                                {showDetail && (
                                    <div className="fixed inset-0 flex justify-center items-center z-50">
                                        <div className="bg-background w-full h-full p-6 overflow-y-auto relative">
                                            <button
                                                onClick={() => setShowDetail(false)}
                                                className="absolute top-4 right-4 text-xl font-bold">
                                                ✖
                                            </button>
                                            <Detail />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
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
