import blob1 from "../assets/blob1.png"
import blob2 from "../assets/blob2.png"
import me from "../assets/giuseppe.png"
import bg from "../assets/bg.png"
import { customSvg } from "../data"

export default function HeroSec() {
    return (
        <>
            <header
                id="home"
                className="relative z-10 w-full h-screen flex items-center justify-center lg:justify-start"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="relative z-10 flex flex-col md:-space-y-3 lg:-space-y-6 lg:ps-32 -mt-42 md:-mt-50 -ms-10 lg:ms-0 lg:mt-0">
                    <p className="text-2xl md:ps-1 pb-2 md:pb-1 lg:pb-4">HELLO I’M</p>
                    <h1 className="text-[36px] md:text-[70px] lg:text-[90px] font-bold pb-2 md:pb-0">Giuseppe Guerrera </h1>
                    <h2 className="text-[30px] md:text-[63px] lg:text-[78px] font-bold">Full Stack Developer</h2>
                    <p className="text-2xl pt-4 lg:pt-7">BASED IN BARI</p>
                    <div className=" flex flex-row pt-5 md:pt-8 lg:pt-13 gap-7">
                        {customSvg.map((item, index) => (
                            <a href={item.link}>
                                <svg key={index} link={item.link} xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" className="w-10 h-10 md:w-14 md:h-14" viewBox="0 0 50 50">
                                    <path d={item.customD}></path>
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
                <img className="absolute md:block w-[290px] md:w-[400px] lg:w-[480px] bottom-0 right-0 lg:right-26" src={me} alt="Foto di me stesso" ></img>
            </header>
            <img className="absolute top-0 left-0" src={blob1} alt="Blob 1"></img>
            <img className="absolute top-160 right-0" src={blob2} alt="Blob 2"></img>
        </>
    )
}
