"use client";
import { useState } from "react";
import { Plus } from 'lucide-react';

const ShoppingCartWishlist = () => {
    const [cartItems, setCartItems] = useState(new Set());

  const cartData = [
    { id: 1, product: 'Wireless Headphones', price: 129.99, quantity: 1, category: 'electronics', inCart: false, image: '🎧' },
    { id: 2, product: 'USB-C Cable (2m)', price: 19.99, quantity: 2, category: 'accessories', inCart: true, image: '🔌' },
    { id: 3, product: 'Laptop Stand', price: 49.99, quantity: 1, category: 'office', inCart: false, image: '🖥️' },
    { id: 4, product: 'Mechanical Keyboard', price: 159.99, quantity: 1, category: 'electronics', inCart: true, image: '⌨️' },
    { id: 5, product: 'Monitor Light Bar', price: 99.99, quantity: 1, category: 'office', inCart: false, image: '💡' },
  ];

  const toggleCart = (id: number) => {
    const newSet = new Set(cartItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCartItems(newSet);
  };

  return (
    <table className="max-w-md bg-white shadow border border-gray-200">
      <thead>
        <tr className="bg-slate-100 border-b border-slate-200">
          <th className="px-6 py-4 text-left w-8"></th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
            Product
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            Category
          </th>
          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
            Price
          </th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
            Stock
          </th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item) => (
          <tr
            key={item.id}
            className={`border-b border-slate-100 hover:bg-blue-50 transition-colors group ${
              cartItems.has(item.id) ? "bg-emerald-50" : ""
            }`}
          >
            <td className="px-6 py-4">
              <button
                onClick={() => toggleCart(item.id)}
                className={`cursor-pointer p-2 rounded-lg transition-all ${
                  cartItems.has(item.id)
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                }`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.image}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.product}
                  </p>
                  <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <span className="inline-flex px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium capitalize">
                {item.category}
              </span>
            </td>
            <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
              ${item.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 text-center">
              <span className="inline-flex px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                In Stock
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShoppingCartWishlist;
