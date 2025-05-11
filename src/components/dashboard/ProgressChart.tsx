
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', lessons: 5, quizzes: 4 },
  { name: 'Tue', lessons: 7, quizzes: 6 },
  { name: 'Wed', lessons: 10, quizzes: 8 },
  { name: 'Thu', lessons: 8, quizzes: 5 },
  { name: 'Fri', lessons: 12, quizzes: 9 },
  { name: 'Sat', lessons: 3, quizzes: 2 },
  { name: 'Sun', lessons: 4, quizzes: 3 },
];

const ProgressChart = () => {
  return (
    <div className="dashboard-card h-[340px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Weekly Activity</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-bolt-brightPurple rounded"></div>
            <span className="text-xs text-muted-foreground">Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-bolt-accent rounded"></div>
            <span className="text-xs text-muted-foreground">Quizzes</span>
          </div>
        </div>
      </div>
      
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--secondary))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="lessons" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="quizzes" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
