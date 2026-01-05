import { Phone, MessageCircle } from "lucide-react";

const ContactBar = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento para pintura."
  );

  return (
    <footer id="contato" className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold gradient-text mb-2">
              Solicite um Orçamento
            </h3>
            <p className="text-muted-foreground">
              Entre em contato e transforme seu ambiente
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-full font-semibold hover:bg-secondary/80 transition-colors"
            >
              <Phone size={20} />
              Ligar
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Ramon Lopes - Pintor Profissional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactBar;
