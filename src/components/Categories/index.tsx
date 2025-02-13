import { categories } from "@/data";
import CategoryItem from "./CategoryItem";

export default function Categories() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row justify-between rounded-lg w-[84%] 3xl:w-[68%] 2xl:w-[67%] 
                md:overflow-x-auto lg:flex-nowrap scrollbar-hide gap-x-4"
            >
                {categories.map((category, index) => (
                    <CategoryItem key={index} category={category} />
                ))}
            </div>
        </div>
    );
}
