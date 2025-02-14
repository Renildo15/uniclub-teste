
import LocalOption from "../Options/LocalOption";
import LoginOption from "../Options/LoginOption";
import CartOption from "../Options/CartOption";


export default function HeaderOptions() {
    return (
        <div className="flex flex-row justify-end gap-x-2 md:justify-around w-[78px] sm:w-[60%] md:w-[50%] lg:w-[40%]">
            <LocalOption display="hidden"/>
            <LoginOption/>
            <CartOption/>
        </div>
    );
}
