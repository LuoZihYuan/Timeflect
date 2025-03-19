import { AppHeader, AppNavigation } from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router";
import { HoursPage } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <div className="flex">
        <AppNavigation />
        <Routes>
          <Route path="/" Component={HoursPage} />
          {/* <Route path="/reports" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
