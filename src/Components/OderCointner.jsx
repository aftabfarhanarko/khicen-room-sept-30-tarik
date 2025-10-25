import React, { use } from "react";
import CounterBox from "./CounterBox";
import OrderCart from "./Cart/OrderCart";

const OderCointner = ({ promise }) => {
  const orders = use(promise);
  console.log(orders);

  return (
    <div>
      <CounterBox></CounterBox>
      <section className="lexend-font w-11/12 mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className=" col-span-full lg:col-span-7 ">
            <h2 className="text-3xl font-semibold">Current Order</h2>
            <div className="space-y-9 ">
              {orders.map((order) => (
                <OrderCart order={order} key={order.id}></OrderCart>
              ))}
            </div>
          </div>

          <div className="col-span-full lg:col-span-5 bg-red-300">Cooking</div>
        </div>
      </section>
    </div>
  );
};

export default OderCointner;
