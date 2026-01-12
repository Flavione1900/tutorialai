import React from 'react';
import { Layers } from 'lucide-react';

const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <Layers className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors" />
            <span className="font-bold text-lg tracking-tight text-white">Figma2<span className="text-primary">Code</span></span>
        </div>
        
        <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('step-1')} className="text-sm font-medium text-neutral-400 hover:text-primary transition-colors">1. Input IA</button>
            <button onClick={() => scrollToSection('step-2')} className="text-sm font-medium text-neutral-400 hover:text-primary transition-colors">2. Fedeltà</button>
            <button onClick={() => scrollToSection('step-3')} className="text-sm font-medium text-neutral-400 hover:text-primary transition-colors">3. Collegamenti</button>
            <button onClick={() => scrollToSection('step-4')} className="text-sm font-medium text-neutral-400 hover:text-primary transition-colors">4. Vantaggi</button>
        </div>

        <button 
            onClick={() => scrollToSection('step-1')}
            className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors shadow-[0_0_15px_rgba(13,158,172,0.3)]"
        >
            Inizia Ora
        </button>
      </div>
    </nav>
  );
};

export default Navigation;