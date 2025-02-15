"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Menu from "../../../../public/icons/menu-icon.svg"
import ChevronDown from "../../../../public/icons/chevron-down-icon.svg"
import ChevronUp from "../../../../public/icons/checron-up-icon.svg"
import DropdownMenu from "../../DropdownMenu";
import LocalOption from "../Options/LocalOption";

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
        <div className="flex flex-row justify-center bg-[#F7F3EE] shadow-[2px_3px_5px_rgba(0,0,0,0.2)]">
            <div className="flex flex-row justify-between py-2 md:py-5 px-[14px] md:px-[24px] xl:px-[30px] w-full md:w-[88%] 3xl:w-[70%] 2xl:w-[70%]">
                <div className="flex flex-row gap-4 items-center">
                    <div ref={buttonRef} className="hidden md:flex md:flex-row md:items-center md:justify-center cursor-pointer" onClick={toggleMenu}>
                        <Image src={Menu} alt="menu" width={25} height={25} />
                        <span className="font-semibold text-[#3F3F3F] 3xl:text-[18px] text-[16px] mr-2">Departamentos</span>
                        <Image src={isOpen ? ChevronUp: ChevronDown} alt="chevron-down" width={19} height={19} />
                    </div>
                    <div className="flex md:hidden">
                        <LocalOption display="flex"/>
                    </div>
                    <div className="hidden md:flex w-[1px] h-[20px] bg-[#3F3F3F] opacity-30"></div>
                    <div className="hidden md:flex md:flex-row md:items-center gap-2 cursor-pointer">
                        <span className="text-[#3F3F3F] 3xl:text-[18px] text-[16px]">Descontos Cliente Unimed Natal</span>
                    </div>
                </div>
                <div className="hidden md:flex ">
                    <span className="text-[#737373] 3xl:text-[16px] text-[14px] cursor-pointer">Venda no Uniclube</span>
                </div>
            </div>
            

            <DropdownMenu ref={menuRef} isOpen={isOpen} />
        </div>
    )
}