/**
 * @file AnimationConstants.ts
 * @description Animation tokens for the animation theme.
 */

/**
 * Duration values for consistent timing across animations
 * Values are in milliseconds (ms)
 */
export const Duration = {
  /** Instant (0ms) - For immediate feedback with no visible transition */
  instant: "0ms",

  /** Extra Fast (100ms) - For very subtle UI feedback */
  extraFast: "100ms",

  /** Fast (150ms) - For microinteractions and button feedback */
  fast: "150ms",

  /** Medium (250ms) - Default for most UI transitions */
  medium: "250ms",

  /** Slow (350ms) - For more noticeable transitions */
  slow: "350ms",

  /** Extra Slow (500ms) - For emphasized transitions */
  extraSlow: "500ms",

  /** Focus (200ms) - Specifically for focus state transitions */
  focus: "200ms",

  /** Page Transition (300ms) - For navigating between views */
  pageTransition: "300ms",
};

/**
 * Easing functions for animation timing curves
 * Based on common Material Design and iOS easing patterns
 */
export const Easing = {
  /** Linear - Constant speed from start to finish */
  linear: "linear",

  /** Ease In - Starts slow, accelerates towards the end */
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",

  /** Ease Out - Starts fast, decelerates towards the end */
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",

  /** Ease In Out - Starts and ends slow, speeds up in the middle */
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",

  /** Swift Out - Quick acceleration then gentle deceleration (iOS-like) */
  swiftOut: "cubic-bezier(0.55, 0, 0.1, 1)",

  /** Emphasized - More dramatic deceleration for attention */
  emphasized: "cubic-bezier(0.2, 0.8, 0.2, 1)",

  /** Bounce - Slightly overshoots and settles back (for playful UI) */
  bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
};

/**
 * Common CSS transition combinations for quick use
 */
export const Transition = {
  /** Default - General purpose transition for most UI elements */
  default: `all ${Duration.medium} ${Easing.easeInOut}`,

  /** Fast - Quick transition for subtle UI changes */
  fast: `all ${Duration.fast} ${Easing.easeOut}`,

  /** Slow - Noticeable transition for emphasis */
  slow: `all ${Duration.slow} ${Easing.easeInOut}`,

  /** Color - Optimized for color changes */
  color: `color ${Duration.fast} ${Easing.easeOut}, background-color ${Duration.fast} ${Easing.easeOut}, border-color ${Duration.fast} ${Easing.easeOut}, fill ${Duration.fast} ${Easing.easeOut}, stroke ${Duration.fast} ${Easing.easeOut}`,

  /** Transform - For movement, scaling, rotation */
  transform: `transform ${Duration.medium} ${Easing.swiftOut}`,

  /** Opacity - For fading elements in/out */
  opacity: `opacity ${Duration.medium} ${Easing.easeInOut}`,

  /** Expansion - For expanding/collapsing elements */
  expansion: `max-height ${Duration.slow} ${Easing.easeInOut}, opacity ${Duration.medium} ${Easing.easeInOut}`,

  /** Button - Specific to button interactions */
  button: `background-color ${Duration.fast} ${Easing.easeOut}, color ${Duration.fast} ${Easing.easeOut}, transform ${Duration.fast} ${Easing.easeOut}, box-shadow ${Duration.fast} ${Easing.easeOut}`,

  /** Focus - For focus states */
  focus: `box-shadow ${Duration.focus} ${Easing.easeOut}, border-color ${Duration.focus} ${Easing.easeOut}`,

  /** None - Explicitly disable transitions */
  none: "none",
};

/**
 * Animation patterns for keyframe animations
 */
export const Animation = {
  /** Fade In - Simple fade in animation */
  fadeIn: {
    keyframes: `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,
    name: "fadeIn",
    duration: Duration.medium,
    easing: Easing.easeOut,
  },

  /** Fade Out - Simple fade out animation */
  fadeOut: {
    keyframes: `
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `,
    name: "fadeOut",
    duration: Duration.medium,
    easing: Easing.easeIn,
  },

  /** Slide In Down - Slide in from top animation */
  slideInDown: {
    keyframes: `
      @keyframes slideInDown {
        from {
          transform: translateY(-20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `,
    name: "slideInDown",
    duration: Duration.medium,
    easing: Easing.swiftOut,
  },

  /** Slide In Up - Slide in from bottom animation */
  slideInUp: {
    keyframes: `
      @keyframes slideInUp {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `,
    name: "slideInUp",
    duration: Duration.medium,
    easing: Easing.swiftOut,
  },

  /** Slide In Left - Slide in from right animation */
  slideInLeft: {
    keyframes: `
      @keyframes slideInLeft {
        from {
          transform: translateX(20px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `,
    name: "slideInLeft",
    duration: Duration.medium,
    easing: Easing.swiftOut,
  },

  /** Slide In Right - Slide in from left animation */
  slideInRight: {
    keyframes: `
      @keyframes slideInRight {
        from {
          transform: translateX(-20px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `,
    name: "slideInRight",
    duration: Duration.medium,
    easing: Easing.swiftOut,
  },

  /** Pulse - Gentle pulsing animation for notifications or emphasis */
  pulse: {
    keyframes: `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `,
    name: "pulse",
    duration: Duration.slow,
    easing: Easing.easeInOut,
  },

  /** Spin - Rotation animation for loading indicators */
  spin: {
    keyframes: `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `,
    name: "spin",
    duration: "1000ms",
    easing: Easing.linear,
  },

  /** Pop - Quick scale animation for emphasis */
  pop: {
    keyframes: `
      @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    `,
    name: "pop",
    duration: Duration.fast,
    easing: Easing.emphasized,
  },
};

/**
 * Helper to ensure all keyframe animations are defined in the document
 * @returns A string containing all animation keyframes
 */
export const getAllKeyframes = (): string => {
  return Object.values(Animation)
    .map((animation) => animation.keyframes)
    .join("\n");
};
