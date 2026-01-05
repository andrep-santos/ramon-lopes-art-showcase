import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import galleryPilar from "@/assets/gallery-pilar.png";
import galleryRepintura from "@/assets/gallery-repintura.png";
import galleryPinturaInterna from "@/assets/gallery-pintura-interna.png";
import galleryFachada from "@/assets/gallery-fachada.png";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Pintura de Pilar - Restaurante",
    image: galleryPilar,
    description: "Pilar pintado em restaurante",
    details: "Trabalho de pintura em pilar interno de restaurante. O acabamento foi realizado com precisão e cuidado, garantindo uma superfície lisa e uniforme que se integra perfeitamente ao ambiente do estabelecimento. Técnica de pintura profissional aplicada para durabilidade e resistência.",
  },
  {
    id: 2,
    title: "Repintura de Mural Artístico",
    image: galleryRepintura,
    description: "Repintura de parede com desenho existente",
    details: "Repintura cuidadosa de mural artístico já existente. O trabalho consistiu em revitalizar as cores do desenho original, mantendo sua identidade visual enquanto renovava completamente a aparência. A repintura ficou excelente, preservando os detalhes artísticos do mural com cores vibrantes e acabamento de alta qualidade.",
  },
  {
    id: 3,
    title: "Pintura Interna - Projeto Comercial",
    image: galleryPinturaInterna,
    description: "Pintura interna de alta qualidade",
    details: "Projeto de pintura interna executado com excelência. Acabamento impecável nas paredes e detalhes, com atenção especial às bordas e cantos. Utilização de tintas de primeira linha para garantir durabilidade e resistência ao tempo, proporcionando um ambiente limpo e profissional.",
  },
  {
    id: 4,
    title: "Pintura de Fachada - Restaurante Mezzogiorno",
    image: galleryFachada,
    description: "Pintura da fachada do restaurante",
    details: "Pintura completa da fachada do restaurante Mezzogiorno, executada com muita excelência. O trabalho incluiu preparação adequada da superfície, aplicação de primer e múltiplas demãos de tinta de alta qualidade. O resultado é uma fachada vibrante e acolhedora que destaca o estabelecimento na rua.",
  },
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Meus <span className="gradient-text">Trabalhos</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Confira alguns dos projetos que realizei com dedicação e excelência
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-foreground font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-display font-bold mb-2 gradient-text">
                {selectedItem.title}
              </h3>
              <p className="text-muted-foreground text-lg mb-4">
                {selectedItem.description}
              </p>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground mb-2">
                  Detalhes do Trabalho
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedItem.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
