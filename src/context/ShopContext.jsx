import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [placedOrders, setPlacedOrders] = useState([]);

  const delivery_fee = 30;
  const currency = '$';

  const addtocart = (itemid, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    const updatedCart = { ...cartItems };
    if (!updatedCart[itemid]) updatedCart[itemid] = {};
    updatedCart[itemid][size] = (updatedCart[itemid][size] || 0) + 1;
    setCartItems(updatedCart);
  };

  const getCartCount = () => {
    let total = 0;
    for (let productId in cartItems) {
      for (let size in cartItems[productId]) {
        total += cartItems[productId][size];
      }
    }
    return total;
  };

  const updateCartItem = (productId, size, quantity) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (!updated[productId]) updated[productId] = {};
      updated[productId][size] = quantity;
      return updated;
    });
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[productId]) {
        delete updated[productId][size];
        if (Object.keys(updated[productId]).length === 0) {
          delete updated[productId];
        }
      }
      return updated;
    });
  };

  const clearCart = () => {
    setCartItems({});
    localStorage.setItem("cartItems", "{}");
  };

  // ✅ PLACE ORDER LOGIC WITH IMAGE, NAME, PRICE
  const placeOrder = ({ formData, paymentMethod, subtotal }) => {
    const orderItems = [];

    for (let productId in cartItems) {
      const product = products.find(p => p.id === parseInt(productId));
      if (product) {
        for (let size in cartItems[productId]) {
          orderItems.push({
            _id: product.id,
            name: product.name,
            image: product.image?.[0], // assuming image is an array
            quantity: cartItems[productId][size],
            price: product.price,
            size,
          });
        }
      }
    }

    const newOrder = {
      id: Date.now(),
      items: orderItems,
      formData,
      paymentMethod,
      subtotal,
      shippingFee: delivery_fee,
      total: subtotal + delivery_fee,
      date: new Date().toLocaleString(),
    };

    const updatedOrders = [...placedOrders, newOrder];
    setPlacedOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setCartItems({});
    localStorage.setItem("cartItems", "{}");
  };

  const addPlacedOrder = (order) => {
    const updatedOrders = [...placedOrders, order];
    setPlacedOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setPlacedOrders(savedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(placedOrders));
  }, [placedOrders]);

  const value = {
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    delivery_fee,
    currency,
    cartItems,
    placedOrders,
    addtocart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getCartCount,
    placeOrder,
    addPlacedOrder,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


