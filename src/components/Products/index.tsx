import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function Products() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col md:rounded-lg bg-section py-3 px-6 md:py-6 md:px-8 w-full md:w-[84%] 2xl:w-[67%]">
                <div className="mb-2 md:mb-6">
                    <h2 className="text-white text-[16px] md:text-2xl sm:text-left">
                        Descontos cliente <strong>Unimed Natal</strong>
                    </h2>
                </div>
                <div className="flex flex-nowrap overflow-x-auto scroll-smooth gap-2 justify-start md:justify-between scrollbar-hide">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
            <div className="h-[20px] md:h-[40px]"></div>
        </div>
    );
}