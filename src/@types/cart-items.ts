import { StaticImageData } from "next/image";

export type CartItem = {
    id: string;
    name: string;
    color?: string;
    isColor: boolean;
    isDiscount:boolean;
    dicountValue?: number;
    value: number;
    isAvailable: boolean;
    days?:number;
    image: StaticImageData;
    quantity: number;
}

export type CartItemsGroup = {
    id:string;
    day: string;
    date: string;
    isFreeShipping: boolean;
    shippingValue?: number;
    items: CartItem[]
}