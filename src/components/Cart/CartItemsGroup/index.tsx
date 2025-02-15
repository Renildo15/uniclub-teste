import type { CartItemsGroup } from "@/@types/cart-items";
import CartCard from "../CartCard";

interface ICartItemsGroupProps{
    itemGroup: CartItemsGroup
}

export default function CartItemsGroup({ itemGroup }: ICartItemsGroupProps) {
    return (
        <>
            {itemGroup.items.length > 0 ? (
                <div className="flex flex-col items-center w-full justify-center bg-white rounded-md mb-[20px]">
                    <div className="flex flex-col items-center justify-center p-[20px]">
                     {itemGroup.items.map((item, index) => (
                         <div className="flex flex-col items-center justify-center" key={index}>
                             <CartCard item={item} />
                             {index !== itemGroup.items.length - 1 && (
                                 <div className="w-[90%] h-px bg-gray-200 my-4 not-last-divider"></div>
                             )}
                         </div>
                    ))}
                    </div>
                    <div className="bg-[#FAF7F4] w-full p-[15px] md:p-[20px] border-b border-l border-r border-[#E5E5E5] rounded-b-md">
                        <div className="flex flex-row justify-between ">
                            <span className="text-[#737373] text-[12px] md:text-[14px]"><strong>{itemGroup.day}</strong>, {itemGroup.date}</span>
                            <button className="text-[#737373] text-[12px] md:text-[14px] underline" >Alterar</button>
                        </div>
                        <div className="flex flex-row justify-start">
                            {itemGroup.isFreeShipping ? (
                                <span className="text-[#737373] text-[12px] md:text-[14px]">Frete Grátis</span>
                            ) : (
                                <span className="text-[#737373] text-[12px] md:text-[14px]">{itemGroup.shippingValue?.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</span>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
       
    );
}