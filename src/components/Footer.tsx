import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black font-sans">
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden border-t border-b border-gray-200">
        <div className="container mx-auto px-4 py-16">
          {/* Header Text */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Find your</span>
              <span className="block">perfect match.</span>
            </h2>
          </div>
          
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-wider text-black font-sans text-center leading-none">
              LEATHER<br/>LINE
            </h1>
          </div>
          
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/hero_sneakers.png" 
              alt="Shoe collection" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Logo */}
          <div className="relative z-10 flex justify-center mt-8">
            <img src="/leather-line.jpg" alt="Leather Line Logo" className="h-24 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-t border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-500">
                Categories
              </h3>
              <div className="space-y-4">
                {[
                  { name: "All Shoes", href: "/browse/all" },
                  { name: "Sneakers", href: "/browse/sneakers" },
                  { name: "Boots", href: "/browse/boots" },
                  { name: "Formal Shoes", href: "/browse/formal" },
                  { name: "Accessories", href: "/browse/accessories" },
                  { name: "New Arrivals", href: "/browse/new-arrivals" },
                  { name: "Featured", href: "/browse/featured" },
                  { name: "Sale", href: "/browse/sale" }
                ].map((item) => (
                  <div key={item.name} className="group">
                    <a 
                      href={item.href}
                      className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-semibold"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-500">
                Support
              </h3>
              <div className="space-y-4">
                {[
                  { name: "My Account", href: "/account" },
                  { name: "My Orders", href: "/my-orders" },
                  { name: "Shipping & Returns", href: "/support/shipping-returns" },
                  { name: "Safety Tips", href: "/support/safety-tips" },
                  { name: "Terms & Conditions", href: "/support/terms-conditions" },
                  { name: "Privacy Policy", href: "/support/privacy-policy" }
                ].map((item) => (
                  <div key={item.name} className="group">
                    <a 
                      href={item.href}
                      className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-semibold"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-500">
                About
              </h3>
              <div className="space-y-4">
                {[
                  { name: "About Leather Line", href: "/about" },
                  { name: "How It Works", href: "/how-it-works" },
                  { name: "Contact", href: "/contact" }
                ].map((item) => (
                  <div key={item.name} className="group">
                    <a 
                      href={item.href}
                      className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-semibold"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-500">
                Social Media
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
                  { name: "X / Twitter", href: "https://x.com", icon: Twitter },
                  { name: "Youtube", href: "https://youtube.com", icon: Youtube },
                  { name: "Facebook", href: "https://facebook.com", icon: Facebook }
                ].map((item) => (
                  <div key={item.name} className="group">
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition-colors duration-200 text-sm font-semibold flex items-center gap-2"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          {/* Newsletter Subscription */}
          <div className="flex-1 max-w-md">
            <form className="space-y-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="bg-white border-gray-300 text-black placeholder:text-gray-400 focus:border-black rounded-r-none font-medium"
                />
                <Button 
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800 rounded-l-none border border-black border-l-0 font-bold"
                >
                  Subscribe
                </Button>
              </div>
              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input 
                  type="checkbox" 
                  required 
                  className="mt-1 rounded border-gray-300 bg-white text-black focus:ring-black"
                />
                <span className="font-medium">By subscribing you agree to the Privacy Policy</span>
              </label>
            </form>
          </div>

          {/* Legal Links and Copyright */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 text-xs text-gray-500 font-medium">
            <div className="flex gap-4">
              <a href="/support/terms-conditions" className="hover:text-black transition-colors font-semibold">
                Terms & Conditions
              </a>
              <a href="/support/privacy-policy" className="hover:text-black transition-colors font-semibold">
                Privacy Policy
              </a>
            </div>
            <Separator orientation="vertical" className="hidden lg:block h-4 bg-gray-300" />
            <div className="flex gap-4 font-semibold">
              <span>2025</span>
              <span>© LEATHER LINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
