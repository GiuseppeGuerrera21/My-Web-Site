import { useEffect, useRef } from "react";

const Vanta = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = window.VANTA.FOG({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            highlightColor: 0xde005b,
            midtoneColor: 0xf7002f,
            lowlightColor: 0xffffff,
            baseColor: 0x50543,
            speed: 3.20,
            zoom: 1.50
            
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="absolute -z-10 top-0 left-0 w-full h-full"
        ></div>
    );
};

export default Vanta;
