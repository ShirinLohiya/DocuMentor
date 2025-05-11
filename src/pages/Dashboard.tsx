
import React, { useEffect } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatCard from '../components/dashboard/StatCard';
import RecentDocuments from '../components/dashboard/RecentDocuments';
import ProgressChart from '../components/dashboard/ProgressChart';
import UpcomingQuizzes from '../components/dashboard/UpcomingQuizzes';
import DocumentUpload from '../components/dashboard/DocumentUpload';


import { BookOpen, FileText, CheckCircle, Users } from 'lucide-react';

const Dashboard = () => {
  useEffect(() => {
    // Animation for stats cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('opacity-100', 'translate-y-0');
        card.classList.remove('opacity-0', 'translate-y-4');
      }, 100 * (index + 1));
    });
    
    // Animation for dashboard content
    const dashboardContent = document.querySelectorAll('.dashboard-content > div');
    dashboardContent.forEach((content, index) => {
      setTimeout(() => {
        content.classList.add('opacity-100', 'translate-y-0');
        content.classList.remove('opacity-0', 'translate-y-8');
      }, 300 + 100 * (index + 1));
    });
  }, []);

  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="stat-card opacity-0 translate-y-4 transition-all duration-300">
              <StatCard
                title="Total Courses"
                value="12"
                description="Active courses"
                icon={<BookOpen className="h-5 w-5 text-bolt-brightPurple" />}
                color="bg-bolt-brightPurple/20 text-bolt-brightPurple"
                trend={{ value: "2 new", positive: true }}
              />
            </div>
            
            <div className="stat-card opacity-0 translate-y-4 transition-all duration-300">
              <StatCard
                title="Documents"
                value="36"
                description="Processed documents"
                icon={<FileText className="h-5 w-5 text-bolt-accent" />}
                color="bg-bolt-accent/20 text-bolt-accent"
                trend={{ value: "5 new", positive: true }}
              />
            </div>
            
            <div className="stat-card opacity-0 translate-y-4 transition-all duration-300">
              <StatCard
                title="Quizzes Completed"
                value="78%"
                description="Average completion rate"
                icon={<CheckCircle className="h-5 w-5 text-green-500" />}
                color="bg-green-500/20 text-green-500"
                trend={{ value: "12% ↑", positive: true }}
              />
            </div>
            
            <div className="stat-card opacity-0 translate-y-4 transition-all duration-300">
              <StatCard
                title="Team Members"
                value="24"
                description="Active users"
                icon={<Users className="h-5 w-5 text-bolt-lightBlue" />}
                color="bg-bolt-lightBlue/20 text-bolt-lightBlue"
                trend={{ value: "3 new", positive: true }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 dashboard-content">
            <div className="lg:col-span-3 opacity-0 translate-y-8 transition-all duration-500">
              <DocumentUpload />
            </div>
            
            <div className="lg:col-span-2 opacity-0 translate-y-8 transition-all duration-500">
              <ProgressChart />
            </div>
            
            <div className="opacity-0 translate-y-8 transition-all duration-500">
              <UpcomingQuizzes />
            </div>
            
            <div className="lg:col-span-3 opacity-0 translate-y-8 transition-all duration-500">
              <RecentDocuments />
            </div>
          </div>
        </main>
      </div>
      
   
      
    </div>
  );
};

export default Dashboard;
