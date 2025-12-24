import { User, Palette, Award, Clock } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: "10+", label: "Anos de Experiência" },
    { icon: Palette, value: "200+", label: "Projetos Realizados" },
    { icon: Award, value: "100%", label: "Clientes Satisfeitos" },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Side */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Placeholder for Ramon's photo */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center p-8">
                  <User className="w-24 h-24 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">
                    Adicione a foto do Ramon aqui
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient">Mim</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Olá! Sou Ramon Lopes, pintor de paredes apaixonado por transformar
              espaços através das cores. Com mais de uma década de experiência,
              trago vida e personalidade para cada ambiente que toco.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Meu trabalho vai além de simplesmente pintar paredes – é sobre
              criar atmosferas, contar histórias e despertar emoções. Cada
              projeto é único e recebe toda a minha dedicação e criatividade.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-background rounded-xl border border-border"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
