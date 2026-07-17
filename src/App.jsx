import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-black
        text-gray-900
        dark:text-white
        transition-colors
        duration-300
      "
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;