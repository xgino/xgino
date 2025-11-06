import { Badge } from "@/components/ui/badge";

export const About = () => {
  const competencies = [
    "Python",
    "SQL",
    "Machine Learning",
    "Data Engineering",
    "MLOps",
    "Statistical Analysis",
    "Data Visualization",
    "ETL Pipelines",
    "Cloud Platforms",
    "Deep Learning",
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
              As a passionate Data Science student, I thrive on extracting meaningful insights from complex datasets 
              and building scalable solutions that drive real-world impact. My expertise spans the full data lifecycle—from 
              data engineering and pipeline development to machine learning model deployment and MLOps.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm particularly focused on <span className="text-foreground font-semibold">Data Science</span>, 
              <span className="text-foreground font-semibold"> Data Engineering</span>, and 
              <span className="text-foreground font-semibold"> ML Engineering</span>, combining strong technical skills 
              with a problem-solving mindset to deliver data-driven solutions.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
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
