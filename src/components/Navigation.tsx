"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(2); // Start with the third text visible
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const promoTexts = [
    "Free shipping on all orders over $100",
    "New arrivals from top brands", 
    "Premium footwear for every occasion"
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
    <nav className="w-full bg-nav-bg text-nav-text sticky top-0 z-50">
      {/* Single Navigation Row */}
      <div className="border-b border-t border-nav-border">
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 border-r border-nav-border h-20 flex items-center px-8 py-1">
              <img src="/leather-line.jpg" alt="Leather Line Logo" className="h-14 w-auto object-contain" />
            </div>

            {/* Center Promotional Text Cycle */}
            <div className="hidden md:flex w-64 lg:w-96 flex-shrink-0 justify-center border-r border-nav-border h-20 items-center relative overflow-hidden">
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
            <div className="hidden md:flex flex-1 items-center">
              {/* Navigation Links */}
              <div 
                className="relative"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <a 
                  href="#browse" 
                  className="relative overflow-hidden px-8 border-r border-nav-border h-20 flex items-center group min-w-[120px]"
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
              {/* Search Bar */}
              <div className="flex flex-1 items-center h-20 px-6 border-r border-nav-border min-w-[200px]">
                <div className="relative w-full group">
                  <input 
                    type="text" 
                    placeholder="Search shoes, brands, etc..." 
                    className="w-full bg-transparent border-b border-nav-border/50 py-1.5 pr-8 text-nav-text text-sm uppercase tracking-wide placeholder:text-nav-text/40 focus:outline-none focus:border-nav-text transition-colors"
                  />
                  <Search size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-nav-text/40 group-focus-within:text-nav-text transition-colors" />
                </div>
              </div>
              
              {/* Sign In Button - Wider */}
              <a 
                href="#signin" 
                className="relative overflow-hidden px-12 border-r border-nav-border h-20 flex items-center group min-w-[140px]"
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



              {/* Cart Button */}
              <a 
                href="#cart" 
                className="relative overflow-hidden px-8 h-20 flex items-center group min-w-[120px]"
              >
                {/* Top Layer */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                  <ShoppingBag size={20} className="text-nav-text" />
                  <span className="text-base font-bold tracking-wide uppercase text-nav-text">
                    CART
                  </span>
                </div>
                {/* Bottom Layer */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                  <ShoppingBag size={20} />
                  <span className="text-base font-bold tracking-wide uppercase">
                    CART
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
                  Shop
                </span>
              </div>
              {/* Bottom Layer */}
              <div className="absolute inset-0 flex items-center bg-nav-text text-nav-bg transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-lg font-medium tracking-wide uppercase">
                  Shop
                </span>
              </div>
            </a>
              {/* Search Bar for Mobile */}
              <div className="block relative overflow-hidden py-2 group">
                <div className="relative w-full">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full bg-transparent border border-nav-border rounded-md px-4 py-3 text-nav-text text-sm uppercase tracking-wide placeholder:text-nav-text/40 focus:outline-none focus:border-nav-text transition-colors"
                  />
                  <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-nav-text/40" />
                </div>
              </div>
          </div>
        </div>
      )}

      {/* Full Width Dropdown Menu */}
      {isShopDropdownOpen && (
        <div 
          className="fixed top-20 left-0 w-full bg-nav-bg z-40 border-b border-nav-border"
          onMouseEnter={() => setIsShopDropdownOpen(true)}
          onMouseLeave={() => setIsShopDropdownOpen(false)}
        >
          <div className="w-full">
            <div className="flex h-[500px]">
              {/* Left Side - Categories and Collections */}
              <div className="w-1/2 p-12 flex">
                {/* Categories Column */}
                <div className="w-1/2 pr-8">
                  <h3 className="text-nav-text text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Categories</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">ALL SHOES</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">SNEAKERS</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">BOOTS</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">FORMAL</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">ACCESSORIES</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">NEW ARRIVALS</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">FEATURED</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">SALE</a>
                  </div>
                </div>
                
                {/* Collections Column */}
                <div className="w-1/2 pl-8">
                  <h3 className="text-nav-text text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Browse By</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">SIZE</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">BRAND</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">PRICE RANGE</a>
                    <a href="#" className="block text-nav-text hover:text-nav-text/70 transition-colors text-lg font-medium uppercase tracking-wide">COLOR</a>
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
                      src="/hero_sneakers.png" 
                      alt="Just Dropped" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 transition-all duration-300 group-hover:from-black/90">
                      <div className="text-white">
                        <h4 className="text-2xl font-bold uppercase mb-2 transition-all duration-300 group-hover:text-gray-200">NEW ARRIVALS</h4>
                        <p className="text-sm uppercase tracking-wide opacity-80 transition-all duration-300 group-hover:opacity-100">BROWSE THE LATEST SNEAKERS</p>
                      </div>
                    </div>
                  </a>
                  
                  {/* Side Product Image - Sale */}
                  <a 
                    href="#featured" 
                    className="w-1/2 h-full relative block group cursor-pointer overflow-hidden"
                  >
                    <img 
                      src="/hero_oxfords.png" 
                      alt="Featured Shoes" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300 group-hover:from-black/90">
                      <div className="text-white">
                        <h4 className="text-xl font-bold uppercase mb-1 transition-all duration-300 group-hover:text-gray-200">FEATURED SHOES</h4>
                        <p className="text-xs uppercase tracking-wide opacity-80 transition-all duration-300 group-hover:opacity-100">HANDPICKED PREMIUM STYLES</p>
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