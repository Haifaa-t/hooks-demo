'use client';

import React, { useState } from 'react';

export default function TasbeehPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4"> عداد التسبيح</h1>
      <p className="text-6xl font-bold mb-4">{count}</p>
      <div className="flex gap-4">
        <button
          className="bg-yellow-400 px-6 py-2 rounded text-black font-semibold hover:bg-yellow-300"
          onClick={() => setCount(count + 1)}
        >
          سبحان الله 
        </button>
        <button
          className="bg-gray-300 px-6 py-2 rounded text-black font-semibold hover:bg-gray-400"
          onClick={() => setCount(0)}
        >
          اعاده
        </button>
      </div>
    </div>
  );
}



