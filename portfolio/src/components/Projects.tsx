import { ProjectCard } from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projectsData";

export const Projects = () => {
  const categories = ["All", "Data Science", "Data Engineering", "ML Engineering"];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A showcase of end-to-end data projects demonstrating expertise in ML, data engineering, and analytics
          </p>

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((project) => category === "All" || project.category === category)
                    .map((project) => (
                      <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};