import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", username: "@yourusername" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", username: "/in/yourusername" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", username: "@yourusername" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since there's no backend, we'll just show a toast
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <span className="font-mono text-sm text-primary mb-2 block">// contact</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Want to collaborate on research? 
              Or just want to discuss the latest in AI and physics? 
              I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-card/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-card/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full glow-sm">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="grid gap-4">
                <div className="p-6 rounded-xl border border-border bg-card/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:hello@example.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@example.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">San Francisco, California</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="font-semibold mb-4">Connect on Social</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-primary/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <div className="font-medium text-sm group-hover:text-primary transition-colors">
                          {social.label}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Fun Quote */}
              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <p className="text-sm text-muted-foreground italic font-mono">
                  "The important thing is not to stop questioning. Curiosity has its own reason for existence."
                </p>
                <p className="text-xs text-primary mt-2">— Albert Einstein</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
