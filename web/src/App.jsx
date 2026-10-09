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
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import AcademicSection from "./components/AcademicSection";
import Curriculum from "./components/Curriculum";
import NoticeBoard from "./components/NoticeBoard";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";

const SectionPage = ({ children }) => (
  <>
    <Header />
    <main className="min-h-[60vh]">{children}</main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<SectionPage><AboutSection /></SectionPage>} />
        <Route path="/academics" element={<SectionPage><AcademicSection /></SectionPage>} />
        <Route path="/curriculum" element={<SectionPage><Curriculum /></SectionPage>} />
        <Route path="/curriculumn" element={<SectionPage><Curriculum /></SectionPage>} />
        <Route path="/notices" element={<SectionPage><NoticeBoard fullPage /></SectionPage>} />
        <Route path="/gallery" element={<SectionPage><Gallery /></SectionPage>} />
        <Route path="/contact" element={<SectionPage><ContactSection /></SectionPage>} />
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