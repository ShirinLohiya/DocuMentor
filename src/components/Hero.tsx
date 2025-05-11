
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { ref: headingRef, delay: 0 },
      { ref: subHeadingRef, delay: 200 },
      { ref: buttonRef, delay: 400 },
      { ref: imageRef, delay: 600 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100');
          ref.current?.classList.remove('translate-y-10');
        }, delay);
      }
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Purple gradient blob */}
      <div className="absolute top-[20%] -left-[10%] w-3/4 h-3/4 bg-bolt-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] -right-[10%] w-3/4 h-3/4 bg-bolt-brightPurple/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left space-y-6">
            <h1 
              ref={headingRef} 
              className="hero-text opacity-0 translate-y-10 transition-all duration-700 ease-out glow-text"
            >
              Transform Any Document Into <span className="text-bolt-brightPurple">Intelligent</span> Training
            </h1>
            
            <p 
              ref={subHeadingRef} 
              className="text-lg md:text-xl text-muted-foreground opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
            >
              Our AI-powered assistant converts PDFs and text documents into bite-sized lessons, auto-generates quizzes, and tracks progress — perfect for corporate training, onboarding, and upskilling.
            </p>
            
            <div 
              ref={buttonRef} 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 translate-y-10 transition-all duration-700 ease-out delay-400"
            >
              <Link to="/login">
                <Button size="lg" className="bg-bolt-brightPurple hover:bg-bolt-purple w-full sm:w-auto text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="relative opacity-0 translate-y-10 transition-all duration-700 ease-out delay-600"
          >
            <div className="glossy-card aspect-[4/3] overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-bolt-darkBlue rounded-xl border border-bolt-purple/50 p-6 flex flex-col">
                  <div className="flex mb-4 items-center justify-between">
                    <div className="flex gap-2">
                      <Upload className="h-6 w-6 text-bolt-brightPurple" />
                      <span className="font-medium">training-handbook.pdf</span>
                    </div>
                    <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                      Processed
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-4 mt-2">
                    <div className="flex gap-4">
                      <div className="h-20 w-20 rounded-lg bg-bolt-purple/20 flex items-center justify-center">
                        <Brain className="h-10 w-10 text-bolt-brightPurple" />
                      </div>
                      <div className="flex-1 flex flex-col items-start text-left">
                        <h3 className="font-medium text-lg">10 Bite-sized Lessons</h3>
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                          <div className="bg-bolt-brightPurple h-2 rounded-full w-3/4"></div>
                        </div>
                        <span className="text-sm text-muted-foreground mt-1">75% completed</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="p-3 bg-secondary/80 rounded-lg border border-bolt-purple/20 flex flex-col items-start">
                          <span className="text-xs text-muted-foreground">Quiz {i}</span>
                          <span className="font-medium">Module {i}</span>
                          <div className="mt-2 text-xs bg-bolt-brightPurple/20 text-bolt-brightPurple px-2 py-1 rounded-full">
                            {i % 2 === 0 ? "Completed" : "In Progress"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-bolt-accent/30 rounded-full blur-2xl animate-pulse-glow"></div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-bolt-brightPurple/20 rounded-full blur-2xl animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
