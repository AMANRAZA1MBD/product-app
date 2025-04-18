import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'earphone', price: 799, image: "../public/pro1.png" },
    { id: 2, name: 'MacBook Pro', price: 400000 ,image: "../public/pro2.png" },
    { id: 3, name: 'samsung_s23', price: 15000
        
        , image: "../public/pro3.png" },
];

const Home = () => {
    const { cart, dispatch } = useCart();

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded-xl shadow-md">

                        <img src={product.image} alt=" " width={300} />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="mb-2">Price: ₹{product.price}</p>
                        <button
                            onClick={() => dispatch({ type: 'ADD', payload: product })}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-2">Cart</h2>
            {cart.length === 0 && <p>No items in cart.</p>}

            {cart.map(item => (
                <div
                    key={item.id}
                    className="flex justify-between items-center border-b py-2">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}
                            className="px-2 bg-gray-200">-
                        </button>
                        <span>{item.qty}</span>
                        <button
                            onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}
                            className="px-2 bg-gray-200"
                        >
                            +
                        </button>
                        <button
                            onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}
                            className="text-red-500 ml-4"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            {cart.length > 0 && (
                <Link to="/payment">
                    <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded">
                        Go to Payment
                    </button>
                </Link>
            )}
        </div>
    );
};

export default Home;
