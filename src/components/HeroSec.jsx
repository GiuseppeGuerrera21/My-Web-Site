import blob1 from "../assets/blob1.png"
import blob2 from "../assets/blob2.png"
import me from "../assets/giuseppe.png"
import { customSvg } from "../data"
export default function HeroSec() {
    return (
        <>
            <header id="home" className="relative z-10 w-full h-screen bg-[url('/bg.png')] bg-cover bg-center">
                <div className="flex flex-col items-start -space-y-8 justify-center h-full ps-32">
                    <p className="text-2xl ps-1 pb-4">HELLO I’M</p>
                    <h1 className=" text-[90px] font-bold">Giuseppe Guerrera </h1>
                    <h2 className=" text-[78px] font-bold">Full Stack Developer</h2>
                    <p className="text-2xl pt-8">BASED IN BARI</p>
                    <div className="pt-13 flex flex-wrap gap-7">
                        {customSvg.map((item) => (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d={item.customD}></path>
                            </svg>
                        ))}
                    </div>
                </div>
                <img className="absolute w-[480px] -top-5 right-28 " src={me} alt="Foto di me stesso" ></img>
            </header>
            <img className="absolute top-0 left-0" src={blob1} alt="Blob 1"></img>
            <img className="absolute top-160 right-0" src={blob2} alt="Blob 2"></img>
        </>
    )
}