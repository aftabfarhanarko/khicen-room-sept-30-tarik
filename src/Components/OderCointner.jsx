import React, { use } from "react";
import CounterBox from "./CounterBox";
import FullItems from "./Items/FullItems";

const OderCointner = ({ promise }) => {
  const orders = use(promise);
  console.log(orders);

  return (
    <div>
      <CounterBox></CounterBox>
      <section className="lexend-font w-11/12 mx-auto py-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className=" col-span-full lg:col-span-7 bg-amber-200">Order</div>
            <div className="col-span-full lg:col-span-5 bg-red-300" >Cooking</div>

         </div>
      </section>
    </div>
  );
};

export default OderCointner;
