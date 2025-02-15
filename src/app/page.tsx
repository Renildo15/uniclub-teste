import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import HeaderMenu from "@/components/Header/HeaderMenu";
import SearchButton from "@/components/SearchButton";


export default function Home() {
  return (
      <main className="flex flex-col gap-y-2 h-full bg-white">
          <div>
              <Header />
              <HeaderMenu />
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
              <Carousel />
              <Categories />
              <Products />
              <SearchButton />
          </div>
      </main>
  );
}