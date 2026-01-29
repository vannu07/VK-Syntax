import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-[400px] max-h-[600px] rounded-2xl shadow-2xl glass overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white">
              <h3 className="font-bold text-lg">Ask Varnit</h3>
              <p className="text-xs opacity-90">ML Engineer & Data Scientist</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="text-center py-8 flex flex-col items-center justify-center h-full">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-foreground mb-2">Coming Soon!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  The AI Chat feature will be available soon. This advanced chatbot will help recruiters learn more about your amazing projects and experience.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-xs text-muted-foreground">📧 In the meantime:</p>
                  <a 
                    href="mailto:kumar.varnit.16@gmail.com"
                    className="text-blue-500 hover:underline text-xs"
                  >
                    Contact me directly
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="border-t border-border px-3 py-2 bg-secondary/50 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="text-xs flex-1 h-7"
                asChild
              >
                <a href="mailto:kumar.varnit.16@gmail.com">Email</a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs flex-1 h-7"
                asChild
              >
                <a href="https://linkedin.com/in/varnit-kumar" target="_blank">LinkedIn</a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs flex-1 h-7"
                asChild
              >
                <a href="/Resume_Varnit.pdf" download>Resume</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
