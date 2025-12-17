import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Ticket, CreditCard, Loader2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct, createStorefrontCheckout } from "@/lib/shopify";

export function QuoteGenerator() {
  const [editingMode, setEditingMode] = useState<"basic" | "premium">("basic");
  const [agreed, setAgreed] = useState(false);
  const [wordCount, setWordCount] = useState("");
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ShopifyProduct | null>(null);
  const [quoteGenerated, setQuoteGenerated] = useState(false);

  // Pricing rates per word (USD)
  const basicRate = 0.03;
  const premiumRate = 0.07;

  const calculatedPrice = wordCount 
    ? (parseInt(wordCount) * (editingMode === "basic" ? basicRate : premiumRate)).toFixed(2)
    : "0.00";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 10 });
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleGenerateQuote = () => {
    if (!wordCount || parseInt(wordCount) <= 0) {
      toast.error("Please enter a valid word count");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setQuoteGenerated(true);
    toast.success(`Quote generated: $${calculatedPrice} for ${editingMode} editing`);
  };

  const handleProceedToPayment = async () => {
    if (!quoteGenerated) {
      toast.error("Please generate a quote first");
      return;
    }

    // If we have products, use the selected one
    if (products.length > 0) {
      const product = selectedProduct || products[0];
      const variant = product.node.variants.edges[0]?.node;
      
      if (!variant) {
        toast.error("No variant available for this product");
        return;
      }

      setCheckoutLoading(true);
      try {
        const checkoutUrl = await createStorefrontCheckout([{
          variantId: variant.id,
          quantity: 1,
        }]);
        window.open(checkoutUrl, '_blank');
        toast.success("Redirecting to checkout...");
      } catch (error) {
        console.error("Checkout failed:", error);
        toast.error("Failed to create checkout. Please try again.");
      } finally {
        setCheckoutLoading(false);
      }
    } else {
      // No products available - show message
      toast.info("Payment checkout will be available once services are added to the store");
    }
  };

  return (
    <section id="quote" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Generate Quote
        </h2>

        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-foreground">Upload your document</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload */}
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Upload file</p>
              <p className="text-sm text-muted-foreground/60 mt-1">DOCX, PDF, PowerPoint</p>
            </div>

            {/* Word Count */}
            <div className="space-y-2">
              <Label htmlFor="wordcount">Word count</Label>
              <Input 
                id="wordcount" 
                type="number" 
                placeholder="Enter word count"
                className="bg-background"
                value={wordCount}
                onChange={(e) => {
                  setWordCount(e.target.value);
                  setQuoteGenerated(false);
                }}
              />
            </div>

            {/* Document Type */}
            <div className="space-y-2">
              <Label>Document type</Label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select Document type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="docx">DOCX</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="ppt">PowerPoint</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the <a href="/terms" className="text-primary hover:underline">terms and conditions</a>
              </Label>
            </div>

            {/* Editing Mode */}
            <div className="space-y-3">
              <Label>Editing mode</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant={editingMode === "basic" ? "default" : "outline"}
                  onClick={() => {
                    setEditingMode("basic");
                    setQuoteGenerated(false);
                  }}
                  className="w-full"
                >
                  Basic
                </Button>
                <Button
                  type="button"
                  variant={editingMode === "premium" ? "default" : "outline"}
                  onClick={() => {
                    setEditingMode("premium");
                    setQuoteGenerated(false);
                  }}
                  className="w-full"
                >
                  Premium
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Basic: ${basicRate}/word • Premium: ${premiumRate}/word
              </p>
            </div>

            {/* Quote Display */}
            {quoteGenerated && (
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-center">
                  <span className="text-sm text-muted-foreground">Your quote:</span>
                  <br />
                  <span className="text-2xl font-bold text-primary">${calculatedPrice}</span>
                  <br />
                  <span className="text-xs text-muted-foreground">
                    {wordCount} words × {editingMode} editing
                  </span>
                </p>
              </div>
            )}

            {/* Coupon */}
            <div className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg">
              <Ticket className="w-5 h-5 text-secondary" />
              <Input 
                placeholder="Enter coupon code" 
                className="border-0 bg-transparent focus-visible:ring-0"
              />
            </div>

            {/* Generate Quote Button */}
            <Button 
              className="w-full gap-2" 
              size="lg" 
              disabled={!agreed || !wordCount}
              onClick={handleGenerateQuote}
            >
              Generate Quote
            </Button>

            {/* Proceed to Payment */}
            <Button 
              variant="secondary" 
              className="w-full gap-2" 
              size="lg"
              disabled={!quoteGenerated || checkoutLoading}
              onClick={handleProceedToPayment}
            >
              {checkoutLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating checkout...
                </>
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" />
                  Proceed to payment
                </>
              )}
            </Button>

            {/* Payment Methods */}
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">Accepted payment methods:</p>
              <div className="flex items-center justify-center gap-4">
                <CreditCard className="w-8 h-8 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Visa, Mastercard, Amex, PayPal</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
