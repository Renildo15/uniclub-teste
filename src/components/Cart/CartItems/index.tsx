import { useCart } from "@/context/CartContext";
import CartItemsGroup from "../CartItemsGroup";

export default function CartItem() {
    const { itemsGroup, itemsGroupLength } = useCart();
    return (
        <>
            {itemsGroupLength > 0 ? (
                itemsGroup.map((item, index) => (
                    <CartItemsGroup key={index} itemGroup={item} />
                ))
            ) : (
                <div className="text-[#737373] text-[14px] md:text-[16px] font-bold px-4 py-2">Sem itens no carrinho</div> 
            )}
            <div className="h-[160px] md:h-[200px]"></div>
        </>
    );
}
