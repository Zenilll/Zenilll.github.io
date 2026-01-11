import { motion } from "framer-motion";
import { Download, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    type: "work",
    title: "Senior Data Scientist",
    organization: "Tech Company",
    period: "2022 - Present",
    description: "Leading AI/ML initiatives for semiconductor process optimization.",
  },
  {
    type: "work",
    title: "Data Scientist",
    organization: "Research Lab",
    period: "2019 - 2022",
    description: "Developed machine learning models for quantum computing applications.",
  },
  {
    type: "education",
    title: "Ph.D. in Computational Physics",
    organization: "University",
    period: "2015 - 2019",
    description: "Research focus on statistical mechanics and machine learning.",
  },
  {
    type: "education",
    title: "M.Sc. in Applied Mathematics",
    organization: "University",
    period: "2013 - 2015",
    description: "Specialized in numerical methods and optimization theory.",
  },
];

const interests = [
  "Artificial Intelligence",
  "Semiconductor Physics",
  "Quantum Computing",
  "Mathematical Physics",
  "Statistical Mechanics",
  "Optimization Theory",
  "Neural Networks",
  "Scientific Computing",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-16"
          >
            <span className="font-mono text-sm text-primary mb-2 block">// about</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Introduction */}
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a data scientist with a deep passion for understanding complex systems 
                  through the lens of mathematics and physics. My work sits at the intersection 
                  of <span className="text-primary">artificial intelligence</span>, 
                  <span className="text-primary"> semiconductor technology</span>, and 
                  <span className="text-primary"> computational physics</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a background in theoretical physics and applied mathematics, I approach 
                  data science problems with a first-principles mindset. I believe that the 
                  most elegant solutions often come from understanding the underlying physics 
                  of a system.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not building models or analyzing data, you'll find me reading 
                  research papers on quantum mechanics, exploring new mathematical theories, 
                  or contemplating the nature of intelligence itself.
                </p>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground font-mono"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Experience & Education</h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l border-border"
                    >
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-card border border-primary/50 flex items-center justify-center">
                        {item.type === "work" ? (
                          <Briefcase className="h-3 w-3 text-primary" />
                        ) : (
                          <GraduationCap className="h-3 w-3 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-primary">{item.organization}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="sticky top-24 p-6 rounded-xl border border-border bg-card/50">
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-6">
                  <span className="text-5xl font-mono text-primary font-bold">λ</span>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold">Your Name</h2>
                  <p className="text-primary font-mono text-sm">Data Scientist</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>Open to opportunities</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button className="w-full glow-sm" asChild>
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                {/* Fun Stats */}
                <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary font-mono">∞</div>
                    <div className="text-xs text-muted-foreground">Coffee cups</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary font-mono">42</div>
                    <div className="text-xs text-muted-foreground">The answer</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
