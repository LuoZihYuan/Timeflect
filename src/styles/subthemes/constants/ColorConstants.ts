/**
 * @file ColorConstants.ts
 * @description Color constants for the color theme.
 */

/**
 * Base Color Palette
 */
export const BasePalette = {
  /**
   * Primary brand colors - indigo-based palette representing focus and productivity
   */
  primary: {
    /** Lightest primary shade, used for subtle backgrounds */
    50: "#EEF2FF",
    /** Very light primary, used for hover states on light backgrounds */
    100: "#E0E7FF",
    /** Light primary, used for selected states and subtle indicators */
    200: "#C7D2FE",
    /** Medium-light primary, used for secondary buttons and icons */
    300: "#A5B4FC",
    /** Medium primary, used for secondary active states */
    400: "#818CF8",
    /** Base primary color, used for primary buttons and key interactive elements */
    500: "#6366F1",
    /** Medium-dark primary, used for hover states on primary buttons */
    600: "#4F46E5",
    /** Dark primary, used for active/pressed states */
    700: "#4338CA",
    /** Very dark primary, used for specific contrast needs */
    800: "#3730A3",
    /** Darkest primary, rarely used except in dark mode contexts */
    900: "#312E81",
  },

  /**
   * Secondary colors - teal-based palette representing time and progress
   */
  secondary: {
    50: "#F0FDFA",
    100: "#CCFBF1",
    200: "#99F6E4",
    300: "#5EEAD4",
    400: "#2DD4BF",
    /** Base secondary color, used for secondary elements and accents */
    500: "#14B8A6",
    600: "#0D9488",
    700: "#0F766E",
    800: "#115E59",
    900: "#134E4A",
  },

  /**
   * Accent colors - coral-based palette for highlighting and calls-to-action
   */
  accent: {
    50: "#FFF1F2",
    100: "#FFE4E6",
    200: "#FECDD3",
    300: "#FDA4AF",
    400: "#FB7185",
    /** Base accent color, used for important highlights and energy points */
    500: "#F43F5E",
    600: "#E11D48",
    700: "#BE123C",
    800: "#9F1239",
    900: "#881337",
  },

  /**
   * Neutral colors - slate-based palette for text, backgrounds, and borders
   */
  neutral: {
    /** White, used for card backgrounds and text on dark surfaces */
    0: "#FFFFFF",
    /** Nearly white, used for subtle backgrounds */
    50: "#F8FAFC",
    /** Very light gray, used for background variations and hover states */
    100: "#F1F5F9",
    /** Light gray, used for dividers and subtle borders */
    200: "#E2E8F0",
    /** Medium-light gray, used for disabled elements and secondary borders */
    300: "#CBD5E1",
    /** Medium gray, used for placeholder text and inactive icons */
    400: "#94A3B8",
    /** Medium-dark gray, used for secondary text */
    500: "#64748B",
    /** Dark gray, used for body text */
    600: "#475569",
    /** Very dark gray, used for headings and important text */
    700: "#334155",
    /** Nearly black, used for high-contrast text and dark mode elements */
    800: "#1E293B",
    /** "Black", used for highest contrast text and dark backgrounds */
    900: "#0F172A",
    /** Pure black, used sparingly for special contrast needs */
    1000: "#000000",
  },
};

/**
 * Semantic Colors
 */
