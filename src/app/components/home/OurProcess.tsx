const processes = [
  {
    id: 1,
    title: "IDEATION",
    description: "Finding the balance between familiar and fresh.",
    image: "https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBza2V0Y2glMjBwYXBlciUyMGRyYXdpbmdzfGVufDF8fHx8MTc3MDIyNzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "GETTING IT RIGHT",
    description: "We take pride in putting good products into the world.",
    image: "https://images.unsplash.com/photo-1616761512547-ea151d8a56d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBmbGF0bGF5fGVufDF8fHx8MTc3MDIyNzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "DETAILS",
    description: "Like a cherry on top or period at the end of a sentence.",
    image: "https://images.unsplash.com/photo-1574240635388-2a6bdc8d3c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0aWxlJTIwZGV0YWlsJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAyMjczMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function OurProcess() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl italic text-center mb-12 uppercase tracking-tight">
          OUR PROCESS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process) => (
            <div key={process.id} className="group flex flex-col">
              <div className="flex-1">
                <div className="overflow-hidden mb-4">
                  {/* Let's use a much taller aspect ratio to see clear difference */}
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full aspect-[3/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg italic uppercase mb-1">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}