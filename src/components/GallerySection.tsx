import { useState } from "react";
import { Eye, ImageIcon } from "lucide-react";
import GalleryModal from "./GalleryModal";

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  story: string;
  image: string | null;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Mural Tropical",
    description: "Pintura de natureza tropical",
    story: "Esta obra foi criada para um cliente que sonhava em trazer a energia da natureza tropical para dentro de sua sala de estar. O processo levou 3 dias e utilizei técnicas de degradê para criar profundidade.",
    image: null,
  },
  {
    id: 2,
    title: "Arte Geométrica",
    description: "Padrões geométricos modernos",
    story: "Inspirado na arquitetura moderna, este projeto combina formas geométricas com cores vibrantes para criar um ambiente contemporâneo e sofisticado.",
    image: null,
  },
  {
    id: 3,
    title: "Paisagem Urbana",
    description: "Skyline noturno da cidade",
    story: "Uma homenagem à nossa cidade, retratando o skyline noturno com luzes que parecem brilhar de verdade através de técnicas especiais de pintura.",
    image: null,
  },
  {
    id: 4,
    title: "Floresta Encantada",
    description: "Natureza e fantasia",
    story: "Criada para o quarto de uma criança, esta floresta encantada traz elementos mágicos que estimulam a imaginação e os sonhos.",
    image: null,
  },
  {
    id: 5,
    title: "Abstrato Colorido",
    description: "Explosão de cores",
    story: "Uma verdadeira explosão de criatividade! Este trabalho abstrato foi desenvolvido para um estúdio de design que queria energia e inspiração no ambiente.",
    image: null,
  },
  {
    id: 6,
    title: "Mandala Zen",
    description: "Padrão meditativo",
    story: "Para um espaço de meditação e yoga, criei esta mandala detalhada que transmite paz e equilíbrio através de suas formas simétricas.",
    image: null,
  },
  {
    id: 7,
    title: "Graffiti Artístico",
    description: "Arte urbana refinada",
    story: "Unindo a estética do graffiti com técnicas de pintura tradicional, este mural traz o melhor da arte urbana para um ambiente interno.",
    image: null,
  },
  {
    id: 8,
    title: "Oceano Profundo",
    description: "Mundo submarino",
    story: "Uma imersão no fundo do mar! Cada detalhe dos corais, peixes e ondas foi cuidadosamente pintado para criar uma experiência única.",
    image: null,
  },
  {
    id: 9,
    title: "Pôr do Sol",
    description: "Cores do entardecer",
    story: "Capturando a magia do pôr do sol, esta obra transforma a parede em uma janela para o horizonte, com cores quentes e acolhedoras.",
    image: null,
  },
];

const colorPalette = [
  "from-primary/30 to-secondary/30",
  "from-secondary/30 to-accent/30",
  "from-accent/30 to-coral/30",
  "from-coral/30 to-turquoise/30",
  "from-turquoise/30 to-purple/30",
  "from-purple/30 to-yellow/30",
  "from-yellow/30 to-primary/30",
  "from-primary/30 to-accent/30",
  "from-secondary/30 to-coral/30",
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Minha <span className="text-gradient">Galeria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos. Clique em "Ver mais" para conhecer a história por trás de cada obra.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image or Placeholder */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${colorPalette[index]} flex items-center justify-center`}
                >
                  <div className="text-center p-4">
                    <ImageIcon className="w-12 h-12 text-foreground/30 mx-auto mb-2" />
                    <p className="text-sm text-foreground/40">
                      Foto {item.id}
                    </p>
                  </div>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {item.description}
                  </p>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Eye size={16} />
                    Ver mais
                  </button>
                </div>
              </div>

              {/* Always visible title on mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center gap-2 text-primary text-sm font-medium mt-2"
                >
                  <Eye size={14} />
                  Ver mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <GalleryModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};

export default GallerySection;
