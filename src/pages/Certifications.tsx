import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import GlowCard from '@/components/GlowCard';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { certificationsData, achievementsData } from '@/data/resume';

export default function Certifications() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background/70 backdrop-blur-[2px] relative">
        <div className="absolute inset-0 bg-grid opacity-15" />
        
        <div className="relative z-10 w-full px-4 md:px-6 pt-32 pb-20">
          <SectionTitle
            title="Certifications"
            subtitle="30+ professional credentials and achievements"
          />
          
          <div className="mt-4 mb-8">
            <Button asChild variant="secondary" className="glow-border hover-glow">
              <a href="/certificates/" target="_blank" rel="noopener noreferrer">
                Open Certificates Folder
              </a>
            </Button>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
            {certificationsData.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass glow-border rounded-2xl p-5 hover-glow transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold leading-tight">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.items.map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 + i * 0.03 }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <Award className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <p className="font-medium text-xs group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {cert.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                        {cert.date && (
                          <p className="text-xs text-muted-foreground/70">{cert.date}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20"
          >
            {[
              { value: '30+', label: 'Certifications' },
              { value: '7', label: 'Categories' },
              { value: '10+', label: 'Platforms' },
              { value: '5', label: 'Job Simulations' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 glass glow-border depth-card rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Achievements Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10 text-gradient">
              Leadership & Achievements
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {achievementsData.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass glow-border depth-card rounded-2xl p-5 h-full hover-glow transition-all">
                    <div className="absolute -top-2 -right-2 p-1.5 rounded-full bg-primary text-primary-foreground">
                      <Award className="h-3 w-3" />
                    </div>
                    
                    <h4 className="text-lg font-bold mb-1">{achievement.title}</h4>
                    <p className="text-primary font-medium text-sm mb-0.5">{achievement.organization}</p>
                    <p className="text-muted-foreground text-xs mb-3">{achievement.period}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
