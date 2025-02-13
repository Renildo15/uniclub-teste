import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function Products() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col rounded-lg bg-section py-6 px-8 w-[90%] sm:w-[84%] 3xl:w-[68%] 2xl:w-[67%]">
                <div className="mb-6">
                    <h2 className="text-white text-2xl text-center sm:text-left">
                        Descontos cliente <strong>Unimed Natal</strong>
                    </h2>
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-between">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
            <div className="h-[80px]"></div>
        </div>
    );
}
