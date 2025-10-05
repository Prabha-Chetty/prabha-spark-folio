import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Boxes, Database, Search, Phone, Hotel } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Microservices Migration",
      description: "Architected and executed migration from legacy PHP monolith to modern FastAPI microservices architecture, improving scalability, maintainability, and deployment velocity.",
      icon: Boxes,
      tags: ["FastAPI", "Python", "Microservices", "Docker", "Migration"],
      impact: "3x faster deployments, 50% reduction in downtime",
    },
    {
      title: "Data Queue Management System",
      description: "Built Redis-based automation pipeline for lead processing and distribution, enabling real-time data flow and significantly improving conversion rates through intelligent routing.",
      icon: Database,
      tags: ["Redis", "Python", "Automation", "Queue Management"],
      impact: "40% improvement in lead conversion rates",
    },
    {
      title: "Advanced Search Engine",
      description: "Implemented real-time search capabilities using Typesense and Elasticsearch, with support for fuzzy matching, geocode indexing, and hotel code lookups for booking platforms.",
      icon: Search,
      tags: ["Typesense", "Elasticsearch", "Python", "Search Optimization"],
      impact: "Sub-50ms search response times",
    },
    {
      title: "Cloud Call Management System",
      description: "Designed vendor-agnostic telecom system with API integrations for major providers, featuring real-time monitoring dashboards and comprehensive call analytics.",
      icon: Phone,
      tags: ["FastAPI", "Telecom APIs", "Real-time", "Dashboard"],
      impact: "Unified platform for 5+ telecom providers",
    },
    {
      title: "Hotel Booking Engine",
      description: "Developed multi-API hotel booking system with intelligent caching strategies, search optimization, and seamless integration with flight and car rental modules.",
      icon: Hotel,
      tags: ["CodeIgniter", "PHP", "MySQL", "API Integration", "Caching"],
      impact: "Support for 100k+ hotel properties worldwide",
    },
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Real-world solutions that demonstrate technical expertise and business impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={project.title}
                className={`border-border/50 bg-card hover:border-primary/50 transition-all duration-700 group hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-accent font-medium">
                      {project.impact}
                    </p>
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
