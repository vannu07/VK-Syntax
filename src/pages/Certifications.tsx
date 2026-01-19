import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield, BookOpen, Briefcase, Cloud, Brain, Trophy, Database, Code } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import GlowCard from '@/components/GlowCard';
import ScrollReveal from '@/components/ScrollReveal';

const certifications = [
  {
    category: 'Professional Certifications',
    icon: Shield,
    color: 'from-cyan-500 to-blue-500',
    items: [
      { name: 'Data Scientist Associate', issuer: 'DataCamp', date: 'Oct 2025', credential: 'DSA0016116018759' },
      { name: 'Data Analyst Associate', issuer: 'DataCamp', date: 'Oct 2025', credential: 'DAA0019485872063' },
      { name: 'Python Professional Certificate', issuer: 'OpenEDG Python Institute', date: 'Dec 2024' },
      { name: 'Google Analytics Certification', issuer: 'Google', credential: '127122192' },
      { name: 'Google Analytics Individual Qualification', issuer: 'Google', credential: '127662525' },
    ],
  },
  {
    category: 'Google Cloud & AI',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    items: [
      { name: 'Build Real World AI Apps with Gemini and Imagen', issuer: 'Google', date: 'Apr 2025' },
      { name: 'Develop GenAI Apps with Gemini and Streamlit', issuer: 'Google', date: 'Apr 2025', credential: '14970850' },
      { name: 'Explore Generative AI with Vertex AI Gemini API', issuer: 'Google', date: 'Apr 2025' },
      { name: 'Inspect Rich Documents with Gemini Multimodal RAG', issuer: 'Google', date: 'Apr 2025' },
      { name: 'Prompt Design in Vertex AI', issuer: 'Google', date: 'Apr 2025' },
    ],
  },
  {
    category: 'AWS & Cloud Skills',
    icon: Brain,
    color: 'from-orange-500 to-amber-500',
    items: [
      { name: 'Essentials of Prompt Engineering', issuer: 'AWS', date: 'Jul 2024', credential: 'E-1QWGW5' },
      { name: 'Machine Learning & AI Fundamentals', issuer: 'AWS' },
    ],
  },
  {
    category: 'Data & SQL Training',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'Complete SQL Bootcamp', issuer: 'Udemy', date: 'Dec 2024', credential: 'UC-183e3c6b-9a35-4367-9a58-118de132267d' },
      { name: 'SQL Basic Certification', issuer: 'HackerRank', date: 'Aug 2023', credential: 'F35C84EFF179' },
      { name: 'Career Essentials in Data Analysis', issuer: 'Microsoft & LinkedIn', date: 'Dec 2024' },
      { name: 'Master Microsoft Excel', issuer: 'LinkedIn', date: 'Dec 2024' },
      { name: 'Introduction to Microsoft Excel', issuer: 'Coursera' },
      { name: 'Introduction to R', issuer: 'Great Learning', date: 'Apr 2024' },
    ],
  },
  {
    category: 'Industry Job Simulations',
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-500',
    items: [
      { name: 'Quantium Data Analytics Simulation', issuer: 'Forage', date: 'Jan 2025', credential: 'Goqm7t7qQPrFDX5Q6' },
      { name: 'Accenture Data Analytics & Visualization', issuer: 'Forage', date: 'Jul 2024', credential: 'CreGYD6gfQ7Cno4nT' },
      { name: 'Tata Data Visualisation: Business Insights', issuer: 'Forage', date: 'Jul 2024', credential: '8DADdPcE47EQcFEGG' },
      { name: 'BCG GenAI Job Simulation', issuer: 'Forage', date: 'Jul 2024', credential: 'Z6hqKddY6Pe6M3q2X' },
      { name: 'Deloitte Australia Data Analytics', issuer: 'Forage' },
    ],
  },
  {
    category: 'Hackathons & Competitions',
    icon: Trophy,
    color: 'from-red-500 to-rose-500',
    items: [
      { name: 'Hackloop Hackathon 2025 Participant', issuer: 'Unstop', date: 'Sep 2025', credential: '1504538b-6830-4d3f-97cf-93680077b314' },
      { name: 'Hacktoberfest Contributor', issuer: 'DigitalOcean' },
    ],
  },
  {
    category: 'Marketing & Digital',
    icon: Code,
    color: 'from-teal-500 to-cyan-500',
    items: [
      { name: 'Fundamentals of Digital Marketing', issuer: 'Google', credential: 'VMT 6FX 74B' },
    ],
  },
];

const achievements = [
  {
    title: 'Cricket Team Captain',
    organization: 'BCIIT',
    period: '2024 – Present',
    description: 'Leading university cricket team in inter-college tournaments with responsibility for team selection, strategy development, and performance management.',
  },
  {
    title: 'Cultural Ambassador Recognition',
    organization: 'Amazon',
    period: '2024',
    description: 'Recognized by team leads for boosting team morale and improving cross-team collaboration as Cultural & Engagement Ambassador.',
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    period: 'Ongoing',
    description: 'Active contributor to major open-source repositories including TheAlgorithms/Python and various ML/AI projects.',
  },
];

export default function Certifications() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <SectionTitle
            title="Certifications"
            subtitle="30+ professional credentials and achievements"
          />

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
            {certifications.map((category, index) => (
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
              <div key={index} className="text-center p-4 glass glow-border rounded-xl">
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
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass glow-border rounded-2xl p-5 h-full hover-glow transition-all">
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