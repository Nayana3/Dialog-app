import React, { useState } from 'react';
import Dialog from './components/Dialog/Dialog';

const dialogs = [
  {
    header: { icon: '🔔', title: 'Reminder', buttons: ['Dismiss'] },
    content: 'Meeting starts in 10 minutes.',
    footer: { buttons: ['OK'], info: 'Don’t be late!' }
  },
  {
    header: { icon: '⚠️', title: 'Session Expiring', buttons: ['Close'] },
    content: 'Your session will expire in 2 minutes.',
    footer: { buttons: ['Extend', 'Logout'] }
  },
  {
    header: { icon: 'ℹ️', title: 'Update Complete', buttons: [] },
    content: 'System updated successfully.',
    footer: { buttons: [] }
  }
];

function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const [dark, setDark] = useState(false);

  return (
    <div className={`p-6 min-h-screen ${dark ? 'dark bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Dialog Showcase</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 border rounded text-sm"
        >
          Toggle {dark ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <div className="space-x-3">
        {dialogs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Show Dialog {idx + 1}
          </button>
        ))}
      </div>

      {selected !== null && (
        <Dialog config={dialogs[selected]} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App;
