import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  slug,
  featured = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-xl border border-border bg-card/50 overflow-hidden hover:border-primary/50 transition-all duration-500 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-mono bg-secondary/50 text-muted-foreground border border-border"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Link */}
        <Link
          to={`/projects/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 blur-2xl rounded-full" />
    </motion.div>
  );
};

export default ProjectCard;
