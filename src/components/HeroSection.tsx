import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in">
          <span className="gradient-text">Ramon Lopes</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
          Pintor Profissional
        </p>
        <p className="text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto">
          Transformando espaços com cores e criatividade há 5 anos
        </p>
        <a
          href="#sobre"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Conheça meu trabalho
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
