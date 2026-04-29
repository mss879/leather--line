"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "James L.",
    role: "Verified Buyer",
    content: "The craftsmanship is unparalleled. These are without a doubt the most comfortable oxfords I have ever worn to the office.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael C.",
    role: "Verified Buyer",
    content: "I was hesitant about the price, but the quality of the leather and the attention to detail blew me away. Worth every penny.",
    rating: 5,
  },
  {
    id: 3,
    name: "David R.",
    role: "Verified Buyer",
    content: "The trail runners are incredibly durable and stylish. They handled my weekend hike perfectly and look great in the city too.",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-black">
            Word on the Street
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Don't just take our word for it. Here's what our community has to say about their Leather Line experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-gray-50 p-8 border border-gray-200 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-lg text-black font-medium leading-relaxed mb-8 italic">
                  "{review.content}"
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wide">
                  {review.name}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
