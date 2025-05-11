import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card } from '@/components/ui/card';

// Custom node data
const HR = [
    {
      id: 'hr-dept',
      position: { x: 250, y: 0 },
      data: {
        label: 'HR Department',
        image: 'https://i.pravatar.cc/100?img=5'
      },
      type: 'teamMember',
    },
    {
      id: 'hr-manager',
      position: { x: 250, y: 150 },
      data: {
        label: 'HR Manager',
        image: 'https://i.pravatar.cc/100?img=10'
      },
      type: 'teamMember',
    },
    {
      id: 'recruiter',
      position: { x: 50, y: 300 },
      data: {
        label: 'Recruiter',
        image: 'https://i.pravatar.cc/100?img=20'
      },
      type: 'teamMember',
    },
    {
      id: 'hr-executive',
      position: { x: 450, y: 300 },
      data: {
        label: 'HR Executive',
        image: 'https://i.pravatar.cc/100?img=25'
      },
      type: 'teamMember',
    },
    {
      id: 'employee-relations',
      position: { x: 250, y: 450 },
      data: {
        label: 'Employee Relations Officer',
        image: 'https://i.pravatar.cc/100?img=30'
      },
      type: 'teamMember',
    }]; 
    
const engineeringTeam = [
  {
    id: 'vp-eng',
    position: { x: 250, y: 100 },
    data: { 
      label: 'VP of Engineering',
      name: 'Taylor Smith',
      image: 'https://i.pravatar.cc/100?img=2',
      department: 'Engineering'
    },
    type: 'teamMember',
  },
  {
    id: 'frontend-lead',
    position: { x: 100, y: 200 },
    data: { 
      label: 'Frontend Lead',
      name: 'Jamie Parker',
      image: 'https://i.pravatar.cc/100?img=3',
      department: 'Engineering'
    },
    type: 'teamMember',
  },
  {
    id: 'backend-lead',
    position: { x: 250, y: 200 },
    data: { 
      label: 'Backend Lead',
      name: 'Casey Wilson',
      image: 'https://i.pravatar.cc/100?img=4',
      department: 'Engineering'
    },
    type: 'teamMember',
  },
  {
    id: 'data-lead',
    position: { x: 400, y: 200 },
    data: { 
      label: 'Data Science Lead',
      name: 'Riley Brown',
      image: 'https://i.pravatar.cc/100?img=5',
      department: 'Engineering'
    },
    type: 'teamMember',
  },
  {
    id: 'fe-dev-1',
    position: { x: 50, y: 300 },
    data: { 
      label: 'Frontend Developer',
      name: 'Jordan Lee',
      image: 'https://i.pravatar.cc/100?img=6',
      department: 'Engineering'
    },
    type: 'teamMember',
  },
  {
    id: 'fe-dev-2',
    position: { x: 150, y: 300 },
    data: { 
      label: 'Frontend Developer',
      name: 'Morgan Scott',
      image: 'https://i.pravatar.cc/100?img=7',
      department: 'Engineering'
    },
    type: 'teamMember',
  }
];

const productTeam = [
  {
    id: 'cpo',
    position: { x: 250, y: 5 },
    data: { 
      label: 'CPO', 
      name: 'Sam Richards',
      image: 'https://i.pravatar.cc/100?img=10',
      department: 'Product'
    },
    type: 'teamMember',
  },
  {
    id: 'pm-lead',
    position: { x: 250, y: 100 },
    data: { 
      label: 'Product Lead',
      name: 'Jesse Kim',
      image: 'https://i.pravatar.cc/100?img=11',
      department: 'Product'
    },
    type: 'teamMember',
  },
  {
    id: 'pm-1',
    position: { x: 150, y: 200 },
    data: { 
      label: 'Product Manager',
      name: 'Avery Davis',
      image: 'https://i.pravatar.cc/100?img=12',
      department: 'Product'
    },
    type: 'teamMember',
  },
  {
    id: 'pm-2',
    position: { x: 350, y: 200 },
    data: { 
      label: 'Product Manager',
      name: 'Blake Martinez',
      image: 'https://i.pravatar.cc/100?img=13',
      department: 'Product'
    },
    type: 'teamMember',
  }
];

