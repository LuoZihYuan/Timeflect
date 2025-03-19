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
        radius="none"
        startContent={icon}
        isDisabled={selected}
        className={`w-44 h-14 pl-8 flex justify-start text-current ${selected ? "" : "bg-foreground-100"}`}
      >
        {title}
      </Button>
    </Link>
  );
};
