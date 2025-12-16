import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const services = [
  {
    title: "Non-fiction copy editing and proofreading services",
    description: "Friendly, personalized non-fiction copy editing and proofreading services for any type of online or offline content including manuscripts, books, documents, online and offline content, guides, manuals, and articles.",
  },
  {
    title: "Business copy editing and proofreading services",
    description: "Professional, expert business editing and proofreading for documents, reports, guides, proposals, RFPs, product and service descriptions, online content, articles, presentations, manuals, and more.",
  },
  {
    title: "Website copy editing and proofreading services",
    description: "Complete website copy editing and proofreading for web page copy, social media posts, home and about pages, product and service descriptions, blog posts, and other types of online content.",
  },
  {
    title: "Academic copy editing and proofreading services",
    description: "Experienced, expert academic copy editing and proofreading for students, including essays, dissertations, theses, personal statements, reports, studies, manuscripts, and other academic papers.",
  },
  {
    title: "Advice and feedback to improve your work",
    description: "Practical suggestions and feedback to strengthen your writing and position your content with your audience. Includes advice on structure, flow, clarification, and expanding on points and ideas.",
  },
  {
    title: "Editing aftercare, support, and reassurance",
    description: "Reassurance and peace of mind that we will re-check and proofread minor changes, edits, or rewrites to your work as a result of our advice, suggestions, or feedback. Aftercare is included at no extra charge.",
  },
  {
    title: "Americanizing, Anglicising, and localization editing services",
    description: "Complete copy editing, proofreading, Americanizing, Anglicising, and localization services including spelling, punctuation, and grammar. Includes editing of colloquialisms, local terms, and context.",
  },
  {
    title: "UK English copy editing and proofreading services",
    description: "Experienced UK English copy editing and proofreading services for any type of offline or online content including manuscripts, books, documents, articles, websites, guides, presentations, academic papers, and dissertations/theses.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-primary">
                  <FileText className="w-4 h-4" />
                  Get quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}