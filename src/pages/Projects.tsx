import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const allProjects = [
  {
    title: "Neural Network Chip Optimization",
    description: "Deep learning model for semiconductor yield prediction and process optimization using physics-informed neural networks. Achieved 15% improvement in prediction accuracy.",
    tags: ["PyTorch", "Semiconductor", "Physics-ML", "CNN"],
    slug: "neural-chip-optimization",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Quantum State Classifier",
    description: "Machine learning approach to classify quantum states from noisy measurement data using variational quantum circuits.",
    tags: ["Quantum ML", "TensorFlow", "Physics", "Qiskit"],
    slug: "quantum-classifier",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Financial Time Series Forecasting",
    description: "LSTM-based model for predicting market movements with attention mechanisms and ensemble methods.",
    tags: ["Time Series", "LSTM", "Finance", "Python"],
    slug: "financial-forecasting",
    githubUrl: "https://github.com",
  },
  {
    title: "Semiconductor Defect Detection",
    description: "Computer vision system for automated wafer defect classification using transfer learning on microscopy images.",
    tags: ["Computer Vision", "ResNet", "Manufacturing"],
    slug: "defect-detection",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Physics Simulation Engine",
    description: "GPU-accelerated molecular dynamics simulation for studying material properties at nanoscale.",
    tags: ["CUDA", "C++", "Physics", "HPC"],
    slug: "physics-simulation",
    githubUrl: "https://github.com",
  },
  {
    title: "NLP Research Assistant",
    description: "Retrieval-augmented generation system for scientific literature search and summarization.",
    tags: ["NLP", "LLM", "RAG", "LangChain"],
    slug: "nlp-assistant",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Statistical Process Control Dashboard",
    description: "Real-time monitoring dashboard for semiconductor fab with anomaly detection and predictive maintenance.",
    tags: ["Dashboard", "Statistics", "React", "D3.js"],
    slug: "spc-dashboard",
    githubUrl: "https://github.com",
  },
  {
    title: "Optimization Algorithm Library",
    description: "Collection of metaheuristic optimization algorithms with applications in engineering design.",
    tags: ["Optimization", "Python", "Algorithms"],
    slug: "optimization-library",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <span className="font-mono text-sm text-primary mb-2 block">// projects</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research & Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              A collection of my work spanning machine learning, semiconductor physics, 
              and computational mathematics. Each project represents a step toward 
              understanding complex systems through data.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {allProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
