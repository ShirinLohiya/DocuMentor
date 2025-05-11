
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { Zap } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Left side: Logo and background */}
      <div className="w-full md:w-1/2 bg-secondary relative overflow-hidden hidden md:flex md:items-center md:justify-center">
        <div className="absolute inset-0 purple-gradient opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-white/10 rounded-full blur-sm"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 border-2 border-white/20 rounded-full blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center p-8">
          <Link to="/" className="flex items-center justify-center gap-2 mb-8">
            <Zap className="w-10 h-10 text-white" />
            <span className="font-bold text-3xl text-white">DocuMentor</span>
          </Link>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Training
          </h2>
          
          <p className="text-lg text-white/80 max-w-md mx-auto">
            Our AI-powered platform converts documents into interactive learning experiences in seconds.
          </p>
        </div>
      </div>
      
      {/* Right side: Login form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 animate-fade-in">
        {/* Mobile logo (visible on small screens) */}
        <div className="md:hidden text-center mb-8">
          <Link to="/" className="flex items-center justify-center gap-2">
            <Zap className="w-8 h-8 text-bolt-brightPurple" />
            <span className="font-bold text-2xl">TrainAI</span>
          </Link>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
