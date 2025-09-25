import heroImage from '@/assets/olikim.jpeg';
import heroImage2 from '@/assets/olikim2.jpeg';
import heroImage3 from '@/assets/olikim3.jpeg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={heroImage2}
          alt="Kimberly y Oliver"
          className="w-full h-full object-cover "
        />
        <img
          src={heroImage}
          alt="Kimberly y Oliver"
          className="w-full h-full object-cover "
        />
        <img
          src={heroImage3}
          alt="Kimberly y Oliver"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mt-24">


          <div className="">
            <h1 className="text-8xl md:text-8xl tangerine-regular font-light mb-2">
              Kim
            </h1>
            <div className="flex items-center justify-center my-4">
              <div className="h-px bg-white/60 flex-1 max-w-20"></div>
              <span className="mx-6 text-2xl tangerine-regular">&</span>
              <div className="h-px bg-white/60 flex-1 max-w-20"></div>
            </div>
            <h1 className="text-8xl md:text-8xl tangerine-regular font-light">
              Oliver
            </h1>
          </div>

        </div>

        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;