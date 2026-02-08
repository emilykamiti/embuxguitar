import { Play, Eye } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  category: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "iPhone 16 Pro Review: The Best Camera Phone?",
    thumbnail: "https://images.unsplash.com/photo-1572069438926-cb9e0a5806d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY2FtZXJhJTIwcmV2aWV3fGVufDF8fHx8MTc3MDIyNjYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "3.2M",
    duration: "15:42",
    category: "Smartphones"
  },
  {
    id: 2,
    title: "MacBook Pro M4: Everything You Need to Know",
    thumbnail: "https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB0ZWNobm9sb2d5JTIwZGVza3xlbnwxfHx8fDE3NzAyMjY2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "2.8M",
    duration: "18:23",
    category: "Laptops"
  },
  {
    id: 3,
    title: "Sony XM5 Headphones: Still the Best?",
    thumbnail: "https://images.unsplash.com/photo-1762028892204-2ef68f7fcfd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcwMjE0NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "1.9M",
    duration: "12:15",
    category: "Audio"
  },
  {
    id: 4,
    title: "Tesla Model 3 2026: The Future of Electric Cars",
    thumbnail: "https://images.unsplash.com/photo-1610698553131-1f12a1615cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMjI2NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "4.1M",
    duration: "22:30",
    category: "Electric Vehicles"
  },
  {
    id: 5,
    title: "Apple Watch Ultra 3: Worth the Upgrade?",
    thumbnail: "https://images.unsplash.com/photo-1716234479503-c460b87bdf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwd2VhcmFibGUlMjB0ZWNofGVufDF8fHx8MTc3MDE5NzU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "2.3M",
    duration: "14:18",
    category: "Wearables"
  },
  {
    id: 6,
    title: "Samsung Galaxy S25 Ultra First Impressions",
    thumbnail: "https://images.unsplash.com/photo-1572069438926-cb9e0a5806d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY2FtZXJhJTIwcmV2aWV3fGVufDF8fHx8MTc3MDIyNjYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "3.5M",
    duration: "16:45",
    category: "Smartphones"
  }
];

export function VideoGrid() {
  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Latest Videos</h2>
          <p className="text-gray-400 text-lg">
            In-depth reviews and analysis of the latest tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-zinc-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play size={28} fill="white" className="ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-red-500/90 px-3 py-1 rounded-full text-xs">
                  {video.category}
                </div>
              </div>

              <h3 className="text-lg mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                {video.title}
              </h3>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Eye size={16} />
                <span>{video.views} views</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border border-white/30 hover:border-red-500 hover:text-red-500 transition-all rounded-full">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}
