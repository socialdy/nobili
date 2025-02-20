import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "SOLE",
    image: "/images/sole_vetrina.jpg",
    description: "Centro Stile",
  },
  {
    id: 2,
    name: "VELIS",
    image: "/images/velis_cr.jpg",
    description: "Centro Stile",
  },
  {
    id: 3,
    name: "LIRA",
    image: "/images/lira_cr.jpg",
    description: "Piet Billekens",
  },
  {
    id: 4,
    name: "MIA",
    image: "/images/mia_cr.jpg",
    description: "Centro Stile",
  },
  {
    id: 5,
    name: "TODAY",
    image: "/images/today_r.jpg",
    description: "Piet Billekens",
  },
  {
    id: 6,
    name: "SORGENTE",
    image: "/images/sorgente.jpg",
    description: "Centro Stile",
  },
  {
    id: 7,
    name: "LEVANTE",
    image: "/images/levante.jpg",
    description: "Marco Venzano",
  },
  {
    id: 8,
    name: "MASTER",
    image: "/images/master.jpg",
    description: "Meneghello Paolelli Associati",
  },
  {
    id: 9,
    name: "MANIA",
    image: "/images/mania.jpg",
    description: "Centro Stile",
  },
  {
    id: 10,
    name: "LIKID",
    image: "/images/likid.jpg",
    description: "Rodolfo Dordoni, Gordon Guillaumier",
  }
];





export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-[white]" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className=" text-center mb-12 text-[#1a1a1a]">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className=" mb-2">{product.name}</h3>
                      <p className=" mb-4">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};