import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import GlowCard from '@/components/GlowCard';
import ScrollReveal from '@/components/ScrollReveal';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'BCIIT & Innovation, GGSIPU Delhi',
    period: 'September 2024 – September 2026',
    cgpa: '9.2/10',
    coursework: ['Machine Learning', 'Deep Learning', 'Data Structures', 'Statistical Analysis'],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'ITM, HNB Garhwal University',
    period: 'July 2020 – July 2023',
    cgpa: '7.2/10',
    coursework: ['Programming', 'Database Management', 'Web Development'],
  },
];

const highlights = [
  { icon: Award, title: 'Amazon Experience', description: '6 months at Amazon as ML Data Associate' },
  { icon: GraduationCap, title: 'Academic Excellence', description: 'CGPA 9.2/10 in MCA' },
  { icon: MapPin, title: 'Based in Delhi', description: 'Open to remote & hybrid roles' },
  { icon: Calendar, title: 'Career Goal', description: 'Full-time ML Engineer role' },
];

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
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
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I am a Data Science student with hands-on industry experience at <span className="text-primary font-semibold">Amazon</span>, where I worked closely with large datasets, analytics workflows, and machine learning pipelines to support reliable, production-oriented decision-making. My experience strengthened my understanding of how data quality, collaboration, and well-structured analytical processes directly influence model performance and business outcomes.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I work across the end-to-end data science lifecycle, including data collection, exploratory data analysis, feature engineering, statistical analysis, machine learning model development, evaluation, and interpretability. I am proficient in Python, SQL, scikit-learn, TensorFlow, and data visualization, with practical exposure to AWS and GCP in analytics and ML workflows.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Through academic and independent projects in cybersecurity analytics, NLP, computer vision, and applied data science, I have built high-accuracy predictive models (up to <span className="text-primary font-semibold">98%</span>), with a strong focus on explainability, scalability, and data-driven insights rather than just model metrics.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I value ownership, teamwork, and continuous learning, and I thrive in collaborative environments where insights are shared and refined. Currently pursuing my Master’s in Computer Applications (<span className="text-primary font-semibold">CGPA: 9.2</span>), I am actively seeking Data Scientist roles where I can contribute meaningfully while continuing to grow as a data professional.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {highlights.map((item, index) => (
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
              {education.map((edu, index) => (
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
