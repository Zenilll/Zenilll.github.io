import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import { getRecentPosts } from "@/data/blogPosts";

const FeaturedBlog = () => {
  const recentPosts = getRecentPosts(3);

  return (
    <section className="py-24 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-sm">Research Journal</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest from the <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Explorations in AI, semiconductors, physics, and mathematics—where theory meets practice.
            </p>
          </div>

          <Button asChild variant="outline" className="w-fit group">
            <Link to="/blog" className="flex items-center gap-2">
              View all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 text-[200px] font-mono text-muted/5 select-none hidden xl:block"
        >
          ∂/∂t
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
