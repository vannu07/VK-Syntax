import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/resume';

export default function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background/70 backdrop-blur-[2px] relative">
        <div className="absolute inset-0 bg-grid opacity-15" />
        
        <div className="relative z-10 w-full px-4 md:px-6 pt-32 pb-20">
          <SectionTitle
            title="Projects"
            subtitle="Building intelligent solutions that make a difference"
          />

          

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full glass glow-border depth-card rounded-2xl overflow-hidden hover-glow transition-all duration-300">
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
