import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import TypingText from '@/components/TypingText';
import ScrollReveal from '@/components/ScrollReveal';

const Character3D = lazy(() => import('@/components/Character3D'));

const roles = [
  'ML Engineer',
  'Data Scientist',
  'AI Developer',
  'Deep Learning Expert',
];

export default function Index() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial-glow" />
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="font-mono text-primary text-lg"
                >
                  {'<Hello World />'}
                </motion.p>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  I'm{' '}
                  <span className="text-gradient glow-text">Varnit Kumar</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light h-10">
                  <TypingText texts={roles} />
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Transforming data into intelligent solutions. Specializing in 
                machine learning, deep learning, and building production-ready 
                AI systems that achieve <span className="text-primary font-semibold">98% accuracy</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="glow-border hover-glow">
                  <a href="/Resume_Varnit.pdf" download target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    View CV
                  </a>
                </Button>
                <Button asChild size="lg" className="glow-border hover-glow">
                  <a href="/Resume_Varnit.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/vannu07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass glow-border hover-glow transition-all"
                  aria-label="Open GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/varnit-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass glow-border hover-glow transition-all"
                  aria-label="Open LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:kumar.varnit.16@gmail.com"
                  className="p-3 rounded-full glass glow-border hover-glow transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* 3D Character */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[500px] lg:h-[600px]"
            >
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                }
              >
                <Character3D />
              </Suspense>
            </motion.div>
          </div>

          {/* Stats Section */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {[
                { value: '6+', label: 'Months at Amazon' },
                { value: '98%', label: 'Model Accuracy' },
                { value: '30+', label: 'Certifications' },
                { value: '10+', label: 'Projects' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 glass glow-border rounded-xl cursor-default"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* What I Do */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gradient mb-4">What I Do</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Deploy ML models to production with CI/CD',
                'Build privacy-aware RAG systems',
                'Optimize data pipelines and ETL on AWS/GCP',
                'Deliver insights via interactive dashboards',
              ].map((item, i) => (
                <div key={i} className="glass glow-border rounded-xl p-4 text-sm">
                  <span className="text-primary font-bold mr-2">▹</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-gradient">Featured Case Studies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass glow-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold">Android Malware Detection</span>
                  <a href="https://github.com/vannu07/Android-Malware-Detection" target="_blank" rel="noopener noreferrer" className="text-primary text-sm inline-flex items-center">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
                <div className="text-xs text-muted-foreground mb-2">Problem</div>
                <p className="text-sm mb-3">Identify malicious APKs using static features at scale.</p>
                <div className="text-xs text-muted-foreground mb-2">Approach</div>
                <p className="text-sm mb-3">Engineered permission/API-call features; tuned XGBoost; added SHAP for interpretability.</p>
                <div className="text-xs text-muted-foreground mb-2">Result</div>
                <p className="text-sm">98% accuracy; reproducible pipeline and clear model explanations.</p>
              </div>
              <div className="glass glow-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold">Privacy-Aware RAG Bot</span>
                  <a href="https://github.com/vannu07/The-Privacy-Aware-RAG-Bot" target="_blank" rel="noopener noreferrer" className="text-primary text-sm inline-flex items-center">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
                <div className="text-xs text-muted-foreground mb-2">Problem</div>
                <p className="text-sm mb-3">Answer document questions securely without leaking sensitive data.</p>
                <div className="text-xs text-muted-foreground mb-2">Approach</div>
                <p className="text-sm mb-3">Chunking + embeddings; guarded retrieval; context-aware prompts; privacy-first IO.</p>
                <div className="text-xs text-muted-foreground mb-2">Result</div>
                <p className="text-sm">Accurate answers with privacy guarantees and modular architecture.</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-gradient">Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass glow-border rounded-2xl p-6">
                <p className="text-sm leading-relaxed">
                  “Varnit improved our data labeling accuracy by 25% and built dashboards that accelerated decisions.”
                </p>
                <p className="text-xs text-muted-foreground mt-2">Team Lead, Amazon</p>
              </div>
              <div className="glass glow-border rounded-2xl p-6">
                <p className="text-sm leading-relaxed">
                  “Delivered a robust RAG prototype with privacy controls that stakeholders trusted.”
                </p>
                <p className="text-xs text-muted-foreground mt-2">College Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
