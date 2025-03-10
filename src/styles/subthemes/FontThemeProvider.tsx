/**
 * @file FontThemeProvider.tsx
 * @description Provider component for the font theme.
 */

import type { ReactNode } from "react";
import { useState, useMemo } from "react";
import { FontThemeContext } from "./FontTheme";
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
  ResponsiveFontSizes,
  SemanticTypography,
} from "./constants/FontConstants";

/**
 * Props for the FontThemeProvider component
 */
interface FontThemeProviderProps {
  /** Initial device size */
  initialDeviceSize?: keyof typeof BreakpointValues;
  /** Child components */
  children: ReactNode;
}

/**
 * Provider component for the font theme
 * @param props - Component props
 * @returns Provider component
 */
export const FontThemeProvider = ({
  initialDeviceSize = "md",
  children,
}: FontThemeProviderProps) => {
  const [deviceSize, setDeviceSize] =
    useState<keyof typeof BreakpointValues>(initialDeviceSize);

  const fontThemeValue = useMemo(() => {
    return {
      fonts: {
        families: FontFamilies,
        sizes: {
          ...FontSizes,
          ...(ResponsiveFontSizes[deviceSize] || {}),
        },
        weights: FontWeights,
        lineHeights: LineHeights,
        letterSpacing: LetterSpacing,
        textTransforms: TextTransforms,
        fontStyles: FontStyles,
        textDecorations: TextDecorations,
        textAlignments: TextAlignments,
        semantic: SemanticTypography,
      },
      deviceSize,
      setDeviceSize: (size: keyof typeof BreakpointValues) =>
        setDeviceSize(size),
    };
  }, [deviceSize]);

  return <FontThemeContext value={fontThemeValue}>{children}</FontThemeContext>;
};
