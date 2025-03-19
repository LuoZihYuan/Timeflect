import { AppHeader, AppNavigation } from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <div className="flex">
        <AppNavigation />
        <Routes>
          <Route path="/" />
          <Route path="/reports" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
