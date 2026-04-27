"use client";

import { ArrowUpRight } from "lucide-react";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Premium Silk Hijab",
      category: "Hijabs",
      price: "$25",
      location: "New York, NY",
      badges: ["New"],
      frontImage: "https://framerusercontent.com/images/TITuLcYSx53fInKnsoSGfE8Xuw.jpg",
      backImage: "https://framerusercontent.com/images/rO3nueqqdzWMFmQMfScFEHQKDK8.jpg",
      href: "./listing/premium-silk-hijab-1"
    },
    {
      id: 2,
      name: "Black Abaya Set",
      category: "Abayas",
      price: "$85",
      location: "Los Angeles, CA",
      badges: ["New"],
      frontImage: "https://framerusercontent.com/images/TzE4HV2Rd2nSnBPovKnaeVJ4ig.jpg",
      backImage: "https://framerusercontent.com/images/Go8FgbJq5k83GEHQpJxfiOfyU.jpg",
      href: "./listing/black-abaya-set"
    },
    {
      id: 3,
      name: "Modest Jersey Dress",
      category: "Modest Wear",
      price: "$45",
      location: "Chicago, IL",
      badges: ["New"],
      frontImage: "https://framerusercontent.com/images/tgZdGQSoxXaU1e2WoJLa4YQ.jpg",
      backImage: "https://framerusercontent.com/images/dVQplzo9TYGR0ic60Unw0TJjI.jpg",
      href: "./listing/modest-jersey-dress"
    },
    {
      id: 4,
      name: "Designer Scarf Collection",
      category: "Accessories",
      price: "$35",
      location: "Houston, TX",
      badges: ["New", "Featured"],
      frontImage: "https://framerusercontent.com/images/WCPUxU8le7cGYEMic8GQuKrQTLI.jpg",
      backImage: "https://framerusercontent.com/images/D9XYlok0cgs0AR1T9UYgXebum4.jpg",
      href: "./listing/designer-scarf-collection"
    }
  ];

  return (
    <section className="overflow-hidden bg-black" data-framer-name="Recent Listings">
      <div className="flex h-screen">
        {/* Left Side - Fixed Background Image with Title */}
        <div className="w-2/5 relative flex flex-col">
          <div className="flex-1 relative">
            <img 
              src="https://framerusercontent.com/images/ShqTo2F5a7sLxDmCPO2CSO76iQ.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
              width="1280"
              height="896"
            />
            {/* Hotspot Pulse */}
            <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Title and Browse Now - Fixed on left side */}
          <div className="absolute top-8 left-8 z-10">
            <a 
              href="./browse/recent"
              className="group flex items-center gap-3 text-white hover:text-gray-300 transition-colors mb-4"
            >
              <span className="text-lg font-medium">BROWSE NOW</span>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="white">
                <path d="M8 0L16 8L8 16L8 10L0 10L0 6L8 6L8 0Z"/>
              </svg>
            </a>
            <h2 className="text-6xl xl:text-7xl font-bold text-white leading-none">
              <div>RECENT</div>
              <div>LISTINGS</div>
            </h2>
          </div>
        </div>

        {/* Right Side - Scrollable Products Grid */}
        <div className="w-3/5 bg-black overflow-y-auto">
          <div className="grid grid-cols-2 h-full">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="group bg-black border border-gray-700 block w-full h-full flex flex-col"
                style={{
                  borderColor: "rgb(122, 122, 122)",
                  backgroundColor: "rgb(0, 0, 0)"
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
                              ? "bg-orange-500 text-black"
                              : "bg-gray-800 text-white border border-gray-600"
                          }`}
                        >
                          <p className="text-white m-0 font-medium text-xs">{badge}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Images */}
                <div className="flex-1 relative">
                  <div className="absolute inset-0">
                    <img
                      src={product.frontImage}
                      alt=""
                      className="block w-full h-full object-cover object-top group-hover:opacity-0 transition-opacity duration-300"
                      width="1280"
                      height="896"
                    />
                  </div>
                  <div className="absolute inset-0">
                    <img
                      src={product.backImage}
                      alt=""
                      className="block w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      width="1280"
                      height="896"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 flex-shrink-0 border-t border-gray-700">
                  <div className="mb-3">
                    <p 
                      className="m-0 text-sm mb-1"
                      style={{color: "rgb(122, 122, 122)"}}
                    >
                      {product.category}
                    </p>
                    <p className="text-white m-0 text-lg font-medium leading-tight">
                      {product.name}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p 
                      className="m-0 font-bold text-2xl leading-none"
                      style={{
                        color: "rgb(255, 255, 255)",
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
                          fill: "white",
                          color: "white",
                          transform: "rotate(-45deg)"
                        }}
                      >
                        <path d="M8 0L16 8L8 16L8 10L0 10L0 6L8 6L8 0Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
