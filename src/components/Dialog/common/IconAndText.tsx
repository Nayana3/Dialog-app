import React from 'react';

const IconAndText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 font-semibold text-lg" id="dialog-title">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);

export default IconAndText;
