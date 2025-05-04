'use client';

import { useId } from 'react';

export default function LoginForm() {
  const usernameId = useId();
  const passwordId = useId();

  return (
    <form className="p-4">
      <div className="mb-4">
        <label htmlFor={usernameId} className="block mb-1">اسم المستخدم</label>
        <input id={usernameId} type="text" className="w-full border px-2 py-1" />
      </div>
      <div className="mb-4">
        <label htmlFor={passwordId} className="block mb-1">كلمة المرور</label>
        <input id={passwordId} type="password" className="w-full border px-2 py-1" />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">تسجيل الدخول</button>
    </form>
  );
}
