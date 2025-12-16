import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, BookOpen, Globe, Sparkles, Target } from "lucide-react";

const expertiseAreas = [
  {
    icon: BookOpen,
    title: "Grammar & Syntax Mastery",
    description: "Deep understanding of English grammar rules, sentence structure, and syntactic patterns across various writing styles.",
  },
  {
    icon: Globe,
    title: "Multi-dialect Proficiency",
    description: "Expert knowledge in American, British, Australian, and Canadian English variants with seamless localization capabilities.",
  },
  {
    icon: Target,
    title: "Industry-Specific Editing",
    description: "Specialized experience in academic, business, technical, medical, legal, and creative writing domains.",
  },
  {
    icon: Sparkles,
    title: "Style Guide Expertise",
    description: "Proficient in APA, MLA, Chicago, AP, and custom corporate style guides for consistent formatting.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Multi-stage review process ensuring accuracy, consistency, and adherence to client specifications.",
  },
  {
    icon: CheckCircle,
    title: "Attention to Detail",
    description: "Meticulous focus on punctuation, spelling, formatting, and structural coherence in every project.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Years of experience combined with continuous learning ensure your content receives 
            the highest quality editing and proofreading services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <area.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
