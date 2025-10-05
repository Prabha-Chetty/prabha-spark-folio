import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold gradient-text mb-3">Prabha O</h3>
              <p className="text-sm text-muted-foreground">
                Backend Developer specializing in scalable APIs and microservices architecture.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="mailto:prabha.ochetty@gmail.com"
                  className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href="https://linkedin.com/in/prabha-o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Prabha O. Built with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
