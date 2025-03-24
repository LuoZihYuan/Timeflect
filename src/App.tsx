import { AppHeader, AppNavigation } from "./components/layout";
import { HeroUIProvider } from "@heroui/react";
import type { NavigateOptions, To } from "react-router";
import { Routes, Route, useNavigate, useHref } from "react-router";
import { HoursPage } from "./pages";

export const App = () => {
  const navigate = useNavigate();
  const handleNavigate = (to: To, options?: NavigateOptions) => {
    void navigate(to, options);
  };

  return (
    <HeroUIProvider navigate={handleNavigate} useHref={useHref}>
      <AppHeader />
      <div className="flex">
        <AppNavigation />
        <Routes>
          <Route path="/" Component={HoursPage} />
          {/* <Route path="/reports" Component={ReportsPage} /> */}
        </Routes>
      </div>
    </HeroUIProvider>
  );
};
