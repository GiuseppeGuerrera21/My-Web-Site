import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ProgressBar = ({ label, value }) => {
    const controls = useAnimation();
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        controls.start({ width: `${value}%`, opacity: 1, transition: { duration: 2 } });

        let start = 0;
        const interval = setInterval(() => {
            start += 1;
            setPercent(start);
            if (start >= value) clearInterval(interval);
        }, 2000 / value);

        return () => clearInterval(interval);
    }, [controls, value]);

    return (
        <div className="mb-4">
            <p className="text-xl font-bold mb-1">{label}</p>
            <div className="bg-gray-100 rounded-full relative h-10 w-full overflow-hidden">
                <motion.div
                    className="bg-gradient-to-l from-background to-primary shadow-md text-white flex items-center justify-center h-full rounded-full"
                    initial={{ width: "0%", opacity: 0 }}
                    animate={controls}
                >
                    {percent}%
                </motion.div>
            </div>
        </div>
    );
};

export default ProgressBar;