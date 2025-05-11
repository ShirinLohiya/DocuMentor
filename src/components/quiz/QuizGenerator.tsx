
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Sparkles } from 'lucide-react';

interface QuizGeneratorProps {
  file: File;
  onGenerate: () => void;
  isGenerating: boolean;
}

const QuizGenerator = ({ file, onGenerate, isGenerating }: QuizGeneratorProps) => {
  return (
    <div className="mt-6 space-y-4">
      <div className="p-4 bg-secondary rounded-lg">
        <h3 className="font-medium mb-2">File ready for quiz generation</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Our AI will analyze your content and generate relevant quiz questions based on the material.
        </p>
        
        <Button 
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating quiz...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Quiz
            </>
          )}
        </Button>
      </div>
      
      {isGenerating && (
        <div className="p-4 bg-bolt-brightPurple/10 rounded-lg border border-bolt-brightPurple/20">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-bolt-brightPurple rounded-full animate-pulse"></div>
            <div className="h-2 w-2 bg-bolt-brightPurple rounded-full animate-pulse delay-300"></div>
            <div className="h-2 w-2 bg-bolt-brightPurple rounded-full animate-pulse delay-500"></div>
            <span className="text-sm text-bolt-brightPurple font-medium ml-1">
              AI is analyzing your content
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;
