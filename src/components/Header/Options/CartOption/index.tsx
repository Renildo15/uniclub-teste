"use client"

import Image from "next/image";
import CartIcon from "../../../../../public/icons/cart-icon.svg"
import { useEffect, useRef, useState } from "react";
import Cart from "@/components/Cart";

export default function CartOption() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const cartRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLImageElement | null>(null);

    const toggleCart = () => setIsOpen(!isOpen);
    const closeCart = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                cartRef.current &&
                buttonRef.current &&
                !cartRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    return (
        <div onClick={toggleCart} className="flex flex-row items-center gap-2">
            <div className="flex bg-[#F7F3EE] w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full justify-center items-center cursor-pointer">
                <Image src={CartIcon} alt="cart icon" width={20} className="md:m-[18px]" ref={buttonRef} />
            </div>
            <Cart
                ref={cartRef}
                isOpen={isOpen}
                onClose={closeCart}
            />

        </div>
    )
}