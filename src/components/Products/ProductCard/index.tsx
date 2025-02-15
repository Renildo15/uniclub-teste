import { Product } from "@/@types/product"
import FavoriteIcon from "../../../../public/icons/favorite-icon.svg"
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

    function calculateInstallments() {
        if (!product.isCreditCard || !product.instalments) return 1;
        const value = calculateDiscount(product.value);
        return value / product.instalments;
    }

    return (
        <div className="bg-base-100 w-[150px] sm:w-[48%] md:w-[30%] lg:w-[19%] shadow-xl rounded-[5px] flex-shrink-0">
            <figure className="w-full overflow-hidden relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={120}
                    className="object-cover w-full h-auto"
                />
                <button className="absolute bottom-2 right-2 bg-white p-1.5 rounded-[80%] shadow-md hover:bg-gray-100 transition w-[26px] h-[26px]">
                    <Image
                        src={FavoriteIcon}
                        alt="Favorito"
                        width={20}
                    />
                </button>
            </figure>
            <div className="flex flex-col px-3 py-2 gap-1 md:px-4 md:py-2 md:gap-2">
                <h2 className="text-[#3F3F3F] text-[12px] md:text-[16px] 2xl:text-[18px] line-clamp-2 w-full">
                    {product?.name}
                </h2>
                <div className="flex flex-col">
                    {product.isDiscount ? (
                        <div className="flex flex-row gap-x-2">
                            <span className="text-[#737373] line-through text-[10px] md:text-[14px]">
                                {product.value.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}
                            </span>
                            <span className="text-[#CC0A12] text-[10px] md:text-[14px]">
                                {product.discount !== undefined ? product.discount * 100 : product.discount}% OFF
                            </span>
                        </div>
                    ) : (
                        <span className="text-[#737373] text-[10px] md:text-[14px]">A partir de</span>
                    )}
                    <span className="text-[#3F3F3F] text-[16px] md:text-[20px] font-semibold">
                        {calculateDiscount(product.value).toLocaleString('pt-br', { style: "currency", currency: "BRL" })}
                    </span>
                </div>
                <div className="flex flex-col min-h-[30px] md:min-h-[40px]">
                    {product.isCreditCard && (
                        <span className="text-[#737373] truncate text-[10px]  md:text-[14px]">
                            <strong className="font-semibold">{product.instalments}x {calculateInstallments().toLocaleString('pt-br', { style: "currency", currency: "BRL" })} sem juros</strong> no cartão
                        </span>
                    )}
                    {product.isPix && product.pixValue && (
                        <span className="text-[#737373] text-[10px]  md:text-[14px]">
                            ou <strong className="font-semibold">{product.pixValue.toLocaleString('pt-br', { style: "currency", currency: "BRL" })} no pix</strong>
                        </span>
                    )}
                </div>

                <span className="text-[#737373] text-[10px] md:text-[12px] 2xl:text-[16px] truncate">
                    Vendido por 
                    <a className="hover:text-[#F47920] cursor-pointer underline"> {product.soldBy}</a>
                </span>
            </div>
        </div>
    );
}