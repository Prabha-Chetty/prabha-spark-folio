import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Certificates = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const certificates = [
    {
      title: "2-Day Generative AI Mastermind",
      issuer: "Outskill",
      date: "2024",
      description: "Comprehensive training on Generative AI technologies, prompt engineering, and practical AI implementation strategies.",
      tags: ["AI", "Generative AI", "LLMs", "Prompt Engineering", "Custom GPTs", "AI Agents", "AI Product Building"],
    },
  ];

  return (
    <section id="certificates" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Certificates</span>
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full" />
          </div>

          {/* Certificates */}
          <div className="space-y-6">
            {certificates.map((cert, idx) => (
              <Card
                key={cert.title}
                className={`border-border/50 bg-card hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">
                        {cert.issuer} • {cert.date}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="hover:scale-110 transition-transform duration-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
