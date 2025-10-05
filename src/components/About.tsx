import { Code2, Database, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-accent mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-foreground leading-relaxed">
                I&apos;m <span className="font-semibold text-primary">Prabha O</span>, a Backend Developer 
                with over <span className="font-semibold text-accent">9 years of experience</span> transforming 
                complex technical challenges into elegant, scalable solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans <span className="text-foreground font-medium">Python (FastAPI)</span> and{" "}
                <span className="text-foreground font-medium">PHP (CodeIgniter, Laravel)</span>, with deep 
                experience in building CRMs, CMS platforms, booking engines, and search-driven applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;ve led engineering teams, architected microservices migrations, and delivered 
                products that create real business impact. I believe the best code is invisible—it just works, 
                scales effortlessly, and empowers teams to move faster.
              </p>
            </div>

            {/* Right: Highlights */}
            <div className="space-y-4">
              <Card className="border-border/50 bg-card hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Code2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Full-Stack Expertise</h3>
                      <p className="text-sm text-muted-foreground">
                        From FastAPI microservices to React.js frontends, I build end-to-end solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Database className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Data Architecture</h3>
                      <p className="text-sm text-muted-foreground">
                        Expert in MySQL, MongoDB, Redis, and Clickhouse—optimizing for performance and scale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Leadership & Delivery</h3>
                      <p className="text-sm text-muted-foreground">
                        Led teams of 4 engineers, shipped critical features in days, and modernized legacy systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
