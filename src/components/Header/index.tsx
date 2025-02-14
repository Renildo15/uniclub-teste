"use client";

import SearchInput from "./SearchInput";
import HeaderOptions from "./HeaderOptions"; 
import Image from "next/image";
import Logo from "../../../public/logo.svg"
import Menu from "../../../public/icons/menu-icon.svg"
import { useEffect, useRef, useState } from "react";
import MobileDropdownMenu from "../Responsive/MobileDropdownMenu";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLImageElement | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false); // Função para fechar o menu

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
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
        <header className="flex flex-col items-center justify-center bg-[#EAE0D5] border-t-[8px] border-t-[#F47920] w-full">
            <div className="flex flex-row items-center justify-between py-[11px] px-[14px] md:py-6 md:px-[24px] w-full md:w-[88%] 3xl:w-[70%] 3xl:gap-x-4 2xl:w-[70%] 2xl:gap-x-4">
                <div className="flex flex-row items-center gap-x-2 md:gap-x-0">
                    <Image
                        ref={buttonRef}
                        src={Menu}
                        alt="menu"
                        width={30}
                        height={30}
                        className="md:hidden cursor-pointer"
                        onClick={toggleMenu}
                    />
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={120}
                        className="sm:w-[220px] md:w-[220px] 2xl:w-[330] 3xl:w-[330]"
                    />
                </div>
                <SearchInput />
                <HeaderOptions />
            </div>

            {/* Menu Mobile */}
            <MobileDropdownMenu
                ref={menuRef}
                isOpen={isOpen}
                onClose={closeMenu} // Passa a função para fechar o menu
            />
        </header>
    );
}