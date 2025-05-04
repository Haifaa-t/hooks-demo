'use client';

import { useState, useMemo } from 'react';

export default function UseMemoDemo() {
  const [ayah, setAyah] = useState(
    'الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم'
  );


  const letterCount = useMemo(() => {
    console.log('🔁 إعادة حساب عدد الحروف...');
    return ayah.replace(/\s/g, '').length;
  }, [ayah]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800">احسب عدد الحروف</h1>
      <textarea
        className="p-4 border rounded w-full max-w-md"
        rows={3}
        value={ayah}
        onChange={(e) => setAyah(e.target.value)}
      />
      <p className="text-gray-700">🔢 عدد الحروف: {letterCount}</p>
    </div>
  );
}



