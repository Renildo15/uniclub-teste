import { Category } from "@/app/@types/category";
import Image from "next/image";

interface ICategoryItemProps {
    category: Category
}

export default function CategoryItem({ category }: ICategoryItemProps) {
    return (
        <div className="group flex flex-col items-center text-center w-[110px] h-[160px]">
            <div className="group flex items-center justify-center w-[86px] h-[86px] bg-[#EAE0D5] rounded-full hover:bg-[#F47920] cursor-pointer">
                <Image
                    src={category.icon}
                    width={category.width}
                    height={category.height}
                    alt={category.name}
                    className="filter group-hover:invert group-hover:brightness-0"
                />
            </div>
            <span className="mt-2 text-[#737373] text-[14px] font-medium group-hover:font-semibold transition-all duration-300 max-w-[100%]">
                {category.name}
            </span>
        </div>
    )
}
