import React from 'react';
import { BookOpen, Brain, FileCheck, ChartBar, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    title: 'Bite-sized Lessons',
    description: 'Automatically converts lengthy documents into digestible, focused learning modules.',
    icon: BookOpen,
    color: 'bg-bolt-brightPurple/20 text-bolt-brightPurple',
  },
  {
    title: 'Smart Quiz Generation',
    description: 'Creates relevant quizzes based on document content to test and reinforce learning.',
    icon: Brain,
    color: 'bg-bolt-accent/20 text-bolt-accent',
  },
  {
    title: 'Progress Tracking',
    description: 'Comprehensive dashboards to monitor individual and team learning progress.',
    icon: ChartBar,
    color: 'bg-bolt-lightBlue/20 text-bolt-lightBlue',
  },
  {
    title: 'Document Analysis',
    description: 'Advanced AI extracts key concepts and learning objectives from any PDF or text.',
    icon: FileCheck,
    color: 'bg-green-500/20 text-green-500',
  },
  {
    title: 'Learning Recommendations',
    description: 'Personalized recommendations based on performance and learning patterns.',
    icon: Sparkles,
    color: 'bg-purple-400/20 text-purple-400',
  },
  {
    title: 'Instant Implementation',
    description: 'Upload a document and have training materials ready within minutes.',
    icon: Zap,
    color: 'bg-yellow-500/20 text-yellow-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-bolt-purple/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-6">
            Powerful Features for <span className="text-bolt-brightPurple">Effective</span> Learning
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI assistant transforms how your organization approaches training and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glossy-card p-6 flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
