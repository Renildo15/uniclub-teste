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

export default function Banner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hover, setHover] = useState(false);

    const nextImage = () => {
        setActiveIndex((prev) =>  (prev + 1) % images.length)
    }

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!hover) nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, [hover])

    return (
        <div
            className="relative w-full h-[300px] overflow-hidden flex items-center justify-center px-24"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image
                src={images[activeIndex]}
                alt="Banner"
                objectFit="cover"
                className="transition-opacity duration-500 ease-in-out"
                width={1200} height={300}
            />

            {hover && (
                <button
                    onClick={prevImage}
                    className="absolute left-20 bg-[#F47920] p-2 rounded-full hover:bg-[#F47920]/70 transition-all w-[28px] h-[63px]"
                >
                    <Image src={ChevronLeft} alt="Anterior" width={30} height={30} />
                </button>
            )}

            {hover && (
                <button
                    onClick={nextImage}
                    className="absolute right-20 bg-[#F47920]  p-2 rounded-full hover:bg-[#F47920]/70 transition-all w-[28px] h-[63px]"
                >
                    <Image src={ChevronRight} alt="Próximo" width={24} height={24} />
                </button>
            )}
        </div>

    )
}