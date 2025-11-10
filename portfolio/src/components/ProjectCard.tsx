import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  heroImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export const ProjectCard = ({
  id,
  title,
  description,
  longDescription,
  technologies,
  heroImage,
  liveUrl,
  githubUrl,
  category,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2">
      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        {heroImage && (
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-card-glass">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {longDescription && (
            <Button variant="default" size="sm" onClick={() => navigate(`/project/${id}`)}>
              Case Study
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
