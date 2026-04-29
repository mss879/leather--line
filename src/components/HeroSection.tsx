"use client";

import { Button } from '@/components/ui/button';
import { useState, useEffect, useCallback } from 'react';

const heroImage = '/hijab-hero.jpg';

const AnimatedText = ({ children, delay = 0, animationKey }: { children: string; delay?: number; animationKey: number }) => {
  const words = children.split(' ');
  return (
    <>
      {words.map((word, index) => (
        <span
          key={`${animationKey}-${index}`}
          className="inline-block animate-fade-in-up"
          style={{
            animationDelay: `${delay + index * 0.1}s`,
            animationFillMode: 'both',
            willChange: 'transform'
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </>
  );
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample slides data - replace with your actual images
  const slides = [
    {
      id: 1,
      image: '/hero_generated_1.jpg',
      title: "Shop Sneakers",
      description: "Discover quality sneakers and footwear from top brands. Find your perfect pair in our store.",
      category: "Shop",
      bgColor: 'bg-white'
    },
    {
      id: 2,
      image: '/hero_generated_2.jpg',
      title: "Featured Collection", 
      description: "Explore handpicked shoes from trusted brands. Premium sneakers, boots, and formal shoes all in one place.",
      category: "Featured",
      bgColor: 'bg-white'
    },
    {
      id: 3,
      image: '/hero_generated_3.jpg',
      title: "Sale Items",
      description: "Get the best deals on premium footwear. Shop our clearance and discounted shoes before they're gone.",
      category: "Sale",
      bgColor: 'bg-white'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleSlideChange = useCallback((index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setCurrentSlide(index);
    }
  }, [currentSlide, isTransitioning]);


  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-white">
      {/* Background Slides Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 z-20"
              style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 100%)',
                mask: index === currentSlide 
                  ? 'linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)' 
                  : 'linear-gradient(rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%)',
                transition: 'mask 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            
            {/* Image with unzoom effect */}
            <div 
              className="absolute inset-0 transition-all duration-1000 ease-out"
              style={{
                transform: index === currentSlide 
                  ? 'translate3d(0px, 0px, 0px) scale(1)' 
                  : 'translate3d(0px, 106.4px, 0px) scale(1.1)',
                willChange: 'transform'
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{ 
                  objectPosition: 'center',
                  filter: index === currentSlide ? 'brightness(0.9)' : 'grayscale(0.3) brightness(0.7)'
                }}
                onError={(e) => {
                  // Fallback to hero image if external image fails to load
                  e.currentTarget.src = heroImage;
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-30 h-full flex items-end pb-12 md:pb-20">
        <div className="container mx-auto px-5 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Left Column - Text Content */}
            <div className="max-w-2xl">
              {/* Description with word-by-word animation */}
              <div className="mb-8 md:mb-12">
                <div className="bg-white/40 backdrop-blur-sm border border-black/10 rounded-lg p-6 max-w-lg">
                  <p className="text-base md:text-lg lg:text-xl text-black font-medium leading-relaxed">
                    <AnimatedText delay={0.8} animationKey={animationKey}>
                      {slides[currentSlide].description}
                    </AnimatedText>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Empty space for better layout balance */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-8 right-5 md:right-20 z-40">
        <div className="flex space-x-2 md:space-x-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className={`relative w-12 h-12 md:w-16 md:h-16 border overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? 'border-black/60 opacity-100'
                  : 'border-gray-300 opacity-50 hover:opacity-100'
              }`}
              style={{
                filter: index === currentSlide ? 'grayscale(0)' : 'grayscale(1)',
                willChange: 'transform'
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                style={{
                  filter: index === currentSlide 
                    ? 'grayscale(0)' 
                    : 'grayscale(1)'
                }}
                onError={(e) => {
                  // Fallback to hero image if external image fails to load
                  e.currentTarget.src = heroImage;
                }}
              />
              
              {/* Progress Bar for Active Slide */}
              {index === currentSlide && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gray-200">
                  <div 
                    className="h-full bg-black/60 backdrop-blur-sm animate-progress-bar"
                    style={{
                      filter: 'grayscale(1)',
                      transformOrigin: 'left center'
                    }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;