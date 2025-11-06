import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";

// Project data - in a real app this would come from an API or context
const projects = [
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction ML Pipeline",
    description: "End-to-end ML pipeline with MLflow for tracking, model versioning, and automated retraining workflows.",
    longDescription: "Built a complete machine learning pipeline for predicting customer churn using Python, scikit-learn, and MLflow. Implemented automated data preprocessing, feature engineering, model training, and hyperparameter tuning. Achieved 92% accuracy with Random Forest classifier. Integrated MLflow for experiment tracking, model versioning, and deployment readiness.",
    detailedContent: [
      {
        type: "text",
        content: "This project demonstrates end-to-end MLOps practices by building a production-ready customer churn prediction system. The pipeline automates the entire workflow from raw data ingestion to model deployment, making it easy to retrain and update models as new data becomes available."
      },
      {
        type: "text",
        content: "Key features include automated feature engineering pipelines that transform raw customer data into meaningful predictors, hyperparameter optimization using grid search and cross-validation, and comprehensive experiment tracking with MLflow to compare different model architectures and configurations."
      },
      {
        type: "text",
        content: "The system achieved 92% accuracy on the test set, with particular strength in identifying high-risk customers. The model was deployed using Docker containers, making it easy to integrate into existing business systems and scale as needed."
      }
    ],
    technologies: ["Python", "scikit-learn", "MLflow", "Pandas", "SQL", "Docker"],
    category: "ML Engineering",
    githubUrl: "#",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
  },
  {
    id: "kafka-pipeline",
    title: "Real-time Data Pipeline with Apache Kafka",
    description: "Scalable ETL pipeline processing 1M+ events per hour with real-time analytics dashboards.",
    longDescription: "Designed and implemented a robust data engineering pipeline using Apache Kafka for real-time event streaming. Built data transformation layers with PySpark for processing large-scale datasets. Created automated data quality checks and monitoring dashboards using Grafana. Reduced data processing latency by 70%.",
    detailedContent: [
      {
        type: "text",
        content: "This data engineering project showcases the implementation of a high-throughput, real-time data pipeline capable of processing over 1 million events per hour. The architecture leverages Apache Kafka for reliable event streaming and PySpark for distributed data processing."
      },
      {
        type: "text",
        content: "The pipeline includes multiple stages: data ingestion from various sources, real-time validation and cleaning, transformation and enrichment, and finally storage in a data warehouse. Automated data quality checks run at each stage to ensure data integrity."
      },
      {
        type: "text",
        content: "Performance optimizations reduced end-to-end latency by 70% compared to the previous batch-based system. The solution includes comprehensive monitoring dashboards built with Grafana, providing real-time visibility into pipeline health and data quality metrics."
      }
    ],
    technologies: ["Apache Kafka", "PySpark", "PostgreSQL", "Docker", "Airflow", "Python"],
    category: "Data Engineering",
    githubUrl: "#",
    heroImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=600&fit=crop"
  },
  {
    id: "llm-document-analysis",
    title: "LLM-Powered Document Analysis System",
    description: "RAG-based system for intelligent document Q&A using OpenAI GPT-4 and vector embeddings.",
    longDescription: "Developed a Retrieval-Augmented Generation (RAG) system for analyzing large document collections. Implemented semantic search using FAISS vector database and OpenAI embeddings. Created a user-friendly interface for natural language queries. Processed 10,000+ documents with 95% query relevance accuracy.",
    detailedContent: [
      {
        type: "text",
        content: "This project implements a state-of-the-art Retrieval-Augmented Generation (RAG) system that enables natural language querying of large document collections. The system combines the power of large language models with efficient vector search to provide accurate, contextual answers."
      },
      {
        type: "text",
        content: "The architecture uses OpenAI embeddings to convert documents into high-dimensional vectors, stored in a FAISS vector database for fast similarity search. When a user asks a question, the system retrieves the most relevant document chunks and uses GPT-4 to generate a comprehensive answer grounded in the retrieved context."
      },
      {
        type: "text",
        content: "Successfully processed over 10,000 documents with 95% query relevance accuracy. The system includes features like source attribution, confidence scoring, and the ability to handle multi-hop reasoning across multiple documents."
      }
    ],
    technologies: ["OpenAI API", "LangChain", "FAISS", "Python", "Streamlit", "ChromaDB"],
    category: "ML Engineering",
    githubUrl: "#",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop"
  },
  {
    id: "ecommerce-analytics",
    title: "E-commerce Analytics Dashboard",
    description: "Interactive business intelligence dashboard with predictive analytics and automated reporting.",
    longDescription: "Built a comprehensive analytics platform for e-commerce metrics tracking. Implemented automated ETL processes for data ingestion from multiple sources. Created interactive visualizations using Plotly and Dash. Developed predictive models for sales forecasting and inventory optimization.",
    detailedContent: [
      {
        type: "text",
        content: "This comprehensive analytics platform provides e-commerce businesses with actionable insights through interactive dashboards and predictive modeling. The system integrates data from multiple sources including sales transactions, customer behavior, and inventory systems."
      },
      {
        type: "text",
        content: "The dashboard features real-time KPI tracking, customer segmentation analysis, product performance metrics, and conversion funnel visualization. Interactive filters allow stakeholders to drill down into specific time periods, product categories, or customer segments."
      },
      {
        type: "text",
        content: "Predictive models built with scikit-learn provide sales forecasting and inventory optimization recommendations. Automated reporting sends daily summaries to stakeholders, highlighting key trends and anomalies that require attention."
      }
    ],
    technologies: ["Python", "Dash", "Plotly", "PostgreSQL", "Pandas", "scikit-learn"],
    category: "Analytics",
    githubUrl: "#",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
  },
  {
    id: "data-quality-framework",
    title: "Automated Data Quality Framework",
    description: "Python framework for automated data validation, cleaning, and quality monitoring.",
    longDescription: "Developed a comprehensive data quality framework for automated data validation and cleaning. Implemented custom data profiling algorithms to detect anomalies, missing values, and inconsistencies. Created automated data quality reports and alerting system. Reduced manual data cleaning time by 80%.",
    detailedContent: [
      {
        type: "text",
        content: "This data quality framework provides a comprehensive solution for ensuring data integrity across the entire data pipeline. Built with Python and Great Expectations, it automates the validation, cleaning, and monitoring of data quality metrics."
      },
      {
        type: "text",
        content: "The framework includes custom profiling algorithms that automatically detect data quality issues including missing values, outliers, inconsistent formats, and referential integrity violations. Rules can be configured for different data sources and updated as business requirements evolve."
      },
      {
        type: "text",
        content: "Automated reports provide visibility into data quality trends over time, and alerting systems notify relevant teams when quality thresholds are breached. The implementation reduced manual data cleaning time by 80%, allowing data teams to focus on analysis rather than data preparation."
      }
    ],
    technologies: ["Python", "Great Expectations", "Pandas", "SQL", "Apache Airflow"],
    category: "Data Engineering",
    githubUrl: "#",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
  },
  {
    id: "image-classification",
    title: "Deep Learning Image Classification",
    description: "CNN model achieving 96% accuracy for multi-class image classification with transfer learning.",
    longDescription: "Implemented a deep learning image classification system using PyTorch and transfer learning with ResNet50. Conducted extensive hyperparameter tuning and data augmentation strategies. Deployed model using FastAPI for real-time inference. Achieved 96% accuracy on test dataset with 10,000+ images across 15 categories.",
    detailedContent: [
      {
        type: "text",
        content: "This computer vision project demonstrates advanced deep learning techniques for multi-class image classification. Using transfer learning with a pre-trained ResNet50 model, the system achieves 96% accuracy across 15 different image categories."
      },
      {
        type: "text",
        content: "The training process involved extensive data augmentation strategies including random cropping, rotation, and color jittering to improve model generalization. Hyperparameter tuning was conducted systematically to optimize learning rate, batch size, and regularization parameters."
      },
      {
        type: "text",
        content: "The final model was deployed using FastAPI, providing a REST API for real-time image classification with sub-second inference times. The deployment includes confidence scoring and supports batch processing for efficient handling of multiple images."
      }
    ],
    technologies: ["PyTorch", "FastAPI", "OpenCV", "NumPy", "Docker", "AWS S3"],
    category: "ML Engineering",
    githubUrl: "#",
    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    // Google Analytics page view tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: `/project/${id}`,
      });
    }
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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.heroImage} 
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
            <Badge variant="secondary" className="mb-4">
              {project.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>

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
              {project.githubUrl && (
                <Button variant="default" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>

            {/* Detailed Content */}
            <div className="space-y-8 text-foreground/90 leading-relaxed">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              
              {project.detailedContent.map((section, index) => (
                <div key={index}>
                  {section.type === "text" && (
                    <p className="text-lg mb-6">{section.content}</p>
                  )}
                </div>
              ))}

              <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
                <p className="text-muted-foreground">
                  {project.longDescription}
                </p>
              </div>
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
  );
};

export default ProjectDetail;
