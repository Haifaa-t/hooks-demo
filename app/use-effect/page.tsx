// app/use-effect/page.tsx
'use client';

import { useEffect, useState } from 'react';

const DailyDua = () => {
  const duas = [
    'اللهم اجعلني من التوابين واجعلني من المتطهرين',
    'اللهم إني أسألك العفو والعافية',
    'رب اغفر لي ولوالديّ، رب ارحمهما كما ربياني صغيرا',
    'اللهم أعني على ذكرك وشكرك وحسن عبادتك',
    'اللهم ارزقني حبك وحب من يحبك'
  ];

  const [todayDua, setTodayDua] = useState('');

  useEffect(() => {
    const randomIndex = new Date().getDate() % duas.length;
    setTodayDua(duas[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">دعاء اليوم</h1>
      <p className="text-lg text-gray-700 bg-yellow-100 p-4 rounded shadow">
        {todayDua}
      </p>
    </div>
  );
};

export default DailyDua;
