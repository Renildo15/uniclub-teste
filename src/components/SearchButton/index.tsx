"use client";

import Image from "next/image";
import SearchIcon from "../../../public/icons/search-mobile-icon.svg";
import { useEffect, useRef, useState } from "react";
import SearchBarLateral from "../SearchBarLateral";

export default function SearchButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const searchBarRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLImageElement | null>(null);

    const toggleSearchBar = () => setIsOpen(!isOpen);
    const closeSearchBar = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchBarRef.current &&
                buttonRef.current &&
                !searchBarRef.current.contains(event.target as Node) &&
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
        <>
            <button
                className="fixed bottom-10 right-4 bg-[#F47920] p-3 rounded-full shadow-lg hover:bg-[#F47920]/90 transition-all z-50 md:hidden"
                aria-label="Pesquisar"
                onClick={toggleSearchBar}
            >
                <Image
                    src={SearchIcon}
                    alt="search"
                    width={20}
                    height={20}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    ref={buttonRef}
                />
            </button>

            <SearchBarLateral
                ref={searchBarRef}
                isOpen={isOpen}
                onClose={closeSearchBar}
            />
        </>
    );
}