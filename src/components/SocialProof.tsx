"use client";

const SocialProof = () => {
  return (
    <section className="bg-gray-50 py-12 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
          {/* Simulated Logos using Typography */}
          <div className="text-2xl font-serif tracking-widest font-bold">VOGUE</div>
          <div className="text-3xl font-serif tracking-tighter font-bold">GQ</div>
          <div className="text-2xl font-sans tracking-tight font-black uppercase">Esquire</div>
          <div className="text-2xl font-serif font-bold uppercase tracking-widest">Forbes</div>
          <div className="text-xl font-sans font-black tracking-widest uppercase">Hypebeast</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
