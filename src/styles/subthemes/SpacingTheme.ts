/**
 * @file SpacingTheme.tsx
 * @description Comprehensive spacing theme.
 * This theme provides spacing tokens through a context-based API.
 */

import { createContext, use } from "react";
import {
  BASE_SPACING_UNIT,
  SpacingScale,
  InsetSpacing,
  StackSpacing,
  InlineSpacing,
  GridSpacing,
  Containers,
  LayoutGrid,
  ZIndexScale,
  ComponentSpacing,
  TouchTargets,
  BorderRadius,
  BorderWidth,
  BoxShadow,
  toRem,
} from "./constants/SpacingConstants";

/**
 * The shape of the spacing theme context
 */
interface SpacingThemeContextType {
  /** All available spacing tokens */
  spacing: {
    base: number;
    scale: typeof SpacingScale;
    inset: typeof InsetSpacing;
    stack: typeof StackSpacing;
    inline: typeof InlineSpacing;
    grid: typeof GridSpacing;
    containers: typeof Containers;
    layoutGrid: typeof LayoutGrid;
    zIndex: typeof ZIndexScale;
    component: typeof ComponentSpacing;
    touchTargets: typeof TouchTargets;
    radius: typeof BorderRadius;
    borderWidth: typeof BorderWidth;
    shadow: typeof BoxShadow;
  };
  /** Current device size for responsive spacing */
  deviceSize: "sm" | "md" | "lg" | "xl";
  /** Set the current device size */
  setDeviceSize: (size: "sm" | "md" | "lg" | "xl") => void;
  /** Helper to convert px to rem */
  toRem: typeof toRem;
}

/**
 * React context for the spacing theme
 */
export const SpacingThemeContext = createContext<SpacingThemeContextType>({
  spacing: {
    base: BASE_SPACING_UNIT,
    scale: SpacingScale,
    inset: InsetSpacing,
    stack: StackSpacing,
    inline: InlineSpacing,
    grid: GridSpacing,
    containers: Containers,
    layoutGrid: LayoutGrid,
    zIndex: ZIndexScale,
    component: ComponentSpacing,
    touchTargets: TouchTargets,
    radius: BorderRadius,
    borderWidth: BorderWidth,
    shadow: BoxShadow,
  },
  deviceSize: "md",
  setDeviceSize: () => {
    console.warn(
      "SpacingThemeContext: setDeviceSize was called before context was initialized"
    );
  },
  toRem,
});

/**
 * Hook for accessing the spacing theme throughout the application
 * @returns The current spacing theme context
 */
export const useSpacingTheme = () => use(SpacingThemeContext);
