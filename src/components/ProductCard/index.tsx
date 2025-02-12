import { Product } from "@/app/@types/product"
import Image from "next/image"

interface IProductCardProps {
    product: Product
}

export default function ProductCard({ product }: IProductCardProps) {
    function calculateDiscount(value: number) {
        if (!product.discount) return value;
        const discount = value * product.discount;
        return value - discount;
    }

    return (
        <div className="bg-base-100 w-[220px] shadow-xl rounded-[5px]">
            <figure className="w-full h-[200px] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    layout="responsive"
                    width={220}
                    height={200}
                    className="object-cover"
                />
            </figure>
            <div className="flex flex-col px-5 py-2 gap-2">
                <h2 className="text-[#3F3F3F] text-[18px] line-clamp-2 w-full">{product?.name}</h2>
                <div className="flex flex-col">
                    {product.isDiscount ? (
                        <div className="flex flex-row gap-x-2">
                            <span className="text-[#737373] line-through text-[14px]">
                                {product.value.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}
                            </span>
                            <span className="text-[#CC0A12] text-[14px]">
                                {product.discount !== undefined ? product.discount * 100 : product.discount}% OFF
                            </span>
                        </div>
                    ) : (
                        <span className="text-[#737373]">A partir de</span>
                    )}
                    <span className="text-[#3F3F3F] text-[26px] font-semibold">
                        {calculateDiscount(product.value).toLocaleString('pt-br', { style: "currency", currency: "BRL" })}
                    </span>
                </div>
                <div className="flex flex-col min-h-[40px]">
                    {product.isCreditCard && (
                        <span className="text-[#737373] truncate text-[14px]">
                            <strong className="font-semibold">{product.instalments}x R$ 24,95 sem juros</strong> no cartão
                        </span>
                    )}
                    <span className="text-[#737373] text-[14px]">
                        ou <strong className="font-semibold">R$ 38,50 no pix</strong>
                    </span>
                </div>

                <span className="text-[#737373] truncate">
                    Vendido por 
                    <a className="font-semibold hover:text-[#F47920] cursor-pointer underline"> {product.soldBy}</a>
                </span>
            </div>
        </div>
    );
}
