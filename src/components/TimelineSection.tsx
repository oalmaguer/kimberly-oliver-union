import kimImage from "@/assets/kim2.jpeg"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineEvent {
  date: string
  time: string
  title: string
  description: string
  location?: string
  type: "ceremony" | "reception" | "party" | "special"
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "31 de Enero, 2026",
    time: "3:00 PM",
    title: "Misa",
    description:
      "Join us as we exchange vows in an intimate garden ceremony surrounded by our closest family and friends.",
    // location: "Rose Garden Pavilion",
    type: "ceremony",
  },
  {
    date: "31 de Enero, 2026",
    time: "4:30 PM",
    title: "Cocktail Hour",
    description: "Celebrate with signature cocktails and light appetizers while we take photos with the wedding party.",
    type: "reception",
  },
  {
    date: "31 de Enero, 2026",
    time: "6:00 PM",
    title: "Cena",
    description: "A three-course plated dinner featuring locally sourced ingredients and seasonal specialties.",
    type: "reception",
  },
  {
    date: "31 de Enero, 2026",
    time: "8:00 PM",
    title: "First Dance & Dancing",
    description: "The celebration continues with our first dance followed by an evening of music and dancing.",
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
    <section id="itinerario" className="pb-20 bg-warm-white">
      <img className='w-full object-cover h-full mb-10 object-[10%_43%]' src={kimImage} alt="Itinerario" />
      <div className="max-w-4xl mx-auto p-6 ">
        <div className="text-center mb-12">
          <h2 className="text-8xl md:text-8xl tangerine-regular text-primary mb-4 text-gold">Itinerario</h2>

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
                <div className="absolute left-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-sm md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                            {event.date}
                          </Badge>
                          <Badge variant="outline" className="font-mono">
                            {event.time}
                          </Badge>
                          {event.location && <Badge className={getEventColor(event.type)}>📍 {event.location}</Badge>}
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed text-pretty">{event.description}</p>
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