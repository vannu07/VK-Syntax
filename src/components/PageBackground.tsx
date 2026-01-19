import { useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomeBackground = lazy(() => import('./backgrounds/HomeBackground'));
const AboutBackground = lazy(() => import('./backgrounds/AboutBackground'));
const ProjectsBackground = lazy(() => import('./backgrounds/ProjectsBackground'));
const SkillsBackground = lazy(() => import('./backgrounds/SkillsBackground'));
const ExperienceBackground = lazy(() => import('./backgrounds/ExperienceBackground'));
const CertificationsBackground = lazy(() => import('./backgrounds/CertificationsBackground'));
const ContactBackground = lazy(() => import('./backgrounds/ContactBackground'));

export default function PageBackground() {
  const location = useLocation();
  const path = location.pathname;

  const getBackground = () => {
    switch (path) {
      case '/':
        return <HomeBackground />;
      case '/about':
        return <AboutBackground />;
      case '/projects':
        return <ProjectsBackground />;
      case '/skills':
        return <SkillsBackground />;
      case '/experience':
        return <ExperienceBackground />;
      case '/certifications':
        return <CertificationsBackground />;
      case '/contact':
        return <ContactBackground />;
      default:
        return <HomeBackground />;
    }
  };

  return (
    <Suspense fallback={null}>
      {getBackground()}
    </Suspense>
  );
}
