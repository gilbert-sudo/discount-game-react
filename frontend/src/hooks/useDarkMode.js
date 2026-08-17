import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('color-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false; // Default to light as per HTML
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return [isDark, toggleDarkMode];
}
