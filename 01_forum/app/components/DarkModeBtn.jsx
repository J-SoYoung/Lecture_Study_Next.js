"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DarkModeBtn() {
  const router = useRouter();

  useEffect(() => {
    let name = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
    if (name == "") {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
    }
  }, []);

  const [darkModeIcon, setDarkModeIcon] = useState(false);
  const handleClickDarkMode = () => {
    setDarkModeIcon(!darkModeIcon);
    document.cookie =
      `mode=${darkModeIcon ? "light" : "dark"}; max-age=` + 3600 * 24 * 400;
    router.refresh();
  };

  return (
    <span className={`darkmode-icon`} onClick={handleClickDarkMode}>
      {darkModeIcon ? "☀️" : "🌙"}
    </span>
  );
}
