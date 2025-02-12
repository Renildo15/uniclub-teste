"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Menu from "../../../public/icons/menu-icon.svg"
import ChevronDown from "../../../public/icons/chevron-down-icon.svg"
import EIcon from "../../../public/icons/e-icon.svg"
import DropdownMenu from "../DropdownMenu";

export default function HeaderMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen)

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

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

   
    return (
        <>
            <div className="flex flex-row gap-4 items-center">
                 <div ref={buttonRef} className="flex flex-row items-center gap-2 cursor-pointer" onClick={toggleMenu}>
                     <Image src={Menu} alt="menu" width={19} height={19} />
                     <span className="font-semibold text-[#3F3F3F] text-[14px]">Departamentos</span>
                     <Image src={ChevronDown} alt="chevron-down" width={19} height={19} />
                 </div>
                 <div className="w-[1px] h-[20px] bg-[#3F3F3F] opacity-30"></div>
                 <div className="flex flex-row items-center gap-2 cursor-pointer">
                     <Image src={EIcon} alt="menu" width={19} height={19} />
                     <span className="text-[#3F3F3F] text-[14px]">Descontos Cliente Unimed Natal</span>
                 </div>
            </div>
            <span className="text-[#737373] text-[14px] cursor-pointer">Venda no Uniclube</span>
            

            <DropdownMenu ref={menuRef} isOpen={isOpen} />
        </>
    )
}