import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    {
      title: "Tops",
      image: "https://framerusercontent.com/images/xloOTP7Fud71cpPDcKyE3yzb8MI.png",
      href: "/shop/category/tops"
    },
    {
      title: "Bottoms",
      image: "https://framerusercontent.com/images/ppyeHGRd7XFQvhAX6jV2ZLwatI.png",
      href: "/shop/category/bottoms"
    },
    {
      title: "Outerwear",
      image: "https://framerusercontent.com/images/F4vmhR5vRnh3IP2YlzKDJ1YXY.png",
      href: "/shop/category/outerwear"
    },
    {
      title: "Accessories",
      image: "https://framerusercontent.com/images/v14DO0SPxGXBia6SbmVmgtFHE.png",
      href: "/shop/category/accessories"
    }
  ];

  return (
    <section className="w-full border-t-2 border-b-2 border-neutral-600">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {categories.map((category, index) => (
          <div key={index} className="relative group border-r-2 border-neutral-600 last:border-r-0 md:last:border-r lg:last:border-r-0">
            <a
              href={category.href}
              className="block relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black overflow-hidden hover:opacity-90 transition-opacity"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Scrolling Text Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="overflow-hidden whitespace-nowrap w-full">
                  <div className="animate-scroll-left inline-flex gap-8" style={{ animationDelay: '0s' }}>
                    {Array.from({ length: 15 }).map((_, i) => (
                      <h2 
                        key={i} 
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider shrink-0"
                        aria-hidden="true"
                      >
                        {category.title}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category Label and Button */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="mb-4">
                  <p className="text-white text-lg font-medium">
                    {category.title}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span className="text-white text-sm font-medium">
                    Shop Now
                  </span>
                  <div className="relative">
                    <ArrowUpRight 
                      className="w-4 h-4 text-white transform rotate-0 group-hover:rotate-45 transition-transform" 
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
