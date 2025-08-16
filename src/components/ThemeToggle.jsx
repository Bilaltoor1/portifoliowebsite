import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      // default to dark
      return 'dark';
    } catch (e) {
      // ignore
    }
    return 'dark';
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className={`p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/60 ${className} bg-white/10 dark:bg-dark-800/40 text-dark-900 dark:text-gray-200`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
