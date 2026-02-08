import { Link } from 'react-router-dom';

export function DirectorsCut() {
  return (
    <section className="relative h-[45vh] min-h-[450px] overflow-hidden">
      {/* Music-themed background image - classic guitar on wall */}
      <img
        src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Director's Cut background showing classic guitar on wall"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6">
        {/* Main heading - original size */}
        <h2 className="text-5xl md:text-6xl italic mb-4 uppercase tracking-tight">
          THE DIRECTOR'S CUT
        </h2>

        {/* Description text - original size */}
        <p className="text-lg mb-8 max-w-2xl">
          Grab these "last of" pieces before they officially end up on the cutting room floor.
        </p>

        {/* Call-to-action button - Matching Hero Carousel button */}
        <div>
          <Link
            to="/shop" // Update this to your desired route
            className="relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 text-lg font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group shadow-xl shadow-red-500/30"
            style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
          >
            <span className="relative z-10">SHOP CLEARANCE</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Link>
        </div>
      </div>
    </section>
  );
}