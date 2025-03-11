import { useEffect } from "react";
import { useColorTheme } from "./styles";
import { AppHeader } from "./components/layout/AppHeader";

export const App = () => {
  const color = useColorTheme();
  useEffect(() => {
    document.body.style.backgroundColor = color.colors.background.primary;
  }, [color.colors.background.primary, color.mode]);
  return (
    <div
      style={
        {
          height: "100%",
          width: "100%",
        } as React.CSSProperties
      }
    >
      <AppHeader />
    </div>
  );
};
