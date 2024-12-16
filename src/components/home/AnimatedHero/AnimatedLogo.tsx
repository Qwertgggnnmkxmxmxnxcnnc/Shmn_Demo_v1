
interface AnimatedLogoProps {
  isLoaded: boolean;
}

const AnimatedLogo = ({ isLoaded }: AnimatedLogoProps) => {
  return (
    <div 
      className={`
        transition-all duration-2000 ease-out max-w-[200px] md:max-w-[300px] mx-auto
        ${isLoaded 
          ? 'opacity-100 scale-100 blur-0' 
          : 'opacity-0 scale-90 blur-sm'
        }
      `}
    >
      <img 
        src="https://static.tildacdn.com/tild3631-3134-4636-a635-346265366464/Shamanic_Staff_white.svg" 
        alt="Shamanic Staff Logo" 
        className="w-full h-full object-contain rounded-[2.5rem]"
        loading="eager"
      />
    </div>
  );
};

export default AnimatedLogo; 