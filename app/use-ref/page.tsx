'use client';

import React, { useRef } from 'react';

export default function UseRefInputDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus(); 
    }
  };

  const handleBlur = () => {
    inputRef.current?.blur();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">تجربة useRef مع input</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="اكتب شيء هنا"
        className="p-2 border rounded w-64"
      />

      <div className="flex gap-4">
        <button
          onClick={handleFocus}
          className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded"
        >
          Focus
        </button>
        <button
          onClick={handleClear}
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded"
        >
          Clear
        </button>
        <button
          onClick={handleBlur}
          className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded"
        >
          Blur
        </button>
      </div>
    </div>
  );
}

