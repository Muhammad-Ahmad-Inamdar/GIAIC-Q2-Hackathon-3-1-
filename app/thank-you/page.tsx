'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold mb-4">Thank You For Our Services</h1>
      <p className="text-2xl mb-8">
        Now you can use our car
      </p>
      <Link href="/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Go to Home
        </button>
      </Link>
    </div>
  );
}