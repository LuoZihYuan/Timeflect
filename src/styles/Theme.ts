/**
 * @file Theme.tsx
 * @description Combined theme that provides access to all subthemes.
 */

import { createContext, use } from "react";
import { useColorTheme } from "./subthemes/ColorTheme";
import { useFontTheme } from "./subthemes/FontTheme";
import { useSpacingTheme } from "./subthemes/SpacingTheme";
import { useAnimationTheme } from "./subthemes/AnimationTheme";

/**
 * Interface for the combined theme context
 */
interface ThemeContextType {
  /** Flag to indicate if the theme provider is initialized */
  initialized: boolean;
}

/**
 * Default context value
 */
const defaultThemeContext: ThemeContextType = {
  initialized: false,
};

/**
 * Context for the combined theme
 */
export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

/**
 * Combined hook for accessing all subthemes
 * @returns Combined theme context with color, font, spacing, and animation
 */
export const useTheme = () => {
  const themeContext = use(ThemeContext);
  const color = useColorTheme();
  const font = useFontTheme();
  const spacing = useSpacingTheme();
  const animation = useAnimationTheme();

  if (!themeContext.initialized) {
    console.warn("useTheme: The ThemeProvider may not be properly initialized");
  }

  return { color, font, spacing, animation };
};
