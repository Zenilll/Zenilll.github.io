import { motion } from "framer-motion";
import { Brain, Cpu, LineChart, Atom, Binary, Sigma } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep learning, neural networks, NLP, and computer vision",
    level: 95,
  },
  {
    icon: Cpu,
    title: "Semiconductors",
    description: "Device physics, process modeling, and yield optimization",
    level: 88,
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description: "Statistical modeling, time series, and predictive analytics",
    level: 92,
  },
  {
    icon: Atom,
    title: "Physics",
    description: "Quantum mechanics, statistical mechanics, and simulations",
    level: 85,
  },
  {
    icon: Binary,
    title: "Programming",
    description: "Python, R, SQL, TensorFlow, PyTorch, and scikit-learn",
    level: 94,
  },
  {
    icon: Sigma,
    title: "Mathematics",
    description: "Linear algebra, calculus, probability, and optimization",
    level: 90,
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of theoretical knowledge and practical experience in cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:glow-sm transition-all">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {skill.description}
                  </p>
                  
                  {/* Skill bar */}
                  <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground font-mono text-right">
                    {skill.level}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
