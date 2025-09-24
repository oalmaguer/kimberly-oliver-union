const TimelineSection = () => {
  const timelineEvents = [
    {
      time: "3:30 PM",
      title: "Llegada de Invitados",
      description: "Recibimiento en la iglesia"
    },
    {
      time: "4:00 PM",
      title: "Ceremonia Religiosa",
      description: "Intercambio de votos y anillos"
    },
    {
      time: "5:00 PM",
      title: "Fotografías",
      description: "Sesión fotográfica con familia"
    },
    {
      time: "7:00 PM",
      title: "Cóctel de Bienvenida",
      description: "Recepción en Jardín Los Rosales"
    },
    {
      time: "8:00 PM",
      title: "Cena",
      description: "Menú de tres tiempos"
    },
    {
      time: "9:30 PM",
      title: "Brindis y Baile",
      description: "Primera canción como esposos"
    },
    {
      time: "10:00 PM",
      title: "Fiesta",
      description: "Música y baile hasta altas horas"
    }
  ];

  return (
    <section id="itinerario" className="py-20 bg-warm-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
            Itinerario del Día
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Programa completo de nuestra celebración
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gold/30"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-warm-white shadow-soft z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-card p-6 rounded-lg shadow-card">
                    <div className="text-gold font-serif text-lg font-semibold mb-1">
                      {event.time}
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground font-sans">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;