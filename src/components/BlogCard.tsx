import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const categoryColors: Record<BlogPost["category"], string> = {
  AI: "bg-primary/10 text-primary border-primary/30",
  Semiconductors: "bg-accent/10 text-accent border-accent/30",
  Physics: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Mathematics: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Research: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`} className="group block h-full">
        <div className="h-full p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 flex flex-col">
          {/* Category Badge */}
          <div className="mb-4">
            <Badge
              variant="outline"
              className={`font-mono text-xs ${categoryColors[post.category]}`}
            >
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min read
            </span>
          </div>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
            <span>Read article</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
