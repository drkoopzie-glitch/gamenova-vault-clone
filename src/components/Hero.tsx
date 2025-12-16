import { Button } from "@/components/ui/button";
import { FileText, Upload } from "lucide-react";

const stats = [
  { value: "100k+", label: "Edited words" },
  { value: "10K+", label: "Copies written" },
  { value: "100+", label: "Satisfied customers" },
];

export function Hero() {
  return (
    <section id="home" className="hero-gradient min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Unlock the Full Potential of Your Writing
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl">
              At GameNova Vault, we do more than just catch grammar and spelling mistakes. 
              We help you enhance your writing style, ensure clarity, and strike the perfect 
              tone for every document. Let's make your words shine!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote">
                <Button 
                  size="lg" 
                  className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 glow-primary"
                >
                  <FileText className="w-5 h-5" />
                  Generate quote
                </Button>
              </a>
              <a href="#quote">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Upload className="w-5 h-5" />
                  Upload
                </Button>
              </a>
            </div>
          </div>

          {/* Right stats */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary/40 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 transform hover:scale-[1.02] transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-3 h-3 rounded-full bg-secondary glow-secondary" />
                <span className="font-display text-xl md:text-2xl font-semibold text-primary-foreground">
                  {stat.value} {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}