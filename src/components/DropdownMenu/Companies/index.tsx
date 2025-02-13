import More from "../../../../public/icons/more-icon.svg"
import Image from 'next/image';

export default function Companies() {
    return (
        <div className="w-full p-[20px] sm:p-[30px] lg:p-[40px] bg-[#FAF7F4]">
            <div className="flex flex-row justify-between items-center flex-nowrap overflow-x-auto gap-3 sm:gap-4 lg:gap-6">
                {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="flex flex-col justify-center items-center w-[70px] sm:w-[90px] text-center">
                        <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-[#F47920] rounded-full"></div>
                        <span className="text-[#737373] text-[12px] sm:text-[14px] md:text-[16px] mt-1">
                            Lorem Ipsum
                        </span>
                    </div>
                ))}
                <div className="flex flex-col justify-center items-center w-[70px] sm:w-[90px] text-center">
                    <div className="flex items-center justify-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-white rounded-full">
                        <Image src={More} alt="more" width={30} height={30} className="sm:w-[40px] sm:h-[40px]" />
                    </div>
                    <span className="text-[#737373] text-[12px] sm:text-[14px] md:text-[16px] mt-1">
                        Ver mais empresas
                    </span>
                </div>
            </div>
        </div>
    );
}
