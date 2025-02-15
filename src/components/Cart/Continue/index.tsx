"use client"

import Image from "next/image";
import Truck from "../../../../public/icons/truck-icon.svg"
import ChevronDown from "../../../../public/icons/chevron-down-gray-icon.svg"
import ChevronUp from "../../../../public/icons/chevron-up-gray-icon.svg"
import ArrowRight from "../../../../public/icons/arrow-right-icon.svg"
import ArrowRightThin from "../../../../public/icons/arrow-right-thin-icon.svg"
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Continue() {
    const {totalPrice, totalShippingValue} = useCart();

    const [showInputCep, setShowInputCep] = useState(false);
    const [cep, setCep] = useState("");

    const toggleInput = () => setShowInputCep(!showInputCep);

    const zipCodeMask = (value:string) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{5})(\d)/,'$1-$2')
        return value
      }

    return (
        <div className="bg-[#FAF7F4] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex flex-row items-center justify-between p-4">
                <div className="flex flex-row items-center gap-x-1 cursor-pointer" onClick={toggleInput}>
                    <Image
                        src={Truck}
                        alt="truck"
                        width={25}
                        height={15}
                    />
                    <span className="text-[#737373] text-[14px] md:text-[16px]">{cep ? cep: 'Calcular frete e prazos'}</span>
                    <Image
                        src={showInputCep ? ChevronUp : ChevronDown}
                        alt="chevron down"
                        width={15}
                        className="md:w-[20px]"
                    />
                </div>
                <span className="text-[#737373] text-[14px] md:text-[16px] font-bold">{cep ? totalShippingValue.toLocaleString('pt-br', { style: "currency", currency: "BRL" }) : "---"}</span>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    showInputCep ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="flex flex-col px-4 py-2">
                    <div className="flex flex-row p-4 bg-white rounded-full">
                        <input
                            maxLength={9}
                            type="text"
                            placeholder="Digite seu CEP"
                            className="text-[#737373] w-full bg-transparent focus:outline-none focus:ring-0 text-sm sm:text-base px-3 truncate"
                            onChange={(e) => setCep(e.target.value)}
                            value={zipCodeMask(cep)}
                        />
                        <Image
                            src={ArrowRightThin}
                            alt="arrow thin"
                            width={16}
                            className="align-middle mb-[2px] cursor-pointer"
                            onClick={toggleInput}
                        />
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[1px] bg-gray-200"></div>

            <div className="flex flex-row items-center justify-between p-4">
                <span className="text-[14px] md:text-[16px] text-[#737373] font-semibold">{cep ? "Total" : "Subtotal"}</span>
                <span className="text-[14px] md:text-[16px] text-[#737373] font-semibold">{totalPrice.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</span>
            </div>
            <div className="bg-[#F47920] p-4 md:p-6">
                <div className="flex flex-row items-center justify-center gap-x-2 cursor-pointer">
                    <span className="text-[14px] md:text-[18px] font-bold text-white">PROSSEGUIR</span>
                    <Image
                        src={ArrowRight}
                        alt="arrow"
                        width={16}
                        className="align-middle mb-[2px]"
                    />
                </div>
            </div>
        </div>
    );
}