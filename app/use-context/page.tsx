'use client';

import { useTheme } from '../context/ThemeContext';

const QuranVerse = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="text-center mt-10">
      <p className="text-lg mb-4">🌙 وضعك الحالي: {theme === 'light' ? 'نهاري' : 'ليلي'}</p>
      <h2 className="text-2xl font-bold">
        ﴿ إِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾
      </h2>
      <button
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-300"
      >
        تبديل الوضع
      </button>
    </div>
  );
};

export default QuranVerse;

