import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, DollarSign, Shield, Zap, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when it suits you best. Our freelance editors enjoy complete schedule flexibility.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Earn competitive rates based on your expertise and the complexity of projects.",
  },
  {
    icon: Users,
    title: "Diverse Projects",
    description: "Work on varied content types from academic papers to business documents and creative writing.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Get paid on time, every time. Our secure system ensures reliable payments.",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Build your portfolio and expand your skills with continuous learning resources.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Community",
    description: "Join a community of professional editors who support and learn from each other.",
  },
];

const requirements = [
  "Native-level English proficiency",
  "Minimum 2 years editing experience",
  "Strong attention to detail",
  "Reliable internet connection",
  "Commitment to deadlines",
  "Professional communication skills",
];

export function Freelancing() {
  return (
    <section id="freelancing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Freelance Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Are you a skilled editor or proofreader? Join GameNova Vault and work with clients worldwide 
            while enjoying the freedom of freelancing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Requirements
              </CardTitle>
              <CardDescription>
                What we look for in our freelance editors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Ready to Apply?
              </CardTitle>
              <CardDescription>
                Start your freelancing journey with GameNova Vault
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Send us your resume, a brief introduction, and a sample of your editing work. 
                We review applications weekly and will get back to you within 7 business days.
              </p>
              <a href="#contact">
                <Button size="lg" className="w-full">
                  Apply Now
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
