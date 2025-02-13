import { Product } from "@/@types/product";
import GarrafaImage from "../../public/images/p1.png"
import BolsaImage from "../../public/images/p2.png"
import GalinhaImage from "../../public/images/p3.png"
import PanelaImage from "../../public/images/p4.png"
import ArtesanatoImage from "../../public/images/p5.png"

export const products: Product[] = [
    {
        id: "1",
        name:"Garrafa de areia colorida",
        image: GarrafaImage,
        isDiscount: true,
        discount:0.10,
        value: 32.90,
        pixValue: 18.50,
        isCreditCard: true,
        instalments: 3,
        isPix: true,
        soldBy: "Sr.Castanha"
    },
    {
        id: "2",
        name:"Bolsas variadas de fibra de Açaí",
        image: BolsaImage,
        isDiscount: false,
        value: 49.90,
        pixValue: 38.50,
        isCreditCard: true,
        instalments: 2,
        isPix: true,
        soldBy: "Dandara"
    },
    {
        id: "3",
        name:"Galinha e pintinhos de barro feitas a mão",
        image: GalinhaImage,
        isDiscount: true,
        discount: 0.10,
        value: 32.90,
        pixValue: 13.50,
        isCreditCard: false,
        isPix: true,
        soldBy: "Patrícia Arte"
    },
    {
        id: "4",
        name:"Panelas de barro de São Gonçado do Amarante",
        image: PanelaImage,
        isDiscount: false,
        value: 29.90,
        pixValue: 13.50,
        isCreditCard: true,
        instalments: 2,
        isPix: true,
        soldBy: "Sebastião Salgado"
    },
    {
        id: "5",
        name:"Artesanato de bonecas negras feitas com cabaça",
        image: ArtesanatoImage,
        isDiscount: false,
        value: 9.90,
        isCreditCard: true,
        instalments: 2,
        isPix: false,
        soldBy: "Manu Intimates"
    },
]