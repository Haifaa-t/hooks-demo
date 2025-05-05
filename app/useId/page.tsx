'use client';

import { useId } from 'react';

export default function UseIdDemo() {
  const nameInputId = useId(); 
  const emailInputId = useId();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 gap-6 text-center bg-slate-50">
      <h1 className="text-2xl font-bold text-gray-800"> useId</h1>

      <form className="space-y-4 text-left w-full max-w-md bg-white p-6 rounded shadow">
        <div>
          <label htmlFor={nameInputId} className="block text-gray-700 font-medium mb-1">
            الاسم
          </label>
          <input
            id={nameInputId}
            type="text"
            placeholder="ادخل اسمك"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label htmlFor={emailInputId} className="block text-gray-700 font-medium mb-1">
            البريد الإلكتروني
          </label>
          <input
            id={emailInputId}
            type="email"
            placeholder="ادخل بريدك"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </form>
    </div>
  );
}

