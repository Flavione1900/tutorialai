import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleStart = () => {
    document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-16 bg-neutral-950">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="inline-block px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-4">
            Workflow potenziato da <span className="text-primary">Google AI Studio</span> e ChatGPT
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Da Figma a Codice <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary-dark">in 4 Step con l'IA</span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Scopri come dialogare con l'IA per trasformare i tuoi design in prototipi web reali, interattivi e scalabili.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
                onClick={handleStart}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(13,158,172,0.2)] hover:shadow-[0_0_30px_rgba(13,158,172,0.4)]"
            >
                Scopri il Metodo
            </button>
            <a 
                href="https://aistudio.google.com/" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 bg-transparent hover:bg-neutral-900 border border-neutral-700 hover:border-primary hover:text-primary text-white rounded-full font-bold text-lg transition-all"
            >
                Apri Google AI Studio
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary">
        <ArrowDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;