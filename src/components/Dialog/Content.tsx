import React from 'react';

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-sm text-gray-800 dark:text-gray-200">{children}</div>
);

export default Content;
