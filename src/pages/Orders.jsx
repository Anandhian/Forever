import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Tilte from '../components/Tilte';

const Orders = () => {
  const { placedOrders, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 px-4 sm:px-10 pb-20">
      <div className="text-2xl mb-6">
        <Tilte text1="MY" text2="ORDERS" />
      </div>

      {placedOrders.length === 0 ? (
        <p className="text-gray-600 mt-10">No orders placed yet.</p>
      ) : (
        placedOrders.map((order, orderIndex) => (
          <div key={`order-${orderIndex}`} className="mb-10 border rounded-lg p-4 shadow">
            <div className="text-sm text-gray-500 mb-3 flex flex-wrap gap-6">
              <span>
                <strong>Order Date:</strong>{" "}
                {order?.date ? new Date(order.date).toDateString() : "N/A"}
              </span>
              <span>
                <strong>Payment:</strong>{" "}
                {order?.payment?.toUpperCase() || "N/A"}
              </span>
              <span>
                <strong>Total:</strong> ₹{order?.amount || 0}
              </span>
            </div>

            {order.items?.map((item, itemIndex) => (
              <div
                key={`item-${orderIndex}-${itemIndex}`}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 border-t border-b py-5 text-gray-800"
              >
                <div className="flex items-start gap-5">
                  <img
                    src={item.image?.[0] || 'https://via.placeholder.com/100'}
                    alt={item.name}
                    className="w-20 h-20 object-cover border rounded"
                  />
                  <div className="text-sm">
                    <p className="text-base font-medium">{item.name}</p>
                    <p className="mt-1 text-gray-600">
                      Price: {currency}{item.price} | Qty: {item.quantity} | Size: {item.size}
                    </p>
                    <p className="text-gray-600 mt-1">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto mt-3 md:mt-0 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                    Order Placed
                  </div>
                  <button className="border px-4 py-2 rounded hover:bg-gray-100 transition">
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;




