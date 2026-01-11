import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// This would typically come from a CMS or database
const projectsData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  readTime: string;
  highlights: string[];
}> = {
  "neural-chip-optimization": {
    title: "Neural Network Chip Optimization",
    description: "Deep learning model for semiconductor yield prediction and process optimization using physics-informed neural networks.",
    longDescription: `This project explores the application of physics-informed neural networks (PINNs) to semiconductor manufacturing. By combining domain knowledge from semiconductor physics with the flexibility of deep learning, we achieved significant improvements in yield prediction accuracy.

The model incorporates physical constraints from device physics equations, ensuring predictions are not only accurate but also physically plausible. This approach reduces the need for large training datasets while maintaining high performance.

Key innovations include a novel loss function that balances data-driven learning with physics constraints, and an attention mechanism that identifies critical process parameters affecting yield.`,
    tags: ["PyTorch", "Semiconductor", "Physics-ML", "CNN", "Optimization"],
    githubUrl: "https://github.com",
    date: "2024",
    readTime: "5 min read",
    highlights: [
      "15% improvement in yield prediction accuracy",
      "Reduced training data requirements by 60%",
      "Real-time inference capability for production use",
      "Published in IEEE Transactions",
    ],
  },
  "quantum-classifier": {
    title: "Quantum State Classifier",
    description: "Machine learning approach to classify quantum states from noisy measurement data.",
    longDescription: `Developed a hybrid classical-quantum machine learning pipeline for classifying quantum states from noisy measurement data. The system uses variational quantum circuits combined with classical neural networks to achieve robust classification even in the presence of significant measurement noise.`,
    tags: ["Quantum ML", "TensorFlow", "Physics", "Qiskit"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023",
    readTime: "4 min read",
    highlights: [
      "State-of-the-art classification accuracy on noisy data",
      "Scalable to larger quantum systems",
      "Open-source implementation available",
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background noise">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {project.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {project.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono bg-secondary/50 text-muted-foreground border border-border"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button className="glow-sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-invert max-w-none">
                {project.longDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="sticky top-24 p-6 rounded-xl border border-border bg-card/50">
                <h3 className="font-semibold mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
