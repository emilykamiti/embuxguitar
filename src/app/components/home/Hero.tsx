import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1636293875439-b3125c0f1fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwc3R1ZGlvJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMjI2NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Tech studio portrait"
  },
  {
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Camera equipment setup"
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Video production studio"
  },
  {
    url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Content creation setup"
  }
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12">
        <div className="inline-block mb-6 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full">
          <span className="text-red-500">Tech Reviewer</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          Quality Tech Videos
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Making technology more accessible through in-depth reviews,
          comparisons, and thoughtful analysis
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-24">
          <a
            href="#videos"
            className="px-8 py-4 bg-red-500 hover:bg-red-600 transition-colors rounded-full flex items-center gap-2"
          >
            Watch Latest Videos
            <ArrowRight size={20} />
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-white/30 hover:border-white/60 transition-colors rounded-full"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl md:text-4xl text-red-500 mb-2">19M+</div>
            <div className="text-gray-400 text-sm">Subscribers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl text-red-500 mb-2">1500+</div>
            <div className="text-gray-400 text-sm">Videos</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl text-red-500 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Years</div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3 mt-32">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-red-500 scale-110'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}