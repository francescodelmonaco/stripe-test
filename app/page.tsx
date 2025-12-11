'use client';
import { useState } from 'react';
export default function Home() {
  const [loading, setLoading] = useState(false);
  const handleCheckout = async () => {
    setLoading(true);
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 2000 }), // 20€
    });

    const { url } = await response.json();
    if (url) {
      window.location.href = url;
    }
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-full disabled:opacity-50"
      >
        {loading ? 'Caricamento...' : 'Paga 20€'}
      </button>
    </main>
  );
}