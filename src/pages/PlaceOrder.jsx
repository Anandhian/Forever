import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import CartTotal from './CartTotal';

const PlaceOrder = () => {
  const { cartItems, products, placeOrder, delivery_fee, currency } = useContext(ShopContext);
  const navigate = useNavigate();

  const [method, setMethod] = useState("cod");

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const [subtotal, setSubtotal] = useState(0);
  const [firstImage, setFirstImage] = useState('');

  useEffect(() => {
    let newSubtotal = 0;
    let firstFound = false;

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        const product = products.find((p) => p.id === parseInt(productId));
        if (product) {
          newSubtotal += product.price * quantity;
          if (!firstFound && product.image) {
            setFirstImage(product.image); // Assume image is like "dress1.jpg"
            firstFound = true;
          }
        }
      }
    }
    setSubtotal(newSubtotal);
  }, [cartItems, products]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill out all form fields.");
      return;
    }

    placeOrder({
      formData,
      paymentMethod: method,
      subtotal
    });

    navigate('/orders');
  };

  const total = subtotal + delivery_fee;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Place Your Order</h2>

      {/* Preview Dress Image */}
      {firstImage && (
        <div className="mb-6">
          <img
            src={`/images/${firstImage}`}
            alt="Product Preview"
            className="w-40 h-auto rounded border"
          />
        </div>
      )}

      {/* Form Section */}
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Payment Method:</p>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="payment"
            checked={method === "cod"}
            onChange={() => setMethod("cod")}
          />
          <span className="ml-2">Cash on Delivery</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="payment"
            checked={method === "stripe"}
            onChange={() => setMethod("stripe")}
          />
          <span className="ml-2">Stripe</span>
        </label>
      </div>

    
      <CartTotal subtotal={subtotal} delivery_fee={delivery_fee} total={total} currency={currency} />

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Place Order
      </button>
    </div>
  );
};

export default PlaceOrder;









