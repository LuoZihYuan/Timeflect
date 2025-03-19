import { useTheme } from "@heroui/use-theme";
import { Button } from "@heroui/react";
import { Link } from "react-router";
import Logo from "../../assets/logo+brand.svg?react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export const AppHeader: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-16 justify-between items-center bg-foreground-100">
      <Link to="/" className="ml-8">
        <div className="flex justify-between items-center">
          <Logo className="h-10 w-auto" />
        </div>
      </Link>
      <div className="flex mr-8 justify-center items-center">
        <Button
          isIconOnly
          radius="full"
          className="relative flex size-10 justify-center items-center bg-foreground-100"
          onPress={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <HiOutlineMoon className="size-6" />
          ) : (
            <HiOutlineSun className="size-8" />
          )}
        </Button>
      </div>
    </div>
  );
};
