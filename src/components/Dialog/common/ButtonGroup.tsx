import React from 'react';
import Button from './Button';

interface ButtonGroupProps {
  buttons: string[];
  onClose?: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, onClose }) => {
  const handleClick = (label: string) => {
    const common = ['close', 'ok', 'cancel', 'dismiss'];
    if (common.includes(label.toLowerCase()) && onClose) {
      onClose();
    } else {
      alert(`${label} clicked`);
    }
  };

  return (
    <div className="flex gap-2 justify-end">
      {buttons.map((label, idx) => (
        <Button key={idx} label={label} onClick={() => handleClick(label)} />
      ))}
    </div>
  );
};

export default ButtonGroup;
