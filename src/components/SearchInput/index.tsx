import Image from "next/image";
import SearchIcon from "../../../public/icons/search-icon.svg"

export default function SearchInput() {
    return (
        <div className=" flex flex-row justify-between w-[572px] h-[54px] bg-white rounded-[30px] px-6 shadow-[2px_3px_5px_rgba(0,0,0,0.2)]">
            <input
                className="rounded-[30px] w-full focus:outline-none focus:ring-0"
                placeholder="O que você gostaria hoje?"
            />
            <Image
                src={SearchIcon}
                alt="search"
                width={16}
                height={16}
            />
        </div>
    )
}