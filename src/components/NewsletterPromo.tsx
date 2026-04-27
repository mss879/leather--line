"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterPromo = () => {
  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_oxfords.png" 
          alt="Luxury Leather Shoes" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-tight">
            Join the Club
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium">
            Subscribe to our newsletter and receive <span className="text-white font-bold">15% off</span> your first order. Be the first to know about new arrivals, exclusive releases, and private sales.
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4 sm:gap-0">
            <Input
              type="email"
              placeholder="Enter your email address"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white h-14 text-lg rounded-sm sm:rounded-r-none font-medium backdrop-blur-sm"
            />
            <Button 
              type="submit"
              className="bg-white text-black hover:bg-gray-200 h-14 px-8 text-lg rounded-sm sm:rounded-l-none font-bold tracking-wide uppercase transition-colors"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-gray-400 mt-6 font-medium">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterPromo;
