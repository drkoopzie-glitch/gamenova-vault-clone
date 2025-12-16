import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, GraduationCap, Briefcase, Globe } from "lucide-react";

const guides = [
  {
    icon: GraduationCap,
    title: "Academic Writing Guide",
    description: "Master the art of academic writing with our comprehensive guide covering essays, dissertations, and research papers.",
    topics: ["Citation styles", "Research methodology", "Thesis structure", "Academic tone"],
  },
  {
    icon: Briefcase,
    title: "Business Writing Essentials",
    description: "Learn professional business communication skills for reports, proposals, and corporate correspondence.",
    topics: ["Executive summaries", "Proposal writing", "Email etiquette", "Report formatting"],
  },
  {
    icon: Globe,
    title: "Web Content Best Practices",
    description: "Create engaging online content that captivates readers and ranks well in search engines.",
    topics: ["SEO writing", "Blog optimization", "Social media copy", "Landing pages"],
  },
  {
    icon: BookOpen,
    title: "Self-Editing Checklist",
    description: "A comprehensive checklist to help you polish your writing before professional editing.",
    topics: ["Grammar checks", "Consistency review", "Flow analysis", "Final polish"],
  },
];

export function Guides() {
  return (
    <section id="guides" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Writing Guides & Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Free resources to help you improve your writing skills and understand our editing process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <guide.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {guide.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {guide.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {guide.topics.map((topic, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-primary">
                  <Download className="w-4 h-4" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="py-8">
              <FileText className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Need Custom Guidance?
              </h3>
              <p className="text-muted-foreground mb-4">
                Contact us for personalized writing tips and editing advice tailored to your specific needs.
              </p>
              <a href="#contact">
                <Button>Get in Touch</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
