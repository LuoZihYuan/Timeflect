/**
 * @file SpacingThemeProvider.tsx
 * @description Provider component for the spacing theme.
 */

import type { ReactNode } from "react";
import { useState, useMemo } from "react";
import { SpacingThemeContext } from "./SpacingTheme";
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
 * Props for the SpacingThemeProvider component
 */
interface SpacingThemeProviderProps {
  /** Initial device size */
  initialDeviceSize?: "sm" | "md" | "lg" | "xl";
  /** Child components */
  children: ReactNode;
}

/**
 * Provider component for the spacing theme
 * @param props - Component props
 * @returns Provider component
 */
export const SpacingThemeProvider = ({
  initialDeviceSize = "md",
  children,
}: SpacingThemeProviderProps) => {
  const [deviceSize, setDeviceSize] = useState<"sm" | "md" | "lg" | "xl">(
    initialDeviceSize
  );

  const spacingThemeValue = useMemo(() => {
    return {
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
      deviceSize,
      setDeviceSize,
      toRem,
    };
  }, [deviceSize]);

  return (
    <SpacingThemeContext value={spacingThemeValue}>
      {children}
    </SpacingThemeContext>
  );
};
