import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // <-- Import useState
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, FileText, ExternalLink, ArrowLeft, Building2, Calendar, Clock, X, Image as ImageIcon } from "lucide-react"; // <-- Import X and ImageIcon
import { projects } from "@/data/projectsData";
   
// --- NEW MODAL COMPONENT ---
// I've added this simple modal component directly in the file for ease of use.
interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose} // Close when clicking the background
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking the image
      >
        <img 
          src={imageUrl} 
          alt="Enlarged project" 
          className="w-full h-full object-contain"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-0 right-0 m-2 text-white/80 hover:text-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
// --- END OF MODAL COMPONENT ---


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // --- NEW STATE FOR MODAL ---
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    // Google Analytics page view tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: `/project/${id}`,
      });
    }
    
    // Reset scroll to top when component mounts
    window.scrollTo(0, 0);

  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <p>Project not found</p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  // --- NEW: Helper function to open modal ---
  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // --- NEW: Helper function to close modal ---
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // --- NEW: Type guard for gallery images ---
  const hasGallery = project.galleryImages && project.galleryImages.length > 0;
  const hasAttachments = project.attachments && project.attachments.length > 0;

  return (
    <> {/* Use React Fragment to allow modal to be outside main div */}
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={project.heroImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>

            <div className="bg-card rounded-lg p-8 shadow-xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">
                  {project.category}
                </Badge>
                <Badge variant="outline">
                  {project.projectType}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Project Metadata */}
              <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
                {project.year && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {/* Note: I added a check for project.companyPartner in case it's optional */}
                {project.companyPartner && (
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{project.companyPartner}</span>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-3 uppercase text-muted-foreground">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-12 pb-8 border-b">
                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button variant="default" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.githubUrl === "#" && (
                  <Button variant="default" disabled>
                    <Github className="h-4 w-4 mr-2" />
                    Private Repository
                  </Button>
                )}
                {/* I added an ExternalLink button just in case you have a live demo */}
                {project.liveUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                )}
              </div>

              {/* Detailed Content */}
              <div className="space-y-8 text-foreground/90 leading-relaxed">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                
                {project.detailedContent && project.detailedContent.map((section, index) => (
                  <div key={index}>
                    {section.type === "text" && (
                      <p className="text-lg mb-6">{section.content}</p>
                    )}
                    {/* You can add more types here later, e.g., "image" */}
                  </div>
                ))}

                <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Key Achievements & Takeaways</h3>
                  {/* I'm using longDescription here as it seems more detailed */}
                  <p className="text-muted-foreground">
                    {project.longDescription}
                  </p>
                </div>

                {/* --- NEW IMAGE GALLERY SECTION --- */}
                {hasGallery && (
                  <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <ImageIcon className="h-6 w-6 mr-3 text-primary" />
                      Project Gallery
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.galleryImages?.map((imgUrl, index) => (
                        <div 
                          key={index} 
                          className="rounded-lg overflow-hidden shadow-md cursor-pointer group"
                          onClick={() => openImageModal(imgUrl)}
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Project gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* --- END OF IMAGE GALLERY SECTION --- */}

                {/* --- FILE ATTACHMENTS SECTION --- */}
                {hasAttachments && (
                  <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <FileText className="h-6 w-6 mr-3 text-primary" />
                      File Attachments
                    </h2>
                    <div className="space-y-3">
                      {project.attachments?.map((file, index) => (
                        <a 
                          key={index}
                          href={file.path} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center p-4 bg-muted/50 rounded-lg shadow-sm transition-all hover:bg-muted hover:shadow-md"
                        >
                          {/* Use a generic file icon */}
                          <FileText className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0" />
                          
                          {/* File Name */}
                          <span className="font-medium text-foreground/90 mr-2">{file.name}</span>

                          {/* Open in new tab icon */}
                          <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {/* --- END OF FILE ATTACHMENTS SECTION --- */}

              </div>
            </div>
          </div>
        </div>

        <footer className="py-8 mt-20 bg-muted/30 text-center text-sm text-muted-foreground">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Data Science Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* --- NEW: Render the modal if an image is selected --- */}
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />
      )}
    </>
  );
};

export default ProjectDetail;