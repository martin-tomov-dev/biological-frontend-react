import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import DailyDataUpload from "./pages/DailyDataUpload";
import WeeklyDataUpload from "./pages/WeeklyDataUpload";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route exact path="daily-report" element={<DailyDataUpload />} />
        <Route exact path="weekly-report" element={<WeeklyDataUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
