const WelcomeSection = () => {
  return (
    <section id="bienvenida" className="py-20 bg-warm-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-gold mb-8">
          Bienvenidos a nuestra celebración
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 font-sans leading-relaxed">
          <p>
            Queridos familiares y amigos, es con gran alegría que los invitamos a celebrar 
            el día más importante de nuestras vidas. Después de años de amor, risas y 
            complicidad, hemos decidido unir nuestros corazones para siempre.
          </p>
          
          <p>
            Su presencia ha sido fundamental en nuestro camino hacia este momento especial, 
            y no podríamos imaginar esta celebración sin ustedes. Esperamos compartir con 
            ustedes una velada llena de amor, alegría y recuerdos inolvidables.
          </p>

          <div className="pt-8">
            <div className="w-20 h-px bg-gold mx-auto mb-6"></div>
            <p className="text-gold font-serif text-xl italic">
              "El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección."
            </p>
            <p className="text-sm text-muted-foreground mt-2">- Antoine de Saint-Exupéry</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;