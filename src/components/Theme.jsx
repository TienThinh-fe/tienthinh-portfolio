import useStore from "../store";
import MoonDarkMode from "../assets/moon-light.webp";
import MoonLightMode from "../assets/moon-dark.webp";
import { useState } from "react";

export function Theme() {
  const [theme, setTheme] = useStore((state) => [state.theme, state.setTheme]);
  const [moon, setMoon] = useState(MoonLightMode);

  function handleToggleTheme() {
    if (theme === "") {
      setTheme("dark");
      setMoon(MoonDarkMode);
    } else {
      setTheme("");
      setMoon(MoonLightMode);
    }
  }

  return (
    <div className={`theme theme__${theme}`}>
      <span onClick={handleToggleTheme}>
        <img src={moon} alt="Toggle theme" />
      </span>
    </div>
  );
}
