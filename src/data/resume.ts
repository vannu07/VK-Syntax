import { 
  Bot, 
  Shield, 
  Leaf, 
  Brain, 
  TrendingUp, 
  MessageSquare, 
  Car, 
  Building2,
  Users,
  BookOpen,
  Cloud,
  Database,
  Briefcase,
  Trophy,
  Code,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Award,
  Home
} from 'lucide-react';

export const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Users },
  { name: 'Experience', path: '/experience', icon: Briefcase },
  { name: 'Projects', path: '/projects', icon: Code },
  { name: 'Skills', path: '/skills', icon: Brain },
  { name: 'Certifications', path: '/certifications', icon: Award },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export const heroData = {
  name: "Varnit Kumar",
  resumeUrl: "/Resume_Varnit.pdf",
  roles: [
    'ML Engineer',
    'Data Scientist',
    'AI Developer',
    'Deep Learning Expert',
  ],
  bio: "Transforming data into intelligent solutions. Specializing in machine learning, deep learning, and building production-ready AI systems that achieve",
  accuracy: "98% accuracy",
  stats: [
    { value: '6+', label: 'Months at Amazon' },
    { value: '98%', label: 'Model Accuracy' },
    { value: '30+', label: 'Certifications' },
    { value: '10+', label: 'Projects' },
  ],
  whatIDo: [
    'Deploy ML models to production with CI/CD',
    'Build privacy-aware RAG systems',
    'Optimize data pipelines and ETL on AWS/GCP',
    'Deliver insights via interactive dashboards',
  ],
  testimonials: [
    {
      text: "Varnit improved our data labeling accuracy by 25% and built dashboards that accelerated decisions.",
      author: "Team Lead, Amazon"
    },
    {
      text: "Delivered a robust RAG prototype with privacy controls that stakeholders trusted.",
      author: "College Project"
    }
  ],
  socialLinks: [
    { icon: Github, href: "https://github.com/vannu07", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/varnit-kumar", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kumar.varnit.16@gmail.com", label: "Email" }
  ]
};

export const aboutData = {
  education: [
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
  ],
  highlights: [
    { icon: Award, title: 'Amazon Experience', description: '6 months at Amazon as ML Data Associate' },
    { icon: GraduationCap, title: 'Academic Excellence', description: 'CGPA 9.2/10 in MCA' },
    { icon: MapPin, title: 'Based in Delhi', description: 'Open to remote & hybrid roles' },
    { icon: Calendar, title: 'Career Goal', description: 'Full-time ML Engineer role' },
  ],
  bio: [
    "I am a Data Science student with hands-on industry experience at Amazon, where I worked closely with large datasets, analytics workflows, and machine learning pipelines to support reliable, production-oriented decision-making. My experience strengthened my understanding of how data quality, collaboration, and well-structured analytical processes directly influence model performance and business outcomes.",
    "I work across the end-to-end data science lifecycle, including data collection, exploratory data analysis, feature engineering, statistical analysis, machine learning model development, evaluation, and interpretability. I am proficient in Python, SQL, scikit-learn, TensorFlow, and data visualization, with practical exposure to AWS and GCP in analytics and ML workflows.",
    "Through academic and independent projects in cybersecurity analytics, NLP, computer vision, and applied data science, I have built high-accuracy predictive models (up to 98%), with a strong focus on explainability, scalability, and data-driven insights rather than just model metrics.",
    "I value ownership, teamwork, and continuous learning, and I thrive in collaborative environments where insights are shared and refined. Currently pursuing my Master’s in Computer Applications (CGPA: 9.2), I am actively seeking opportunities in Data Science, Machine Learning, and Analytics where I can contribute meaningfully while continuing to grow as a data professional."
  ]
};

export const contactData = {
  info: [
    {
      icon: Mail,
      title: 'Email',
      value: 'kumar.varnit.16@gmail.com',
      href: 'mailto:kumar.varnit.16@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-8287848299',
      href: 'tel:+918287848299',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Delhi, India',
      href: null,
    },
  ],
  social: [
    { icon: Github, label: 'GitHub', href: 'https://github.com/vannu07' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/varnit-kumar' },
  ]
};

export const experienceData = [
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

export const projectsData = [
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

export const skillCategoriesData = [
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

export const radarSkillsData = [
  { name: 'Python', level: 95 },
  { name: 'TensorFlow', level: 90 },
  { name: 'Data Viz', level: 88 },
  { name: 'Cloud', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'Deep Learning', level: 88 },
];

export const technologiesData = [
  'Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'Random Forest',
  'SVM', 'CNN', 'NLP', 'NLTK', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
  'Power BI', 'Tableau', 'AWS S3', 'AWS Lambda', 'SageMaker', 'GCP', 'MLflow',
  'Flask', 'Git', 'MySQL', 'PostgreSQL', 'MongoDB', 'ETL', 'OpenCV',
];

export const certificationsData = [
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

export const achievementsData = [
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
