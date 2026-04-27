"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Search, User, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(2); // Start with the third text visible
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const promoTexts = [
    "Post your hijab listings for free",
    "Connect with buyers across the country", 
    "Safe and secure marketplace"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % promoTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [promoTexts.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-nav-bg text-nav-text relative z-50">
      {/* Single Navigation Row */}
      <div className="border-b border-t border-nav-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 border-r border-nav-border h-16 flex items-center px-8 py-1">
              <h1 className="text-3xl font-black tracking-tight text-nav-text">
                IKMAN
              </h1>
            </div>

            {/* Center Promotional Text Cycle */}
            <div className="hidden md:flex flex-1 justify-center border-r border-nav-border h-16 items-center relative overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                {promoTexts.map((text, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out"
                    style={{
                      opacity: index === currentTextIndex ? 1 : 0,
                      transform: index === currentTextIndex ? 'translateY(0%)' : 'translateY(100%)',
                      willChange: 'transform'
                    }}
                  >
                    <p className="text-sm font-medium tracking-wide uppercase">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-1 flex justify-end mr-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-nav-text hover:bg-nav-text/10"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>

            {/* Right Side - Navigation Links and Icons */}
            <div className="hidden md:flex items-center">
              {/* Navigation Links */}
              <div 
                className="relative"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <a 
                  href="#browse" 
                  className="relative overflow-hidden px-8 border-r border-nav-border h-16 flex items-center group min-w-[120px]"
                >
                  {/* Top Layer */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                    <span className="text-base font-bold tracking-wide uppercase text-nav-text flex items-center gap-1">
                      BROWSE
                      <ChevronDown size={16} className={`transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                  {/* Bottom Layer */}
                  <div className="absolute inset-0 flex items-center justify-center bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-base font-bold tracking-wide uppercase flex items-center gap-1">
                      BROWSE
                      <ChevronDown size={16} className={`transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </a>
              </div>
              <a 
                href="#about" 
                className="relative overflow-hidden px-8 border-r border-nav-border h-16 flex items-center group min-w-[110px]"
              >
                {/* Top Layer */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                  <span className="text-base font-bold tracking-wide uppercase text-nav-text">
                    ABOUT
                  </span>
                </div>
                {/* Bottom Layer */}
                <div className="absolute inset-0 flex items-center justify-center bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-base font-bold tracking-wide uppercase">
                    ABOUT
                  </span>
                </div>
              </a>
              <a 
                href="#contact" 
                className="relative overflow-hidden px-8 border-r border-nav-border h-16 flex items-center group min-w-[120px]"
              >
                {/* Top Layer */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                  <span className="text-base font-bold tracking-wide uppercase text-nav-text">
                    CONTACT
                  </span>
                </div>
                {/* Bottom Layer */}
                <div className="absolute inset-0 flex items-center justify-center bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-base font-bold tracking-wide uppercase">
                    CONTACT
                  </span>
                </div>
              </a>

              {/* Action Icons */}
              <Button
                variant="ghost"
                size="icon"
                className="text-nav-text h-16 px-4 border-r border-nav-border"
              >
                <Search size={20} />
              </Button>
              
              {/* Sign In Button - Wider */}
              <a 
                href="#signin" 
                className="relative overflow-hidden px-12 border-r border-nav-border h-16 flex items-center group min-w-[140px]"
              >
                {/* Top Layer */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                  <User size={20} className="text-nav-text" />
                  <span className="text-base font-bold tracking-wide uppercase text-nav-text">
                    SIGN IN
                  </span>
                </div>
                {/* Bottom Layer */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                  <User size={20} />
                  <span className="text-base font-bold tracking-wide uppercase">
                    SIGN IN
                  </span>
                </div>
              </a>

              {/* Create Listing Button */}
              <a 
                href="#create-listing" 
                className="relative overflow-hidden px-10 h-16 flex items-center group min-w-[180px]"
              >
                {/* Top Layer */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                  <Plus size={20} className="text-nav-text" />
                  <span className="text-base font-bold tracking-wide uppercase text-nav-text">
                    CREATE LISTING
                  </span>
                </div>
                {/* Bottom Layer */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                  <Plus size={20} />
                  <span className="text-base font-bold tracking-wide uppercase">
                    CREATE LISTING
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-nav-bg border-b border-nav-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#browse" 
              className="block relative overflow-hidden py-2 border-b border-nav-border group h-12"
            >
              {/* Top Layer */}
              <div className="absolute inset-0 flex items-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                <span className="text-lg font-medium tracking-wide uppercase text-nav-text">
                  Browse Listings
                </span>
              </div>
              {/* Bottom Layer */}
              <div className="absolute inset-0 flex items-center bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-lg font-medium tracking-wide uppercase">
                  Browse Listings
                </span>
              </div>
            </a>
            <a 
              href="#about" 
              className="block relative overflow-hidden py-2 border-b border-nav-border group h-12"
            >
              {/* Top Layer */}
              <div className="absolute inset-0 flex items-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                <span className="text-lg font-medium tracking-wide uppercase text-nav-text">
                  About
                </span>
              </div>
              {/* Bottom Layer */}
              <div className="absolute inset-0 flex items-center bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-lg font-medium tracking-wide uppercase">
                  About
                </span>
              </div>
            </a>
            <a 
              href="#contact" 
              className="block relative overflow-hidden py-2 group h-12"
            >
              {/* Top Layer */}
              <div className="absolute inset-0 flex items-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                <span className="text-lg font-medium tracking-wide uppercase text-nav-text">
                  Contact
                </span>
              </div>
              {/* Bottom Layer */}
              <div className="absolute inset-0 flex items-center bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-lg font-medium tracking-wide uppercase">
                  Contact
                </span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Full Width Dropdown Menu */}
      {isShopDropdownOpen && (
        <div 
          className="fixed top-16 left-0 w-full bg-black z-40 border-b border-nav-border"
          onMouseEnter={() => setIsShopDropdownOpen(true)}
          onMouseLeave={() => setIsShopDropdownOpen(false)}
        >
          <div className="w-full">
            <div className="flex h-[500px]">
              {/* Left Side - Categories and Collections */}
              <div className="w-1/2 p-12 flex">
                {/* Categories Column */}
                <div className="w-1/2 pr-8">
                  <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Categories</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">ALL LISTINGS</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">HIJABS</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">ABAYAS</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">MODEST WEAR</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">ACCESSORIES</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">NEW LISTINGS</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">FEATURED</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">SPECIAL DEALS</a>
                  </div>
                </div>
                
                {/* Collections Column */}
                <div className="w-1/2 pl-8">
                  <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Browse By</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">LOCATION</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">PRICE RANGE</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">CONDITION</a>
                    <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg font-medium uppercase tracking-wide">RECENTLY ADDED</a>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Images */}
              <div className="w-1/2 relative">
                {/* Featured Product Section */}
                <div className="h-full flex">
                  {/* Main Product Image - Just Dropped */}
                  <a 
                    href="#new-arrivals" 
                    className="w-1/2 h-full relative block group cursor-pointer overflow-hidden border-r border-nav-border"
                  >
                    <img 
                      src="/hero1.jpg" 
                      alt="Just Dropped" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 transition-all duration-300 group-hover:from-black/90">
                      <div className="text-white">
                        <h4 className="text-2xl font-bold uppercase mb-2 transition-all duration-300 group-hover:text-gray-200">NEW LISTINGS</h4>
                        <p className="text-sm uppercase tracking-wide opacity-80 transition-all duration-300 group-hover:opacity-100">BROWSE THE LATEST HIJAB LISTINGS</p>
                      </div>
                    </div>
                  </a>
                  
                  {/* Side Product Image - Sale */}
                  <a 
                    href="#featured" 
                    className="w-1/2 h-full relative block group cursor-pointer overflow-hidden"
                  >
                    <img 
                      src="/hero2.jpg" 
                      alt="Featured Listings" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300 group-hover:from-black/90">
                      <div className="text-white">
                        <h4 className="text-xl font-bold uppercase mb-1 transition-all duration-300 group-hover:text-gray-200">FEATURED LISTINGS</h4>
                        <p className="text-xs uppercase tracking-wide opacity-80 transition-all duration-300 group-hover:opacity-100">HANDPICKED PREMIUM SELECTIONS</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;