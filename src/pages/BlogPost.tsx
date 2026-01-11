import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getRecentPosts, type BlogPost as BlogPostType } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

const categoryColors: Record<BlogPostType["category"], string> = {
  AI: "bg-primary/10 text-primary border-primary/30",
  Semiconductors: "bg-accent/10 text-accent border-accent/30",
  Physics: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Mathematics: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Research: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const relatedPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm" className="group">
              <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <Badge
              variant="outline"
              className={`font-mono text-xs mb-4 ${categoryColors[post.category]}`}
            >
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg"
          >
            <div className="text-foreground leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.slice(2)}
                    </h1>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                      {paragraph.slice(3)}
                    </h2>
                  );
                }
                if (paragraph.startsWith("$$")) {
                  return (
                    <div key={index} className="bg-muted/50 rounded-lg p-4 my-6 overflow-x-auto">
                      <code className="font-mono text-primary text-sm">{paragraph}</code>
                    </div>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i}>{item.slice(2)}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  const items = paragraph.split("\n").filter((line) => line.match(/^\d\./));
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^\d\.\s*/, "")}</li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground">
                      {paragraph.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-12 pt-6 border-t border-border"
          >
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-5xl mx-auto mt-16"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Continue Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} index={index} />
                ))}
              </div>
            </motion.section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
