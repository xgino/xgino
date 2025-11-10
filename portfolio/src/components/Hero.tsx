import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/31640828138", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:qingge43@gmail.com";
  };

  const handleDownloadCV = () => {
    // This will need to be updated with actual CV link
    window.open("/Gin_CV_2025.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Professional profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-background shadow-2xl relative z-10"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Transforming Data</span>
            <br />
            Into Actionable Insights
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Data Science Student | Available for 6+ Month Engagements
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specializing in Data Engineering, ML Engineering & Advanced Analytics
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={handleDownloadCV} size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
            <Button onClick={handleWhatsApp} variant="outline" size="lg" className="group">
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              WhatsApp
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/xgino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com/in/xgino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <button
              onClick={handleEmail}
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="Send Email"
            >
              <Mail className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
