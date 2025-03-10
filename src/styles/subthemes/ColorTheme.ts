/**
 * @file ColorTheme.tsx
 * @description Comprehensive color theme.
 * This theme provides color tokens through a context-based API.
 */

import { createContext, use } from "react";
import { BasePalette, SemanticColors } from "./constants/ColorConstants";

/**
 * The shape of the color theme context
 */
interface ColorThemeContextType {
  /** Current color mode */
  mode: "light" | "dark";
  /** All available colors based on current mode */
  colors: typeof SemanticColors & {
    base: typeof BasePalette;
  };
  /** Function to toggle between light and dark mode */
  toggleColorMode: () => void;
}

/**
 * Default context value
 */
const defaultColorTheme: ColorThemeContextType = {
  mode: "light",
  colors: {
    ...SemanticColors,
    base: BasePalette,
  },
  toggleColorMode: () => {
    console.warn(
      "ColorThemeContext: toggleColorMode was called before context was initialized"
    );
  },
};

/**
 * React context for the color theme
 */
export const ColorThemeContext =
  createContext<ColorThemeContextType>(defaultColorTheme);

/**
 * Hook for accessing the color theme throughout the application
 * @returns The current color theme context
 */
export const useColorTheme = () => use(ColorThemeContext);
