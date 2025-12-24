import { X, ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { GalleryItem } from "./GallerySection";

interface GalleryModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal = ({ item, isOpen, onClose }: GalleryModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
        <DialogTitle className="sr-only">{item.title}</DialogTitle>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative aspect-video w-full">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <ImageIcon className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Imagem da obra será adicionada aqui
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">
            {item.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {item.description}
          </p>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              A História por Trás da Obra
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.story}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
