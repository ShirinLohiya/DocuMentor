
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DocumentUpload from '../components/dashboard/DocumentUpload';
import CourseCard from '../components/courses/CourseCard';
import DocumentSummarizer from '../components/courses/DocumentSummarizer';
import { BookOpen, FileText, Search } from 'lucide-react';


const MyCourses = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description: "Learn the fundamentals of machine learning algorithms and practical applications.",
      progress: 65,
      lessons: 12,
      duration: "6 hours",
    },
    {
      id: 2,
      title: "Advanced Data Analysis",
      description: "Master data visualization techniques and statistical analysis methods.",
      progress: 42,
      lessons: 10,
      duration: "4.5 hours",
    },
    {
      id: 3,
      title: "Python for Data Science",
      description: "Build your Python skills with a focus on data manipulation and analysis.",
      progress: 88,
      lessons: 8,
      duration: "5 hours",
    },
    {
      id: 4,
      title: "Deep Learning Fundamentals",
      description: "Understand neural networks and deep learning architectures.",
      progress: 20,
      lessons: 15,
      duration: "8 hours",
    },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex flex-1 p-6">
          {/* Left side: Document Summarizer */}
          <div className="w-1/3 mr-6">
            <DocumentSummarizer />
          </div>
          
          {/* Right side: Courses and Document Upload */}
          <div className="w-2/3 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-bolt-brightPurple" />
                My Courses
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-bolt-brightPurple" />
                Upload New Materials
              </h2>
              
              <DocumentUpload />
            </div>
          </div>
        </main>
      </div>
      

      
    </div>
  );
};

export default MyCourses;
