"use client"

import Image from "next/image"
import TrashIcon from "../../../../public/icons/trash-icon.svg"
import { CartItem } from "@/@types/cart-items";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

interface ICartCardProps {
    item: CartItem
}

export default function CartCard({ item }: ICartCardProps) {
    const [itemCount, setItemCount] = useState(item.quantity);
    const { updateQuantity, removeFromCart } = useCart();

    useEffect(() => {
        if (itemCount !== item.quantity) {
            updateQuantity(item.id, itemCount);
        }
    }, [itemCount, item.id, item.quantity, updateQuantity]);

    function applyDiscount(value: number) {
        if (!item.dicountValue) return value;
        const newValue = value - item.dicountValue;
        return newValue;
    }

    const handleIncrement = () => {
        setItemCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        setItemCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const handleRemoveFromCart = () => {
        removeFromCart(item.id);
    };

    return (
        <div className="bg-white w-full rounded-lg">
            <div className="flex flex-row gap-4">
                <div className="w-[70px] h-[70px] flex-shrink-0">
                    <Image
                        src={item.image}
                        width={70}
                        height={70}
                        alt="bolsa"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                <div className="flex-grow">
                    <div className="flex flex-row justify-between items-start">
                        <span className="line-clamp-2 text-[#3F3F3F] font-semibold text-[14px] md:text-[16px] flex-grow pr-4">
                            {item.name}
                        </span>
                        <button
                            onClick={handleRemoveFromCart}
                            className="flex-shrink-0 cursor-pointer"
                        >
                            <Image
                                src={TrashIcon}
                                width={20}
                                height={20}
                                alt="trash"
                            />
                        </button>
                    </div>

                    <div className="mt-2">
                        {item.isAvailable ? (
                            <span className="text-[12px] md:text-[14px] text-[#737373]">{item.color}</span>
                        ) : (
                            <span className="text-[12px] md:text-[14px] text-[#C02E34]">
                                Disponível em {item.days} dias
                            </span>
                        )}
                    </div>

                    <div className="flex flex-row items-center justify-between mt-4">
                        <div className="flex flex-row items-center gap-2">
                            <button
                                className="w-[25px] h-[25px] text-[#F47920] font-bold flex items-center justify-center border border-[#F47920] rounded-full hover:bg-[#F47920] hover:text-white transition-colors"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <span className=" text-[14px] md:text-[16px] text-[#3F3F3F]">{itemCount}</span>
                            <button
                                className="w-[25px] h-[25px] mr-2 md:mr-0 text-[#F47920] font-bold flex items-center justify-center border border-[#F47920] rounded-full hover:bg-[#F47920] hover:text-white transition-colors"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>

                        <div className="flex gap-x-2">
                            {item.isDiscount && (
                                <span className="text-[12px] md:text-[14px] line-through text-[#737373]">
                                    {item.value.toLocaleString('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    })}
                                </span>
                            )}
                            <span className="text-[12px] md:text-[14px] font-semibold text-[#3F3F3F]">
                                {applyDiscount(item.value * itemCount).toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}