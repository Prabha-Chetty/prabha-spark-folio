import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Languages } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="contact" className="py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <Card className={`border-border/50 bg-card hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "0.2s" }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:prabha.ochetty@gmail.com"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      prabha.ochetty@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn Card */}
            <Card className={`border-border/50 bg-card hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "0.3s" }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/prabha-o"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Languages */}
            <Card className={`border-border/50 bg-card transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "0.4s" }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Languages className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Languages</h3>
                    <p className="text-sm text-muted-foreground">
                      English, Kannada, Tamil, Telugu, Hindi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className={`border-border/50 bg-card transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "0.5s" }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Available for remote opportunities worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "0.6s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:prabha.ochetty@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
