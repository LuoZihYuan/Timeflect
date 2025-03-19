import { AppHeader, AppNavigation } from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppNavigation />
      <Routes>
        <Route path="/" />
        <Route path="/report" />
      </Routes>
    </BrowserRouter>
  );
};
