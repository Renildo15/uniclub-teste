import { ICategoryItemProps } from "@/components/Categories/CategoryItem";
import Image from "next/image";

export default function ItemResponsive({ category }: ICategoryItemProps) {
    return (
        <div className="group flex flex-col items-center md:hidden text-center w-[80px]">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#EAE0D5] rounded-full group-hover:bg-[#F47920] cursor-pointer transition-all duration-300">
                <Image
                    src={category.icon}
                    width={category.width * 0.7}
                    height={category.height * 0.7}
                    alt={category.name}
                    className="filter group-hover:invert group-hover:brightness-0 transition-all duration-300"
                />
            </div>
            <span className="mt-2 text-[#737373] text-[12px] font-medium group-hover:font-semibold transition-all duration-300 max-w-[100%] line-clamp-2 truncate">
                {category.name}
            </span>
        </div>
    );
}