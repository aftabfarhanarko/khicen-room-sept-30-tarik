import { UtensilsCrossed } from "lucide-react";
import React from "react";

const OrderCart = ({ order }) => {
  return (
    <div className="p-5 mt-2 border border-base-300 rounded-xl shadow-xl relative space-y-3">
      {/* Order Number */}
      <p className="text-xs bg-amber-400 p-2 inline-block rounded-xl">
        #{order.order_no}
      </p>

      {/* Order Title */}
      <h2 className="text-xl flex items-center gap-2">
        <UtensilsCrossed />
        {order.quantity} {order.order_title}
      </h2>

      {/* Special Instruction */}
      <div className="mt-3 text-xs">
        <h4 className="text-primary font-bold text-sm">Instruction</h4>
        <p>{order.special_instruction}</p>
      </div>

      {/* Table Number Badge */}
      <div className="absolute right-2 top-2 w-10 h-10 flex justify-center items-center bg-amber-500 rounded-full opacity-30 text-white">
        {order.table_no}
      </div>
    </div>
  );
};

export default OrderCart;
