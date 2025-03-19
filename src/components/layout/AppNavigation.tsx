import { Card, CardBody } from "@heroui/react";
import { AppNavigationRow } from "./AppNavigationRow";
import { HiOutlineClock, HiOutlineChartPie } from "react-icons/hi2";
import { useLocation } from "react-router";

export const AppNavigation: React.FC = () => {
  const location = useLocation();

  const navContents = [
    { title: "HOURS", link: "/", icon: <HiOutlineClock className="size-6" /> },
    {
      title: "REPORTS",
      link: "/reports",
      icon: <HiOutlineChartPie className="size-6" />,
    },
  ];
  return (
    <Card className="min-h-screen w-fit py-8 bg-foreground-50">
      <CardBody className="flex flex-col mx-8 gap-y-2 ">
        {navContents.map(({ title, link, icon }) => (
          <AppNavigationRow
            key={`nav-${title}`}
            title={title}
            link={link}
            icon={icon}
            selected={location.pathname === link}
          />
        ))}
      </CardBody>
    </Card>
  );
};
