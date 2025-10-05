import { Building2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      company: "Bosswallah Technologies",
      role: "Product Development Lead",
      period: "2019 – Present",
      achievements: [
        "Architected migration from legacy PHP monolith to FastAPI microservices, improving scalability and maintainability",
        "Led a team of 4 engineers, overseeing architecture decisions, database design, and seamless data migration",
        "Built a Cloud Call Management System with telecom API integrations and real-time monitoring dashboards",
        "Designed and deployed notification and marketing automation systems for CRM, increasing user engagement",
        "Delivered Event Management Module in just 2 days using Cursor AI, demonstrating rapid prototyping capabilities",
      ],
    },
    {
      company: "Trawex Technologies",
      role: "PHP Developer",
      period: "2017 – 2019",
      achievements: [
        "Developed comprehensive Hotel, Flight, and Car booking modules using CodeIgniter and MySQL",
        "Integrated multiple third-party APIs and built robust REST APIs for mobile application consumption",
        "Implemented Elasticsearch-powered search system with advanced geocode and hotel code indexing",
        "Optimized database queries and caching strategies, reducing API response times by 40%",
      ],
    },
    {
      company: "Wolabi Solutions",
      role: "Web Developer",
      period: "2016 – 2017",
      achievements: [
        "Created dynamic Admin Panels and CMS modules using CodeIgniter framework",
        "Built a simple website builder tool leveraging jQuery for drag-and-drop functionality",
        "Developed RESTful APIs with PHP to support frontend applications",
        "Collaborated with designers to implement pixel-perfect responsive interfaces",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4">
              9+ years of building impactful solutions across diverse domains
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 transition-all duration-1000 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`} style={{ transformOrigin: "top" }} />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.company}
                  className={`relative ${
                    idx % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-primary transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} style={{ transitionDelay: `${0.5 + idx * 0.2}s` }} />

                  <Card className={`border-border/50 bg-card hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${0.3 + idx * 0.2}s` }}>
                    <CardContent className="pt-6">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Building2 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                            <p className="text-primary font-medium">{exp.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3 text-sm md:text-base">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground">
                            <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
