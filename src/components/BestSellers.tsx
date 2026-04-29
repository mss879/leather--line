"use client";

import { ArrowUpRight } from "lucide-react";

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Limited Edition Sneakers",
      category: "Sneakers",
      price: "$240",
      location: "Miami, FL",
      badges: ["Featured"],
      frontImage: "/sneaker_2.png",
      backImage: "/sneaker_2.png",
      href: "./shoes/limited-edition-sneakers"
    },
    {
      id: 2,
      name: "Premium Leather Loafers",
      category: "Formal",
      price: "$120",
      location: "Dallas, TX",
      badges: ["Featured"],
      frontImage: "/loafer_1.png",
      backImage: "/loafer_1.png",
      href: "./shoes/premium-leather-loafers"
    },
    {
      id: 3,
      name: "Trail Running Shoes",
      category: "Athletic",
      price: "$155",
      location: "Atlanta, GA",
      badges: ["Featured"],
      frontImage: "/running_2.png",
      backImage: "/running_2.png",
      href: "./shoes/trail-running-shoes"
    },
    {
      id: 4,
      name: "Casual Slip-On Shoes",
      category: "Casual",
      price: "$75",
      location: "Boston, MA",
      badges: ["Featured"],
      frontImage: "/slip_on_1.png",
      backImage: "/slip_on_1.png",
      href: "./shoes/casual-slip-on-shoes"
    }
  ];

  return (
    <section className="overflow-hidden bg-white" data-framer-name="Featured Shoes">
      <div className="flex h-screen">
        {/* Left Side - Scrollable Products Grid */}
        <div className="w-3/5 bg-white overflow-y-auto">
          <div className="grid grid-cols-2 h-full">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="group bg-white border border-gray-200 block w-full h-full flex flex-col"
                style={{
                  borderColor: "rgb(229, 231, 235)",
                  backgroundColor: "rgb(255, 255, 255)"
                }}
              >
                {/* Badges */}
                <div className="p-4 flex-shrink-0">
                  <div className="flex gap-2">
                    {product.badges.map((badge, index) => (
                      <div key={index}>
                        <div 
                          className={`px-3 py-1 text-xs font-medium ${
                            badge === "Best Seller"
                              ? "bg-orange-500 text-white"
                              : "bg-gray-100 text-black border border-gray-200"
                          }`}
                        >
                          <p className="text-black m-0 font-medium text-xs">{badge}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Images */}
                <div className="flex-1 relative bg-gray-50 overflow-hidden">
                  <img
                    src={product.frontImage}
                    alt=""
                    className="absolute inset-0 block w-full h-full object-cover object-center group-hover:opacity-0 transition-opacity duration-300"
                  />
                  <img
                    src={product.backImage}
                    alt=""
                    className="absolute inset-0 block w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 flex-shrink-0 border-t border-gray-200">
                  <div className="mb-3">
                    <p 
                      className="m-0 text-sm mb-1"
                      style={{color: "rgb(107, 114, 128)"}}
                    >
                      {product.category}
                    </p>
                    <p className="text-black m-0 text-lg font-medium leading-tight">
                      {product.name}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p 
                      className="m-0 font-bold text-2xl leading-none"
                      style={{
                        color: "rgb(0, 0, 0)",
                        fontFamily: '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                        fontSize: "24px",
                        fontWeight: "700",
                        letterSpacing: "0em",
                        lineHeight: "1em"
                      }}
                    >
                      {product.price}
                    </p>
                    
                    <div className="flex">
                      <svg 
                        className="w-4 h-4" 
                        viewBox="0 0 16 16" 
                        fill="none"
                        style={{
                          fill: "black",
                          color: "black",
                          transform: "rotate(-45deg)"
                        }}
                      >
                        <path d="M8 0L16 8L8 16L8 10L0 10L0 6L8 6L8 0Z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Fixed Background Image with Title */}
        <div className="w-2/5 relative flex flex-col">
          <div className="flex-1 relative">
            <img 
              src="/hero_sneakers.png"
              alt=""
              className="w-full h-full object-cover object-center"
              width="1280"
              height="896"
            />
            {/* Hotspot Pulse */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Title and Browse Now - Fixed on right side */}
          <div className="absolute top-8 right-8 z-10 text-right">
            <a 
              href="./browse/featured"
              className="group flex items-center gap-3 text-white hover:text-gray-300 transition-colors mb-4 justify-end"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="white">
                <path d="M8 0L16 8L8 16L8 10L0 10L0 6L8 6L8 0Z"/>
              </svg>
              <span className="text-lg font-medium">BROWSE NOW</span>
            </a>
            <h2 className="text-6xl xl:text-7xl font-bold text-white leading-none">
              <div>FEATURED</div>
              <div>SHOES</div>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
