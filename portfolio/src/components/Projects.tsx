import { ProjectCard } from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Projects = () => {
  const projects = [
    {
      id: "churn-prediction",
      title: "Customer Churn Prediction ML Pipeline",
      description: "End-to-end ML pipeline with MLflow for tracking, model versioning, and automated retraining workflows.",
      longDescription: "Built a complete machine learning pipeline for predicting customer churn using Python, scikit-learn, and MLflow. Implemented automated data preprocessing, feature engineering, model training, and hyperparameter tuning. Achieved 92% accuracy with Random Forest classifier. Integrated MLflow for experiment tracking, model versioning, and deployment readiness.",
      technologies: ["Python", "scikit-learn", "MLflow", "Pandas", "SQL", "Docker"],
      category: "ML Engineering",
      githubUrl: "#",
    },
    {
      id: "kafka-pipeline",
      title: "Real-time Data Pipeline with Apache Kafka",
      description: "Scalable ETL pipeline processing 1M+ events per hour with real-time analytics dashboards.",
      longDescription: "Designed and implemented a robust data engineering pipeline using Apache Kafka for real-time event streaming. Built data transformation layers with PySpark for processing large-scale datasets. Created automated data quality checks and monitoring dashboards using Grafana. Reduced data processing latency by 70%.",
      technologies: ["Apache Kafka", "PySpark", "PostgreSQL", "Docker", "Airflow", "Python"],
      category: "Data Engineering",
      githubUrl: "#",
    },
    {
      id: "llm-document-analysis",
      title: "LLM-Powered Document Analysis System",
      description: "RAG-based system for intelligent document Q&A using OpenAI GPT-4 and vector embeddings.",
      longDescription: "Developed a Retrieval-Augmented Generation (RAG) system for analyzing large document collections. Implemented semantic search using FAISS vector database and OpenAI embeddings. Created a user-friendly interface for natural language queries. Processed 10,000+ documents with 95% query relevance accuracy.",
      technologies: ["OpenAI API", "LangChain", "FAISS", "Python", "Streamlit", "ChromaDB"],
      category: "ML Engineering",
      githubUrl: "#",
    },
    {
      id: "ecommerce-analytics",
      title: "E-commerce Analytics Dashboard",
      description: "Interactive business intelligence dashboard with predictive analytics and automated reporting.",
      longDescription: "Built a comprehensive analytics platform for e-commerce metrics tracking. Implemented automated ETL processes for data ingestion from multiple sources. Created interactive visualizations using Plotly and Dash. Developed predictive models for sales forecasting and inventory optimization.",
      technologies: ["Python", "Dash", "Plotly", "PostgreSQL", "Pandas", "scikit-learn"],
      category: "Analytics",
      githubUrl: "#",
    },
    {
      id: "data-quality-framework",
      title: "Automated Data Quality Framework",
      description: "Python framework for automated data validation, cleaning, and quality monitoring.",
      longDescription: "Developed a comprehensive data quality framework for automated data validation and cleaning. Implemented custom data profiling algorithms to detect anomalies, missing values, and inconsistencies. Created automated data quality reports and alerting system. Reduced manual data cleaning time by 80%.",
      technologies: ["Python", "Great Expectations", "Pandas", "SQL", "Apache Airflow"],
      category: "Data Engineering",
      githubUrl: "#",
    },
    {
      id: "image-classification",
      title: "Deep Learning Image Classification",
      description: "CNN model achieving 96% accuracy for multi-class image classification with transfer learning.",
      longDescription: "Implemented a deep learning image classification system using PyTorch and transfer learning with ResNet50. Conducted extensive hyperparameter tuning and data augmentation strategies. Deployed model using FastAPI for real-time inference. Achieved 96% accuracy on test dataset with 10,000+ images across 15 categories.",
      technologies: ["PyTorch", "FastAPI", "OpenCV", "NumPy", "Docker", "AWS S3"],
      category: "ML Engineering",
      githubUrl: "#",
    },
  ];

  const categories = ["All", "ML Engineering", "Data Engineering", "Analytics"];

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
                      <ProjectCard key={project.title} {...project} />
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
