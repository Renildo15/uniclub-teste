import Image from "next/image";
import ChevronDown from "../../../../public/icons/chevron-down-icon.svg"

export default function Departments() {
    return (
        <div className="flex flex-row w-full py-[40px] px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px]">
            <div className="flex flex-row w-full">
                <div className="flex flex-col w-[80%] gap-y-6">
                    <div className="flex flex-row justify-between">
                        {[
                            { title: "Saúde e Bem-estar", items: ["Beleza", "Cuidados Pessoais", "Esportes e Aventura"] },
                            { title: "Estilo", items: ["Vestuário", "Calçados", "Bijuterias e Acessórios"] },
                            { title: "Eletro", items: ["Eletrodomésticos", "Celulares, Tablets e Ace...", "Câmeras e Acessórios"] }
                        ].map((category, index) => (
                            <div key={index} className="w-[32%]">
                                <h3 className="text-[#737373] font-semibold text-[16px] sm:text-[18px] lg:text-[20px]">
                                    {category.title}
                                </h3>
                                <ul className="flex flex-col gap-y-4 sm:gap-y-6 ml-2">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="text-[#737373] text-[14px] sm:text-[16px] lg:text-[18px] hover:text-[#F47920] cursor-pointer">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-row gap-x-1 mt-4">
                                    <span className="text-[#737373] text-[12px] sm:text-[14px] cursor-pointer hover:text-[#F47920]">
                                        Ver mais
                                    </span>
                                    <Image src={ChevronDown} alt="chevron down" height={15} width={15} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-between">
                        {[
                            { title: "Casa", items: ["Casa, Jardim e Limpeza", "Móveis e Decoração", "Construção"] },
                            { title: "Tincidunt", items: ["Tempor", "Consequant"] },
                            { title: "Ipsum Lorem", items: ["Sit Amet", "Consequant", "Consequant"] }
                        ].map((category, index) => (
                            <div key={index} className="w-[32%]">
                                <h3 className="text-[#737373] font-semibold text-[16px] sm:text-[18px] lg:text-[20px]">
                                    {category.title}
                                </h3>
                                <ul className="flex flex-col gap-y-4 sm:gap-y-6 ml-2">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="text-[#737373] text-[14px] sm:text-[16px] lg:text-[18px] hover:text-[#F47920] cursor-pointer">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-row gap-x-1 mt-4">
                                    <span className="text-[#737373] text-[12px] sm:text-[14px] cursor-pointer hover:text-[#F47920]">
                                        Ver mais
                                    </span>
                                    <Image src={ChevronDown} alt="chevron down" height={15} width={15} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[20%] flex flex-col gap-y-2">
                    <h3 className="text-[#737373] font-semibold text-[16px] sm:text-[18px] lg:text-[20px]">
                        Mais Departamentos
                    </h3>
                    <ul className="flex flex-col gap-y-4 ml-2">
                        {[
                            "Petshop", "Produtos Regionais", "Brinquedos e Jogos",
                            "Livros", "Música e Hobbies", "Bebês",
                            "Alimentos e Bebidas", "Agro e Indústria"
                        ].map((item, index) => (
                            <li key={index} className="text-[#737373] text-[14px] sm:text-[16px] lg:text-[18px] hover:text-[#F47920] cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <span className="text-[#737373] text-[12px] sm:text-[14px] cursor-pointer hover:text-[#F47920] underline mt-4">
                        Ver todos os departamentos
                    </span>
                </div>
            </div>
        </div>
    );
}
