import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionTitle from '@/components/SectionTitle';
import GlowCard from '@/components/GlowCard';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { contactData } from '@/data/resume';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInfo = contactData.info.find(i => i.title === 'Email');
    const emailAddress = emailInfo ? emailInfo.value : 'kumar.varnit.16@gmail.com';
    
    const subject = `Portfolio Contact from ${formData.name || 'Visitor'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast.success('Opening your email client to send the message');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background/70 backdrop-blur-[2px] relative">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-radial-glow" />
        
        <div className="relative z-10 w-full px-4 md:px-6 pt-32 pb-20">
          <SectionTitle
            title="Get in Touch"
            subtitle="Let's discuss how we can work together"
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="glass glow-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-secondary border-border focus:border-primary resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-6 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Info Cards */}
              {contactData.info.map((info, index) => (
                <GlowCard key={index} delay={index * 0.1}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </GlowCard>
              ))}

              {/* Social Links */}
              <div className="glass glow-border rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {contactData.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl glass glow-border hover-glow transition-all flex items-center gap-3"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass glow-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-bold">Available for opportunities</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently looking for full-time ML Engineer or Data Scientist positions. 
                  Open to remote, hybrid, or on-site roles. Let's create something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
