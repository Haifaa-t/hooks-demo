'use client';

import React, { useCallback, useState, memo } from 'react';


const TasbeehButton = memo(({ onTasbeeh }: { onTasbeeh: () => void }) => {
  console.log('Re-rendered <TasbeehButton />');
  return (
    <button
      onClick={onTasbeeh}
      className="bg-yellow-400 hover:bg-yellow-300 px-6 py-2 rounded font-semibold text-black"
    >
      سبح
    </button>
  );
});

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">تجربة useCallback</h1>
      <p className="text-lg text-gray-700">عدد التسبيحات: {count}</p>

      <TasbeehButton onTasbeeh={increment} />
    </div>
  );
}

