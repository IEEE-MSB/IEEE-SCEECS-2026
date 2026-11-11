import { cloudinaryImage } from '@/utils/cloudinary';
import { LogoCarousel } from '../ui/logo-carousel';

const sponsorImages = [
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385541/sponsors/1.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385542/sponsors/2.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385543/sponsors/3.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385544/sponsors/4.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385545/sponsors/5.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385546/sponsors/6.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385547/sponsors/7.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385560/sponsors/balsamiq2.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385564/sponsors/coding-thinker-logo.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385562/sponsors/codingNinjas.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385565/sponsors/EDtimes.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385568/sponsors/hitbullseye-logo.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385570/sponsors/ibuddy2.png",
  "https://res.cloudinary.com/djqx5qrb1/image/upload/v1794385571/sponsors/RagaAI.png",
];

// Convert image paths to logo objects with img components
const sponsorLogos = sponsorImages.map((src, index) => ({
  id: index,
  img: ({ className }) => (
    <img
      src={src}
      alt={`Sponsor ${index + 1}`}
      className={className}
    />
  ),
}));

// Split logos into two halves
const firstHalf = sponsorLogos.slice(0, Math.ceil(sponsorLogos.length / 2));
const secondHalf = sponsorLogos.slice(Math.ceil(sponsorLogos.length / 2));

function Sponsors() {
  return (
    <div className=" bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-600">
            Past Technical Sponsors
          </h2>
        </div>

        {/* Logo Carousels - Top and Bottom */}
        <div className="mt-12 flex flex-col gap-8 md:gap-12 justify-center items-center overflow-hidden">
          <div className="w-full flex justify-center overflow-hidden px-2">
            <LogoCarousel logos={firstHalf} columnCount={4} mobileColumnCount={2} />
          </div>
          <div className="w-full flex justify-center overflow-hidden px-2">
            <LogoCarousel logos={secondHalf} columnCount={4} mobileColumnCount={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
