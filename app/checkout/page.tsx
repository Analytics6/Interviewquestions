'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Lock, Check } from 'lucide-react'

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    country: '',
    state: '',
    zipCode: '',
  })

  const [payment, setPayment] = useState('card')

  const cartItems = [
    { title: 'AWS Solutions Architect Associate', price: 79.99 },
    { title: 'Azure Administrator Certified', price: 69.99 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the payment with Stripe
    alert('Order placed successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Billing Information */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Billing Information</h2>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
                  />

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="state"
                      placeholder="State/Province"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

                  <div className="space-y-4 mb-6">
                    <label className="flex items-center p-4 border border-indigo-600 rounded-lg cursor-pointer bg-indigo-50">
                      <input
                        type="radio"
                        value="card"
                        checked={payment === 'card'}
                        onChange={(e) => setPayment(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 font-semibold">Credit/Debit Card</span>
                    </label>

                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                      <input
                        type="radio"
                        value="paypal"
                        checked={payment === 'paypal'}
                        onChange={(e) => setPayment(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 font-semibold">PayPal</span>
                    </label>

                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer">
                      <input
                        type="radio"
                        value="crypto"
                        checked={payment === 'crypto'}
                        onChange={(e) => setPayment(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 font-semibold">Cryptocurrency</span>
                    </label>
                  </div>

                  {payment === 'card' && (
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        maxLength={19}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        <input
                          type="text"
                          name="cvv"
                          placeholder="CVV"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          maxLength={4}
                          required
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Security */}
                <div className="flex items-center gap-3 text-gray-600">
                  <Lock size={20} className="text-green-600" />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Complete Purchase
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-20">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  {cartItems.map((item, idx) => (
                    <div key={idx}>
                      <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                      <p className="text-right text-indigo-600 font-bold">${item.price}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-2xl font-bold mb-6">
                  <span>Total</span>
                  <span className="text-indigo-600">${total.toFixed(2)}</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Check size={16} className="text-green-600 flex-shrink-0 mt-1" />
                    <span>Instant access to all courses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={16} className="text-green-600 flex-shrink-0 mt-1" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={16} className="text-green-600 flex-shrink-0 mt-1" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>

                <Link href="/cart" className="mt-8 block">
                  <button className="text-indigo-600 font-semibold hover:text-indigo-700 text-center">
                    ← Back to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
