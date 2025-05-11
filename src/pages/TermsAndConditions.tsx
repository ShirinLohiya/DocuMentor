// src/pages/TermsAndConditions.tsx

import React from 'react';
import TermsDocument from '../components/document/TermsDocument';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { FileText } from 'lucide-react';



const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-bolt-brightPurple" />
              <h1 className="text-2xl font-bold">Terms and Conditions</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 shadow-md">
            <TermsDocument />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;
