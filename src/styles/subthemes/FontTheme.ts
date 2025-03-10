/**
 * @file FontTheme.tsx
 * @description Comprehensive typography theme.
 * This theme provides typography tokens through a context-based API.
 */

import { createContext, use } from "react";
import type { BreakpointValues } from "./constants/FontConstants";
import {
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacing,
  TextTransforms,
  FontStyles,
  TextDecorations,
  TextAlignments,
  SemanticTypography,
} from "./constants/FontConstants";

/**
 * The shape of the font theme context
 */
interface FontThemeContextType {
  /** All available font tokens */
  fonts: {
    families: typeof FontFamilies;
    sizes: typeof FontSizes;
    weights: typeof FontWeights;
    lineHeights: typeof LineHeights;
    letterSpacing: typeof LetterSpacing;
    textTransforms: typeof TextTransforms;
    fontStyles: typeof FontStyles;
    textDecorations: typeof TextDecorations;
    textAlignments: typeof TextAlignments;
    semantic: typeof SemanticTypography;
  };
  /** Current device size for responsive typography */
  deviceSize: keyof typeof BreakpointValues;
  /** Set the current device size */
  setDeviceSize: (size: keyof typeof BreakpointValues) => void;
}

/**
 * Default context value
 */
const defaultFontTheme: FontThemeContextType = {
  fonts: {
    families: FontFamilies,
    sizes: FontSizes,
    weights: FontWeights,
    lineHeights: LineHeights,
    letterSpacing: LetterSpacing,
    textTransforms: TextTransforms,
    fontStyles: FontStyles,
    textDecorations: TextDecorations,
    textAlignments: TextAlignments,
    semantic: SemanticTypography,
  },
  deviceSize: "md",
  setDeviceSize: () => {
    console.warn(
      "FontThemeContext: setDeviceSize was called before context was initialized"
    );
  },
};

/**
 * React context for the font theme
 */
export const FontThemeContext =
  createContext<FontThemeContextType>(defaultFontTheme);

/**
 * Hook for accessing the font theme throughout the application
 * @returns The current font theme context
 */
export const useFontTheme = () => use(FontThemeContext);
