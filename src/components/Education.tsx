import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  const education = [
    {
      degree: "BE in Electronics & Communication Engineering",
      institution: "AIEMS",
      year: "2015",
    },
    {
      degree: "Diploma in Electronics & Communication Engineering",
      institution: "Government Polytechnic for Women",
      year: "2012",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "National High School",
      year: "2009",
    },
  ];

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full" />
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card
                key={edu.degree}
                className={`border-border/50 bg-card hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-accent text-sm font-medium">
                        {edu.year}
                      </p>
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
