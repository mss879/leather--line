import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    {
      title: "Sneakers",
      image: "/sneaker_1.png",
      href: "/shop/category/sneakers"
    },
    {
      title: "Boots",
      image: "/boot_1.png",
      href: "/shop/category/boots"
    },
    {
      title: "Oxfords",
      image: "/oxford_1.png",
      href: "/shop/category/oxfords"
    },
    {
      title: "Loafers",
      image: "/loafer_1.png",
      href: "/shop/category/loafers"
    }
  ];

  const marqueeText = "LEATHER LINE · PREMIUM FOOTWEAR · LEATHER LINE · PREMIUM FOOTWEAR · ";

  return (
    <section className="w-full border-t-2 border-b-2 border-gray-200">
      <div className="relative">
        {/* Single continuous scrolling text layer across all cards */}
        <div className="absolute inset-0 flex items-center z-10 pointer-events-none opacity-60 overflow-hidden">
          <div className="animate-scroll-left inline-flex whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, groupIndex) => (
              <div key={groupIndex} className="flex shrink-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <h2 
                    key={i} 
                    className="text-white drop-shadow-lg text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider shrink-0 px-6"
                    aria-hidden="true"
                  >
                    {marqueeText}
                  </h2>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {categories.map((category, index) => (
            <div key={index} className="relative group border-r-2 border-gray-200 last:border-r-0 md:last:border-r lg:last:border-r-0">
              <a
                href={category.href}
                className="block relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-white overflow-hidden hover:opacity-90 transition-opacity"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Category Label and Button */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="mb-4">
                    <p className="text-black text-lg font-bold drop-shadow-md">
                      {category.title}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    <span className="text-black text-sm font-bold drop-shadow-md">
                      Shop Now
                    </span>
                    <div className="relative">
                      <ArrowUpRight 
                        className="w-4 h-4 text-black transform rotate-0 group-hover:rotate-45 transition-transform font-bold" 
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
