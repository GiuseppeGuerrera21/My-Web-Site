import { useEffect, useRef } from "react";

const Vanta2 = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = window.VANTA.HALO({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00


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

export default Vanta2;
