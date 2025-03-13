import React, { useRef, useState } from 'react';
import ArrowNav from './ArrowNav';
import './Slider.css';
import img1 from "../assets/Villaoliva.png"
import img2 from "../assets/Autotrasporti.png"


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

    const sliderData = [
        {
            title: "Lossless Youths",
            image: img1
        },
        {
            title: "Estrange Bond",
            image: img2
        },
        {
            title: "The Gate Keeper",
            image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg"
        },
        {
            title: "The Gate Keeper",
            image: "https://i.redd.it/tc0aqpv92pn21.jpg"
        },
    ];



    return (
        <main>
            <ul className="slider" ref={sliderRef}>
                {sliderData.map((item, index) => (
                    <li key={index} className="item" style={{ backgroundImage: `url('${item.image}')` }}>
                        <div className="content">
                            <h2 className="title">{item.title}</h2>
                            <p className="description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                            </p>
                            <button>Read More</button>
                        </div>
                    </li>
                ))}
            </ul>
            <ArrowNav onNext={handleNext} onPrev={handlePrev} animateNext={animateNext} animatePrev={animatePrev} />
        </main>
    );
};

export default Slider;