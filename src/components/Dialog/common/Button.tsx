import React from 'react';

const Button: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm transition"
  >
    {label}
  </button>
);

export default Button;
