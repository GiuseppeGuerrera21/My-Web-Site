import { useState, useEffect, useRef } from "react";

const ProgressBar = ({ label, value }) => {
    const [percent, setPercent] = useState(0);
    const [width, setWidth] = useState("0%");
    const progressRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        let start = 0; // Spostato qui per garantire il reset

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    clearTimeout(timeoutRef.current); // Evita che rimangano timeout pendenti
                    start = 0; // Reset variabile di conteggio
                    setPercent(0);
                    setWidth("0%");

                    const totalTime = 2000;
                    let interval = totalTime / value;

                    const updateProgress = () => {
                        start += 1;

                        if (start >= value * 0.8) {
                            interval *= 1.15;
                        }

                        setPercent(start);
                        setWidth(`${start}%`);

                        if (start < value) {
                            timeoutRef.current = setTimeout(updateProgress, interval);
                        }
                    };

                    timeoutRef.current = setTimeout(updateProgress, interval);
                } else {
                    clearTimeout(timeoutRef.current); // Cancella animazione in corso
                    start = 0;
                    setPercent(0);
                    setWidth("0%");
                }
            },
            { threshold: 0.5 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
            clearTimeout(timeoutRef.current);
        };
    }, [value]);

    return (
        <div ref={progressRef} className="mb-4">
            <p className="text-xl font-pers font-bold pb-2">{label}</p>
            <div className="bg-gray-100 rounded-full relative h-10 w-full overflow-hidden mb-10">
                <div
                    className="bg-gradient-to-l from-background to-primary shadow-md text-white flex items-center justify-center h-full font-number rounded-full transition-all duration-200"
                    style={{ width, transition: "width 0.2s ease-out" }}
                >
                    {percent}%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
