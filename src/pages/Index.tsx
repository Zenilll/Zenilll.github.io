import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedBlog from "@/components/FeaturedBlog";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <FeaturedProjects />
        <FeaturedBlog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
