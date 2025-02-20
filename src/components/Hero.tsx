import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video>
        </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-7xl animate-fade-in">
          <h1 className=" text-white mb-6 break-words">
            Wonder in Every Drop
          </h1>

          <p className="text-white max-w-2xl text-lg">
            Nobili setzt Maßstäbe in Design und Technologie. Erleben Sie Innovation in jedem Tropfen – von Mischarmaturen bis zu High-Tech-Duschsystemen.
          </p>

          <div className="flex space-x-4 mt-9">
            <a href="/#beratung">
              <Button className="bg-white text-[#1a1a1a] uppercase hover:bg-white">
              Beratungstermin buchen
              </Button>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};
