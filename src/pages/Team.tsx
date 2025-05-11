
import React from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { Users, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// This is a placeholder component for the Team page
// In a real implementation, this would include the hierarchy flowchart
// Using a visual library like react-flow or similar

const TeamCard = ({ title, count }: { title: string; count: number }) => {
  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="p-4 bg-secondary rounded-lg text-center">
        <p className="text-2xl font-bold text-bolt-brightPurple">{count}</p>
        <p className="text-sm text-muted-foreground">Team Members</p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">
          This would contain a hierarchical organizational chart of the {title.toLowerCase()} team.
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  const { toast } = useToast();
  
  const handleAddMember = () => {
    toast({
      title: "Feature not implemented",
      description: "This feature would allow adding team members to the organizational chart.",
    });
  };

  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-bolt-brightPurple" />
              <h1 className="text-2xl font-bold">Team Hierarchy</h1>
            </div>
            
            <Button onClick={handleAddMember}>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Team Member
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamCard title="Engineering" count={8} />
            <TeamCard title="Design" count={4} />
            <TeamCard title="Product" count={3} />
            <TeamCard title="Marketing" count={5} />
            <TeamCard title="Sales" count={6} />
            <TeamCard title="Customer Support" count={7} />
          </div>
          
          <div className="mt-6 p-6 border border-dashed border-border rounded-lg flex flex-col items-center justify-center text-center">
            <p className="text-muted-foreground mb-4">
              In a complete implementation, this page would display interactive org charts for each department using a library like @xyflow/react or D3.js.
            </p>
            <p className="text-sm text-bolt-brightPurple">
              The charts would be interactive, allowing users to zoom, pan, and click on individual nodes to see more details.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Team;
