import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

const slides = [
  {
    id: 2,
    image: slide2,
  },
  {
    id: 3,
    image: slide3,
  },
  {
    id: 4,
    image: slide4,
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right-to-left');
  const [touchStart, setTouchStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto slide every 5 seconds with right-to-left direction
  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setDirection('right-to-left');
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }
      }, 5000);
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // Pause auto-slide on manual interaction
  const pauseAutoSlide = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume auto-slide after manual interaction
  const resumeAutoSlide = () => {
    setIsPaused(false);
  };

  const goToSlide = (index) => {
    pauseAutoSlide();

    // Determine direction based on current slide
    if (index > currentSlide) {
      setDirection('right-to-left');
    } else if (index < currentSlide) {
      setDirection('left-to-right');
    }
    setCurrentSlide(index);

    // Resume auto-slide after 2 seconds
    setTimeout(() => {
      resumeAutoSlide();
    }, 2000);
  };

  const prevSlide = () => {
    pauseAutoSlide();
    setDirection('left-to-right');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    // Resume auto-slide after 2 seconds
    setTimeout(() => {
      resumeAutoSlide();
    }, 2000);
  };

  const nextSlide = () => {
    pauseAutoSlide();
    setDirection('right-to-left');
    setCurrentSlide((prev) => (prev + 1) % slides.length);

    // Resume auto-slide after 2 seconds
    setTimeout(() => {
      resumeAutoSlide();
    }, 2000);
  };

  // Touch event handlers for swipe detection
  const handleTouchStart = (e) => {
    if (e.type === 'mousedown' && e.button !== 0) return; // Only left mouse button

    pauseAutoSlide(); // Pause auto-sliding when user starts manual swipe
    setTouchStart(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!touchStart || !isDragging) return;

    const touchCurrent = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const offset = touchCurrent - touchStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart || !isDragging) return;

    const touchEndPos = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const distance = touchEndPos - touchStart;
    const minSwipeDistance = 50; // Minimum pixels to trigger a slide change

    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        // Swipe right -> go to previous slide
        prevSlide();
      } else {
        // Swipe left -> go to next slide
        nextSlide();
      }
    } else {
      // If swipe was too small, just resume auto-slide immediately
      resumeAutoSlide();
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
  };

  // Handle mouse leave while dragging
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      setTouchStart(null);
      resumeAutoSlide(); // Resume auto-slide if user leaves while dragging
    }
  };

  return (
    <section
      className="relative h-[100vh] overflow-hidden bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container with Animation */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-300 ${
              index === currentSlide
                ? direction === 'right-to-left'
                  ? 'animate-slideInFromRight z-20'
                  : 'animate-slideInFromLeft z-20'
                : index === (currentSlide - 1 + slides.length) % slides.length && direction === 'right-to-left'
                ? 'animate-slideOutToLeft z-10'
                : index === (currentSlide + 1) % slides.length && direction === 'left-to-right'
                ? 'animate-slideOutToRight z-10'
                : 'hidden'
            }`}
            style={{
              transform: isDragging && index === currentSlide ? `translateX(${dragOffset}px)` : 'none',
              opacity: isDragging && index === currentSlide ? Math.max(0.7, 1 - Math.abs(dragOffset) / 500) : 1,
            }}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
            {/* Removed the overlay divs */}
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-6">
        {/* Reduced Shop Now Button */}
        <div className="mt-100"> {/* Changed mt-90 to mt-64 */}
          <Link
            to="/product/1"
            className="relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 text-lg font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group shadow-xl shadow-red-500/30"
            style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
          >
            <span className="relative z-10">SHOP NOW</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Link>
        </div>

        {/* Reduced Carousel Dots */}
        <div className="absolute bottom-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-red-700 scale-150'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slideOutToRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideOutToLeft {
          animation: slideOutToLeft 0.8s ease-out forwards;
        }

        .animate-slideOutToRight {
          animation: slideOutToRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}