export const SemanticColors = {
  /**
   * Status Colors
   * @description Colors that represent different states and feedback
   */
  status: {
    /** Success color for completed items, achievements, and positive feedback */
    success: {
      light: "#86EFAC", // green-300
      base: "#22C55E", // green-500
      dark: "#15803D", // green-700
    },
    /** Warning color for alerts, pending items, and cautionary messages */
    warning: {
      light: "#FDE68A", // amber-200
      base: "#F59E0B", // amber-500
      dark: "#B45309", // amber-700
    },
    /** Error color for failures, blockers, and critical alerts */
    error: {
      light: "#FDA4AF", // rose-300
      base: "#F43F5E", // rose-500
      dark: "#BE123C", // rose-700
    },
    /** Info color for neutral notifications and guidance */
    info: {
      light: "#A5B4FC", // indigo-300
      base: "#6366F1", // indigo-500
      dark: "#4338CA", // indigo-700
    },
  },

  /**
   * Text Colors
   * @description Colors used for different types of text
   */
  text: {
    /** Primary text for headings and body text (high contrast) */
    primary: BasePalette.neutral[800],
    /** Secondary text for less important content */
    secondary: BasePalette.neutral[600],
    /** Tertiary text for hints, placeholders, and disabled content */
    tertiary: BasePalette.neutral[400],
    /** Text on dark backgrounds */
    onDark: BasePalette.neutral[50],
    /** Text on colored backgrounds */
    onColored: BasePalette.neutral[0],
    /** Text for links and interactive elements */
    link: BasePalette.primary[600],
    /** Text for buttons and important interactive elements */
    button: BasePalette.neutral[0],
    /** Disabled text */
    disabled: BasePalette.neutral[400],
  },

  /**
   * Background Colors
   * @description Colors used for various background surfaces
   */
  background: {
    /** Primary background for the main app */
    primary: BasePalette.neutral[50],
    /** Secondary background for cards, modals, and sub-elements */
    secondary: BasePalette.neutral[0],
    /** Tertiary background for nested elements */
    tertiary: BasePalette.neutral[100],
    /** Background for selected items */
    selected: BasePalette.primary[50],
    /** Background for hover states */
    hover: BasePalette.neutral[100],
    /** Background for pressed states */
    pressed: BasePalette.neutral[200],
    /** Background for disabled elements */
    disabled: BasePalette.neutral[200],
  },

  /**
   * Border Colors
   * @description Colors used for borders, dividers, and separators
   */
  border: {
    /** Primary border for inputs, cards, and other elements */
    primary: BasePalette.neutral[200],
    /** Secondary border for dividers and subtle separations */
    secondary: BasePalette.neutral[100],
    /** Focus border for accessibility and keyboard navigation */
    focus: BasePalette.primary[400],
    /** Border for selected states */
    selected: BasePalette.primary[500],
    /** Border for disabled elements */
    disabled: BasePalette.neutral[300],
  },

  /**
   * Pomodoro Interface Colors
   * @description Specific colors for the Pomodoro timer functionality
   */
  pomodoro: {
    /** Work period state color */
    work: {
      light: BasePalette.accent[300],
      base: BasePalette.accent[500],
      dark: BasePalette.accent[700],
    },
    /** Short break state color */
    shortBreak: {
      light: BasePalette.secondary[300],
      base: BasePalette.secondary[500],
      dark: BasePalette.secondary[700],
    },
    /** Long break state color */
    longBreak: {
      light: BasePalette.primary[300],
      base: BasePalette.primary[500],
      dark: BasePalette.primary[700],
    },
    /** Timer background */
    timerBackground: BasePalette.neutral[50],
    /** Timer progress track */
    timerTrack: BasePalette.neutral[200],
  },

  /**
   * Data Visualization Colors
   * @description Colors used in charts, graphs, and data reports
   */
  dataViz: {
    /** Primary colors for main data series */
    primary: [
      BasePalette.primary[500],
      BasePalette.primary[700],
      BasePalette.primary[300],
    ],
    /** Secondary colors for supporting data series */
    secondary: [
      BasePalette.secondary[500],
      BasePalette.secondary[700],
      BasePalette.secondary[300],
    ],
    /** Accent colors for highlighting important data points */
    accent: [
      BasePalette.accent[500],
      BasePalette.accent[700],
      BasePalette.accent[300],
    ],
    /** Colors for categorical data (distinct categories) */
    categorical: [
      BasePalette.primary[500], // indigo
      BasePalette.secondary[500], // teal
      BasePalette.accent[500], // coral
      "#8B5CF6", // violet-500
      "#EC4899", // pink-500
      "#EAB308", // yellow-500
      "#84CC16", // lime-500
      "#06B6D4", // cyan-500
      "#F97316", // orange-500
    ],
    /** Colors for sequential data (from low to high values) */
    sequential: [
      BasePalette.primary[50],
      BasePalette.primary[100],
      BasePalette.primary[200],
      BasePalette.primary[300],
      BasePalette.primary[400],
      BasePalette.primary[500],
      BasePalette.primary[600],
      BasePalette.primary[700],
      BasePalette.primary[800],
      BasePalette.primary[900],
    ],
    /** Background for charts and graphs */
    background: BasePalette.neutral[0],
    /** Color for axis lines and grid lines */
    grid: BasePalette.neutral[200],
    /** Color for axis labels and legends */
    labels: BasePalette.neutral[600],
  },
};

/**
 * Dark Mode Colors
 */
export const DarkModeColors = {
  text: {
    primary: BasePalette.neutral[50],
    secondary: BasePalette.neutral[300],
    tertiary: BasePalette.neutral[500],
    onDark: BasePalette.neutral[900],
    onColored: BasePalette.neutral[50],
    link: BasePalette.primary[400],
    button: BasePalette.neutral[900],
    disabled: BasePalette.neutral[600],
  },
  background: {
    primary: BasePalette.neutral[900],
    secondary: BasePalette.neutral[800],
    tertiary: BasePalette.neutral[700],
    selected: BasePalette.primary[900],
    hover: BasePalette.neutral[700],
    pressed: BasePalette.neutral[600],
    disabled: BasePalette.neutral[800],
  },
  border: {
    primary: BasePalette.neutral[700],
    secondary: BasePalette.neutral[800],
    focus: BasePalette.primary[500],
    selected: BasePalette.primary[400],
    disabled: BasePalette.neutral[700],
  },
  pomodoro: {
    work: {
      light: BasePalette.accent[700],
      base: BasePalette.accent[500],
      dark: BasePalette.accent[300],
    },
    shortBreak: {
      light: BasePalette.secondary[700],
      base: BasePalette.secondary[500],
      dark: BasePalette.secondary[300],
    },
    longBreak: {
      light: BasePalette.primary[700],
      base: BasePalette.primary[500],
      dark: BasePalette.primary[300],
    },
    timerBackground: BasePalette.neutral[800],
    timerTrack: BasePalette.neutral[700],
  },
  dataViz: {
    background: BasePalette.neutral[900],
    grid: BasePalette.neutral[700],
    labels: BasePalette.neutral[300],
  },
};
