import { StaticImageData } from "next/image";

export type Product = {
    id: string;
    name: string;
    isDiscount: boolean;
    isPix?: boolean;
    isCreditCard?: boolean;
    instalments?: number;
    discount?: number;
    image: StaticImageData;
    pixValue?: number;
    value: number;
    soldBy: string;

}