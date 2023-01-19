import { FC, useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

import { ReactComponent as SunIcon } from "assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "assets/icon-moon.svg";

export const ThemeSwitcher: FC = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? MoonIcon : SunIcon;

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    if (isDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
