/**
 * Border Radius Scale
 * Used for rounding corners of UI elements
 */
export const BorderRadius = {
  /** No radius (0px) - Square corners */
  none: "0px",

  /** Extra small radius (2px) - Subtle rounding */
  xs: "2px",

  /** Small radius (4px) - Slight rounding for smaller elements */
  sm: "4px",

  /** Medium radius (8px) - Standard rounding for most UI elements */
  md: "8px",

  /** Large radius (12px) - Prominent rounding for larger containers */
  lg: "12px",

  /** Extra large radius (16px) - Very rounded corners for cards, modals */
  xl: "16px",

  /** Pill shape - Fully rounded ends (9999px) */
  pill: "9999px",

  /** Circle - Equal width/height with this radius creates a circle */
  circle: "50%",
};

/**
 * Border Width Scale
 */
export const BorderWidth = {
  /** No border (0px) */
  none: "0px",

  /** Hairline border (1px) */
  hairline: "1px",

  /** Thin border (2px) */
  thin: "2px",

  /** Medium border (3px) */
  medium: "3px",

  /** Thick border (4px) */
  thick: "4px",
};

/**
 * Box Shadow Presets
 * Elevation effects for UI elements
 */
export const BoxShadow = {
  /** No shadow */
  none: "none",

  /** Subtle shadow for slight elevation (cards, hoverable elements) */
  xs: "0px 1px 2px rgba(0, 0, 0, 0.05)",

  /** Small shadow for low elevation elements (cards, buttons) */
  sm: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",

  /** Medium shadow for elements with notable elevation (dropdowns, popovers) */
  md: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",

  /** Large shadow for floating elements (modals, dialogs) */
  lg: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",

  /** Extra large shadow for maximum elevation (popovers, tooltips) */
  xl: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",

  /** Focus ring shadow - used for accessibility focus states */
  focus: "0px 0px 0px 3px rgba(99, 102, 241, 0.4)",
}; /**
 * @file SpacingConstants.ts
 * @description Spacing and shape constants
 */

/**
 * Base Spacing Unit
 */
export const BASE_SPACING_UNIT = 4;

/**
 * Spacing Scale
 */
export const SpacingScale = {
  /** 0px - Zero spacing */
  0: 0,
  /** 2px - Minimal spacing for tight constraints */
  0.5: BASE_SPACING_UNIT * 0.5,
  /** 4px - Base spacing unit */
  1: BASE_SPACING_UNIT,
  /** 6px - One and a half spacing unit */
  1.5: BASE_SPACING_UNIT * 1.5,
  /** 8px - Double spacing unit, used for compact elements */
  2: BASE_SPACING_UNIT * 2,
  /** 12px - Triple spacing unit */
  3: BASE_SPACING_UNIT * 3,
  /** 16px - Quadruple spacing unit, standard for most UI elements */
  4: BASE_SPACING_UNIT * 4,
  /** 20px - Five times base unit */
  5: BASE_SPACING_UNIT * 5,
  /** 24px - Six times base unit, used for related content grouping */
  6: BASE_SPACING_UNIT * 6,
  /** 32px - Eight times base unit, section spacing */
  8: BASE_SPACING_UNIT * 8,
  /** 40px - Ten times base unit */
  10: BASE_SPACING_UNIT * 10,
  /** 44px - Eleven times base unit, minimum touch target size */
  11: BASE_SPACING_UNIT * 11,
  /** 48px - Twelve times base unit, large content blocks */
  12: BASE_SPACING_UNIT * 12,
  /** 56px - Fourteen times base unit */
  14: BASE_SPACING_UNIT * 14,
  /** 64px - Sixteen times base unit, major section divisions */
  16: BASE_SPACING_UNIT * 16,
  /** 80px - Twenty times base unit */
  20: BASE_SPACING_UNIT * 20,
  /** 96px - Twenty-four times base unit, page sections */
  24: BASE_SPACING_UNIT * 24,
  /** 128px - Thirty-two times base unit, large layout spacing */
  32: BASE_SPACING_UNIT * 32,
  /** 160px - Forty times base unit */
  40: BASE_SPACING_UNIT * 40,
  /** 192px - Forty-eight times base unit, major layout divisions */
  48: BASE_SPACING_UNIT * 48,
};

/**
 * Spacing to REM Conversion
 * @param spacing - The spacing value in px from the SpacingScale
 * @returns The equivalent value in rem units
 */
export const toRem = (spacing: number): string => {
  return `${spacing / 16}rem`;
};

/**
 * Inset Spacing
 */
