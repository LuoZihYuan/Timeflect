import { AppNavigationRow } from "./AppNavigationRow";
import { HiOutlineClock } from "react-icons/hi2";
import { HiOutlineChartPie } from "react-icons/hi2";
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
    <div className="min-h-screen w-fit bg-foreground-100 flex flex-col pt-2">
      {navContents.map(({ title, link, icon }) => (
        <AppNavigationRow
          key={`nav-${title}`}
          title={title}
          link={link}
          icon={icon}
          selected={location.pathname === link}
        />
      ))}
    </div>
  );
};
