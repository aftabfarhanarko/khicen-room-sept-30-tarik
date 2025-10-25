import React from "react";

const Ready = ({ order }) => {
  return (
    <div className="border border-base-300  rounded-xl p-5 shadow bg-green-50 hover:shadow-md transition">
      {/* Order Title */}
      <h3 className="text-xl font-bold text-green-700 mb-2">
        {order.order_title}
      </h3>

      {/* Table No */}
      <p className="text-gray-800">
        <span className="font-semibold">Table:</span> {order.table_no}
      </p>

      {/* Waiter ID */}
      <p className="text-gray-800">
        <span className="font-semibold">Waiter ID:</span> {order.waiterId}
      </p>

      {/* Cooking Time */}
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Cooking Time:</span> {order.cooked_At}
      </p>
    </div>
  );
};

export default Ready;
