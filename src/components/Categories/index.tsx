import { categories } from "@/data";
import CategoryItem from "../CategoryItem";

export default function Categories() {
    return (
        <div className="container mx-auto px-14">
            <div className="flex flex-wrap justify-between gap-x-1 gap-y-4">
                {categories.map((category, index) => (
                    <CategoryItem key={index} category={category}/>
                ))}
            </div>
        </div>
    )
}