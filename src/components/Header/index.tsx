import SearchInput from "../SearchInput";
import HeaderOptions from "../HeaderOptions"; 
import Image from "next/image";
import Logo from "../../../public/logo.svg"
import HeaderMenu from "../HeaderMenu";

export default function Header() {
    return (
     <header className="flex flex-col items-center justify-center bg-[#EAE0D5] border-t-[8px] border-t-[#F47920] w-full">
         <div className="flex flex-row items-center justify-between h-[122px] w-full px-24">
             <Image
                 src={Logo}
                 alt="Logo"
                 width={220}
                 height={36.08}
             />
             <SearchInput />
             <HeaderOptions />
         </div>
         <div className="flex flex-row items-center justify-between bg-[#F7F3EE] w-full h-[60px] px-24">
             <HeaderMenu/>
         </div>
     </header>
    )
 }
 