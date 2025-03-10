/**
 * @file ThemeProvider.tsx
 * @description Provider component for the combined subthemes.
 */

import type { ReactNode } from "react";
import { useMemo } from "react";
import { ColorThemeProvider } from "./subthemes/ColorThemeProvider";
import { FontThemeProvider } from "./subthemes/FontThemeProvider";
import { SpacingThemeProvider } from "./subthemes/SpacingThemeProvider";
import { AnimationThemeProvider } from "./subthemes/AnimationThemeProvider";
import { ThemeContext } from "./Theme";

/**
 * Props for the ThemeProvider component
 */
interface ThemeProviderProps {
  /** Initial color mode */
  initialColorMode?: "light" | "dark";
  /** Initial device size */
  initialDeviceSize?: "sm" | "md" | "lg" | "xl";
  /** Initial motion preference */
  initialMotionPreference?: "full" | "reduced";
  /** Whether to respect system motion preference */
  respectSystemMotionPreference?: boolean;
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
  initialMotionPreference = "full",
  respectSystemMotionPreference = true,
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
            <AnimationThemeProvider
              initialMotionPreference={initialMotionPreference}
              respectSystemPreference={respectSystemMotionPreference}
            >
              {children}
            </AnimationThemeProvider>
          </SpacingThemeProvider>
        </FontThemeProvider>
      </ColorThemeProvider>
    </ThemeContext>
  );
};
