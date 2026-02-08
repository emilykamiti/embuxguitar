import { Play } from 'lucide-react';

export function VideoSection() {
  const handlePlayVideo = () => {
    // Handle video play functionality
    console.log('Play video clicked');
  };

  return (
    <section className="mb-10 -mx-6">
      <div
        className="relative aspect-[16/6] bg-black overflow-hidden group cursor-pointer"
        onClick={handlePlayVideo}
      >
        {/* Single large video thumbnail */}
        <img
          src="https://images.unsplash.com/photo-1572069438926-cb9e0a5806d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcmV2aWV3JTIwc3R1ZGlvJTIwY2FtZXJhJTIwdmlkZW8lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3MDM3MzE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Product Video"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Play Button - Bottom center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 md:w-15 md:h-15 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110 mb-3">
            <Play size={20} fill="black" className="text-black ml-1" />
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
    </section>
  );
}