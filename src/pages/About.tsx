import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import GlowCard from '@/components/GlowCard';
import ScrollReveal from '@/components/ScrollReveal';
import { aboutData } from '@/data/resume';

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background/70 backdrop-blur-[2px] relative">
        <div className="absolute inset-0 bg-grid opacity-15" />
        
        <div className="relative z-10 w-full px-4 md:px-6 pt-32 pb-20">
          <SectionTitle
            title="About Me"
            subtitle="Passionate about transforming data into intelligent solutions"
          />

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="glass glow-border rounded-2xl p-8 md:p-12">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {aboutData.highlights.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowCard delay={0}>
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Education Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10 text-gradient">Education</h3>
            
            <div className="space-y-6">
              {aboutData.education.map((edu, index) => (
                <GlowCard key={index} delay={index * 0.2}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{edu.degree}</h4>
                      <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm">{edu.period}</p>
                    </div>
                    <div className="text-right">
                      <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                        <span className="text-primary font-bold">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
