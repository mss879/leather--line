import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewArrivals from "@/components/NewArrivals";
import BestSellers from "@/components/BestSellers";
import CategoryGrid from "@/components/CategoryGrid";
import Testimonials from "@/components/Testimonials";
import NewsletterPromo from "@/components/NewsletterPromo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      <div className="flex flex-col gap-24 pt-12 pb-24">
        <SocialProof />
        <WhyChooseUs />
        <NewArrivals />
        <BestSellers />
        <CategoryGrid />
        <Testimonials />
        <NewsletterPromo />
      </div>
      
      <Footer />
    </div>
  );
}
