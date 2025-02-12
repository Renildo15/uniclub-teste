import { Category } from "@/app/@types/category";
import ArtIcon from "../../public/categories/art-icon.svg";
import HealthIcon from "../../public/categories/health-icon.svg";
import ClothingIcon from "../../public/categories/clothing-icon.svg";
import BabyIcon from "../../public/categories/baby-icon.svg";
import HomeIcon from "../../public/categories/home-icon.svg";
import SportsIcon from "../../public/categories/sports-icon.svg";
import BeautyIcon from "../../public/categories/beauty-icon.svg";
import RealEstateIcon from "../../public/categories/real-estate-icon.svg";
import GlassesIcon from "../../public/categories/glasses-icon.svg";
import ServicesIcon from "../../public/categories/services-icon.svg";

export const categories: Category[] = [
    {
        id: "1",
        name: "Arte, Papelaria e Armarinhos",
        icon: ArtIcon,
        width: 45,
        height: 48
    },
    {
        id: "2",
        name: "Saúde",
        icon: HealthIcon,
        width: 53,
        height: 44
    },
    {
        id: "3",
        name: "Calçados, Roupas e Bolsas",
        icon: ClothingIcon,
        width: 50,
        height: 48
    },
    {
        id: "4",
        name: "Bebês",
        icon: BabyIcon,
        width: 58,
        height: 44
    },
    {
        id: "5",
        name: "Casa, Móveis e Decoração",
        icon: HomeIcon,
        width: 46,
        height: 45
    },
    {
        id: "6",
        name: "Esportes e Fitness",
        icon: SportsIcon,
        width: 51,
        height: 51
    },
    {
        id: "7",
        name: "Beleza e Cuidado Pessoal",
        icon: BeautyIcon,
        width: 35,
        height: 54
    },
    {
        id: "8",
        name: "Imóveis",
        icon: RealEstateIcon,
        width: 46,
        height: 46
    },
    {
        id: "9",
        name: "Óculos",
        icon: GlassesIcon,
        width: 46,
        height: 42
    },
    {
        id: "10",
        name: "Serviços",
        icon: ServicesIcon,
        width: 47,
        height: 33
    },
];
