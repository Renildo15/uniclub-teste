import { CartItemsGroup } from "@/@types/cart-items";
import Bolsa from "../../public/cart/bolsa.png"
import Brinquedo from "../../public/cart/brinquedo.png"
import Lencol from "../../public/cart/lencol.png"
import Mouse from "../../public/cart/mouse.png"
import Voucher from "../../public/cart/voucher.png"

export const cartItems:CartItemsGroup[] = [
    {
        id: '1',
        day:"Hoje",
        date: '27 de Junho',
        isFreeShipping: false,
        shippingValue: 43,
        items: [
            {
                id:"1",
                name: "Bolsa Feminina Sacola Grande Matelassê Preto de telinha e couro lorem ipsum dolot sit amet conseqde Jabuti",
                image: Bolsa,
                isAvailable: true,
                isColor: true,
                color: "G, Azul",
                isDiscount: true,
                dicountValue: 5,
                value: 200,
                quantity: 1
            },
            {
                id:"2",
                name: "Brinquedo de Atividades Bebê Box",
                image: Brinquedo,
                isAvailable: false,
                days:10,
                isColor: false,
                isDiscount: false,
                value: 99,
                quantity: 1
            },
            {
                id:"3",
                name: "Lençol Elástico Avulso 300 Fios Casa Rio Bege Claro",
                image: Lencol,
                isAvailable: true,
                isColor: true,
                color: "Queen, Bege",
                isDiscount: false,
                value: 35,
                quantity: 1
            },
        ]
    },
    {
        id: '2',
        day: "Terça",
        date: '5 de novembro',
        isFreeShipping: true,
        items: [
            {
                id:"4",
                name: "Mouse logitech usb bluetooth sem fio adaptador",
                image: Mouse,
                isAvailable: true,
                isColor: false,
                isDiscount: false,
                value: 99,
                quantity: 1
            },
        ]
    },
    {
        id: '3',
        day: "Quinta",
        date: '7 de novembro',
        isFreeShipping: true,
        items: [
            {
                id:"5",
                name: "Voucher Univacinas Hepatite A",
                image: Voucher,
                isAvailable: true,
                isColor: false,
                isDiscount: false,
                value: 99,
                quantity: 1
            },
        ]
    }
]