import { Badge } from "@/components/ui/badge";

export const About = () => {
  const competencies = [
    "Python", 
    "Machine Learning & Deep Learning", 
    "Data Engineering", 
    "LLM & Prompt Engineering", 
    "MLOps & MLflow", 
    "ETL & ML Pipelines", 
    "Docker & CI/CD", 
    "Custom Model Development", 
    "SQL & Databases", 
    "NLP & Computer Vision", 
    "FastAPI & Django", 
    "Apache Airflow & Spark",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Data Science & AI student at Breda University of Applied Sciences who runs on coffee and the belief that most problems have a solution, you just need to build it. I get genuinely excited about making things work better, whether that's optimizing a slow process, automating something tedious, or figuring out why a model isn't performing. There's always a way to make it faster, cleaner, more efficient.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked on projects with companies partnered with Buas, which gave me real experience beyond the classroom, where things break, deadlines matter, and you learn to make it work anyway. When I'm not coding, you'll find me playing hockey, at the gym, hunting for good coffee, or unwinding by a calm lake. Looking for a spot where I can build things that actually matter and keep pushing myself forward.
              {/* <span className="text-foreground font-semibold"> Data Engineering</span> */}
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Skills & Tech</h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-skill-tag hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
