import Image from "next/image";
import SearchIcon from "../../../../public/icons/search-icon.svg"

interface ISearchInputProps {
    display: "flex" | "hidden"
}

export default function SearchInput({display}: ISearchInputProps) {
    return (
        <div className={`${display} items-center md:flex md:flex-row md:items-center md:justify-between w-full md:w-[90%] sm:w-[572px]  md: mr-5 lg:w-[450px] xl:w-[500px] 3xl:w-[80%] h-[50px] bg-white rounded-[30px] px-4 sm:px-6 shadow-md`}>
            <input
                className="rounded-[30px] text-[#737373]  w-full bg-transparent focus:outline-none focus:ring-0 text-sm sm:text-base px-3 truncate"
                placeholder="O que você gostaria hoje?"
            />
            <Image
                src={SearchIcon}
                alt="search"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6"
            />
        </div>
    )
}