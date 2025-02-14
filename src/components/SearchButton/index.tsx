import Image from "next/image";
import SearchIcon from "../../../public/icons/search-mobile-icon.svg"

export default function SearchButton() {
    return (
        <button
            className="fixed bottom-4 right-4 bg-[#F47920] p-3 rounded-full shadow-lg hover:bg-[#F47920]/90 transition-all z-50 md:hidden"
            aria-label="Pesquisar"
        >
            <Image
                src={SearchIcon}
                alt="search"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6"
            />
        </button>
    )
}