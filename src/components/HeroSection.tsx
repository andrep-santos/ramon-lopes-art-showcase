import { Paintbrush, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToGallery = () => {
    const element = document.querySelector("#galeria");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-bg pt-20"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="relative">
              <Paintbrush className="w-16 h-16 md:w-20 md:h-20 text-primary" />
              <Sparkles className="w-6 h-6 text-yellow absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">Ramon Lopes</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Pintor de Paredes
          </p>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Transformando paredes em obras de arte. Arte, cor e criatividade em cada projeto.
          </p>

          {/* CTA Button */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={scrollToGallery}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Meus Trabalhos
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
