import kimImage from "@/assets/kim2.jpeg"
import { Card } from "@/components/ui/card"
import iglesia from "@/assets/iglesia.png"
import anillos from "@/assets/anillos.png"
import copas from "@/assets/copas.png"
import cena from "@/assets/cena.png"
import party from "@/assets/party.png"

const timelineEvents = [
  { time: "3:00 PM", title: "Ceremonia Religiosa", icon: iglesia },
  { time: "4:00 PM", title: "Boda Civil", icon: anillos },
  { time: "5:00 PM", title: "Cocktail Hour", icon: copas },
  { time: "6:00 PM", title: "Cena", icon: cena },
  { time: "7:00 PM", title: "Fiesta", icon: party },
];

export function WeddingTimeline() {
  return (
    <section id="itinerario" className="pb-5">
      <img className="w-full object-cover h-full mb-10 object-[10%_43%]" src={kimImage} alt="Itinerario" />
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-8xl old-standard-regular text-primary mb-4 text-gold">ITINERARIO</h2>
        </div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex items-center md:justify-center gap-4 ml-10">
              <img src={event.icon} alt={event.title} className="w-20" />
              <hr className="flex w-[30px] border-t border-gold" />
              <div>
                <p className="text-md font-serif text-gold">{event.time}</p>
                <p className="text-md font-serif">{event.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeddingTimeline;