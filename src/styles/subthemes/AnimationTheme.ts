/**
 * @file TimeflectAnimationSystem.tsx
 * @description Animation system for the Timeflect application.
 * Provides animation tokens through a context-based API.
 */

import { createContext, use } from "react";
import {
  Duration,
  Easing,
  Transition,
  Animation,
} from "./constants/AnimationConstants";

/**
 * The shape of the animation theme context
 */
interface AnimationThemeContextType {
  /** All available animation tokens */
  animation: {
    /** Duration values for animations */
    duration: typeof Duration;
    /** Easing functions for animation curves */
    easing: typeof Easing;
    /** Transition presets for common use cases */
    transition: typeof Transition;
    /** Animation patterns with keyframes */
    animation: typeof Animation;
  };
  /** Whether animations should be shown or reduced */
  motionPreference: "full" | "reduced";
  /** Function to set motion preference */
  setMotionPreference: (preference: "full" | "reduced") => void;
  /** Utility to inject all keyframes into the DOM */
  injectKeyframes: () => void;
  /** Utility to get an animation with respect to motion preference */
  getAccessibleAnimation: (animationName: keyof typeof Animation) => string;
  /** Utility to get a transition with respect to motion preference */
  getAccessibleTransition: (transitionName: keyof typeof Transition) => string;
}

/**
 * Default context value
 */
const defaultAnimationTheme: AnimationThemeContextType = {
  animation: {
    duration: Duration,
    easing: Easing,
    transition: Transition,
    animation: Animation,
  },
  motionPreference: "full",
  setMotionPreference: () => {
    console.warn(
      "AnimationThemeContext: setMotionPreference was called before context was initialized"
    );
  },
  injectKeyframes: () => {
    console.warn(
      "AnimationThemeContext: injectKeyframes was called before context was initialized"
    );
  },
  getAccessibleAnimation: () => {
    console.warn(
      "AnimationThemeContext: getAccessibleAnimation was called before context was initialized"
    );
    return "none";
  },
  getAccessibleTransition: () => {
    console.warn(
      "AnimationThemeContext: getAccessibleTransition was called before context was initialized"
    );
    return "none";
  },
};

/**
 * React context for the animation theme
 */
export const AnimationThemeContext = createContext<AnimationThemeContextType>(
  defaultAnimationTheme
);

/**
 * Hook for accessing the animation theme throughout the application
 * @returns The current animation theme context
 */
export const useAnimationTheme = () => use(AnimationThemeContext);
