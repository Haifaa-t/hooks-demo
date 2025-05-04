'use client';

import { useRef } from 'react';

export default function UseRefDemo() {
  const countRef = useRef(0); 

  const handleClick = () => {
    countRef.current += 1;
    alert(`عدد مرات قراءة الدعاء: ${countRef.current}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800">دعاء الصباح</h1>
      <p className="text-gray-600 italic text-center max-w-md">
        اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.
      </p>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-black rounded"
      >
        قرأت الدعاء
      </button>
    </div>
  );
}
