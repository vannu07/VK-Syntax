import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import GlowCard from '@/components/GlowCard';
import ScrollReveal from '@/components/ScrollReveal';
import SkillRadarChart from '@/components/SkillRadarChart';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'R', level: 70 },
    ],
  },
  {
    title: 'ML/AI Frameworks',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'Keras', level: 88 },
      { name: 'Scikit-learn', level: 92 },
      { name: 'XGBoost', level: 85 },
      { name: 'PyTorch', level: 75 },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'Pandas', level: 95 },
      { name: 'NumPy', level: 93 },
      { name: 'Power BI', level: 85 },
      { name: 'Tableau', level: 80 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 82 },
      { name: 'GCP', level: 75 },
      { name: 'MLflow', level: 78 },
      { name: 'Git', level: 88 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Core Competencies',
    skills: [
      { name: 'Feature Engineering', level: 90 },
      { name: 'Model Deployment', level: 85 },
      { name: 'Data Visualization', level: 88 },
      { name: 'Statistical Analysis', level: 85 },
    ],
  },
];

const radarSkills = [
  { name: 'Python', level: 95 },
  { name: 'TensorFlow', level: 90 },
  { name: 'Data Viz', level: 88 },
  { name: 'Cloud', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'Deep Learning', level: 88 },
];

const technologies = [
  'Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'Random Forest',
  'SVM', 'CNN', 'NLP', 'NLTK', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
  'Power BI', 'Tableau', 'AWS S3', 'AWS Lambda', 'SageMaker', 'GCP', 'MLflow',
  'Flask', 'Git', 'MySQL', 'PostgreSQL', 'MongoDB', 'ETL', 'OpenCV',
];

export default function Skills() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <SectionTitle
            title="Skills"
            subtitle="Technologies and tools I work with"
          />

          {/* Interactive Radar Chart */}
          <ScrollReveal>
            <div className="flex justify-center mb-20">
              <div className="glass glow-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-center mb-6 text-gradient">Core Expertise</h3>
                <SkillRadarChart skills={radarSkills} size={320} />
              </div>
            </div>
          </ScrollReveal>

          {/* Skill Categories with Progress Bars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowCard delay={0}>
                  <h3 className="text-lg font-bold text-primary mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-glow-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Technology Cloud */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-10 text-gradient">Tech Stack</h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-4 py-2 rounded-full glass glow-border text-sm font-mono cursor-default hover-glow"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
