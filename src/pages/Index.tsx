import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowSection from "@/components/HowSection";
import ReviewsFaqFooter from "@/components/ReviewsFaqFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] font-golos">
      <HeroSection />
      <ServicesSection />
      <HowSection />
      <ReviewsFaqFooter />
    </div>
  );
};

export default Index;
