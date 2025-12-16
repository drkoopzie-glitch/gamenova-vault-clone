import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, FileCheck, Star } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Founded GameNova Vault",
    description: "Started with a mission to provide exceptional editing and proofreading services.",
  },
  {
    year: "2021",
    title: "Expanded Services",
    description: "Added academic, business, and technical editing to our service offerings.",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Served clients from over 30 countries with multilingual editing capabilities.",
  },
  {
    year: "2023",
    title: "Team Growth",
    description: "Built a network of 50+ professional freelance editors worldwide.",
  },
  {
    year: "2024",
    title: "100K+ Words Edited",
    description: "Reached the milestone of editing over 100,000 words with 100+ satisfied customers.",
  },
];

const stats = [
  { icon: Calendar, value: "5+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: FileCheck, value: "500+", label: "Projects Completed" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of excellence in editing and proofreading services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto text-primary mb-3" />
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-4 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="inline-block hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                    <CardContent className="pt-6">
                      <span className="text-primary font-semibold">{milestone.year}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10 hidden md:block" />
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
