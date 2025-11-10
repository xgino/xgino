export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  detailedContent?: Array<{
    type: string;
    content: string;
  }>;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  heroImage?: string;
  galleryImages?: string[];
  attachments?: Array<{
    name: string;
    path: string;
  }>;
  year: string;
  projectType: "University Project" | "Personal Project" | "Research Project";
  companyPartner?: string;
  duration?: string;
}


export const projects: Project[] = [
  // Year 4: 2025-2026 1AB
  // {
  //   id: "fair-ai-recruitment",
  //   title: "Fair AI Recruitment Scoring System",
  //   description: "Bias-reducing candidate evaluation system compliant with EU AI Act regulations for Objectiveye.",
  //   longDescription: "Developed a machine learning scoring system for Objectiveye to support fair and transparent candidate evaluation in recruitment. Designed and trained bias-mitigated models using historical hiring data, integrating fairness metrics via Fairlearn. Implemented explainable scoring logic that aligns with EU AI Act standards, ensuring responsible AI use. Achieved 60% reduction in reviewer workload while maintaining objectivity and transparency, helping Objectiveye take an early lead in compliant Fair AI recruitment solutions.",
  //   detailedContent: [
  //     {
  //       type: "text",
  //       content: "Developed an AI-powered recruitment scoring system designed to minimize unconscious bias in candidate evaluation while maintaining compliance with EU AI Act regulations. The system assists HR reviewers by providing transparent, explainable scoring that reduces workload without sacrificing fairness or objectivity."
  //     },
  //     {
  //       type: "text",
  //       content: "Built custom machine learning models trained on historical hiring data, implementing bias detection and mitigation techniques using Fairlearn. The models were designed to identify qualified candidates while actively monitoring and correcting for potential bias across protected characteristics."
  //     },
  //     {
  //       type: "text",
  //       content: "The final system achieved a 60% reduction in reviewer workload while improving consistency in candidate evaluation. All scoring decisions include explanations and confidence metrics, ensuring transparency and allowing human reviewers to make informed final decisions. This positions Objectiveye as an early leader in compliant, fair AI recruitment solutions."
  //     }
  //   ],
  //   technologies: ["Python", "scikit-learn", "Fairlearn", "FastAPI", "PostgreSQL", "Docker"],
  //   category: "Data Engineering",
  //   liveUrl: "",
  //   githubUrl: "#",
  //   heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
  //   galleryImages: [],
  //   attachments: [],
  //   year: "2025-2026",
  //   projectType: "University Project",
  //   companyPartner: "Objectiveye",
  //   duration: "18 Weeks"
  // },

  // Year 3: 2024-2025 1AB
  {
    id: "2024-25-1AB",
    title: "West Brabant Truck Traffic & Geospatial Analysis",
    description: "A data engineering project to map 1M+ GPS pings, analyze truck routes, and recommend a freight-rail solution aim to cut emissions by 60%.",
    longDescription: "This project for the Municipality of Bergen op Zoom (Province West Brabant) and Argaleo started as a major data engineering challenge: we had a 1M+ row dataset of truck GPS pings, but no map data. My first task was to source Dutch geospatial map files and 'map-match' these raw pings to actual routes. This unlocked the ability to perform time-series analysis, which revealed most traffic was short (<40 min) harbor-to-warehouse trips. My analysis also had to account for real-world data quality issues, like GPS trackers being turned on late. My final, data-backed recommendation was to leverage an existing freight train line, which I calculated could cut truck jams by 50% and emissions by 60%, while also transparently noting the data limitations (like not knowing truck capacity) and the real-world trade-offs of the solution (like cost and noise).",
    detailedContent: [
      {
        type: "text",
        content: "In partnership with Argaleo and the Municipality of Bergen op Zoom, the goal was to analyze truck traffic to reduce congestion and emissions. The starting point was a massive dataset (1M+ rows) of GPS plogs, but it was just lat/long points with timestamps, no context."
      },
      {
        type: "text",
        content: "My primary challenge was data engineering. I had to source NL city map and road network data (GeoJSON/shapefiles) and perform a geospatial join to snap these raw pings to the correct roads. This transformed the raw data into traceable routes, which I could then use for a time-series analysis to see *where* trucks were and for *how long*."
      },
      {
        type: "text",
        content: "My analysis uncovered key insights: most traffic was short-distance (<40 min) between the harbor and industrial warehouses, not long-haul. I also found that a nearby freight train route was being underutilized. My final report recommended a shift to this train, with models showing a potential 50% drop in traffic jams and 60% in fuel emissions. I also transparently reported on data limitations—we couldn't confirm if trucks were half-empty (preventing a 'truck-sharing' recommendation) and had to filter out data from late-starting GPS trackers."
      }
    ],
    technologies: [
      "Python",
      "Pandas",
      "GeoPandas",
      "Apache Spark",
      "Geospatial Analysis",
      "Time Series Analysis",
      "Data Cleaning",
      "SQL"
    ],
    category: "Data Engineering",
    liveUrl: "",
    githubUrl: "",
    heroImage: "/project-images/2024-25-1AB/Gemini_Generated_Image_mlrmo8mlrmo8mlrm.png",
    galleryImages: [
      "/project-images/2024-25-1AB/argaleo.png",
      "/project-images/2024-25-1AB/gemeente-boz.png",
      "/project-images/2024-25-1AB/net-weight.png",
      "/project-images/2024-25-1AB/max-weight.png",
      "/project-images/2024-25-1AB/speed-distance.png",
      "/project-images/2024-25-1AB/vehecle.png",
    ],
    attachments: [],
    year: "2024-2025",
    projectType: "University Project",
    companyPartner: "Argaleo & Municipality of Bergen op Zoom",
    duration: "18 Weeks"
  },

  // Year 2: 2023-2024 2D
  {
    id: "2023-24-2D",
    title: "Full-Stack NLP Pipeline Deployment",
    description: "A full-stack React & Django app that brings the NLP pipeline to life, allowing users to upload video and get back real-time emotion analysis.",
    longDescription: "This project was about taking the NLP pipeline from the previous phase and building a fully functional web application around it. I built a React frontend and a robust Django (with DRF) backend. When a user uploads a video, the backend triggers the full pipeline: it's transcribed, translated, and prepped. To keep the app fast and save bandwidth, the prepared text is sent to a separate model hosting service for prediction. The emotion results are sent back, saved in an SQLite database, and then visualized for the user in their React dashboard. This project combined my web development skills with MLOps, using MLflow to track the model (which started at 80% accuracy) for continuous training.",
    detailedContent: [
      {
        type: "text",
        content: "a full-stack web application to serve the NLP model. The architecture was intentionally decoupled for scalability: 1) A React frontend for user interaction, 2) A Django Rest Framework (DRF) API for backend logic and data management, and 3) A separate ML hosting service for the model itself."
      },
      {
        type: "text",
        content: "This was built as a production-ready system. The API has security measures, including rate-limiting (100 free requests, password required after 1000) to prevent spam. The model, which had a baseline of 80% accuracy, was integrated with MLflow to create a continuous training loop, allowing it to get better as more data is processed."
      },
      {
        type: "text",
        content: "Created an interactive Streamlit dashboard providing stakeholders with real-time visibility into emotion metrics across multiple TV shows. The dashboard includes trend analysis, performance monitoring, and alerts for model drift, making the system maintainable and transparent for non-technical users."
      }
    ],
    technologies: [
      "React",
      "Django",
      "Django Rest Framework (DRF)",
      "SQLite",
      "MLflow",
      "API Design",
      "MLOps",
      "Python",
      "CI/CD"
    ],
    category: "ML Engineering",
    liveUrl: "",
    githubUrl: "",
    heroImage: "/project-images/2023-24-2D/hero.png",
    galleryImages: [
      "/project-images/2023-24-2D/Complete Diagram.jpg",
      "/project-images/2023-24-2D/Retraining Pipeline Detailed.jpg",
      "/project-images/2023-24-2D/Frontend.png",
      "/project-images/2023-24-2D/Results frontend.png",
      "/project-images/2023-24-2D/Static confusion matrix heatmap.png",
    ],
    attachments: [
      { 
        name: "Project Poster", 
        path: "/project-images/2023-24-2D/Poster Block D y2.pdf" 
      },
    ],
    year: "2023-2024",
    projectType: "University Project",
    companyPartner: "Banijay",
    duration: "8 Weeks"
  },

  // Year 2: 2023-2024 2C
  {
    id: "2023-24-2C",
    title: "NLP Deep Learning Pipeline for Emotion Analysis",
    description: "Building an end-to-end pipeline to analyze TV show emotion, from video-to-text, translation, and deep learning model comparison.",
    longDescription: "This project for Banijay was a full-scale exercise in ML pipeline engineering. The goal was to find emotional peaks in Dutch-language video content. I built an entire pipeline that 1) Transcribed video to text, 2) Translated Dutch transcripts to English (for better model compatibility), 3) Cleaned and prepped the text. I then trained and compared a suite of deep learning models (RNN, LSTM, GRU, Roberta) to find the best emotion classifier. Roberta was the strongest of the models I trained. My final error analysis also showed that modern prompt engineering (with LLMs) could outperform custom models, providing a key strategic insight for the client.",
    detailedContent: [
      {
        type: "text",
        content: "The challenge was to analyze emotion in Dutch-language TV shows. To do this, I engineered a complete data pipeline. It started with a Speech-to-Text (STT) module to get raw transcripts, followed by an NL-to-EN translation step to leverage more powerful, English-centric NLP models."
      },
      {
        type: "text",
        content: "With the translated text, I built, trained, and compared a series of deep learning models for sentiment/emotion classification. This included classic models like RNNs, LSTMs, and GRUs, as well as a more modern transformer-based model, Roberta. This comparative analysis was key to finding the best fit."
      },
      {
        type: "text",
        content: "The Roberta-based model gave the best performance of the custom-trained models. My final error analysis also included a comparison with 'prompt engineering' on a pre-trained LLM, which proved even more accurate. This provided Banijay with a crucial, practical insight: for their use case, a state-of-the-art API was a more effective path than training a custom model from scratch. The pipeline was built to translate these findings back to Dutch for the stakeholders."
      }
    ],
    technologies: [
      "Python",
      "NLP Pipeline",
      "Feature Engineering",
      "Data Cleaning",
      "Data Pipeline",
      "Roberta",
      "LSTM",
      "GRU",
      "Deep Learning",
      "Speech-to-Text (STT)",
      "Hugging Face Transformers",
      "Error Analysis",
      "Prompt Engineering"
    ],
    category: "Data Engineering",
    liveUrl: "",
    githubUrl: "",
    heroImage: "/project-images/2023-24-2C/hero.png",
    galleryImages: [
      "/project-images/2023-24-2C/banijay.jpg",
      "/project-images/2023-24-2C/cf.png",
    ],
    attachments: [],
    year: "2023-2024",
    projectType: "University Project",
    companyPartner: "Banijay",
    duration: "8 Weeks"
  },

  // Year 2: 2023-2024 2B
  {
    id: "2023-24-2B",
    title: "Automated Plant Segmentation for NPEC",
    description: "A computer vision pipeline for Utrecht University's NPEC facility to segment plant growth from high-throughput petri dish scans.",
    longDescription: "In this project for Utrecht University's NPEC facility, I built a computer vision pipeline to automate the analysis of their 'Hades' phenotyping system. The challenge was to process thousands of daily petri dish scans and perform instance segmentation to identify plant parts (root, seed, shoot). I experimented with two main architectures: a single 22M+ parameter multi-class model and a faster, parallel approach using four separate binary classifiers. The binary models won, achieving ~80% accuracy (vs. 70%) and running 4x faster. This project was a deep dive into model optimization and delivering a practical solution for a real-world scientific research client.",
    detailedContent: [
      {
        type: "text",
        content: "I partnered with The Netherlands Plant Eco-phenotyping Centre (NPEC) to solve a high-throughput analysis bottleneck. Their 'Hades' system images thousands of *Arabidopsis thaliana* seedlings daily, and they needed to automatically segment plant parts for morphometric analysis and to guide robotic inoculation."
      },
      {
        type: "text",
        content: "My task was to build an instance segmentation model to identify `root`, `seed`, `shoot`, and `occluded` parts from the morphometric images. This involved extensive image annotation and landmark detection. I then designed and trained two competing solutions to find the best balance of speed and accuracy."
      },
      {
        type: "text",
        content: "The first was a single, complex 22M+ parameter multi-class model. The second was an ensemble of four simpler, parallel binary classifiers. The results were clear: the single model's accuracy capped at ~70% and was 4x slower. The binary-model approach was faster and more accurate at ~80%. I made the engineering decision to go with the binary models, delivering an efficient pipeline for NPEC that enables their downstream analysis and automation."
      }
    ],
    technologies: ["Python",
      "PyTorch",
      "OpenCV",
      "Instance Segmentation",
      "Landmark Detection",
      "Image Annotation",
      "ML Model Comparison",
      "Morphometric Analysis",
      "Robotics sim",
    ],
    category: "ML Engineering",
    liveUrl: "",
    githubUrl: "",
    heroImage: "/project-images/2023-24-2B/hero.png",
    galleryImages: [
      "/project-images/2023-24-2B/NPEC.png",
      "/project-images/2023-24-2B/root_002.png",
      "/project-images/2023-24-2B/65ed06ce-06e4-443f-9993-d76648f69f91.png",
      "/project-images/2023-24-2B/80d3c56e-a6fc-46aa-9fd2-3c108cf54b08.png",
      "/project-images/2023-24-2B/364d1fd6-3c51-45d7-97f6-16dbeb2f1f07.png",
      "/project-images/2023-24-2B/1b7d79b9-d862-4bba-bd2a-56be522652e9.png",
      "/project-images/2023-24-2B/fc2f8948-d069-4f72-8713-f1db55a14d24.png",
      "/project-images/2023-24-2B/Screenshot 2025-11-10 at 00.00.41.png",
    ],
    attachments: [],
    year: "2023-2024",
    projectType: "University Project",
    companyPartner: "Utrecht University NPEC",
    duration: "8 Weeks"
  },

  // Year 2: 2023-2024 2A
  {
    id: "2023-24-2A",
    title: "AI in Education: A Mixed-Methods Research Study",
    description: "A mixed-methods (Quantitative & Qualitative) research study analyzing the impact of AI on student learning, using R for statistical analysis.",
    longDescription: "This project was a deep dive into academic research. It started with designing bias-free research questions to explore how AI tools *really* affect student learning at BUAS. I conducted a mixed-methods (Quantitative & Qualitative) study to get the full picture. The quantitative part involved data cleaning and outlier removal from academic performance datasets, which I then analyzed using R code for statistical tests. The qualitative data from interviews helped contextualize the numbers. This project was a rigorous, end-to-end research process, from study design to analyzing data and presenting findings for stakeholders.",
    detailedContent: [
      {
        type: "text",
        content: "This project started with the most critical step: designing the research questions. I focused on creating bias-free, measurable questions to guide the entire study. This led to a mixed-methods (Quantitative & Qualitative) approach to get a complete view of AI's impact at BUAS."
      },
      {
        type: "text",
        content: "For the quantitative analysis, I worked with student performance data. This required significant data cleaning, outlier removal, and preprocessing. I then used R to run statistical analyses, comparing outcomes (like exam performance and retention) between students who used AI-assisted methods versus traditional ones."
      },
      {
        type: "text",
        content: "The qualitative interviews provided context that the numbers couldn't. I synthesized both data types into a final research paper with visualizations (also built in R). The findings gave BUAS actionable, evidence-based insights on how AI is *actually* being used, helping them shape future policy."
      }
    ],
    technologies: [
      "R",
      "Statistical Analysis",
      "Data Cleaning",
      "Outlier Removal",
      "Quantitative Analysis",
      "Qualitative Analysis",
      "Research Design"
    ],
    category: "Data Science",
    liveUrl: "",
    githubUrl: "",
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    galleryImages: [
      "/project-images/2023-24-2A/buas.jpg" 
    ],
    attachments: [
      { 
        name: "AI in Education - Final Research Paper (PDF)", 
        path: "/project-images/2023-24-2A/research_proposal.pdf" 
      },
    ],
    year: "2023-2024",
    projectType: "Research Project",
    duration: "8 Weeks"
  },

  // Year 1: 2022-2023 1D
  {
    id: "2022-23-1D",
    title: "Urban Livability & Facility Score Analysis",
    description: "A full-stack data science project merging 15+ geo-datasets to model and predict neighborhood quality.",
    longDescription: "This project was a deep dive to answer a complex question: can 'neighborhood quality' be quantified and predicted? This took me on an end-to-end data journey. I started by sourcing and engineering over 15 disparate datasets—everything from GeoJSON boundaries of 'buurten' (neighborhoods) to CSVs on crime, parks, and even garbage can locations. The core challenge was a massive data engineering task: cleaning and merging it all. I then built and compared a suite of ML models (like Random Forest and Gradient Boosting) to predict a 'livability score', finally combining them into a Voting Regressor for a more robust result. The project culminated in an interactive dashboard to explore these relationships.",
    detailedContent: [
      {
        type: "text",
        content: "The goal was to model neighborhood 'livability'. I started by collecting and consolidating over 15 public datasets. This included GeoJSON files for neighborhood boundaries ('buurten' and 'wijken'), facility scores, green space, crime statistics, police presence, and public infrastructure data (lights, benches, public transport, etc.)."
      },
      {
        type: "text",
        content: "The main challenge was the data engineering and feature imputation. I had to rigorously clean and standardize every source. Using Python (with GeoPandas), I spatially merged all point-based data (like 'benches' or 'crime' locations) and aggregated them into features for each neighborhood polygon. This process turned raw, messy data into a single, clean, model-ready dataset."
      },
      {
        type: "text",
        content: "With the clean data, I ran extensive correlation checks to understand relationships. I then trained a full suite of regression models (Linear Regression, Decision Tree, Random Forest, and Gradient Boosting) to predict a 'facility score'. To get the most stable prediction, I created a `Voting Regressor` ensemble model that combined the outputs of the strongest individual models. The final interactive dashboard allows a user to see how these factors (from parks to crime) influence the final score."
      }
    ],
    technologies: [
      "Python",
      "Pandas",
      "Plotly",
      "Streamlit",
      "GeoPandas",
      "Scikit-learn",
      "GeoJSON",
      "Gradient Boosting",
      "Random Forest",
      "Feature Imputation",
      "Feature Engineering",
      "Data Cleaning",
      "Data Pipeline"
    ],
    category: "Data Science",
    liveUrl: "",
    githubUrl: "",
    heroImage: "/project-images/2022-23-1D/hero.png",
    galleryImages: [
      "/project-images/2022-23-1D/GemeenteBreda.png",
      "/project-images/2022-23-1D/Design VerBreda.png",
      "/project-images/2022-23-1D/factors_diagram.png",
      "/project-images/2022-23-1D/voting_regressor.png",
      "/project-images/2022-23-1D/transportation_facility_score.png",
    ],
    attachments: [],
    year: "2022-2023",
    projectType: "University Project",
    companyPartner: "Municipality of Breda",
    duration: "8 Weeks"
  },

  // Year 1: 2022-2023 1C
  {
    id: "2022-23-1C",
    title: "TV Show Engagement & Audience Analysis for Banijay",
    description: "A strategic data project with Banijay, using analysis and market research to define what hooks specific viewer personas.",
    longDescription: "This was a real-world consulting project with Banijay. The problem: in a world of endless streaming, what *actually* makes a TV show 'stick' with a specific audience? It started with market research and defining viewer personas to get the 'business understanding' right. Then, I dove into their datasets, using Python (Pandas) to analyze content structure and themes against demographic data. I also conducted a data bias analysis to ensure our insights weren't skewed by the source data. This project was a practical exercise in translating raw data into strategic advice for a major media company.",
    detailedContent: [
      {
        type: "text",
        content: "The project kicked off with establishing **business understanding** and **market research**. In collaboration with Banijay, we defined our key questions and built **viewer personas** for our **target analysis**. We needed to know *why* younger demographics, in particular, were (or weren't) engaging with their content."
      },
      {
        type: "text",
        content: "My technical work involved data processing and statistical analysis using **Python** and **Pandas**. I cleaned and merged multiple datasets covering show attributes (pacing, genre) and viewership data. A key step was performing a **data bias analysis** on the demographic info to validate our data sources before drawing conclusions."
      },
      {
        type: "text",
        content: "The final output wasn't just a dashboard; it was a set of actionable insights. I identified specific content patterns (e.g., narrative structure, emotional beats) that correlated with higher viewer retention for those target personas. This provided Banijay with a data-driven basis for adapting their content strategy."
      }
    ],
    technologies: [
      "Python",
      "Pandas",
      "Statistical Analysis",
      "Data Visualization",
      "Data Bias Analysis",
      "Market Research"
    ],
    category: "Data Science",
    liveUrl: "",
    githubUrl: "",
    heroImage: "/project-images/2022-23-1C/hero.png",
    galleryImages: [
      "/project-images/2022-23-1C/banijay.jpg",
      "/project-images/2022-23-1C/wordcloud-banijay.png",
    ],
    attachments: [],
    year: "2022-2023",
    projectType: "University Project",
    companyPartner: "Banijay",
    duration: "8 Weeks"
  },

  // Year 1: 2022-2023 1B
  {
    id: "2022-23-1B",
    title: "Parking Occupancy Detection System",
    description: "A computer vision project to build a real-time parking detector, and a real-world lesson in data quality.",
    longDescription: "This project started with market research to find a viable way to detect parking spot occupancy in real-time. I pivoted from public streets to the BUAS campus and aimed to build a CV model. The process involved scraping my own dataset and using OpenCV for detection. The resulting proof-of-concept hit around 70% accuracy, but the real takeaway was *why*. I realized too late in the timeline that my scraped dataset was the bottleneck—it wasn't diverse enough. This project was a classic, practical lesson in 'garbage in, garbage out' and solidified my understanding that data quality is the most critical part of any machine learning pipeline.",
    detailedContent: [
      {
        type: "text",
        content: "The goal was to build a system that could see parking spots and report if they were 'free' or 'occupied'—a valuable tool for campus management. I started with market research on existing solutions, which helped define the technical approach using Python and OpenCV."
      },
      {
        type: "text",
        content: "I built a data pipeline that involved scraping images from campus cameras to create a custom dataset. Using these images, I trained a basic computer vision model to identify cars within marked parking spaces. This was a hands-on exercise in applying image processing techniques to a real-world problem."
      },
      {
        type: "text",
        content: "My initial model's accuracy was around 70%. When I dug into the errors, I discovered the issue wasn't the model's architecture, but the data I fed it. My scraped dataset was limited and didn't account for enough variety in lighting, weather, or car types. While I couldn't re-scrape due to the timeline, it was a massive learning experience: a successful ML project is 80% data and 20% model, not the other way around."
      }
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Image Processing",
      "Data Scraping",
      "Data Augmentation",
      "Data Cleaning",
      "Market Research"
    ],
    category: "ML Engineering",
    liveUrl: "",
    githubUrl: "",
    heroImage: "/project-images/2022-23-1B/hero.png",
    galleryImages: [],
    attachments: [],
    year: "2022-2023",
    projectType: "University Project",
    duration: "8 Weeks"
  },

  // Year 1: 2022-2023 1A
  {
    id: "2022-23-1A",
    title: "Business Data Analysis & Visualization",
    description: "My first dive into BI, transforming raw CSV data into interactive Power BI dashboards that tell a clear business story.",
    longDescription: "This project was my first real test of translating complex data into a simple, compelling story for a non-technical audience. Starting with messy CSVs, I used Power BI to build an end-to-end report. It wasn't just about DAX formulas; it was about learning *what* to show and *how* to show it. This experience was crucial for building my dashboarding skills, but more importantly, my ability to present data effectively.",
    detailedContent: [
      {
        type: "text",
        content: "The challenge: We had raw, unstructured business data in CSVs and Excel sheets. My goal was to move beyond just rows and columns to build an interactive dashboard that provided real business insights."
      },
      {
        type: "text",
        content: "My process involved data cleaning and transformation (light ETL) directly within Power BI. I built the data model, established relationships, and wrote DAX measures to create key performance indicators (KPIs). This was the technical foundation for the entire report."
      },
      {
        type: "text",
        content: "The final part was dashboard design and presentation. This is where I focused on 'data storytelling'—choosing the right visuals and arranging them to guide a user. Presenting the dashboard to peers was a huge learning curve in communication, justification, and focusing on the 'so what?' of the data."
      }
    ],
    technologies: [
      "Power BI",
      "CSV",
      "Data Visualization",
      "Data Cleaning"
    ],
    category: "Data Science",
    liveUrl: "",
    githubUrl: "",
    heroImage: "/project-images/2022-23-1A/hero.jpeg",
    galleryImages: [],
    attachments: [],
    year: "2022-2023",
    projectType: "University Project",
    duration: "8 weeks"
  },
];