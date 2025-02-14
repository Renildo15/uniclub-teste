import { Category } from "@/@types/category";
import Item from "../Item";
import ItemResponsive from "@/components/Responsive/CategoryItemResponsive";

export interface ICategoryItemProps {
    category: Category
}

export default function CategoryItem({ category }: ICategoryItemProps) {
    return (
        <>
            <Item category={category}/>
            <ItemResponsive category={category}/> 
        </>
    )
}
