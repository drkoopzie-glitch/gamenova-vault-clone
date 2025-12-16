export function Footer() {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-lg text-primary">
            GameNova Vault LLC
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GameNova Vault LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}