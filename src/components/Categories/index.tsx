import { categories } from "@/data";
import CategoryItem from "./CategoryItem";

export default function Categories() {
    return (
        <div className="flex flex-col justify-center items-center w-full px-[24px] md:px-0">
            <div className="flex flex-row justify-between rounded-lg w-full md:w-[84%] 3xl:w-[68%] 2xl:w-[67%] overflow-x-auto scroll-smooth scrollbar-hide lg:flex-nowrap scrollbar-hide gap-x-4">
                {categories.map((category, index) => (
                    <CategoryItem key={index} category={category} />
                ))}
            </div>
        </div>
    );
}