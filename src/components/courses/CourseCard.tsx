
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  lessons: number;
  duration: string;
  image?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  progress,
  lessons,
  duration,
  image,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-bolt-brightPurple/30">
      <div className="relative h-40 bg-gradient-to-r from-bolt-darkBlue to-bolt-lightBlue">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <BookOpen className="w-16 h-16 text-white/50" />
          </div>
        )}
      </div>
      
      <CardHeader className="pt-4 pb-2">
        <CardTitle className="text-lg font-bold line-clamp-1">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            <span>{lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full border-bolt-brightPurple/40 text-bolt-brightPurple hover:bg-bolt-brightPurple/10">
          Continue Learning
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
