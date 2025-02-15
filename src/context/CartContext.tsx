"use client"

import { CartItem, CartItemsGroup } from "@/@types/cart-items";
import { cartItems } from "@/data";
import React, {createContext, useContext, useState} from "react";

interface CartContextType {
    items:CartItem[];
    itemsGroup: CartItemsGroup[];
    removeFromCart:(id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    totalItems: number;
    totalPrice: number;
    itemsGroupLength: number;
    totalShippingValue: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [itemsGroup, setItemsGroup] = useState<CartItemsGroup[]>(cartItems);
    const [items, setItems] = useState<CartItem[]>(itemsGroup.flatMap(group => group.items));
    const [itemsGroupLength, setItemsGroupLength] = useState<number>(itemsGroup.length);

    const removeFromCart = (id: string) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.filter((i) => i.id !== id);
            const updatedItemsGroup = itemsGroup.map((group) => {
                return {
                    ...group,
                    items: group.items.filter((item) => item.id !== id),
                };
            });

            const nonEmptyGroups = updatedItemsGroup.filter((group) => group.items.length > 0);

            setItemsGroup(nonEmptyGroups);
            setItemsGroupLength(nonEmptyGroups.length);

            return updatedItems;
        });
    };

    const updateQuantity = (id: string, quantity: number) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.map((i) =>
                i.id === id ? { ...i, quantity } : i
            );
            const updatedItemsGroup = itemsGroup.map((group) => {
                return {
                    ...group,
                    items: group.items.map((item) =>
                        item.id === id ? { ...item, quantity } : item
                    ),
                };
            });

            setItemsGroup(updatedItemsGroup);
            return updatedItems;
        });
    };

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    const totalDiscount = items.reduce((total, item) => {
        if (!item.isDiscount) return total;
        return total + (item.dicountValue ?? 0);
    }, 0);

    const totalShippingValue = itemsGroup.reduce((total, group) => {
       if (group.isFreeShipping) return total;
       const shippingValueGroup = group.shippingValue ?? 0;
       return total + shippingValueGroup;
    }, 0)

    const totalPrice = items.reduce(
        (total, item) => total + item.value * item.quantity,
        0
    ) - totalDiscount;

    return (
        <CartContext.Provider
            value={{
                items,
                itemsGroup,
                itemsGroupLength,
                removeFromCart,
                updateQuantity,
                totalItems,
                totalPrice,
                totalShippingValue
            }}
        >
            {children}
        </CartContext.Provider>
    );
};