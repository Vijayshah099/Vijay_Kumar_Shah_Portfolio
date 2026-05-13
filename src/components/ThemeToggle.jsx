import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
