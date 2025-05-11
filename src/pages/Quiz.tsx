
import React, { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import QuizUploader from '../components/quiz/QuizUploader';
import QuizGenerator from '../components/quiz/QuizGenerator';
import QuizQuestions from '../components/quiz/QuizQuestions';
import { FileQuestion, Award, Brain } from 'lucide-react';

const Quiz = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setGeneratedQuiz(null);
  };

  const handleGenerateQuiz = async () => {
    if (!uploadedFile) return;
    
    setIsGenerating(true);
    
    // Mock the API call for quiz generation
    setTimeout(() => {
      // This would be replaced with actual AI-generated quiz data
      const mockQuizData = {
        title: uploadedFile.name.replace(/\.[^/.]+$/, ""),
        questions: [
          {
            id: 1,
            type: 'mcq',
            question: 'What is the primary purpose of machine learning?',
            options: [
              'To replace human intelligence',
              'To find patterns in data and make predictions',
              'To create robots',
              'To speed up calculations'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'true_false',
            question: 'Deep learning is a subset of machine learning.',
            correctAnswer: true
          },
          {
            id: 3,
            type: 'short_answer',
            question: 'Explain what overfitting means in machine learning.',
            correctAnswer: 'Overfitting occurs when a model learns the training data too well, including its noise and outliers, resulting in poor performance on new, unseen data.'
          }
        ]
      };
      
      setGeneratedQuiz(mockQuizData);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-6">
            <FileQuestion className="h-6 w-6 text-bolt-brightPurple" />
            <h1 className="text-2xl font-bold">Quiz Generator</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <div className="dashboard-card">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-bolt-brightPurple" />
                  <h2 className="text-lg font-semibold">Quiz Builder</h2>
                </div>
                <QuizUploader onFileUpload={handleFileUpload} />
                {uploadedFile && (
                  <QuizGenerator 
                    file={uploadedFile} 
                    onGenerate={handleGenerateQuiz} 
                    isGenerating={isGenerating} 
                  />
                )}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="dashboard-card h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-5 w-5 text-bolt-accent" />
                  <h2 className="text-lg font-semibold">Generated Quiz</h2>
                </div>
                <QuizQuestions quiz={generatedQuiz} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Quiz;
