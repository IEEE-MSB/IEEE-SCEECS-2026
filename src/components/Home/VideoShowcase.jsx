'use client';
import { ZoomParallax } from '../zoom-parallax';
import { PixelImage } from '../pixel-image';

const heroImages = [
  { isVideo: true, videoSrc: "https://res.cloudinary.com/djqx5qrb1/video/upload/v1794386038/video/recap-2025.mp4", alt: "Video" }, // Video item
  { src: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794386258/hero_images/SCEECS24_1.jpg", alt: "SCEECS 2024 Image 1" },
  { src: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794386259/hero_images/SCEECS24_2.jpg", alt: "SCEECS 2024 Image 2" },
  { src: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794386260/hero_images/SCEECS24_3.jpg", alt: "SCEECS 2024 Image 3" },
  { src: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794386261/hero_images/SCEECS24_4.jpg", alt: "SCEECS 2024 Image 4" },
  { src: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794386262/hero_images/SCEECS24_5.jpg", alt: "SCEECS 2024 Image 5" },
  { src: "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794386263/hero_images/SCEECS24_6.jpg", alt: "SCEECS 2024 Image 6" },
];
function VideoShowcase() {
  return (
    <div className="relative w-full bg-white ">
      {/* Desktop: Zoom Parallax with hero images and video in the middle */}
      <div className="hidden md:block mt-40">
        <ZoomParallax images={heroImages} />
      </div>

      {/* Mobile: autoplay video + 2-column pixel image grid */}
      <div className="md:hidden block px-4 py-10 space-y-6 mt-10">
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <video
            src="https://res.cloudinary.com/djqx5qrb1/video/upload/v1794386038/video/recap-2025.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {heroImages
            .filter((item) => !item.isVideo)
            .map((image) => (
              <PixelImage
                key={image.src}
                src={image.src}
                className="aspect-square"
                grid="6x4"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default VideoShowcase;
