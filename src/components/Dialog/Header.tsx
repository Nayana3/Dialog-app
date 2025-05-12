import React from 'react';
import IconAndText from './common/IconAndText';
import ButtonGroup from './common/ButtonGroup';

interface HeaderProps {
  icon: string;
  title: string;
  buttons: string[];
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ icon, title, buttons, onClose }) => (
  <div className="flex justify-between items-center">
    <IconAndText icon={icon} text={title} />
    <ButtonGroup buttons={buttons} onClose={onClose} />
  </div>
);

export default Header;
