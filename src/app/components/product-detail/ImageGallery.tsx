import { useState, useRef } from 'react';

interface ImageGalleryProps {
  images: string[];
  selectedImage: number;
  onImageSelect: (index: number) => void;
}

export function ImageGallery({ images, selectedImage, onImageSelect }: ImageGalleryProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();

    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

    setZoomPosition({ x, y });
  };

  return (
    <div className="flex gap-2">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              onImageSelect(index);
              setIsZoomed(false);
            }}
            className={`w-40 h-56 border-2 overflow-hidden transition-all ${
              selectedImage === index
                ? 'border-black scale-[1.02]'
                : 'border-white hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image Container - Clean version */}
      <div className="flex-1 overflow-hidden w-[500px] h-[685px]">
        <div
          ref={imageRef}
          className="relative w-full h-full bg-gray-100 overflow-hidden cursor-zoom-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <img
            src={images[selectedImage]}
            alt="Product"
            className="w-full h-full object-cover"
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    transform: 'scale(2)',
                    transition: 'transform 0.1s ease-out',
                  }
                : {
                    transform: 'scale(1)',
                    transition: 'transform 0.3s ease-out',
                  }
            }
          />
        </div>
      </div>
    </div>
  );
}