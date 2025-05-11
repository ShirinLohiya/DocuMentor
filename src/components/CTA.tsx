
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 purple-gradient opacity-90"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="w-3/4 h-3/4 border-2 border-white/10 rounded-full absolute -right-1/4 blur-sm"></div>
            <div className="w-1/2 h-1/2 border-2 border-white/20 rounded-full absolute left-1/4 top-1/4 blur-sm"></div>
          </div>
          
          <div className="relative z-10 px-6 py-16 md:py-20 md:px-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white max-w-3xl mx-auto">
              Ready to Transform Your Training Process?
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Join organizations that are saving time and improving learning outcomes with our AI-powered training assistant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-white text-bolt-purple hover:bg-white/90 w-full sm:w-auto text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
