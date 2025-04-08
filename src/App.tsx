import { AppHeader, AppNavigation } from "./components/layout";
import { HeroUIProvider } from "@heroui/react";
import type { NavigateOptions, To } from "react-router";
import { Routes, Route, useNavigate, useHref } from "react-router";
import { HoursPage, ReportsPage } from "./pages";
import { TimeEntriesProvider } from "./context/TimerEntriesProvider";

export const App = () => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider
      navigate={(to: To, options?: NavigateOptions) => {
        void navigate(to, options);
      }}
      useHref={useHref}
    >
      <div className="flex flex-col h-screen">
        <AppHeader />
        <div className="flex grow">
          <AppNavigation />
          <TimeEntriesProvider>
            <Routes>
              <Route path="/" Component={HoursPage} />
              <Route path="/reports" Component={ReportsPage} />
            </Routes>
          </TimeEntriesProvider>
        </div>
      </div>
    </HeroUIProvider>
  );
};