const designTeam = [
  {
    id: 'head-design',
    position: { x: 250, y: 5 },
    data: { 
      label: 'Design Director', 
      name: 'Quinn Thompson',
      image: 'https://i.pravatar.cc/100?img=20',
      department: 'Design'
    },
    type: 'teamMember',
  },
  {
    id: 'ux-lead',
    position: { x: 150, y: 100 },
    data: { 
      label: 'UX Lead',
      name: 'Reese Patel',
      image: 'https://i.pravatar.cc/100?img=21',
      department: 'Design'
    },
    type: 'teamMember',
  },
  {
    id: 'ui-lead',
    position: { x: 350, y: 100 },
    data: { 
      label: 'UI Lead',
      name: 'Drew Carter',
      image: 'https://i.pravatar.cc/100?img=22',
      department: 'Design'
    },
    type: 'teamMember',
  }
];

const marketingTeam = [
  {
    id: 'cmo',
    position: { x: 250, y: 5 },
    data: { 
      label: 'CMO', 
      name: 'Cameron White',
      image: 'https://i.pravatar.cc/100?img=30',
      department: 'Marketing'
    },
    type: 'teamMember',
  },
  {
    id: 'marketing-director',
    position: { x: 250, y: 100 },
    data: { 
      label: 'Marketing Director',
      name: 'Skyler Green',
      image: 'https://i.pravatar.cc/100?img=31',
      department: 'Marketing'
    },
    type: 'teamMember',
  }
];

const salesTeam = [
  {
    id: 'cso',
    position: { x: 250, y: 5 },
    data: { 
      label: 'CSO', 
      name: 'Hayden Ross',
      image: 'https://i.pravatar.cc/100?img=40',
      department: 'Sales'
    },
    type: 'teamMember',
  },
  {
    id: 'sales-director',
    position: { x: 250, y: 100 },
    data: { 
      label: 'Sales Director',
      name: 'Tegan Murphy',
      image: 'https://i.pravatar.cc/100?img=41',
      department: 'Sales'
    },
    type: 'teamMember',
  }
];

// Engineering team edges
const engineeringEdges = [
  { id: 'e1-2', source: 'cto', target: 'vp-eng' },
  { id: 'e2-3', source: 'vp-eng', target: 'frontend-lead' },
  { id: 'e2-4', source: 'vp-eng', target: 'backend-lead' },
  { id: 'e2-5', source: 'vp-eng', target: 'data-lead' },
  { id: 'e3-6', source: 'frontend-lead', target: 'fe-dev-1' },
  { id: 'e3-7', source: 'frontend-lead', target: 'fe-dev-2' },
];

// Product team edges
const productEdges = [
  { id: 'p1-2', source: 'cpo', target: 'pm-lead' },
  { id: 'p2-3', source: 'pm-lead', target: 'pm-1' },
  { id: 'p2-4', source: 'pm-lead', target: 'pm-2' },
];

// Design team edges
const designEdges = [
  { id: 'd1-2', source: 'head-design', target: 'ux-lead' },
  { id: 'd1-3', source: 'head-design', target: 'ui-lead' },
];

// Marketing team edges
const marketingEdges = [
  { id: 'm1-2', source: 'cmo', target: 'marketing-director' },
];

// Sales team edges
const salesEdges = [
  { id: 's1-2', source: 'cso', target: 'sales-director' },
];

// Role data mapping
const roleData = {
  engineering: { nodes: engineeringTeam, edges: engineeringEdges },
  product: { nodes: productTeam, edges: productEdges },
  design: { nodes: designTeam, edges: designEdges },
  marketing: { nodes: marketingTeam, edges: marketingEdges },
  sales: { nodes: salesTeam, edges: salesEdges },
};

// Custom team member node component
const TeamMemberNode = ({ data }) => {
  return (
    <Card className="p-3 min-w-[180px]">
      <div className="flex items-center gap-3">
        <img 
          src={data.image} 
          alt={data.name} 
          className="w-10 h-10 rounded-full object-cover" 
        />
        <div>
          <div className="font-medium text-sm">{data.name}</div>
          <div className="text-xs text-muted-foreground">{data.label}</div>
        </div>
      </div>
    </Card>
  );
};

// Define node types
const nodeTypes = {
  teamMember: TeamMemberNode,
};

const TeamHierarchyFlowChart = ({ roleId }) => {
  const { nodes: initialNodes, edges: initialEdges } = roleData[roleId] || { nodes: [], edges: [] };
  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => {
    setEdges(eds => addEdge(params, eds));
  }, [setEdges]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Controls />
        <Background color="#aaa" gap={16} />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default TeamHierarchyFlowChart;