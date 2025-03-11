import { useState } from "react";
import { useTheme } from "../../styles";
import Logo from "../../assets/logo+brand.svg?react";
import IconDarkMode from "../../assets/layout/dark-mode.svg?react";
import IconLightMode from "../../assets/layout/light-mode.svg?react";

export const AppHeader = () => {
  const { color, spacing, animation } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const toggleMode = () => {
    color.toggleColorMode();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: spacing.toRem(spacing.spacing.scale[4]),
      }}
    >
      <a href="/">
        <div
          style={{
            height: spacing.toRem(48),
            width: spacing.toRem(144),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo
            height={spacing.toRem(32)}
            width={spacing.toRem(128)}
            style={{ color: color.colors.text.primary }}
          />
        </div>
      </a>
      <div
        style={{
          width: spacing.toRem(48),
          height: spacing.toRem(48),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isHovered
            ? color.colors.background.secondary
            : color.colors.background.primary,
          borderRadius: spacing.spacing.radius.circle,
          animation: animation.animation.transition.button,
        }}
        onClick={toggleMode}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {color.mode === "light" ? (
          <IconDarkMode
            width={spacing.toRem(32)}
            height={spacing.toRem(32)}
            style={{
              color: color.colors.text.primary,
            }}
          />
        ) : (
          <IconLightMode
            width={spacing.toRem(32)}
            height={spacing.toRem(32)}
            style={{
              color: color.colors.text.primary,
            }}
          />
        )}
      </div>
    </div>
  );
};
