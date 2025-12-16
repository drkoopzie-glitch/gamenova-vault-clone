import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "info@gamenovavault.com",
    href: "mailto:info@gamenovavault.com",
  },
  {
    icon: MapPin,
    label: "123 Gaming Street, Suite 100, Austin, TX 78701 USA",
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Send us a message
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Speak to our support and get more details about your copy
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{info.label}</span>
              </a>
            ))}

            <a
              href="/privacy"
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground">Privacy Policy</span>
            </a>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" placeholder="John Doe" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your email address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?"
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}