import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andreas Hofmann",
      role: "Innenarchitekt",
      quote: "Ich arbeite viel mit modernen Küchen und die SOLE Armatur hat mich wirklich überzeugt. Sie hat nicht nur ein tolles, zeitgemäßes Design, sondern lässt sich auch wunderbar bedienen.",
    },
    {
      id: 2,
      name: "Sabine Keller",
      role: "Privatkunde",
      quote: "Ich habe mich für die VELIS Armatur für meine neue Küche entschieden und bin absolut begeistert.",
    },
    {
      id: 3,
      name: "Johannes Meier",
      role: "Schreinermeister",
      quote: "Ich habe die LIRA Armatur in einem meiner Projekte verbaut und war wirklich beeindruckt. Sie ist nicht nur ein echter Blickfang, sondern auch sehr funktional.",
    },
    {
      id: 4,
      name: "Katrin Lehmann",
      role: "Möbeldesignerin",
      quote: "Die MIA Armatur hat das Bad meiner Kunden wirklich aufgewertet. Sie ist nicht nur optisch ein Highlight, sondern auch funktional perfekt durchdacht.",
    },
  ];

  return (
    <section className="py-20 bg-white text-black" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-16">Referenzen</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto relative">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-gray/20 p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="mb-8">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-black-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 bg-gray/20 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 bg-gray/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
