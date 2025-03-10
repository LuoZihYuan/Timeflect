/**
 * @file FontConstants.ts
 * @description Typography constants for the font theme.
 */

/**
 * Font Family Definitions
 */
export const FontFamilies = {
  /**
   * Primary font family used for most text in the application
   * Inter is a highly readable sans-serif font with a clean, modern aesthetic
   * that works well for both UI elements and longer-form content
   */
  primary:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  /**
   * Secondary font family used for the timer display and special headings
   * DM Sans provides a more distinctive look while maintaining high legibility
   */
  secondary:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  /**
   * Monospace font family used for tabular data, code blocks, and timer display
   * JetBrains Mono provides excellent readability for numbers and technical content
   */
  mono: "'JetBrains Mono', 'SF Mono', 'Roboto Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

/**
 * Font Size Scale
 */
export const FontSizes = {
  /** Micro text (10px equivalent at default 16px browser font size) */
  xs3: "0.625rem",
  /** Tiny text (12px equivalent) */
  xs2: "0.75rem",
  /** Extra small text (14px equivalent) */
  xs: "0.875rem",
  /** Base/body text size (16px equivalent) */
  sm: "1rem",
  /** Medium text (18px equivalent) */
  md: "1.125rem",
  /** Large text (20px equivalent) */
  lg: "1.25rem",
  /** Extra large text (24px equivalent) */
  xl: "1.5rem",
  /** Heading level 3 (30px equivalent) */
  xl2: "1.875rem",
  /** Heading level 2 (36px equivalent) */
  xl3: "2.25rem",
  /** Heading level 1 (48px equivalent) */
  xl4: "3rem",
  /** Display text (60px equivalent) */
  xl5: "3.75rem",
  /** Jumbo display text (72px equivalent) */
  xl6: "4.5rem",
};

/**
 * Font Weights
 */
export const FontWeights = {
  /** Thin text, used sparingly for specialized UI elements */
  thin: 100,
  /** Extra light text, used for specialized display contexts */
  extraLight: 200,
  /** Light text, often used for large headings */
  light: 300,
  /** Normal/regular text weight, default for body text */
  regular: 400,
  /** Medium text, used for moderate emphasis */
  medium: 500,
  /** Semi-bold text, used for navigation and section headers */
  semiBold: 600,
  /** Bold text, used for strong emphasis and main headings */
  bold: 700,
  /** Extra bold text, used for maximum emphasis in UI */
  extraBold: 800,
  /** Black/heavy text, used very sparingly for dramatic effect */
  black: 900,
};

/**
 * Line Heights
 */
export const LineHeights = {
  /** Tightly spaced, used for headings and short text blocks */
  tight: 1.1,
  /** Slightly condensed, used for subheadings and lists */
  condensed: 1.25,
  /** Standard line height for body text */
  normal: 1.5,
  /** Relaxed spacing for longer-form text */
  relaxed: 1.625,
  /** Loose spacing for improved readability in dense content */
  loose: 1.75,
  /** For specific cases where the text should be rendered without line height adjustment */
  none: 1,
};

/**
 * Letter Spacing
 */
export const LetterSpacing = {
  /** Tighter than normal tracking, used for large headings */
  tighter: "-0.05em",
  /** Tight tracking, used for headings */
  tight: "-0.025em",
  /** Normal tracking, default for most text */
  normal: "0",
  /** Wide tracking, used for small caps and some UI labels */
  wide: "0.025em",
  /** Wider tracking, used for uppercase text and small UI labels */
  wider: "0.05em",
  /** Extra wide tracking, used for emphasized UI elements */
  widest: "0.1em",
};

/**
 * Text Transforms
 */
export const TextTransforms = {
  /** Default text case */
  normal: "none",
  /** All uppercase letters */
  uppercase: "uppercase",
  /** All lowercase letters */
  lowercase: "lowercase",
  /** First letter of each word capitalized */
  capitalize: "capitalize",
};

/**
 * Font Style
 */
export const FontStyles = {
  /** Normal font style */
  normal: "normal",
  /** Italic font style */
  italic: "italic",
};

/**
 * Text Decoration
 */
export const TextDecorations = {
  /** No decoration */
  none: "none",
  /** Underlined text */
  underline: "underline",
  /** Line through text */
  lineThrough: "line-through",
};

/**
 * Text Alignments
 */
export const TextAlignments = {
  /** Left-aligned text (default in LTR languages) */
  left: "left",
  /** Center-aligned text */
  center: "center",
  /** Right-aligned text */
  right: "right",
  /** Justified text (full-width with adjusted spacing) */
  justify: "justify",
};

/**
 * Responsive Breakpoints
 */
export const BreakpointValues = {
  /** Small mobile devices */
  sm: "480px",
  /** Mobile devices */
  md: "768px",
  /** Tablets and small desktops */
  lg: "1024px",
  /** Desktops */
  xl: "1280px",
  /** Large desktops and beyond */
  xl2: "1536px",
};

/**
 * Responsive Font Sizes
 */
export const ResponsiveFontSizes = {
  // Small mobile devices - no overrides (uses default FontSizes)
  sm: {},
  // Medium devices
  md: {
    xl4: "3.375rem", // 54px
    xl5: "4.125rem", // 66px
    xl6: "5rem", // 80px
  },
  // Large devices
  lg: {
    xl4: "3.75rem", // 60px
    xl5: "4.5rem", // 72px
    xl6: "5.5rem", // 88px
  },
  // Extra large devices
  xl: {
    xl4: "3.75rem", // 60px
    xl5: "4.5rem", // 72px
    xl6: "5.5rem", // 88px
  },
  // Very large devices
  xl2: {
    xl4: "4rem", // 64px
    xl5: "5rem", // 80px
    xl6: "6rem", // 96px
  },
};

/**
 * Semantic Typography
 */
export const SemanticTypography = {
  /**
   * Headings
   * @description Typography for heading levels
   */
  headings: {
    h1: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xl4,
      fontWeight: FontWeights.bold,
      lineHeight: LineHeights.tight,
      letterSpacing: LetterSpacing.tight,
    },
    h2: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xl3,
      fontWeight: FontWeights.bold,
      lineHeight: LineHeights.tight,
      letterSpacing: LetterSpacing.tight,
    },
    h3: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xl2,
      fontWeight: FontWeights.semiBold,
      lineHeight: LineHeights.tight,
      letterSpacing: LetterSpacing.normal,
    },
    h4: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xl,
      fontWeight: FontWeights.semiBold,
      lineHeight: LineHeights.condensed,
      letterSpacing: LetterSpacing.normal,
    },
    h5: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.lg,
      fontWeight: FontWeights.semiBold,
      lineHeight: LineHeights.condensed,
      letterSpacing: LetterSpacing.normal,
    },
    h6: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.md,
      fontWeight: FontWeights.semiBold,
      lineHeight: LineHeights.condensed,
      letterSpacing: LetterSpacing.normal,
    },
  },

  /**
   * Body Text
   * @description Typography for body and paragraph text
   */
  body: {
    /** Default body text */
    regular: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.sm,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.normal,
      letterSpacing: LetterSpacing.normal,
    },
    /** Large body text for emphasized sections */
    large: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.md,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.normal,
      letterSpacing: LetterSpacing.normal,
    },
    /** Small body text for less important information */
    small: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xs,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.normal,
      letterSpacing: LetterSpacing.normal,
    },
    /** Extra small text for footnotes, captions, etc. */
    xsmall: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xs2,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.normal,
      letterSpacing: LetterSpacing.normal,
    },
  },

  /**
   * UI Elements
   * @description Typography for interface elements
   */
  ui: {
    /** Button text */
    button: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.sm,
      fontWeight: FontWeights.medium,
      lineHeight: LineHeights.none,
      letterSpacing: LetterSpacing.wide,
      textTransform: TextTransforms.normal,
    },
    /** Navigation items */
    nav: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.sm,
      fontWeight: FontWeights.medium,
      lineHeight: LineHeights.normal,
      letterSpacing: LetterSpacing.normal,
    },
    /** Form labels */
    label: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xs,
      fontWeight: FontWeights.medium,
      lineHeight: LineHeights.normal,
      letterSpacing: LetterSpacing.wide,
    },
    /** Form input text */
    input: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.sm,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.normal,
      letterSpacing: LetterSpacing.normal,
    },
    /** Small badge or tag text */
    badge: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xs2,
      fontWeight: FontWeights.medium,
      lineHeight: LineHeights.none,
      letterSpacing: LetterSpacing.wide,
      textTransform: TextTransforms.uppercase,
    },
    /** Tooltip text */
    tooltip: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xs,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.condensed,
      letterSpacing: LetterSpacing.normal,
    },
  },

  /**
   * Specialized Typography
   * @description Typography for specific app features
   */
  specialized: {
    /** Timer display */
    timer: {
      fontFamily: FontFamilies.mono,
      fontSize: FontSizes.xl5,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.none,
      letterSpacing: LetterSpacing.tight,
    },
    /** Small timer display */
    timerSmall: {
      fontFamily: FontFamilies.mono,
      fontSize: FontSizes.xl2,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.none,
      letterSpacing: LetterSpacing.tight,
    },
    /** Data table text */
    table: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.sm,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.condensed,
      letterSpacing: LetterSpacing.normal,
    },
    /** Chart and graph labels */
    chartLabel: {
      fontFamily: FontFamilies.primary,
      fontSize: FontSizes.xs,
      fontWeight: FontWeights.medium,
      lineHeight: LineHeights.none,
      letterSpacing: LetterSpacing.normal,
    },
    /** Code or technical text */
    code: {
      fontFamily: FontFamilies.mono,
      fontSize: FontSizes.xs,
      fontWeight: FontWeights.regular,
      lineHeight: LineHeights.normal,
      letterSpacing: LetterSpacing.tight,
    },
  },
};
