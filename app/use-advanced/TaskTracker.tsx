'use client';

import React, { useReducer, useTransition, useState, useDebugValue } from 'react';

// useReducer لإدارة عدد المهام المنجزة
type State = { completed: number };
type Action = { type: 'DONE' } | { type: 'RESET' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'DONE':
      return { completed: state.completed + 1 };
    case 'RESET':
      return { completed: 0 };
    default:
      return state;
  }
};

// useDebugValue لعرض حالة المهام للمطور
function useTaskDebug(count: number) {
  useDebugValue(count > 0 ? `أنجز ${count} مهام ✅` : 'ما فيه مهام منجزة بعد');
  return count;
}

export default function TaskTracker() {
  const [state, dispatch] = useReducer(reducer, { completed: 0 });
  const completed = useTaskDebug(state.completed);

  const [tasks, setTasks] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleGenerateTasks = () => {
    startTransition(() => {
      const fakeTasks = Array.from({ length: 5000 }, (_, i) => `مهمة رقم ${i + 1}`);
      setTasks(fakeTasks);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center bg-slate-50">
      <h1 className="text-2xl font-bold text-gray-800">📝 عداد المهام</h1>

      <p className="text-xl text-gray-700">المهام المنجزة: {completed}</p>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => dispatch({ type: 'DONE' })}
          className="bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded text-white font-semibold"
        >
          أنجز مهمة
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="bg-gray-400 hover:bg-gray-500 px-6 py-2 rounded text-white font-semibold"
        >
          إعادة التعيين
        </button>
        <button
          onClick={handleGenerateTasks}
          className="bg-green-500 hover:bg-green-400 px-6 py-2 rounded text-white font-semibold"
        >
          توليد مهام كثيرة
        </button>
      </div>

      {isPending && <p className="text-gray-500">جاري التحميل...</p>}

      <ul className="h-40 overflow-y-scroll w-full max-w-md bg-white rounded shadow p-4 text-sm">
        {tasks.slice(0, 30).map((task, index) => (
          <li key={index} className="text-gray-700">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
