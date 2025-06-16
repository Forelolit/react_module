import { useEffect, useState } from 'react';

export const useScrollbarHide = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const layout = document.getElementById('root');
    if (!layout) return;

    if (isOpen) {
      layout.style.overflowY = 'hidden';
      document.documentElement.style.scrollbarGutter = 'stable';
    } else {
      layout.style.overflowY = 'auto';
      document.documentElement.style.scrollbarGutter = '';
    }

    return () => {
      layout.style.overflowY = 'auto';
      document.documentElement.style.scrollbarGutter = '';
    };
  }, [isOpen]);
  return { isOpen, setIsOpen };
};
