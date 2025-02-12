import Image from "next/image";
import ChevronDown from "../../../../public/icons/chevron-down-icon.svg"

export default function Departments() {
    return (
        <div className="flex flex-row w-full py-6 px-[40px]">
            <div className='flex flex-row w-full'>
                <div className='flex flex-col w-[80%] gap-y-6'>
                    <div className='flex flex-row justify-between'>
                        <div className='w-[32%]'>
                            <h3 className='text-[#737373] font-semibold text-[18px]'>Saúde e Bem-estar</h3>
                            <ul className='flex flex-col gap-y-6 ml-2'>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Beleza</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Cuidados Pessoais</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Esportes e Aventura</li>
                            </ul>
                            <div className='flex flex-row gap-x-1 mt-4'>
                                <span className='text-[#737373] text-[14px] cursor-pointer hover:text-[#F47920]'>Ver mais</span>
                                <Image
                                    src={ChevronDown}
                                    alt='chevron down'
                                    height={15}
                                    width={15}
                                />
                            </div>
                        </div>
                        <div className='w-[32%]'>
                            <h3 className='text-[#737373] font-semibold text-[18px]'>Estilo</h3>
                            <ul className='flex flex-col gap-y-6 ml-2'>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Vestuário</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Calçados</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Bijuterias e Acessórios</li>
                            </ul>
                            <div className='flex flex-row gap-x-1 mt-4'>
                                <span className='text-[#737373] text-[14px] cursor-pointer hover:text-[#F47920]'>Ver mais</span>
                                <Image
                                    src={ChevronDown}
                                    alt='chevron down'
                                    height={15}
                                    width={15}
                                />
                            </div>
                        </div>
                        <div className='w-[32%]'>
                            <h3 className='text-[#737373] font-semibold text-[18px]'>Eletro</h3>
                            <ul className='flex flex-col gap-y-6 ml-2'>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Eletrodomésticos</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Celulares, Tablets e Ace...</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Câmeras e Acessórios</li>
                            </ul>
                            <div className='flex flex-row gap-x-1 mt-4'>
                                <span className='text-[#737373] text-[14px] cursor-pointer hover:text-[#F47920]'>Ver mais</span>
                                <Image
                                    src={ChevronDown}
                                    alt='chevron down'
                                    height={15}
                                    width={15}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='w-[32%]'>
                            <h3 className='text-[#737373] font-semibold text-[18px]'>Casa</h3>
                            <ul className='flex flex-col gap-y-6 ml-2'>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Casa, Jardim e Limpeza</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Móveis e Decoração</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Construção</li>
                            </ul>
                            <div className='flex flex-row gap-x-1 mt-4'>
                                <span className='text-[#737373] text-[14px] cursor-pointer hover:text-[#F47920]'>Ver mais</span>
                                <Image
                                    src={ChevronDown}
                                    alt='chevron down'
                                    height={15}
                                    width={15}
                                />
                            </div>
                        </div>
                        <div className='w-[32%]'>
                            <h3 className='text-[#737373] font-semibold text-[18px]'>Tincidunt</h3>
                            <ul className='flex flex-col gap-y-6 ml-2'>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Tempor</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Consequant</li>
                            </ul>
                            <div className='flex flex-row gap-x-1 mt-4'>
                                <span className='text-[#737373] text-[14px] cursor-pointer hover:text-[#F47920]'>Ver mais</span>
                                <Image
                                    src={ChevronDown}
                                    alt='chevron down'
                                    height={15}
                                    width={15}
                                />
                            </div>
                        </div>
                        <div className='w-[32%]'>
                            <h3 className='text-[#737373] font-semibold text-[18px]'>Ipsum Lorem</h3>
                            <ul className='flex flex-col gap-y-6 ml-2'>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Sit Amet</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Consequant</li>
                                <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Consequant</li>
                            </ul>
                            <div className='flex flex-row gap-x-1 mt-4'>
                                <span className='text-[#737373] text-[14px] cursor-pointer hover:text-[#F47920]'>Ver mais</span>
                                <Image
                                    src={ChevronDown}
                                    alt='chevron down'
                                    height={15}
                                    width={15}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] flex flex-col gap-y-2'>
                    <h3 className='text-[#737373] font-semibold text-[18px]'>Mais Departamentos</h3>
                    <ul className='flex flex-col gap-y-4 ml-2'>
                        <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Petshop</li>
                        <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Produtos Regionais</li>
                        <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Brinquedos e Jogos</li>
                        <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Livros</li>
                        <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Música e Hobbies</li>
                        <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Bebês</li>
                        <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Alimentos e Bebidas</li>
                        <li className='text-[#737373] text-[18px] hover:text-[#F47920] cursor-pointer'>Agro e Indústria</li>
                    </ul>
                    <span className='text-[#737373] text-[14px] cursor-pointer hover:text-[#F47920] underline mt-4'>Ver todos os departamentos</span>
                </div>
            </div>
        </div>
    )
}