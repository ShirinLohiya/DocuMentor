import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-bolt-brightPurple" />
          <span className="font-bold text-xl tracking-tight">DocuMentor</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-bolt-brightPurple transition-colors">Home</Link>
          <a href="#features" className="font-medium hover:text-bolt-brightPurple transition-colors">Features</a>
          <a href="#how-it-works" className="font-medium hover:text-bolt-brightPurple transition-colors">How it works</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/login">
            <Button className="bg-bolt-brightPurple hover:bg-bolt-purple text-white">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-secondary border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="p-2 font-medium hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <a href="#features" className="p-2 font-medium hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="p-2 font-medium hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
              How it works
            </a>
            <div className="flex flex-col gap-3 mt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-bolt-brightPurple hover:bg-bolt-purple text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
