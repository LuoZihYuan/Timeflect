/**
 * @file index.ts
 * @description Main entry point for the theme
 */

// Export theme providers and hooks
export { ThemeProvider } from "./ThemeProvider";
export { useTheme } from "./Theme";
export { useColorTheme } from "./subthemes/ColorTheme";
export { useFontTheme } from "./subthemes/FontTheme";
export { useSpacingTheme } from "./subthemes/SpacingTheme";
export { useAnimationTheme } from "./subthemes/AnimationTheme";
