import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "Python (FastAPI)",
        "PHP (CodeIgniter, Laravel, Lumen)",
        "React.js",
        "Next.js",
        "JavaScript",
        "HTML/CSS",
      ],
      color: "primary",
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Redis", "Clickhouse"],
      color: "accent",
    },
    {
      title: "Tools & Cloud",
      skills: [
        "Git",
        "Docker",
        "AWS",
        "GCP",
        "Mage AI",
        "MoEngage",
        "Kafka",
        "CDC",
        "JotURL",
      ],
      color: "primary",
    },
    {
      title: "Specialties",
      skills: [
        "REST APIs & Microservices",
        "CRM & CMS Development",
        "Search & Indexing (Typesense, Elasticsearch)",
        "Cloud Integrations",
        "Team Leadership",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building robust, scalable backend systems and full-stack applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <Card
                key={category.title}
                className={`border-border/50 bg-card hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                  category.color === 'primary' ? 'hover:shadow-primary/20' : 'hover:shadow-accent/20'
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className={`w-1 h-6 rounded-full ${category.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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
