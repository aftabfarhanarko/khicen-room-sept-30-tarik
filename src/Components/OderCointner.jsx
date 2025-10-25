import React, { use, useState } from "react";
import CounterBox from "./CounterBox";
import OrderCart from "./Cart/OrderCart";
import Cooking from "./Cart/Cooking";
import Ready from "./Cart/Ready";
import { toast } from "react-toastify";

const OderCointner = ({ promise }) => {
  const data = use(promise);
  const [orders, setOrders] = useState(data);

  const [cooking, setCooking] = useState([]);

  const [complet, setComplet] = useState([]);

  const handelOrder = (order) => {
    const isExgist = cooking.find((item) => item.id == order.id);
    if (isExgist) {
      toast.success("This Dish Allready Cooking");
      return;
    }
    const newItemCooking = [...cooking, order];
    setCooking(newItemCooking);
  };

  const handelCookinges = (cook) => {
     cooking.coockAt = new Date().toLocaleDateString();
    const isExgist = complet.find((item) => item.id == cook.id);
    if (isExgist) {
      toast.success("This Dish Allready Serve");
      return;
    }
    const newItemCooking = [...complet, cook];
    setComplet(newItemCooking);

    const meny = cooking.filter((item) => item.id !== cook.id);
    setCooking(meny);

    const myOrder = orders.filter((one) => one.id !== cook.id);
    setOrders(myOrder);
  };

  return (
    <div>
      <CounterBox
        cooking={cooking.length}
        orderTotal={orders.length}
        complet={complet.length}
      ></CounterBox>

      <section className="lexend-font w-11/12 mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className=" col-span-full lg:col-span-8 ">
            <h2 className="text-3xl font-semibold">Current Order</h2>
            <div className="space-y-9 ">
              {orders.map((order) => (
                <OrderCart
                  handelOrder={handelOrder}
                  order={order}
                  key={order.id}
                ></OrderCart>
              ))}
            </div>
          </div>

          <div className="col-span-full lg:col-span-4 ">
            <div>
              <h2 className="text-3xl font-semibold">Cooking </h2>
              <div className="space-y-6 border border-base-200 bg-base-200 p-5 rounded-lg  mt-5">
                {cooking.length === 0 ? (
                  <div className="text-center py-10">No Cooking Item</div>
                ) : (
                  cooking.map((myesd) => (
                    <Cooking
                      handelCookinges={handelCookinges}
                      order={myesd}
                      key={myesd.id}
                    ></Cooking>
                  ))
                )}
              </div>
            </div>
            <div className="mt-20">
              <h2 className="text-3xl font-semibold">Ready to Serve </h2>
              <div className=" space-y-6 border border-base-300 rounded-lg p-5 bg-base-200 rounded-lg mt-5">
                {complet.length === 0 ? (
                  <div className="text-center py-10">No Dise Ready </div>
                ) : (
                  complet.map((ok) => <Ready key={ok.id} order={ok}></Ready>)
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OderCointner;
