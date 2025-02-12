import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className=" flex flex-col gap-6 h-full bg-white">
      <Header/>
      <Carousel/>
      <Categories/>
      <Products/>
    </main>
  );
}
