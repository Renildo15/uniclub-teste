import Image from "next/image";
import UserIcon from "../../../../../public/icons/user-icon.svg"

export default function LoginOption() {
    return (
        <div className="flex flex-row md:items-center gap-1 cursor-pointer">
            <div className="flex bg-[#F7F3EE] w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full justify-center items-center">
                <Image src={UserIcon} alt="user icon" width={16} className="md:m-[18px]" />
            </div>
            <div className="hidden sm:flex flex-col gap-0 leading-tight">
                <span className="font-semibold text-[#3F3F3F] text-[13px] md:text-[14px] sm:text-[15px]">Faça login</span>
                <span className="text-[#3F3F3F] text-[13px] md:text-[14px] sm:text-[15px]">ou cadastre-se</span>
            </div>
        </div>
    )
}