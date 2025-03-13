import React, { useRef, useState } from 'react';
import ArrowNav from './ArrowNav';
import { sliderData } from '../data';
import './Slider.css';

const Slider = () => {
    const [animateNext, setAnimateNext] = useState(false);
    const [animatePrev, setAnimatePrev] = useState(false);

    const sliderRef = useRef(null);

    const handleNext = () => {
        const items = sliderRef.current.querySelectorAll('.item');
        sliderRef.current.append(items[0]);

        if (!animateNext) {
            setAnimateNext(true);
            setTimeout(() => {
                setAnimateNext(false);
            }, 1600);
        }
    };

    const handlePrev = () => {
        const items = sliderRef.current.querySelectorAll('.item');
        sliderRef.current.prepend(items[items.length - 1]);

        if (!animatePrev) {
            setAnimatePrev(true);
            setTimeout(() => {
                setAnimatePrev(false);
            }, 1600);
        }
    };

    return (
        <main>
            <ul className="slider" ref={sliderRef}>
                {sliderData.map((item, index) => (
                    <li key={index} className="item" style={{ backgroundImage: `url('${item.image}')` }}>
                        <div className="content">
                            <div className="space-y-5 p-6 backdrop-blur-sm bg-black/50 shadow-xl rounded-2xl">
                            <h2 className="font-bold text-lg">{item.title}</h2>
                            <p className="leading-relaxed ">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                            </p>
                            <button className="outline outline-white p-3 rounded-xl">Read More</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <ArrowNav onNext={handleNext} onPrev={handlePrev} animateNext={animateNext} animatePrev={animatePrev} />
        </main>
    );
};

export default Slider;