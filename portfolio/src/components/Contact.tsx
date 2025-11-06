import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/YOUR_PHONE_NUMBER", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:your.email@example.com";
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Available for 6+ month engagements in Data Science, Data Engineering, and ML Engineering roles. 
            Let's discuss how I can contribute to your team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 hover:border-primary transition-colors cursor-pointer" onClick={handleWhatsApp}>
              <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
                </div>
                <Button variant="outline" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors cursor-pointer" onClick={handleEmail}>
              <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">your.email@example.com</p>
                </div>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
