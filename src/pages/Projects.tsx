import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Leaf, ShoppingCart, Car, Bot, TrendingUp, Shield, Brain, Users, BookOpen, MessageSquare } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const projects = [
  {
    title: 'Jarvis - AI Voice Assistant',
    description: 'Advanced AI Voice Assistant with face recognition, voice commands, and intelligent automation capabilities.',
    icon: Bot,
    tech: ['Python', 'OpenCV', 'Speech Recognition', 'TTS'],
    highlights: [
      'Face recognition for personalized responses',
      'Voice command automation system',
      'Real-time speech-to-text processing',
    ],
    github: 'https://github.com/vannu07/jarvis',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Android Malware Detection System',
    description: 'ML classification model to detect malicious Android apps using static code analysis on 10,000+ APK samples.',
    icon: Shield,
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP'],
    highlights: [
      '98% accuracy through hyperparameter tuning',
      'Feature extraction from app permissions & API calls',
      'SHAP for model interpretability',
    ],
    github: 'https://github.com/vannu07/Android-Malware-Detection',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Farm-IQ: AI-Powered Smart Farming',
    description: 'Full-stack web application providing crop recommendations, fertilizer guidance, and plant disease detection.',
    icon: Leaf,
    tech: ['Python', 'Flask', 'TensorFlow', 'ML'],
    highlights: [
      '92% accuracy for crop recommendations',
      'CNN-based plant disease detection',
      '10,000+ labeled crop images trained',
    ],
    github: 'https://github.com/vannu07/Farm-IQ-AI-Powered-Smart-Farming-Assistant',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Privacy-Aware RAG Bot',
    description: 'Retrieval-Augmented Generation bot with privacy-first architecture for secure document Q&A.',
    icon: Brain,
    tech: ['Python', 'LangChain', 'RAG', 'LLM'],
    highlights: [
      'Privacy-focused data processing',
      'Document embedding & retrieval',
      'Context-aware responses',
    ],
    github: 'https://github.com/vannu07/The-Privacy-Aware-RAG-Bot',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Stock Market Analysis Platform',
    description: 'Interactive stock data analysis and visualization platform with technical indicators and real-time charts.',
    icon: TrendingUp,
    tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    highlights: [
      'Real-time stock data visualization',
      'Technical indicators (RSI, MACD, etc.)',
      'Interactive charting with Plotly',
    ],
    github: 'https://github.com/vannu07/Stock-market',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'E-Commerce Sentiment Analysis',
    description: 'Real-time sentiment classification using NLP and machine learning on 50,000+ customer reviews.',
    icon: MessageSquare,
    tech: ['Python', 'Flask', 'NLP', 'Streamlit'],
    highlights: [
      '85-90% accuracy on sentiment classification',
      'TF-IDF vectorization pipeline',
      'Real-time analysis dashboard',
    ],
    github: 'https://github.com/vannu07/Sentiment-analysis',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Traffic Sign Detection System',
    description: 'CNN-based traffic sign classification for autonomous driving applications with real-time processing.',
    icon: Car,
    tech: ['TensorFlow', 'OpenCV', 'CNN'],
    highlights: [
      '94% accuracy on 40+ sign classes',
      'Real-time video stream processing',
      'Data augmentation for robustness',
    ],
    github: 'https://github.com/vannu07/Smart-City-Traffic',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Student Performance Analytics',
    description: 'Data analysis and prediction system for student academic performance using ML models.',
    icon: Users,
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    highlights: [
      'Predictive performance modeling',
      'Feature importance analysis',
      'Visualization dashboards',
    ],
    github: 'https://github.com/vannu07/Student_Performance',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Kisan-AI Agricultural Platform',
    description: 'Web-based agricultural assistance platform helping farmers with AI-powered insights.',
    icon: Leaf,
    tech: ['HTML', 'CSS', 'JavaScript', 'AI APIs'],
    highlights: [
      'Farmer-friendly interface',
      'AI-powered crop recommendations',
      'Weather integration',
    ],
    github: 'https://github.com/vannu07/Kisan-AI',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Eduloop Learning Platform',
    description: 'Education-focused platform built with modern TypeScript for enhanced learning experiences.',
    icon: BookOpen,
    tech: ['TypeScript', 'React', 'Node.js'],
    highlights: [
      'Interactive learning modules',
      'Progress tracking system',
      'Modern UI/UX design',
    ],
    github: 'https://github.com/vannu07/Eduloop',
    color: 'from-violet-500 to-purple-500',
  },
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <SectionTitle
            title="Projects"
            subtitle="Building intelligent solutions that make a difference"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full glass glow-border rounded-2xl overflow-hidden hover-glow transition-all duration-300">
                  {/* Header with gradient */}
                  <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color}`}>
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-0.5">▹</span>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="glow-border hover-glow flex-1"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1.5" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">Explore more projects on GitHub</p>
            <Button asChild size="lg" className="group">
              <a href="https://github.com/vannu07" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Repositories
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
