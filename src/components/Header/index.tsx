import SearchInput from "./SearchInput";
import HeaderOptions from "./HeaderOptions"; 
import Image from "next/image";
import Logo from "../../../public/logo.svg"

export default function Header() {
    return (
     <header className="flex flex-col items-center justify-center bg-[#EAE0D5] border-t-[8px] border-t-[#F47920] w-full">
         <div className="flex flex-row items-center py-6 px-[24px] w-[88%] 3xl:w-[70%] 3xl:gap-x-4 2xl:w-[70%] 2xl:gap-x-4">
             <Image
                 src={Logo}
                 alt="Logo"
                 width={220}
                 height={36.08}
             />
             <SearchInput />
             <HeaderOptions />
         </div>
     </header>
    )
 }
 