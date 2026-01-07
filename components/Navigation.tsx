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
    <nav className="fixed top-0 left-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Layers className="w-6 h-6 text-indigo-500" />
            <span className="font-bold text-lg tracking-tight text-white">Figma2<span className="text-indigo-500">Code</span></span>
        </div>
        
        <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('step-1')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">1. Input IA</button>
            <button onClick={() => scrollToSection('step-2')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">2. Fedeltà</button>
            <button onClick={() => scrollToSection('step-3')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">3. Collegamenti</button>
            <button onClick={() => scrollToSection('step-4')} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">4. Vantaggi</button>
        </div>

        <button 
            onClick={() => scrollToSection('step-1')}
            className="px-4 py-2 bg-white text-slate-900 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
            Inizia Ora
        </button>
      </div>
    </nav>
  );
};

export default Navigation;