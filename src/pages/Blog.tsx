import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

const categories: Array<BlogPost["category"] | "All"> = [
  "All",
  "AI",
  "Semiconductors",
  "Physics",
  "Mathematics",
  "Research",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogPost["category"] | "All">("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-sm">Research Journal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A personal research journal exploring the intersections of artificial intelligence,
              semiconductor technology, physics, and mathematical foundations.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={`font-mono text-xs transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:border-primary/50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Showing {sortedPosts.length} article{sortedPosts.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </motion.p>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {sortedPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground">No articles found in this category.</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
