import React from 'react';

interface HeroImageProps {
  isLoaded: boolean;
}

const HeroImage = ({ isLoaded }: HeroImageProps) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-[2.5rem] transform transition-all duration-2000 ease-out">
      <div 
        className={`w-full h-full transform transition-all duration-2000 ease-out ${
          isLoaded ? 'scale-100' : 'scale-[0.2]'
        }`}
      >
        <img
          src="https://static.tildacdn.com/tild3631-3134-4636-a635-346265366464/Shamanic_Staff_white.svg"
          alt="Shamanic Staff Logo"
          className="w-full h-full object-contain rounded-[2.5rem]"
        />
      </div>
    </div>
  );
};

export default HeroImage;