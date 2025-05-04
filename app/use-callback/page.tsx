'use client';

import { useCallback, useState } from 'react';

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800">تسبيح</h1>
      <p className="text-gray-700 text-xl">سبحان الله × {count}</p>
      <button
        onClick={increment}
        className="bg-yellow-400 hover:bg-yellow-300 px-6 py-2 rounded font-semibold text-black"
      >
        سبح
      </button>
    </div>
  );
}
