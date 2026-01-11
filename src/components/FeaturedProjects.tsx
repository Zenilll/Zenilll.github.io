import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Neural Network Chip Optimization",
    description: "Deep learning model for semiconductor yield prediction and process optimization using physics-informed neural networks.",
    tags: ["PyTorch", "Semiconductor", "Physics-ML"],
    slug: "neural-chip-optimization",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Quantum State Classifier",
    description: "Machine learning approach to classify quantum states from noisy measurement data.",
    tags: ["Quantum ML", "TensorFlow", "Physics"],
    slug: "quantum-classifier",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Financial Time Series Forecasting",
    description: "LSTM-based model for predicting market movements with attention mechanisms.",
    tags: ["Time Series", "LSTM", "Finance"],
    slug: "financial-forecasting",
    githubUrl: "https://github.com",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <span className="font-mono text-sm text-primary mb-2 block">// portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
          </div>
          <Button asChild variant="ghost" className="group">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
