import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import BestSellers from "@/components/BestSellers";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <NewArrivals />
      <BestSellers />
      <CategoryGrid />
      <Footer />
    </div>
  );
}
