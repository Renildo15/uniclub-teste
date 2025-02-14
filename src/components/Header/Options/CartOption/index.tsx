import Image from "next/image";
import CartIcon from "../../../../../public/icons/cart-icon.svg"

export default function CartOption() {
    return (
        <div className="flex flex-row items-center gap-2 cursor-pointer">
            <div className="flex bg-[#F7F3EE] w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full justify-center items-center">
                <Image src={CartIcon} alt="cart icon" width={20} className="md:m-[18px]" />
            </div>
        </div>
    )
}