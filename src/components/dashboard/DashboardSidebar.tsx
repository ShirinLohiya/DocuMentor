import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  Zap,
  BrainCircuit,
  FileQuestion
} from 'lucide-react';
import SidebarVoiceAssistant from './SidebarVoiceAssistant';
import path from 'path';

const DashboardSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
  
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: "/dashboard"
    },
    {
      label: "My Courses",
      icon: <BookOpen className="h-5 w-5" />,
      path: "/my-courses"
    },
    {
      label: "Schedule",
      icon: <Calendar className="h-5 w-5" />,
      path: "/schedule"
    },
    {
      label: "Team",
      icon: <Users className="h-5 w-5" />,
      path: "/team"
    },
    {
      label: "Terms & Conditions",
      icon: <FileText className="h-5 w-5" />,
      path: "/document"
    },
    {
      label: "Quiz",
      icon: <FileQuestion className="h-5 w-5" />,
      path: "/quiz"
    },
    {
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      path: "/settings"
    }
  ];
  
  return (
    <div className="w-64 h-screen flex-shrink-0 bg-sidebar-background border-r border-sidebar-border flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-bolt-brightPurple" />
          <span className="font-bold text-xl">DocuMentor</span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <Button
              variant={isActive(item.path) ? "secondary" : "ghost"}
              className={`w-full justify-start text-left ${
                isActive(item.path)
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              }`}
            >
              {React.cloneElement(item.icon, {
                className: `mr-2 h-5 w-5 ${isActive(item.path) ? "text-sidebar-primary" : ""}`
              })}
              {item.label}
            </Button>
          </Link>
        ))}
        
        <div className="py-2">
          <SidebarVoiceAssistant />
        </div>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-left text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
        >
          <LogOut className="mr-2 h-5 w-5" />
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
