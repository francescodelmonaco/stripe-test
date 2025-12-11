export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center min-h-screen w-full max-w-3xl gap-4 mt-16">
        <h1 className="text-3xl font-bold">Stripe Test</h1>
        <p className="text-lg">Test Stripe integration</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-950 transition-colors cursor-pointer shadow">Checkout</button>
      </main>
    </div>
  );
}
