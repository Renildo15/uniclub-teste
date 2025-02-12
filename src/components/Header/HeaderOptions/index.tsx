import Image from "next/image";

import LocalIcon from "../../../../public/icons/local-icon.svg"
import UserIcon from "../../../../public/icons/user-icon.svg"
import CartIcon from "../../../../public/icons/cart-icon.svg"


export default function HeaderOptions() {
    return (
        <div className="flex flex-row gap-8 ml-[30px]">
            <div className="flex flex-row items-center gap-2">
                <div className="flex bg-[#F7F3EE] w-[36px] h-[36px] rounded-[30px] justify-center items-center">
                    <Image
                        src={LocalIcon}
                        alt="local icon"
                        width={14}
                        height={19}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-[#3F3F3F] text-xs">Onde</span>
                    <span className="text-[#3F3F3F] text-xs">você está?</span>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2">
                <div className="flex bg-[#F7F3EE] w-[36px] h-[36px] rounded-[30px] justify-center items-center">
                    <Image
                        src={UserIcon}
                        alt="user icon"
                        width={19}
                        height={18}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-[#3F3F3F] text-xs">Faça login</span>
                    <span className="text-[#3F3F3F] text-xs">ou cadastre-se</span>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2">
                <div className="flex bg-[#F7F3EE] w-[36px] h-[36px] rounded-[30px] justify-center items-center">
                    <Image
                        src={CartIcon}
                        alt="cart icon"
                        width={18}
                        height={17}
                    />
                </div>
            </div>
        </div>
    )
}