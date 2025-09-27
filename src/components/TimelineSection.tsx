import kimImage from "@/assets/kim2.jpeg"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineEvent {
  date: string
  time: string
  title: string
  location?: string
  type: "ceremony" | "reception" | "party" | "special"
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "31 de Enero, 2026",
    time: "3:00 PM",
    title: "Misa",
   
    type: "ceremony",
  },
  {
    date: "31 de Enero, 2026",
    time: "4:30 PM",
    title: "Cocktail Hour",
    type: "reception",
  },
  {
    date: "31 de Enero, 2026",
    time: "6:00 PM",
    title: "Cena",
    type: "reception",
  },
  {
    date: "31 de Enero, 2026",
    time: "8:00 PM",
    title: "First Dance & Dancing",
    type: "party",
  },

]

const getEventIcon = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "ceremony":
      return "💒"
    case "reception":
      return "🥂"
    case "party":
      return "💃"
    case "special":
      return "☀️"
    default:
      return "✨"
  }
}

const getEventColor = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "ceremony":
      return "bg-accent text-accent-foreground"
    case "reception":
      return "bg-primary text-primary-foreground"
    case "party":
      return "bg-secondary text-secondary-foreground"
    case "special":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function WeddingTimeline() {
  return (
    <section id="itinerario" className="pb-5 ">
      <img className='w-full object-cover h-full mb-10 object-[10%_43%]' src={kimImage} alt="Itinerario" />
      <div className="max-w-4xl mx-auto p-6 ">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-8xl old-standard-regular text-primary mb-4 text-gold">ITINERARIO</h2>

        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-accent rounded-full border-4 border-background  md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="p-6  ">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl" role="img" aria-label={event.type}>
                            {getEventIcon(event.type)}
                          </span>
                          <h3 className="text-xl font-serif text-gold">{event.title}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                       
                          <Badge variant="outline" className="font-mono">
                            {event.time}
                          </Badge>
                          {event.location && <Badge className={getEventColor(event.type)}>📍 {event.location}</Badge>}
                        </div>
                      </div>
                    </div>

                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>)
}


export default WeddingTimeline;