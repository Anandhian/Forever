import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Tilte from '../components/Tilte';
import { FaTrashAlt } from 'react-icons/fa';
import CartTotal from '../pages/CartTotal';

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    removeFromCart,
    updateCartItem,
  } = useContext(ShopContext);

  const navigate = useNavigate(); // ✅ for page navigation
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const subtotal = cartData.reduce((acc, item) => {
    const product = products.find((p) => p._id === item._id);
    return product ? acc + product.price * item.quantity : acc;
  }, 0);

  const shippingFee = 10;

  const handleQuantityChange = (productId, size, newQty) => {
    if (newQty > 0) {
      updateCartItem(productId, size, newQty);
    }
  };

  const handleCheckout = () => {
    navigate('/place-order'); // ✅ navigate to PlaceOrder page
  };

  return (
    <div className='border-t pt-14 px-4 md:px-20 pb-20'>
      <div className='text-2xl mb-6'>
        <Tilte text1='Your' text2='Cart' />
      </div>

      <div className='grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2'>
          {cartData.length > 0 ? (
            cartData.map((item, index) => {
              const productData = products.find((p) => p._id === item._id);
              if (!productData) return null;

              return (
                <div
                  key={index}
                  className='flex items-center justify-between border-t border-b py-5 text-gray-800'
                >
                  <div className='flex items-center gap-5'>
                    <img
                      src={productData.image?.[0] || 'https://via.placeholder.com/150'}
                      alt={productData.name}
                      className='w-20 h-20 object-cover'
                    />
                    <div>
                      <h3 className='font-semibold'>{productData.name}</h3>
                      <p className='text-sm text-gray-500 mt-1'>
                        {currency}
                        {productData.price}
                      </p>
                      <p className='text-sm mt-1 border border-gray-300 inline-block px-2 py-1'>
                        {item.size}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.size, item.quantity - 1)
                      }
                      className='px-3 py-1 border rounded text-lg'
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type='text'
                      value={item.quantity}
                      readOnly
                      className='w-12 border px-2 py-1 text-center'
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.size, item.quantity + 1)
                      }
                      className='px-3 py-1 border rounded text-lg'
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item._id, item.size)}
                      className='text-red-500 text-lg hover:text-red-700 ml-3'
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className='text-gray-500 text-sm'>Your cart is empty.</p>
          )}
        </div>

        {/* Cart Totals and Checkout Button */}
        <div>
          <CartTotal subtotal={subtotal} shippingFee={shippingFee} currency={currency} />
          {cartData.length > 0 && (
            <div className='w-full text-end mt-4'>
              <button
                onClick={handleCheckout}
                className='bg-black text-white text-sm px-8 py-3 rounded hover:opacity-90 transition'
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;



