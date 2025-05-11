
import React from 'react';
import { Eye, FileText, MoreHorizontal } from 'lucide-react';

const documents = [
  {
    title: 'Company Onboarding Guide',
    type: 'PDF',
    lastUpdated: '2 hours ago',
    progress: 75,
  },
  {
    title: 'Sales Training Manual',
    type: 'PDF',
    lastUpdated: '1 day ago',
    progress: 100,
  },
  {
    title: 'Compliance Policy',
    type: 'PDF',
    lastUpdated: '3 days ago',
    progress: 45,
  },
  {
    title: 'Product Knowledge Base',
    type: 'PDF',
    lastUpdated: '1 week ago',
    progress: 90,
  },
];

const RecentDocuments = () => {
  return (
    <div className="dashboard-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Recent Documents</h2>
        <button className="text-sm text-bolt-brightPurple hover:underline">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors">
            <div className="flex-shrink-0 bg-bolt-purple/20 text-bolt-brightPurple p-2 rounded">
              <FileText className="h-5 w-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <h3 className="font-medium truncate">{doc.title}</h3>
                <span className="text-xs text-muted-foreground">{doc.lastUpdated}</span>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex-1 mr-4">
                  <div className="w-full bg-secondary h-1.5 rounded-full">
                    <div 
                      className="bg-bolt-brightPurple h-1.5 rounded-full" 
                      style={{ width: `${doc.progress}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-xs font-medium">{doc.progress}%</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-secondary rounded">
                <Eye className="h-4 w-4 text-muted-foreground" />
              </button>
              <button className="p-1 hover:bg-secondary rounded">
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDocuments;
