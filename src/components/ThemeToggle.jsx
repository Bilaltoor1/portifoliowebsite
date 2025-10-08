import React, { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return 'dark';
    } catch (e) {
      return 'dark';
    }
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
      className={`relative p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      style={{
        background: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        boxShadow: 'var(--shadow-sm)',
        color: 'var(--accent-primary)',
        border: '1px solid'
      }}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <HiSun className="w-5 h-5 transition-transform duration-300 hover:rotate-90 hover:scale-110" />
        ) : (
          <HiMoon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12 hover:scale-110" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
