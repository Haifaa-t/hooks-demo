'use client';

import { useReducer } from 'react';

type State = {
  [key: string]: number;
};

type Action = { type: 'increment'; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { ...state, [action.payload]: state[action.payload] + 1 };
    default:
      return state;
  }
};

export default function TasbeehCounter() {
  const [state, dispatch] = useReducer(reducer, {
    'سبحان الله': 0,
    'الحمد لله': 0,
    'الله أكبر': 0,
  });

  return (
    <div className="text-center mt-10">
      {Object.entries(state).map(([key, value]) => (
        <div key={key} className="mb-4">
          <p className="text-xl">{key}: {value}</p>
          <button
            onClick={() => dispatch({ type: 'increment', payload: key })}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {key}
          </button>
        </div>
      ))}
    </div>
  );
}

