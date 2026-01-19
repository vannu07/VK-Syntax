import { motion } from 'framer-motion';
import { Building2, Calendar, CheckCircle2 } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import GlowCard from '@/components/GlowCard';

const experiences = [
  {
    title: 'ML Data Associate',
    company: 'Amazon',
    location: 'Gurugram, India',
    period: 'June 2024 – December 2024',
    highlights: [
      'Analyzed large-scale datasets (500K+ records) to identify data quality trends and improve internal labeling accuracy by 25%',
      'Collaborated with data scientists on 3 classification ML models; contributed to data preprocessing and feature engineering',
      'Designed interactive dashboards using Power BI and Matplotlib for cross-functional stakeholders',
      'Optimized AWS ETL pipelines improving processing speed by 15%',
      'Participated in Agile sprints with 95% on-time delivery rate',
    ],
  },
  {
    title: 'Cultural & Engagement Ambassador',
    company: 'Amazon',
    location: 'Gurugram, India',
    period: 'June 2024 – December 2024',
    highlights: [
      'Led cultural engagement initiatives and organized virtual and in-person team events',
      'Acted as communication bridge between leadership and peers',
      'Recognized by team leads for boosting team morale and improving cross-team collaboration',
    ],
  },
];

export default function Experience() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey in the tech industry"
          />

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-box z-10" />

                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <GlowCard className="text-left">
                      <div className="flex items-center gap-2 mb-4">
                        <Building2 className="h-5 w-5 text-primary" />
                        <span className="text-primary font-bold text-lg">{exp.company}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-6">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </GlowCard>
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