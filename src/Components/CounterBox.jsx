import { ClipboardPen, CookingPot, Heater, ScrollText } from "lucide-react";
import React from "react";

const CounterBox = ({ orderTotal, cooking,complet }) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
      <div className="border-4 border-amber-400 border-dotted rounded-2xl  p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{orderTotal}</h2>
          </div>
        </div>
      </div>

      <div className="border-4 border-amber-400 border-dotted rounded-2xl  p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Heater className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Currently Cooking
            <h2 className="text-6xl font-bold">{cooking}</h2>
          </div>
        </div>
      </div>

      <div className="border-4 border-amber-400 border-dotted rounded-2xl  p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Ready for Serve
            <h2 className="text-6xl font-bold">{complet}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterBox;
// <UtensilsCrossed /> //     <Utensils />
