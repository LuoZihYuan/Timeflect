/**
 * @file ThemeProvider.tsx
 * @description Provider component for the combined theme.
 */

import type { ReactNode } from "react";
import { useMemo } from "react";
import { ColorThemeProvider } from "./subthemes/ColorThemeProvider";
import { FontThemeProvider } from "./subthemes/FontThemeProvider";
import { SpacingThemeProvider } from "./subthemes/SpacingThemeProvider";
import { ThemeContext } from "./Theme";

/**
 * Props for the ThemeProvider component
 */
interface ThemeProviderProps {
  /** Initial color mode */
  initialColorMode?: "light" | "dark";
  /** Initial device size */
  initialDeviceSize?: "sm" | "md" | "lg" | "xl";
  /** Child components */
  children: ReactNode;
}

/**
 * Combined provider for all themes
 * @param props - Component props
 * @returns Provider component
 */
export const ThemeProvider = ({
  initialColorMode = "light",
  initialDeviceSize = "md",
  children,
}: ThemeProviderProps) => {
  const themeContextValue = useMemo(
    () => ({
      initialized: true,
    }),
    []
  );

  return (
    <ThemeContext value={themeContextValue}>
      <ColorThemeProvider initialMode={initialColorMode}>
        <FontThemeProvider initialDeviceSize={initialDeviceSize}>
          <SpacingThemeProvider initialDeviceSize={initialDeviceSize}>
            {children}
          </SpacingThemeProvider>
        </FontThemeProvider>
      </ColorThemeProvider>
    </ThemeContext>
  );
};
