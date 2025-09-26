import image1 from '@/assets/olikim3.jpeg';
import flowersImage from '@/assets/flowers.png';
import { useEffect, useState } from "react";

const WelcomeSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-31T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="bienvenida" className="pt-20 pb-10 bg-warm-white relative overflow-hidden">
      {/* Flower Background Image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={flowersImage}
          alt="Flower background"
          className="w-full h-full object-cover filter  hue-rotate-90 opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-6xl md:text-8xl old-standard-regular text-gold mb-8">
          HAPPILY EVER AFTER
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 playfair leading-relaxed">
          <p>
            Queridos familiares y amigos, es con gran alegría que los invitamos a celebrar
            el día más importante de nuestras vidas. Después de años de amor, risas y
            complicidad, hemos decidido unir nuestros corazones para siempre.
          </p>

          {/* Countdown Timer */}
          <hr className='border border-yellow-600 ' />
          <div className="text-center mt-8 ">
            <p className="text-2xl font-serif text-muted-foreground old-standard-regular">Te esperamos para </p>
            <p className="text-2xl font-serif text-muted-foreground old-standard-regular mb-8">celebrar nuestra boda</p>
            {/* here goes the date 31/01/2026 */}
            <div className="flex justify-center md:flex-row flex items-center lg:gap-16 gap-8 mb-4">
              <div>
                <hr className='border border-yellow-600 w-full mb-4'/>
            <p className="text-xl font-serif text-muted-foreground old-standard-regular">SABADO</p>
            <hr className='border border-yellow-600 w-full mt-4'/>
              </div>
              
            <p className="text-5xl font-serif  old-standard-regular">31</p>
            <div> 
            <hr className='border border-yellow-600 w-full mb-4'/>
            <p className="text-xl font-serif text-muted-foreground old-standard-regular">ENERO</p>
            <hr className='border border-yellow-600 w-full mt-4'/>
            </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6 md:gap-8 tangerine-regular">
              <div className="text-center tangerine-regular">
                <p className="text-6xl md:text-8xl font-bold text-gold">{timeLeft.days}</p>
                <p className="text-base md:text-2xl playfair">DAYS</p>
              </div>
              <div className="text-center tangerine-regular">
                <p className="text-6xl md:text-8xl font-bold text-gold">{timeLeft.hours}</p>
                <p className="text-base md:text-2xl playfair">HOURS</p>
              </div>
              <div className="text-center tangerine-regular">
                <p className="text-6xl md:text-8xl font-bold text-gold">{timeLeft.minutes}</p>
                <p className="text-base md:text-2xl playfair">MINUTES</p>
              </div>
              <div className="text-center tangerine-regular">
                <p className="text-6xl md:text-8xl font-bold text-gold">{timeLeft.seconds}</p>
                <p className="text-base md:text-2xl playfair">SECONDS</p>
              </div>
            </div>
          </div>

          <div className="">
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