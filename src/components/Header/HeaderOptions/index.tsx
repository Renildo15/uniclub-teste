import Image from "next/image";

import LocalIcon from "../../../../public/icons/local-icon.svg"
import UserIcon from "../../../../public/icons/user-icon.svg"
import CartIcon from "../../../../public/icons/cart-icon.svg"


export default function HeaderOptions() {
    return (
        <div className="flex flex-row justify-around w-full sm:w-[60%] md:w-[50%] lg:w-[40%]">
            <div className="flex flex-row items-center gap-1 cursor-pointer">
                <div className="flex bg-[#F7F3EE] w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full justify-center items-center">
                    <Image src={LocalIcon} alt="local icon" width={13} height={17} className="sm:w-[15px] sm:h-[19px]" />
                </div>
                <div className="hidden sm:flex flex-col gap-0 leading-tight">
                    <span className="font-semibold text-[#3F3F3F] text-[13px] md:text-[14px] sm:text-[15px]">Onde</span>
                    <span className="text-[#3F3F3F] text-[13px] md:text-[14px] sm:text-[15px]">você está?</span>
                </div>
            </div>

            <div className="flex flex-row items-center gap-1 cursor-pointer">
                <div className="flex bg-[#F7F3EE] w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full justify-center items-center">
                    <Image src={UserIcon} alt="user icon" width={18} height={18} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <div className="hidden sm:flex flex-col gap-0 leading-tight">
                    <span className="font-semibold text-[#3F3F3F] text-[13px] md:text-[14px] sm:text-[15px]">Faça login</span>
                    <span className="text-[#3F3F3F] text-[13px] md:text-[14px] sm:text-[15px]">ou cadastre-se</span>
                </div>
            </div>

            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <div className="flex bg-[#F7F3EE] w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full justify-center items-center">
                    <Image src={CartIcon} alt="cart icon" width={18} height={18} className="sm:w-[20px] sm:h-[20px]" />
            </div>
            </div>
        </div>
    );
}
