import { type ReactNode } from "react";
import { Link } from "react-router";
import { Button } from "@heroui/react";

interface AppNavigationRowProps {
  title: string;
  link: string;
  icon: ReactNode;
  selected: boolean;
}

export const AppNavigationRow: React.FC<AppNavigationRowProps> = ({
  title,
  link,
  icon,
  selected,
}) => {
  return (
    <Link to={link}>
      <Button
        color={selected ? "primary" : "default"}
        startContent={icon}
        className={`flex flex-row items-center gap-2 ${selected ? "text-sky-500" : ""}`}
      >
        {title}
      </Button>
    </Link>
  );
};
