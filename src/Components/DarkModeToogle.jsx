import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../Theme/ThemeContext"; // Import the context hook

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full transition-all bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-900" />
      )}
    </button>
  );
}
