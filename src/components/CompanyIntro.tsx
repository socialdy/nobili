export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-black" id="ueber-nobili">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/nobili.png" 
            alt="Nobili Logo" 
            className="h-20 w-auto"
          />
        </div>

        <div className="mt-6 text-center text-white">
          <p>
            Seit den 1950er Jahren steht Nobili für technologische Innovation, nachhaltige Produktion und herausragendes italienisches Design. Mit einem vollständig integrierten Produktionsprozess im hochmodernen Nobili Technology Centre setzt das Unternehmen neue Maßstäbe in Qualität und Effizienz. Auf 88.000 m² entstehen jährlich 2,8 Millionen Armaturen – ressourcenschonend, präzise gefertigt und mit einem klaren Fokus auf Funktionalität und Ästhetik. Nobili kombiniert traditionelles Handwerk mit modernster Technologie, um langlebige Produkte für Küche und Bad zu schaffen, die höchste Umweltstandards erfüllen.
          </p>
        </div>
      </div>
    </section>
  );
};
