"use client";

import React, { useEffect } from "react";

import data from "@/data.json";

const THEME_KEY = "theme";
export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }): { children: React.ReactNode } => {
  const [customTheme, setCustomTheme] = React.useState(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem(THEME_KEY);
      if (theme) {
        return JSON.parse(theme);
      }
    }
    return {};
  });

  function updateTheme(theme: { primary: string }) {
    setCustomTheme({
      primary: theme.primary,
    });
  }

  useEffect(() => {
    const style = document.documentElement.style;
    const cssVariables = [
      {
        name: "--primary",
        value: customTheme?.primary ?? "black",
      },
    ];
    cssVariables.forEach((variable) => {
      style.setProperty(variable.name, variable.value);
    });
  }, [customTheme]);

  function mockDataFecth() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

  useEffect(() => {
    mockDataFecth().then((theme) => {
      updateTheme(theme as { primary: string });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(customTheme));
  }, [customTheme]);

  return (
    <ThemeContext.Provider value={{ customTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
