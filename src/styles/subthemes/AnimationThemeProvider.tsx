/**
 * @file AnimationProvider.tsx
 * @description Provider component for the animation theme.
 */

import type { ReactNode } from "react";
import { useState, useMemo, useEffect, useCallback } from "react";
import { AnimationThemeContext } from "./AnimationTheme";
import {
  Duration,
  Easing,
  Transition,
  Animation,
  getAllKeyframes,
} from "./constants/AnimationConstants";

/**
 * Props for the AnimationThemeProvider component
 */
interface AnimationThemeProviderProps {
  /** Initial motion preference */
  initialMotionPreference?: "full" | "reduced";
  /** Whether to auto-detect user's motion preference from system settings */
  respectSystemPreference?: boolean;
  /** Whether to automatically inject keyframes on mount */
  autoInjectKeyframes?: boolean;
  /** Child components */
  children: ReactNode;
}

/**
 * Provider component for the animation theme
 * @param props - Component props
 * @returns Provider component
 */
export const AnimationThemeProvider = ({
  initialMotionPreference = "full",
  respectSystemPreference = true,
  autoInjectKeyframes = true,
  children,
}: AnimationThemeProviderProps) => {
  // Initial state based on system preference if enabled
  const getInitialMotionPreference = (): "full" | "reduced" => {
    if (respectSystemPreference && typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return prefersReducedMotion ? "reduced" : "full";
    }
    return initialMotionPreference;
  };

  const [motionPreference, setMotionPreference] = useState<"full" | "reduced">(
    getInitialMotionPreference
  );
  const [keyframesInjected, setKeyframesInjected] = useState(false);

  // Listen for system preference changes if enabled
  useEffect(() => {
    if (!respectSystemPreference || typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setMotionPreference(event.matches ? "reduced" : "full");
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    // Older browsers
    else if ("addListener" in mediaQuery) {
      mediaQuery.addListener(handleChange);
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }
  }, [respectSystemPreference]);

  /**
   * Injects all keyframe animations into the document head
   */
  const injectKeyframes = useCallback(() => {
    if (typeof document === "undefined" || keyframesInjected) return;

    const styleId = "animation-keyframes";
    // Check if already exists
    if (document.getElementById(styleId)) {
      setKeyframesInjected(true);
      return;
    }

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = getAllKeyframes();
    document.head.appendChild(style);
    setKeyframesInjected(true);
  }, [keyframesInjected]);

  // Auto-inject keyframes if enabled
  useEffect(() => {
    if (autoInjectKeyframes) {
      injectKeyframes();
    }
  }, [autoInjectKeyframes, injectKeyframes]);

  /**
   * Gets an animation with respect to motion preference
   * @param animationName - Name of the animation from Animation constants
   * @returns Animation CSS string or 'none' if reduced motion
   */
  const getAccessibleAnimation = useCallback(
    (animationName: keyof typeof Animation): string => {
      if (motionPreference === "reduced") return "none";

      const anim = Animation[animationName];
      if (!anim) return "none";

      return `${anim.name} ${anim.duration} ${anim.easing}`;
    },
    [motionPreference]
  );

  /**
   * Gets a transition with respect to motion preference
   * @param transitionName - Name of the transition from Transition constants
   * @returns Transition CSS string or 'none' if reduced motion
   */
  const getAccessibleTransition = useCallback(
    (transitionName: keyof typeof Transition): string => {
      if (motionPreference === "reduced") return "none";

      const trans = Transition[transitionName];
      if (!trans) return "none";

      return trans;
    },
    [motionPreference]
  );

  const animationThemeValue = useMemo(() => {
    return {
      animation: {
        duration: Duration,
        easing: Easing,
        transition: Transition,
        animation: Animation,
      },
      motionPreference,
      setMotionPreference,
      injectKeyframes,
      getAccessibleAnimation,
      getAccessibleTransition,
    };
  }, [
    motionPreference,
    injectKeyframes,
    getAccessibleAnimation,
    getAccessibleTransition,
  ]);

  return (
    <AnimationThemeContext value={animationThemeValue}>
      {children}
    </AnimationThemeContext>
  );
};
