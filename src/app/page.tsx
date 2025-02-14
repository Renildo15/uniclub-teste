import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import HeaderMenu from "@/components/Header/HeaderMenu";
import SearchButton from "@/components/SearchButton";


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
      <SearchButton/>
    </main>
  );
}
