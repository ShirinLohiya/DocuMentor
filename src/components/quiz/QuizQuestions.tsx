
import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Question {
  id: number;
  type: 'mcq' | 'true_false' | 'short_answer';
  question: string;
  options?: string[];
  correctAnswer: number | boolean | string;
}

interface QuizQuestionsProps {
  quiz: {
    title: string;
    questions: Question[];
  } | null;
}

const QuizQuestions = ({ quiz }: QuizQuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | boolean | string)[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  if (!quiz) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
        <div className="w-16 h-16 rounded-full bg-bolt-brightPurple/10 flex items-center justify-center mb-4">
          <ArrowRight className="h-6 w-6 text-bolt-brightPurple" />
        </div>
        <h3 className="text-lg font-medium mb-2">No quiz generated yet</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          Upload a document and generate a quiz to see the questions here.
        </p>
      </div>
    );
  }
  
  const handleAnswer = (answer: number | boolean | string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  
  const calculateScore = () => {
    let correctCount = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return {
      score: correctCount,
      total: quiz.questions.length,
      percentage: Math.round((correctCount / quiz.questions.length) * 100)
    };
  };
  
  const renderQuestion = () => {
    const question = quiz.questions[currentQuestion];
    
    switch (question.type) {
      case 'mcq':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-2">{question.question}</h3>
            <div className="space-y-2">
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`option-${index}`} 
                    checked={answers[currentQuestion] === index}
                    onCheckedChange={() => handleAnswer(index)}
                  />
                  <Label htmlFor={`option-${index}`} className="text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'true_false':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-2">{question.question}</h3>
            <div className="flex gap-4">
              <Button
                variant={answers[currentQuestion] === true ? "default" : "outline"}
                onClick={() => handleAnswer(true)}
              >
                True
              </Button>
              <Button
                variant={answers[currentQuestion] === false ? "default" : "outline"}
                onClick={() => handleAnswer(false)}
              >
                False
              </Button>
            </div>
          </div>
        );
        
      case 'short_answer':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-2">{question.question}</h3>
            <textarea
              className="w-full h-32 p-3 border rounded-md bg-secondary text-foreground"
              placeholder="Type your answer here..."
              value={answers[currentQuestion] as string || ''}
              onChange={(e) => handleAnswer(e.target.value)}
            />
          </div>
        );
        
      default:
        return null;
    }
  };
  
  const renderResults = () => {
    const { score, total, percentage } = calculateScore();
    
    return (
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-bolt-brightPurple/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl font-bold text-bolt-brightPurple">{percentage}%</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Quiz Results</h3>
        <p className="text-muted-foreground mb-6">
          You scored {score} out of {total} questions correctly.
        </p>
        
        <div className="space-y-6">
          {quiz.questions.map((question, index) => (
            <div key={index} className="text-left p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-start gap-2">
                <div className="mt-0.5">
                  {answers[index] === question.correctAnswer ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{question.question}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your answer: <span className="font-medium">{
                      typeof answers[index] === 'number' && question.options 
                        ? question.options[answers[index] as number] 
                        : String(answers[index])
                    }</span>
                  </p>
                  {answers[index] !== question.correctAnswer && (
                    <p className="text-sm text-green-500 mt-1">
                      Correct answer: <span className="font-medium">{
                        typeof question.correctAnswer === 'number' && question.options 
                          ? question.options[question.correctAnswer as number] 
                          : String(question.correctAnswer)
                      }</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          className="mt-6"
          onClick={() => {
            setCurrentQuestion(0);
            setShowResults(false);
            setAnswers([]);
          }}
        >
          Retry Quiz
        </Button>
      </div>
    );
  };
  
  if (showResults) {
    return renderResults();
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-medium">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </span>
        <span className="text-sm text-muted-foreground">
          {quiz.title}
        </span>
      </div>
      
      <div className="min-h-[300px]">
        {renderQuestion()}
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={handlePrev}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <Button 
          onClick={handleNext}
          disabled={answers[currentQuestion] === undefined}
        >
          {currentQuestion === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestions;
