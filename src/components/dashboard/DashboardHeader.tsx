import React, { useState } from 'react';
import { Bell, Search, User, Heart, Settings as SettingsIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const DashboardHeader = () => {
  const { toast } = useToast();
  const [streakCount] = useState(5); // This would come from a real data source

  const handleFavoritesClick = () => {
    toast({
      title: "Favorites",
      description: "Your bookmarked quizzes will appear here",
    });
  };

  return (
    <header className="border-b border-border py-4 px-4 bg-background sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="md:w-72">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        
        <div className="flex-1 mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search for documents, lessons, quizzes..."
              className="w-full max-w-md pl-10 pr-4 py-2 rounded-md bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-bolt-brightPurple"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Streak Counter */}
          <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-bolt-brightPurple">{streakCount}</span>
            <span className="text-xs text-muted-foreground">day streak</span>
          </div>
          
          {/* Favorites Icon */}
          <Button 
            onClick={handleFavoritesClick}
            variant="ghost"
            size="icon"
            className="relative rounded-full hover:bg-secondary"
          >
            <Heart className="h-5 w-5 text-bolt-accent" />
          </Button>
          
          {/* Notifications */}
          <button className="relative p-2 rounded-md hover:bg-secondary">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-bolt-accent rounded-full"></span>
          </button>
          
          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-bolt-purple/30 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-bolt-brightPurple" />
            </div>
            <span className="font-medium text-sm hidden md:inline-block">Shirin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
