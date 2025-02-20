import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Über 70 Jahre Erfahrung in der Armaturenfertigung – Innovation aus Tradition.",
    "Vollständig integrierte Produktion mit modernster Technologie für höchste Präzision.",
    "Nachhaltige Fertigung mit geringem ökologischen Fußabdruck.",
    "Made in Italy – Exzellenz in Design und Qualität.",
    "Forschung und Entwicklung auf höchstem Niveau für innovative Wasserlösungen."
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[315px] md:h-[400px]">
            <iframe
              className="shadow-xl h-full w-full"
              src="https://www.youtube.com/embed/NXr3y2kN3GA"
              title="Nobili Technology"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="mb-6 text-white">Warum Nobili?</h2>
            <p className="mb-8 text-white">
              Nobili steht für höchste Qualität, nachhaltige Produktion und technologische Innovation.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                  <Check className="text-white" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
