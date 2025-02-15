"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import ChevronLeft from "../../../public/icons/chevron-left-icon.svg";
import ChevronRight from "../../../public/icons/chevron-right-icon.svg";
import BannerOne from "../../../public/banners/banner-1.png"
import BannerTwo from "../../../public/banners/banner-2.png"

const images = [
    BannerOne,
    BannerTwo
]

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hover, setHover] = useState(false);

    const nextImage = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!hover) nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, [hover]);

    return (
        <div
            className="flex flex-col justify-center items-center w-full mx-auto relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="relative flex flex-row md:rounded-lg w-[90%] md:w-[84%] 3xl:w-[68%] 2xl:w-[67%]">
                <Image
                    src={images[activeIndex]}
                    alt="Banner"
                    style={{ objectFit: 'contain' }}
                    className="w-full h-[100px] sm:h-[180px] md:h-[220px] lg:h-[280px] xl:h-[300px] 2xl:h-[320px] transition-opacity duration-500 ease-in-out"
                    width={1200}
                />
                {hover && (
                    <button
                        onClick={prevImage}
                        className="hidden absolute top-1/2  left-[-20px] -translate-y-1/2 bg-[#F47920] p-2 sm:p-3 rounded-full hover:bg-[#F47920]/70 transition-all w-8 sm:w-10 h-12 sm:h-14 md:flex items-center justify-center"
                    >
                        <Image src={ChevronLeft} alt="Anterior" width={24} height={24} />
                    </button>
                )}
                {hover && (
                    <button
                        onClick={nextImage}
                        className="hidden absolute top-1/2 right-[-20px] -translate-y-1/2 bg-[#F47920] p-2 sm:p-3 rounded-full hover:bg-[#F47920]/70 transition-all w-8 sm:w-10 h-12 sm:h-14 md:flex items-center justify-center"
                    >
                        <Image src={ChevronRight} alt="Próximo" width={24} height={24} />
                    </button>
                )}
            </div>
        </div>
    );
}