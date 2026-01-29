import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import TypingText from '@/components/TypingText';
import ScrollReveal from '@/components/ScrollReveal';
import { heroData, projectsData } from '@/data/resume';

const Character3D = lazy(() => import('@/components/Character3D'));

export default function Index() {
  const featuredProjects = projectsData.slice(1, 3); // Selecting Malware Detection and RAG Bot

  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-background/70 backdrop-blur-[2px] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial-glow" />
        
        {/* Main Content */}
        <div className="relative z-10 w-full px-4 md:px-6 pt-32 pb-20">
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
                  <span className="text-gradient glow-text">{heroData.name}</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light h-10">
                  <TypingText texts={heroData.roles} />
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                {heroData.bio} <span className="text-primary font-semibold">{heroData.accuracy}</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="glow-border hover-glow">
                  <a href={heroData.resumeUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                {heroData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass glow-border hover-glow transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
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
              {heroData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 glass glow-border depth-card rounded-xl cursor-default"
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
              {heroData.whatIDo.map((item, i) => (
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
              {featuredProjects.map((project, index) => (
                <div key={index} className="glass glow-border depth-card rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold">{project.title}</span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary text-sm inline-flex items-center">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">Description</div>
                  <p className="text-sm mb-3">{project.description}</p>
                  <div className="text-xs text-muted-foreground mb-2">Highlights</div>
                   <ul className="text-sm list-disc list-inside">
                    {project.highlights.slice(0, 2).map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                   </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-gradient">Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {heroData.testimonials.map((testimonial, index) => (
                <div key={index} className="glass glow-border depth-card rounded-2xl p-6">
                  <p className="text-sm leading-relaxed">
                    “{testimonial.text}”
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
