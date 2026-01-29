import { Heart } from 'lucide-react';
import { heroData, contactData } from '@/data/resume';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass mt-20 border-t border-primary/20 relative z-10">
      <div className="w-full px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {heroData.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
          </div>

          <div className="flex items-center gap-4">
            {contactData.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
