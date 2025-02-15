
import LocalOption from "../Options/LocalOption";
import LoginOption from "../Options/LoginOption";
import CartOption from "../Options/CartOption";


export default function HeaderOptions() {
    return (
        <div className="flex flex-row justify-end gap-x-2 md:justify-between mr-1 md:mr-0 w-[78px] md:w-[30%] 2xl:w-[50%]">
            <LocalOption display="hidden"/>
            <LoginOption/>
            <CartOption/>
        </div>
    );
}
