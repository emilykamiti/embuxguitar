import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "This is NOT an iPhone",
    thumbnail: "https://images.unsplash.com/photo-1567443022715-0d7ad3a48a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwc21hcnRwaG9uZSUyMHRlY2h8ZW58MXx8fHwxNzcwMjI3MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "PSA: You look like this",
    thumbnail: "https://images.unsplash.com/photo-1668952548481-d87804a37d62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcmV2aWV3ZXIlMjBnbGFzc2VzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMjI3MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "The Downfall of OnePlus will be Studied",
    thumbnail: "https://images.unsplash.com/photo-1764116679125-b1db58fb37f1?crop=entropy&cs=tinysrgb&fit-max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2UlMjB0ZWNobm9sb2d5JTIwcmVkfGVufDF8fHx8MTc3MDIyNzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function RecentVideos() {
  return (
     <section className="py-10 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl md:text-6xl italic uppercase tracking-tight">
            RECENT VIDEOS
          </h2>
          <button 
            className="relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 font-bold uppercase tracking-wide transition-all duration-300 overflow-hidden group shadow-xl shadow-red-500/30"
            style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
          >
            <span className="relative z-10">VISIT CHANNEL</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white flex items-center justify-center">
                    <Play className="text-black ml-1" fill="black" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-lg group-hover:text-red-600 transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <button
            className="relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 font-bold uppercase tracking-wide transition-all duration-300 overflow-hidden group shadow-xl shadow-red-500/30"
            style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
          >
            <span className="relative z-10">VISIT CHANNEL</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
}