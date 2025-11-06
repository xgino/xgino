import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Core Technologies",
      skills: ["Python", "SQL", "R", "Git & GitHub"],
    },
    {
      category: "Machine Learning & AI",
      skills: ["scikit-learn", "PyTorch", "TensorFlow", "LangChain & LLMs", "OpenCV"],
    },
    {
      category: "Data Engineering & Infrastructure",
      skills: ["Apache Kafka", "Apache Airflow", "Docker", "PySpark", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "MLOps & Development",
      skills: ["MLflow", "FastAPI", "CI/CD", "AWS", "Azure", "AWS S3"],
    },
    {
      category: "Data Processing & Analysis",
      skills: ["Pandas & NumPy", "Great Expectations", "FAISS", "ChromaDB"],
    },
    {
      category: "Visualization & Dashboarding",
      skills: ["Plotly & Dash", "Tableau", "Power BI", "Streamlit", "Grafana"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Technologies I've Worked With
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tools and frameworks I've gained hands-on experience with throughout my projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.category} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
