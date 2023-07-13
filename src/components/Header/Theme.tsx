import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { SunFill, MoonStarsFill } from "react-bootstrap-icons";

function ThemeToggleButton() {
  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
    setStoredTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <MoonStarsFill /> : <SunFill />}
    </Button>
  );
}

const getStoredTheme = () =>
  localStorage.getItem("theme") || getSystemPreference();
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return getSystemPreference();
};

const getSystemPreference = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-bs-theme", theme);
};

export default ThemeToggleButton;
