import React from 'react';
import { useCart } from '../context/CartContext';

const Payment = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePayment = () => {
    alert('Payment Successful!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
      <div className="mb-6">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between py-2 border-b">
            <span>
              {item.name} (x{item.qty})
            </span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-4">Total: {total}</h2>
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
