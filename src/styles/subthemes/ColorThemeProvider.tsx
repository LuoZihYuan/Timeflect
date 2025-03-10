/**
 * @file ColorThemeProvider.tsx
 * @description Provider component for the color theme.
 */

import type { ReactNode } from "react";
import { useState, useMemo } from "react";
import { ColorThemeContext } from "./ColorTheme";
import {
  BasePalette,
  SemanticColors,
  DarkModeColors,
} from "./constants/ColorConstants";

/**
 * Props for the ColorThemeProvider component
 */
interface ColorThemeProviderProps {
  /** Initial color mode */
  initialMode?: "light" | "dark";
  /** Child components */
  children: ReactNode;
}

/**
 * Provider component for the color theme
 * @param props - Component props
 * @returns Provider component
 */
export const ColorThemeProvider = ({
  initialMode = "light",
  children,
}: ColorThemeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">(initialMode);

  const colorThemeValue = useMemo(() => {
    const themeColors =
      mode === "light"
        ? { ...SemanticColors }
        : {
            ...SemanticColors,
            text: { ...DarkModeColors.text },
            background: { ...DarkModeColors.background },
            border: { ...DarkModeColors.border },
            pomodoro: { ...DarkModeColors.pomodoro },
            dataViz: {
              ...SemanticColors.dataViz,
              background: DarkModeColors.dataViz.background,
              grid: DarkModeColors.dataViz.grid,
              labels: DarkModeColors.dataViz.labels,
            },
          };

    return {
      mode,
      colors: {
        ...themeColors,
        base: BasePalette,
      },
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    };
  }, [mode]);

  return (
    <ColorThemeContext value={colorThemeValue}>{children}</ColorThemeContext>
  );
};
