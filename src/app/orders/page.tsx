"use client";
import React, { useState, useEffect } from 'react';

interface Item {
  productId: string;
  name: string;
  price: number;
  qty: number;
}

interface Sale {
  _id: string;
  customerName: string;
  shippingAddress: string;
  items: Item[];
  totalPrice: number;
  createdAt: string;
}

export default function Orders() {
  const [orders, setOrders] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [editItems, setEditItems] = useState<Item[]>([]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://parcial2-programacion-web-backend.onrender.com/api/sales');
      if (!res.ok) throw new Error('Error fetching orders');
      const data = await res.json();
      setOrders(data.sale || data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar pedido?')) return;
    try {
      const res = await fetch(
        `https://parcial2-programacion-web-backend.onrender.com/api/sales/${id}`,
        { method: 'DELETE' }
      );
      if (!res.ok) throw new Error('Delete failed');
      setOrders(prev => prev.filter(o => o._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const startEdit = (order: Sale) => {
    setEditingId(order._id);
    setEditName(order.customerName);
    setEditAddress(order.shippingAddress);
    // Deep copy items
    setEditItems(order.items.map(i => ({ ...i })));
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditItems([]);
  };

  const saveEdit = async (id: string) => {
    try {
      const res = await fetch(
        `https://parcial2-programacion-web-backend.onrender.com/api/sales/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customerName: editName,
            shippingAddress: editAddress,
            items: editItems
          })
        }
      );
      if (!res.ok) throw new Error('Update failed');
      const updated = await res.json();
      setOrders(prev => prev.map(o => (o._id === id ? updated : o)));
      cancelEdit();
    } catch (err) {
      console.error(err);
    }
  };

  // Safely update quantity, removing item if <= 0
  const updateItemQty = (index: number, qtyStr: string) => {
    const parsed = parseInt(qtyStr, 10);
    const newQty = isNaN(parsed) ? 0 : parsed;
    setEditItems(prev => {
      const items = [...prev];
      if (newQty <= 0) {
        items.splice(index, 1);
      } else {
        items[index] = { ...items[index], qty: newQty };
      }
      return items;
    });
  };

  return (
    <>
      <main className="max-w-5xl mx-auto py-10 px-4 space-y-6">
        <h2 className="text-3xl font-bold">Pedidos</h2>

        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {orders.map(order => {
          const isEditing = editingId === order._id;
          const dynamicTotal = isEditing
            ? editItems.reduce((sum, i) => sum + i.price * i.qty, 0)
            : order.totalPrice;

          return (
            <div key={order._id} className="border rounded-lg shadow p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">ID: {order._id}</p>
                  <p className="text-sm text-gray-500">
                    Creado: {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {isEditing ? (
                    <>
                      <button
                        onClick={cancelEdit}
                        className="text-gray-500 hover:text-gray-900"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => saveEdit(order._id)}
                        className="text-blue-600 hover:underline"
                      >
                        Guardar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(order)}
                        className="text-indigo-600 hover:underline"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="text-red-600 hover:underline"
                      >
                        Eliminar
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Cliente</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                      className="w-full border rounded-md p-2"
                    />
                  ) : (
                    <p>{order.customerName}</p>
                  )}

                  <label className="block text-sm font-medium">Dirección</label>
                  {isEditing ? (
                    <textarea
                      value={editAddress}
                      onChange={e => setEditAddress(e.target.value)}
                      className="w-full border rounded-md p-2"
                    />
                  ) : (
                    <p>{order.shippingAddress}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Total</p>
                  <p className="font-semibold">
                    ${dynamicTotal.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Items: {isEditing ? editItems.length : order.items.length}
                  </p>
                </div>
              </div>

              {/* Items Section */}
              <div className="space-y-2">
                {isEditing ? (
                  <>
                    <p className="font-medium">Modificar items</p>
                    {editItems.map((item, idx) => (
                      <div
                        key={`${item.productId}-${idx}`}
                        className="flex items-center justify-between space-x-2"
                      >
                        <span className="flex-1">{item.name}</span>
                        <input
                          type="number"
                          min={0}
                          value={item.qty}
                          onChange={e => updateItemQty(idx, e.target.value)}
                          className="w-16 border rounded p-1"
                        />
                        <span className="font-medium">
                          ${ (item.price * item.qty).toFixed(2) }
                        </span>
                      </div>
                    ))}
                  </>
                ) : (
                  <details className="mt-2">
                    <summary className="cursor-pointer font-medium">
                      Ver detalles de productos
                    </summary>
                    <div className="mt-2 space-y-1">
                      {order.items.map((i, idx) => (
                        <p key={`${i.productId}-${idx}`} className="text-sm">
                          {i.qty}× {i.name} @ ${i.price.toFixed(2)}
                        </p>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
