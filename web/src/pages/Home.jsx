// import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import AcademicSection from "../components/AcademicSection";
import AdvisorBoard from "../components/AdvisorBoard";
import ContactSection from "../components/ContactSection";
import Curriculum from "../components/Curriculum";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Header />
            <Hero />
            <Curriculum />
            <AcademicSection />
            <AboutSection />
            <AdvisorBoard />
            <Gallery />
            <ContactSection />
            <Footer />  
        </div>
    );
};

export default Home;