import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSetion";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectsSection";
import SkillSection from "../components/SkillSections";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

const Home=()=>{

    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


            <ThemeToggle />

            <StarBackground />

            <Navbar />
            
            <HeroSection />

            <AboutSection />

            <SkillSection />

            <ProjectSection />

            <ContactSection />

            <Footer />
        </div>
    )
}
export default Home;