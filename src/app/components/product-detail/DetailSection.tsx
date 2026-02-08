export function DetailSection() {
  return (
    <section className="py-5 bg-gray-50 -mx-6 px-6">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl italic mb-8 uppercase">
          EVERY DETAIL COUNTS
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
          The same subtle touches and hidden easter eggs we obsess over in our videos live here too.
          Purposeful design, better materials, and thoughtful details—built to reward the close-up.
        </p>
      </div>

      {/* Single big image as requested */}
      <div className="flex justify-center">
      <div className="relative w-full max-w-5xl h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1616761512547-ea151d8a56d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBmbGF0aGF5fGVufDF8fHx8MTc3MDIyNzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Product Details"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

        </div>
      </div>
    </section>
  );
}