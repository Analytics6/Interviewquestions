'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Trash2, Plus, Minus } from 'lucide-react'

export default function CartPage() {
  const [cartItems] = useState([
    {
      id: 1,
      title: 'AWS Solutions Architect Associate',
      price: 79.99,
      quantity: 1,
      image: 'AWS',
    },
    {
      id: 2,
      title: 'Azure Administrator Certified',
      price: 69.99,
      quantity: 1,
      image: 'Azure',
    },
  ])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length > 0 ? (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {cartItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`p-6 ${idx !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <div className="flex gap-6">
                      {/* Thumbnail */}
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                        {item.image}
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-2xl font-bold text-indigo-600">${item.price}</p>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-3">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Minus size={18} />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Heart size={20} />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded-lg">
                          <Trash2 size={20} className="text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
                <Link href="/courses">
                  <button className="btn-primary">Continue Shopping</button>
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit sticky top-20">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-bold mb-6">
              <span>Total</span>
              <span className="text-indigo-600">${total.toFixed(2)}</span>
            </div>

            <button className="btn-primary w-full mb-3">
              Proceed to Checkout
            </button>

            <Link href="/courses">
              <button className="btn-outline w-full">
                Continue Shopping
              </button>
            </Link>

            {/* Discount Code */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <input
                type="text"
                placeholder="Discount code"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="w-full text-indigo-600 font-semibold hover:text-indigo-700">
                Apply Discount
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Lifetime access</p>
              <p>✓ Instant access after purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