export const InsetSpacing = {
  /** No padding */
  none: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  /** 4px padding on all sides - Minimal padding for tight elements */
  xs: {
    top: SpacingScale[1],
    right: SpacingScale[1],
    bottom: SpacingScale[1],
    left: SpacingScale[1],
  },
  /** 8px padding on all sides - Compact components */
  sm: {
    top: SpacingScale[2],
    right: SpacingScale[2],
    bottom: SpacingScale[2],
    left: SpacingScale[2],
  },
  /** 16px padding on all sides - Standard component padding */
  md: {
    top: SpacingScale[4],
    right: SpacingScale[4],
    bottom: SpacingScale[4],
    left: SpacingScale[4],
  },
  /** 24px padding on all sides - Spacious padding */
  lg: {
    top: SpacingScale[6],
    right: SpacingScale[6],
    bottom: SpacingScale[6],
    left: SpacingScale[6],
  },
  /** 32px padding on all sides - Extra spacious padding */
  xl: {
    top: SpacingScale[8],
    right: SpacingScale[8],
    bottom: SpacingScale[8],
    left: SpacingScale[8],
  },
  /** Squish XS - Reduced vertical padding (2px vertical, 4px horizontal) */
  squishXs: {
    top: SpacingScale[0.5],
    right: SpacingScale[1],
    bottom: SpacingScale[0.5],
    left: SpacingScale[1],
  },
  /** Squish Small - Reduced vertical padding (4px vertical, 8px horizontal) */
  squishSm: {
    top: SpacingScale[1],
    right: SpacingScale[2],
    bottom: SpacingScale[1],
    left: SpacingScale[2],
  },
  /** Squish Medium - Reduced vertical padding (8px vertical, 16px horizontal) */
  squishMd: {
    top: SpacingScale[2],
    right: SpacingScale[4],
    bottom: SpacingScale[2],
    left: SpacingScale[4],
  },
  /** Squish Large - Reduced vertical padding (12px vertical, 24px horizontal) */
  squishLg: {
    top: SpacingScale[3],
    right: SpacingScale[6],
    bottom: SpacingScale[3],
    left: SpacingScale[6],
  },
  /** Stretch Small - Increased vertical padding (8px vertical, 4px horizontal) */
  stretchSm: {
    top: SpacingScale[2],
    right: SpacingScale[1],
    bottom: SpacingScale[2],
    left: SpacingScale[1],
  },
  /** Stretch Medium - Increased vertical padding (16px vertical, 8px horizontal) */
  stretchMd: {
    top: SpacingScale[4],
    right: SpacingScale[2],
    bottom: SpacingScale[4],
    left: SpacingScale[2],
  },
};

/**
 * Stack Spacing
 */
export const StackSpacing = {
  /** No vertical spacing */
  none: SpacingScale[0],
  /** 2px - Minimal spacing */
  xxs: SpacingScale[0.5],
  /** 4px - Very tight spacing */
  xs: SpacingScale[1],
  /** 8px - Tight spacing */
  sm: SpacingScale[2],
  /** 16px - Standard spacing */
  md: SpacingScale[4],
  /** 24px - Comfortable spacing */
  lg: SpacingScale[6],
  /** 32px - Spacious content separation */
  xl: SpacingScale[8],
  /** 48px - Section spacing */
  xl2: SpacingScale[12],
  /** 64px - Major section divisions */
  xl3: SpacingScale[16],
  /** 96px - Page section divisions */
  xl4: SpacingScale[24],
};

/**
 * Inline Spacing
 */
export const InlineSpacing = {
  /** No horizontal spacing */
  none: SpacingScale[0],
  /** 2px - Minimal spacing */
  xxs: SpacingScale[0.5],
  /** 4px - Very tight spacing */
  xs: SpacingScale[1],
  /** 8px - Tight spacing, used in compact components */
  sm: SpacingScale[2],
  /** 16px - Standard spacing */
  md: SpacingScale[4],
  /** 24px - Comfortable spacing */
  lg: SpacingScale[6],
  /** 32px - Spacious element separation */
  xl: SpacingScale[8],
};

/**
 * Grid Spacing
 */
export const GridSpacing = {
  /** No gap between grid items */
  none: SpacingScale[0],
  /** 4px gap - Tight grid */
  xs: SpacingScale[1],
  /** 8px gap - Compact grid */
  sm: SpacingScale[2],
  /** 16px gap - Standard grid */
  md: SpacingScale[4],
  /** 24px gap - Spacious grid */
  lg: SpacingScale[6],
  /** 32px gap - Very spacious grid */
  xl: SpacingScale[8],
};

/**
 * Layout Containers
 */
export const Containers = {
  /** Small container - 640px max-width */
  sm: "640px",
  /** Medium container - 768px max-width */
  md: "768px",
  /** Large container - 1024px max-width */
  lg: "1024px",
  /** Extra large container - 1280px max-width */
  xl: "1280px",
  /** 2X Extra large container - 1536px max-width */
  xl2: "1536px",
  /** Full width, no max-width constraint */
  full: "100%",
};

/**
 * Layout Grid
 */
