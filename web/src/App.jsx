import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// const Dashboard = () => {
//   return <h1>Dashboard Page</h1>;
// };

// const Settings = () => {
//   return <h1>Settings Page</h1>;
// };

// const NotFound = () => {
//   return <h1>404 - Page Not Found</h1>;
// };

export default App;