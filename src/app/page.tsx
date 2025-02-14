import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Image from "next/image";
import SearchIcon from "../../public/icons/search-mobile-icon.svg"

export default function Home() {
  return (
    <main className=" flex flex-col gap-y-6 h-full bg-white">
      <div>
        <Header/>
        <HeaderMenu/>
      </div>
      <Carousel/>
      <Categories/>
      <Products/>
      <button
        className="fixed bottom-4 right-4 bg-[#F47920] p-3 rounded-full shadow-lg hover:bg-[#F47920]/90 transition-all z-50 md:hidden"
        aria-label="Pesquisar"
      >
         <Image
            src={SearchIcon}
            alt="search"
            width={20}
            height={20}
            className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </button>
    </main>
  );
}
