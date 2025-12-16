import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, GraduationCap, Briefcase, Globe, BookOpen, Building } from "lucide-react";

const projects = [
  {
    icon: GraduationCap,
    title: "PhD Dissertation",
    client: "Graduate Student, University of California",
    description: "Complete editing and formatting of a 250-page dissertation on Environmental Science.",
    tags: ["Academic", "Science", "Long-form"],
    wordCount: "85,000 words",
  },
  {
    icon: Building,
    title: "Corporate Annual Report",
    client: "Fortune 500 Company",
    description: "Professional editing of financial reports, executive summaries, and stakeholder communications.",
    tags: ["Business", "Financial", "Corporate"],
    wordCount: "45,000 words",
  },
  {
    icon: Globe,
    title: "Website Localization",
    client: "E-commerce Platform",
    description: "UK to US English localization for an entire e-commerce website including product descriptions.",
    tags: ["Web Content", "Localization", "E-commerce"],
    wordCount: "120,000 words",
  },
  {
    icon: BookOpen,
    title: "Non-Fiction Book",
    client: "Self-Published Author",
    description: "Developmental and copy editing for a self-help book on productivity and time management.",
    tags: ["Non-fiction", "Self-help", "Publishing"],
    wordCount: "65,000 words",
  },
  {
    icon: Briefcase,
    title: "Business Proposals",
    client: "Marketing Agency",
    description: "Editing and proofreading of client proposals, pitch decks, and marketing materials.",
    tags: ["Business", "Marketing", "Proposals"],
    wordCount: "25,000 words",
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    client: "Law Firm",
    description: "Proofreading of legal contracts, agreements, and court filings with meticulous attention to detail.",
    tags: ["Legal", "Technical", "Professional"],
    wordCount: "35,000 words",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of our recent work showcasing the diversity and quality of our editing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-muted-foreground">{project.wordCount}</span>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground mt-4">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-primary/80">
                  {project.client}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
