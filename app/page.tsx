"use client";

import CarsGridMainPage from "./components/CarsGridMainPage";
import Heros from "./components/Heros";


;

export default function Home() {
  return (
    <div className="bg-[#F6F7F9] p-4">
      <Heros />
      <CarsGridMainPage />
      </div>
  );
}