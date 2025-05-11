
import React from 'react';
import { Upload, Brain, FileCheck, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Upload Documents',
    description: 'Upload any PDF or text document containing your training material.',
    icon: Upload,
    color: 'bg-bolt-purple text-white',
  },
  {
    number: '02',
    title: 'AI Processing',
    description: 'Our AI analyzes the content, extracts key concepts and structures the information.',
    icon: Brain,
    color: 'bg-bolt-brightPurple text-white',
  },
  {
    number: '03',
    title: 'Generate Materials',
    description: 'System automatically creates lessons, quizzes, and assessment materials.',
    icon: FileCheck,
    color: 'bg-bolt-accent text-white',
  },
  {
    number: '04',
    title: 'Learn & Track',
    description: 'Users access materials and administrators track progress through dashboards.',
    icon: Sparkles,
    color: 'bg-bolt-lightBlue text-white',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-bolt-brightPurple/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-6">
            How <span className="text-bolt-brightPurple">DocuMentor</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple four-step process to transform your documents into engaging learning materials
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-bolt-brightPurple to-transparent -z-10"></div>
              )}
              
              <div className="glossy-card p-6 flex flex-col items-center text-center h-full">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-5`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="bg-bolt-purple/20 text-bolt-brightPurple text-sm font-bold py-1 px-3 rounded-full mb-3">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
