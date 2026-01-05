import { Award, Clock, Palette } from "lucide-react";
import profileImage from "@/assets/profile-ramon.png";

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: "5", label: "Anos de Experiência" },
    { icon: Award, value: "10+", label: "Projetos Realizados" },
    { icon: Palette, value: "100%", label: "Satisfação" },
  ];

  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Sobre <span className="gradient-text">Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20">
                <img
                  src={profileImage}
                  alt="Ramon Lopes - Pintor Profissional"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">5+</span>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Olá! Sou Ramon Lopes, pintor profissional com 5 anos de experiência 
              no mercado. Especializado em pinturas residenciais, comerciais e 
              artísticas, trago dedicação e excelência em cada projeto.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Meu compromisso é transformar ambientes com cores vibrantes e 
              acabamentos impecáveis, sempre superando as expectativas dos meus 
              clientes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-secondary rounded-xl"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <span className="block text-2xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
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
