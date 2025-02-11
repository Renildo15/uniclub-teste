import React from "react";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className=" flex flex-col gap-6 h-full bg-white">
      <Header/>
      <Banner/>
    </main>
  );
}
