import { products } from "@/data/products";
import ProductCard from "../ProductCard";

export default function Products() {
    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-20">
           <div className="flex flex-col w-full p-10 rounded-lg bg-section">

                <div className="mb-6">
                    <h2 className="text-white text-2xl">Descontos cliente <strong>Unimed Natal</strong></h2>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>
            </div>
            <div className="h-[80px]"></div>
        </div>
    );
}