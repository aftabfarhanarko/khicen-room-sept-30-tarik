import { ClipboardPen, CookingPot, ScrollText } from "lucide-react";
import React from "react";

const CounterBox = () => {
  return (
    <div className="flex justify-between mt-6">
      <div className="flex w-[30%] rounded-lg p-7 justify-between items-center border-2 border-yellow-400 border-dashed b ">
        <ScrollText size={130} color="#FCB700" />

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl">Counter Orders</h2>
          <p className="text-3xl font-semibold">1</p>
        </div>
      </div>
      <div className="flex  rounded-lg p-7 justify-between  w-[30%] items-center border-2 border-yellow-400 border-dashed b ">
        <CookingPot size={130} color="#FCB700" />

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl">Currently Cooking</h2>
          <p className="text-3xl font-semibold">1</p>
        </div>
      </div>
      <div className="flex  rounded-lg p-7 justify-between  w-[30%] items-center border-2 border-yellow-400 border-dashed b ">
        <ClipboardPen size={130} color="#FCB700" />

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl">Ready for Serve</h2>
          <p className="text-3xl font-semibold">1</p>
        </div>
      </div>
    </div>
  );
};

export default CounterBox;
// <UtensilsCrossed /> //     <Utensils />
