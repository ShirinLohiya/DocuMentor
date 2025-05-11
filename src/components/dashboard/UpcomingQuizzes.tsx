
import React from 'react';
import { Calendar, AlarmClock } from 'lucide-react';

const quizzes = [
  {
    title: 'Company Values Assessment',
    document: 'Onboarding Guide',
    dueDays: 2,
    questions: 15,
  },
  {
    title: 'Product Knowledge Test',
    document: 'Training Manual',
    dueDays: 5,
    questions: 20,
  },
  {
    title: 'Compliance Certification',
    document: 'Compliance Policy',
    dueDays: 7,
    questions: 25,
  },
];

const UpcomingQuizzes = () => {
  return (
    <div className="dashboard-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Upcoming Quizzes</h2>
        <button className="text-sm text-bolt-brightPurple hover:underline">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {quizzes.map((quiz, index) => (
          <div key={index} className="p-3 border border-border rounded-lg hover:border-bolt-purple/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{quiz.title}</h3>
              <div className="bg-bolt-brightPurple/20 text-bolt-brightPurple text-xs px-2 py-1 rounded-full">
                {quiz.questions} Questions
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">
              From: {quiz.document}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>Due in {quiz.dueDays} {quiz.dueDays === 1 ? 'day' : 'days'}</span>
              </div>
              
              <button className="flex items-center gap-1 text-xs font-medium text-bolt-brightPurple hover:underline">
                <AlarmClock className="h-3 w-3" />
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-bolt-brightPurple border border-bolt-brightPurple/50 rounded-md py-2 hover:bg-bolt-brightPurple/10 transition-colors">
        Complete all quizzes
      </button>
    </div>
  );
};

export default UpcomingQuizzes;
