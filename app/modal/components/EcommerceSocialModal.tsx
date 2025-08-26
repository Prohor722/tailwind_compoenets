import { CheckCircle, Lock, Minus, Plus, Truck, X } from 'lucide-react';
import React, { useState } from 'react'

const EcommerceSocialModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const closeModal = () => setActiveModal(null);
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Premium Headphones', price: 299, quantity: 1, image: '🎧' },
    { id: 2, name: 'Wireless Mouse', price: 89, quantity: 2, image: '🖱️' }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0));
  };
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>

        <div className={`fixed inset-0 bg-black bg-opacity-50 
        p-4 z-50
        ${activeModal === "ecommerce_checkout_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Checkout</h3>
                <button onClick={closeModal} className="cursor-pointer text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center mt-4 space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center cursor-alias">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= i ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                      {step > i ? <CheckCircle size={16} /> : i}
                    </div>
                    {i < 3 && <div className={`w-8 h-1 ${step > i ? 'bg-green-500' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 overflow-y-auto" style={{ maxHeight: '400px' }}>
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Review Your Order</h4>
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-800">{item.name}</h5>
                        <p className="text-gray-600 text-sm">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="cursor-pointer w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="cursor-pointer w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total: ${total}</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Shipping Information</h4>
                  <div className="space-y-3">
                    <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="City" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <input type="text" placeholder="ZIP Code" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Truck size={20} className="text-blue-500" />
                      <span className="font-medium">Standard Delivery</span>
                    </div>
                    <p className="text-gray-600 text-sm">5-7 business days - Free</p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Payment Method</h4>
                  <div className="space-y-3">
                    <input type="text" placeholder="Card Number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="MM/YY" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <input type="text" placeholder="CVC" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-700">
                      <Lock size={16} />
                      <span className="text-sm font-medium">Secure Payment</span>
                    </div>
                    <p className="text-green-600 text-xs mt-1">Your payment information is encrypted and secure.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="cursor-pointer flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-xl transition-colors"
                >
                  Back
                </button>
              )}
              <button
                onClick={() => step < 3 ? setStep(step + 1) : closeModal()}
                className="cursor-pointer flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition-colors font-medium"
              >
                {step === 3 ? `Pay $${total}` : 'Continue'}
              </button>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('ecommerce_checkout_modal')}
          className="cursor-pointer p-4
          bg-white rounded-xl shadow-2xl"
        >
          E-commerce Checkout Modal
        </button>


      </div>
  )
}

export default EcommerceSocialModal