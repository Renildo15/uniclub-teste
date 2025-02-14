import Image from "next/image";
import { ICategoryItemProps } from "../CategoryItem";


export default function Item({ category }: ICategoryItemProps) {
    return (
        <div className="group hidden md:flex flex-col items-center text-center w-[110px]">
            <div className="group flex items-center justify-center w-[86px] h-[86px] bg-[#EAE0D5] rounded-full group-hover:bg-[#F47920] cursor-pointer">
                <Image
                    src={category.icon}
                    width={category.width}
                    height={category.height}
                    alt={category.name}
                    className="filter group-hover:invert group-hover:brightness-0"
                /> 
            </div>
            <span className="mt-2 text-[#737373] text-[12px] md:text-[14px] font-medium group-hover:font-semibold transition-all duration-300 max-w-[100%] truncate">
                {category.name}
            </span>
        </div>
    )
}
