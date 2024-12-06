'use client';

import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 z-50 p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: theme === 'dark' ? '#D4AF37' : '#000000',
        color: theme === 'dark' ? '#000000' : '#D4AF37',
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
      >
        {theme === 'dark' ? (
          <FaSun className="text-xl" />
        ) : (
          <FaMoon className="text-xl" />
        )}
      </motion.div>
    </motion.button>
  );
}
