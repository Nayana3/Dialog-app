import React, { useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface DialogProps {
  config: {
    header: { icon: string; title: string; buttons: string[] };
    content: string;
    footer: { buttons: string[]; info?: string };
  };
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ config, onClose }) => {
  // Escape key listener
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  // Click outside to close
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'dialog-backdrop') onClose();
  };

  return (
    <div
      id="dialog-backdrop"
      onClick={handleBackdrop}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full max-w-md space-y-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <Header icon={config.header.icon} title={config.header.title} buttons={config.header.buttons} onClose={onClose} />
        <Content>{config.content}</Content>
        <Footer buttons={config.footer.buttons} info={config.footer.info} onClose={onClose} />
      </motion.div>
    </div>
  );
};

export default Dialog;
