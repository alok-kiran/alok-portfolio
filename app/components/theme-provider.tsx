// Dark mode is enforced globally via className="dark" on <html> in layout.tsx.
// This provider is kept as a passthrough so existing useTheme() imports don't break.

"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext<{ theme: "dark"; toggleTheme: () => void }>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
