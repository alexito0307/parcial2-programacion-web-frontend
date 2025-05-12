'use client';
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Checkout() {
  const {
    state: { items },
    dispatch,
  } = useCart();

  // Form and UI state
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Submit handler with loader, clear, and success message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://parcial2-programacion-web-backend.onrender.com/api/sales',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, address, items }),
        }
      );
      if (!response.ok) throw new Error('Checkout failed');
      // Clear cart and show success
      dispatch({ type: 'CLEAR' });
      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto py-10 px-4">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Customer & Cart Details */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Su carrito</h2>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-200"
                placeholder="Ingrese su nombre"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Dirección de envío
              </label>
              <textarea
                id="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-200"
                placeholder="Ingrese su dirección"
              />
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <p className="text-gray-600">Su carrito esta vacío.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center border p-4 rounded-lg shadow-sm">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-gray-500">
                      {item.qty} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                </div>
              ))
            )}

            {/* Success message */}
            {success && <p className="text-green-600 mt-4">Compra exitosa!</p>}
          </section>

          {/* Right: Summary & Checkout */}
          <aside className="space-y-4 border p-6 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Costo de envio</span>
              <span>${(subtotal * 0.15).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>Total (MXN)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              disabled={isLoading || items.length === 0}
              className="w-full py-3 bg-[#000F8F] text-white rounded-md font-medium disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Pay now'}
            </button>

            {/* Why Counter Culture Coffee */}
            <div className="mt-6 p-4 border rounded">
              <h4 className="font-semibold mb-2">Para que La Taza?</h4>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <span>🍃</span>
                  <span className="text-sm">Sustentabilidad</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>🥄</span>
                  <span className="text-sm">Calidad</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>🏅</span>
                  <span className="text-sm">B Corp Certified</span>
                </div>
              </div>
            </div>

            {/* Payment icons */}
            <div className="text-center">Todas las transacciones aseguradas con</div>
            <div className="flex justify-center space-x-4">
              <img src="/images/checkout/visa.png" alt="Visa" className="h-6" />
              <img src="/images/checkout/mastercard.png" alt="MasterCard" className="h-6" />
              <img src="/images/checkout/amex.svg" alt="AMEX" className="h-6" />
              <img src="/images/checkout/discover.jpg" alt="Discover" className="h-6" />
              <img src="/images/checkout/applepay.png" alt="Apple Pay" className="h-6" />
            </div>
          </aside>
        </main>
      </form>
    </>
  );
}