export const LayoutGrid = {
  /** Number of columns in the grid */
  columns: {
    sm: 4, // Small screens (mobile)
    md: 8, // Medium screens (tablet)
    lg: 12, // Large screens (desktop)
    xl: 12, // Extra large screens
  },
  /** Gutter width between columns */
  gutters: {
    sm: SpacingScale[4], // 16px on small screens
    md: SpacingScale[6], // 24px on medium screens
    lg: SpacingScale[8], // 32px on large screens
    xl: SpacingScale[8], // 32px on extra large screens
  },
  /** Page margins on different screen sizes */
  margins: {
    sm: SpacingScale[4], // 16px on small screens
    md: SpacingScale[6], // 24px on medium screens
    lg: SpacingScale[8], // 32px on large screens
    xl: SpacingScale[12], // 48px on extra large screens
  },
};

/**
 * Z-Index Scale
 */
export const ZIndexScale = {
  /** Hidden below content (e.g., collapsed sections) */
  hide: -1,
  /** Base layer, default stacking context */
  base: 0,
  /** First level of elevation (e.g., hover states) */
  low: 10,
  /** Second level (e.g., dropdown menus, tooltips) */
  medium: 100,
  /** Third level (e.g., fixed headers, bottom navigation) */
  high: 1000,
  /** Fourth level (e.g., modals, dialogs) */
  highest: 5000,
  /** Top level (e.g., notifications, alerts) */
  extreme: 9000,
  /** Maximum level (e.g., loading overlays, critical alerts) */
  maximum: 9999,
};

/**
 * Component-Specific Spacing
 */
export const ComponentSpacing = {
  /** Form element spacing */
  form: {
    /** Vertical gap between form fields */
    fieldGap: StackSpacing.md,
    /** Space between label and input */
    labelGap: StackSpacing.xs,
    /** Space between field and help text or error */
    helpTextGap: StackSpacing.xxs,
    /** Padding within input fields */
    inputPadding: InsetSpacing.squishMd,
    /** Gap between checkboxes or radio buttons in a group */
    optionGap: StackSpacing.xs,
  },
  /** Card component spacing */
  card: {
    /** Padding inside cards */
    padding: InsetSpacing.md,
    /** Gap between card sections */
    sectionGap: StackSpacing.md,
    /** Space between card title and content */
    titleGap: StackSpacing.sm,
  },
  /** Button spacing */
  button: {
    /** Padding for small buttons */
    smallPadding: InsetSpacing.squishSm,
    /** Padding for medium buttons */
    mediumPadding: InsetSpacing.squishMd,
    /** Padding for large buttons */
    largePadding: InsetSpacing.squishLg,
    /** Gap between buttons in a group */
    groupGap: InlineSpacing.sm,
  },
  /** Dialog and modal spacing */
  dialog: {
    /** Padding inside dialogs */
    padding: InsetSpacing.lg,
    /** Gap between dialog sections */
    sectionGap: StackSpacing.lg,
    /** Space between actions/buttons */
    actionGap: InlineSpacing.sm,
  },
  /** Navigation spacing */
  navigation: {
    /** Padding for navigation items */
    itemPadding: InsetSpacing.squishMd,
    /** Gap between navigation items */
    itemGap: InlineSpacing.xs,
    /** Padding for the navigation container */
    containerPadding: InsetSpacing.md,
  },
  /** Table spacing */
  table: {
    /** Padding inside table cells */
    cellPadding: InsetSpacing.squishSm,
    /** Padding for table header cells */
    headerPadding: InsetSpacing.squishMd,
  },
  /** List spacing */
  list: {
    /** Gap between list items */
    itemGap: StackSpacing.sm,
    /** Padding inside list items */
    itemPadding: InsetSpacing.sm,
  },
  /** Pomodoro timer spacing */
  timer: {
    /** Padding around the timer display */
    padding: InsetSpacing.lg,
    /** Gap between timer and controls */
    controlGap: StackSpacing.md,
    /** Gap between control buttons */
    buttonGap: InlineSpacing.sm,
  },
  /** Chart and graph spacing */
  chart: {
    /** Padding inside chart containers */
    padding: InsetSpacing.md,
    /** Space between chart title and content */
    titleGap: StackSpacing.sm,
    /** Space between chart and legend */
    legendGap: StackSpacing.md,
    /** Space between legend items */
    legendItemGap: InlineSpacing.sm,
  },
};

/**
 * Touch Target Sizes
 */
export const TouchTargets = {
  /** Minimum width for interactive elements (44px) */
  minWidth: SpacingScale[11],
  /** Minimum height for interactive elements (44px) */
  minHeight: SpacingScale[11],
  /** Recommended touch target size (48px) */
  recommended: SpacingScale[12],
  /** Minimum space between touch targets (8px) */
  minSpacing: SpacingScale[2],
};
