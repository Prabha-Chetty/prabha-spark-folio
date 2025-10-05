import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            Backend Developer
            <span className="block gradient-text mt-2">
              Building Scalable Solutions
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Specializing in <span className="text-primary font-semibold">Python (FastAPI)</span> and{" "}
            <span className="text-primary font-semibold">PHP (CodeIgniter)</span> to architect
            microservices, APIs, and data-driven systems that power CRMs, CMS platforms, and high-growth applications.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            {["Python", "FastAPI", "PHP", "CodeIgniter", "MySQL", "MongoDB", "Redis", "Docker", "AWS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary border border-border rounded-full text-sm text-foreground transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
            <Button variant="hero" size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="accent" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Let&apos;s Connect
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold gradient-text">9+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold gradient-text">4</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};
