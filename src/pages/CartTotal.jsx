import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { cartItems, products, currency } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let newSubtotal = 0;
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          const product = products.find((p) => p._id === productId);
          if (product) {
            newSubtotal += product.price * quantity;
          }
        }
      }
    }
    setSubtotal(newSubtotal);
  }, [cartItems, products]);

  const shippingFee = 10;
  const total = subtotal + shippingFee;

  const handleCheckout = () => {
    navigate('/place-order');
  };

  return (
    <div className="flex justify-end my-20 px-4">
      <div className="w-full sm:w-[450px]">
        {/* White Box for Cart Totals */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="text-2xl mb-4">
            <div className="inline-flex gap-2 items-center mb-3">
              <p className="text-gray-500">
                CART <span className="text-gray-700 font-medium">TOTALS</span>
              </p>
              <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{currency}{subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>{currency}{shippingFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-base">
              <p>Total</p>
              <p>{currency}{total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Checkout Button OUTSIDE the box */}
       
      </div>
    </div>
  );
};

export default CartTotal;

;


