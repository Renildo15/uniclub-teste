import Image from "next/image";
import LocalIcon from "../../../../../public/icons/local-icon.svg"
import ChevronDown from "../../../../../public/icons/chevron-down-icon.svg"

interface ILocalOptionProps {
    display: "hidden" | "flex"
}

export default function LocalOption( {display}: ILocalOptionProps) {
    return (
        <div className={`${display} md:flex md:flex-row items-center gap-x-0 md:gap-1 cursor-pointer`}>
            <div className="flex bg-[#F7F3EE] w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full justify-center items-center">
                <Image src={LocalIcon} alt="local icon" width={14} className="md:m-[18px]" />
            </div>
            <div className="flex flex-row md:flex-col gap-x-1 md:gap-0 leading-tight">
                <span className="font-semibold text-[#3F3F3F] text-[13px] md:text-[14px] sm:text-[15px]">Onde</span>
                <span className="text-[#3F3F3F] text-[13px] md:text-[14px] sm:text-[15px]">você está?</span>
                <Image src={ChevronDown} alt="chevron down" height={15} width={15} className={`${display}`} />
            </div>
        </div>
    )
}