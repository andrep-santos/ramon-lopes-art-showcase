import { Play, Youtube } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string | null;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Processo de Pintura - Mural Tropical",
    description: "Acompanhe todo o processo de criação de um mural tropical, desde a preparação da parede até os detalhes finais.",
    youtubeId: null, // Add YouTube video ID here
  },
  {
    id: "2",
    title: "Transformação Completa - Antes e Depois",
    description: "Veja a incrível transformação de um ambiente simples em uma verdadeira obra de arte.",
    youtubeId: null, // Add YouTube video ID here
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">Vídeos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista ao processo de criação das minhas obras e veja como a magia acontece.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Video Player or Placeholder */}
              <div className="relative aspect-video">
                {video.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="relative inline-block mb-4">
                        <Youtube className="w-16 h-16 text-destructive/50" />
                        <Play className="w-6 h-6 text-destructive/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Adicione o ID do vídeo do YouTube
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {video.title}
                </h3>
                <p className="text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
