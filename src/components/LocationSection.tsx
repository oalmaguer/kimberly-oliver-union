import { MapPin, Navigation, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import iglesiaImage from "@/assets/church2.png";
import drinks from "@/assets/drinks.png";
import handsImage from "@/assets/olikim10.jpeg";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="">
      <img
        className="w-full object-cover h-[650px] mb-10 object-[10%_43%]"
        src={handsImage}
        alt=""
      />
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className=" text-4xl md:text-6xl font-serif old-standard-regular text-gold mb-4">
            UBICACIONES
          </h2>
        </div>

        <div className="flex md:flex-row flex-col gap-4 items-start">
          {/* Iglesia */}
          <Card className="  overflow-hidden w-[350px]  mx-auto">
            <div className=" flex justify-center">
              <img
                src={iglesiaImage}
                alt="Iglesia Sagrada Familia"
                className="w-[150px] h-full object-cover filter grayscale"
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-3 mb-6 text-center">
                <h4 className=" raleway text-2xl">Iglesia Sagrada Familia</h4>
                <p className="text-lg text-muted-foreground raleway">
                  Calle Río de la Plata & Del Cisne.
                  <br />
                  Gaviotas, 82110, Mazatlán, Sin
                  <br />
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full border-gold text-gold hover:bg-gold hover:text-white "
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Parroquia+De+La+Sagrada+Familia/@23.2462385,-106.4527355,17z/data=!3m1!4b1!4m6!3m5!1s0x1407af1682c8e89f:0x9b0c19a3e88700a3!8m2!3d23.2462385!4d-106.4501606!16s%2Fg%2F11rqx6jpn?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
              >
                <Navigation className="w-4 h-4 mr-2" />
                Ver en Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Recepción */}
          <Card className="  overflow-hidden w-[350px] mx-auto">
            <div className=" flex justify-center">
              <img
                src={drinks}
                alt="Cerritos Resort"
                className="w-[150px] h-full object-cover"
              />
            </div>
            <CardContent className="p-6 text-center">
              <div className="space-y-3 mb-6">
                <h4 className="raleway text-2xl">Cerritos Resort</h4>
                <p className="text-lg   text-muted-foreground raleway">
                  Camino a Cerritos
                  <br />
                  Antes de llegar a Baraka
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full border-gold text-gold hover:bg-gold hover:text-white "
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Cerritos+Resort,+82112+Mazatl%C3%A1n,+Sin./@23.299361,-106.4859465,17z/data=!3m1!4b1!4m6!3m5!1s0x8698ab03dfd91e79:0x36176a1dff053418!8m2!3d23.2990776!4d-106.4836574!16s%2Fg%2F1tfzsb_p?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
              >
                <Navigation className="w-4 h-4 mr-2" />
                Ver en Google Maps
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
