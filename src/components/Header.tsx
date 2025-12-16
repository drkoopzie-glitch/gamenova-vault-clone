import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Prices", href: "#quote" },
  { label: "Projects", href: "#projects" },
  { label: "Guides", href: "#guides" },
  { label: "Freelancing", href: "#freelancing" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-display font-bold text-xl text-primary">
            GameNova Vault LLC
          </a>
          
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#quote">
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="w-4 h-4" />
              Upload
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}