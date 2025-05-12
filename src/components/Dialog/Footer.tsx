import React from 'react';
import ButtonGroup from './common/ButtonGroup';

interface FooterProps {
  buttons: string[];
  info?: string;
  onClose: () => void;
}

const Footer: React.FC<FooterProps> = ({ buttons, info, onClose }) => (
  <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 dark:border-gray-600">
    <ButtonGroup buttons={buttons.length > 0 ? buttons : ['Close']} onClose={onClose} />
    {info && <p className="text-xs text-gray-500 dark:text-gray-400">{info}</p>}
  </div>
);

export default Footer;
