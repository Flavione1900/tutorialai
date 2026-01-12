import React from 'react';
import { StepData } from '../types';
import { Layout, Code, Link, CheckCircle2, Rocket, ArrowDown } from 'lucide-react';

interface StepCardProps {
  step: StepData;
  isReversed: boolean;
  nextStepId?: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, isReversed, nextStepId }) => {
  const Icon = () => {
    switch (step.iconName) {
      case 'layout': return <Layout className="w-12 h-12 text-primary" />;
      case 'code': return <Code className="w-12 h-12 text-primary" />;
      case 'link': return <Link className="w-12 h-12 text-primary" />;
      case 'rocket': return <Rocket className="w-12 h-12 text-primary" />;
      default: return null;
    }
  };

  return (
    <div 
      id={step.id} 
      className={`min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden bg-neutral-950`}
    >
      {/* Background decoration - Colored tint */}
      <div 
        className={`absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none`}
        style={{ 
          background: `radial-gradient(circle at ${isReversed ? '10%' : '90%'} 50%, #0D9EAC, transparent 60%)` 
        }} 
      />

      <div className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
        
        {/* Visual Content (Iconography) */}
        <div className={`order-2 ${isReversed ? 'md:order-2' : 'md:order-1'} group`}>
            <div className={`relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900/50 backdrop-blur-sm aspect-video flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-primary/30`}>
               <div className={`absolute inset-0 opacity-10 bg-gradient-to-br from-primary/20 to-neutral-900`}></div>
               
               <div className="relative z-10 text-center p-8">
                  <div className={`inline-flex items-center justify-center p-6 rounded-full mb-6 shadow-[0_0_20px_rgba(13,158,172,0.15)] bg-neutral-900 border border-neutral-800`}>
                    <Icon />
                  </div>
                  <div className="text-neutral-500 font-mono text-sm">
                    {step.iconName === 'layout' && (
                        <div className="flex flex-col gap-2 items-center text-xs">
                            <span className="bg-neutral-950 text-neutral-300 px-3 py-1 rounded border border-neutral-800">Prompt: "Genera HTML/Tailwind..."</span>
                            <span className="bg-neutral-950 text-primary px-3 py-1 rounded border border-primary/30">Input: Screenshot / Figma</span>
                        </div>
                    )}
                    {step.iconName === 'code' && (
                         <div className="text-left bg-neutral-950 p-4 rounded text-xs border border-neutral-800">
                            <span className="text-neutral-600">// Iterazione 2: Fix</span><br/>
                            <span className="text-primary">className</span>="<span className="text-white">p-8</span> <span className="text-neutral-700 line-through">p-4</span> rounded-xl"
                         </div>
                    )}
                     {step.iconName === 'link' && (
                        <div className="flex gap-4 items-center justify-center">
                            <div className="w-12 h-16 border border-neutral-700 rounded bg-neutral-900 flex items-center justify-center text-[8px] text-neutral-400">Home</div>
                            <div className="h-px w-8 bg-primary"></div>
                            <div className="w-12 h-16 border border-primary rounded bg-neutral-900 shadow-[0_0_10px_rgba(13,158,172,0.2)] flex items-center justify-center text-[8px] text-primary">Dash</div>
                        </div>
                    )}
                    {step.iconName === 'rocket' && (
                        <div className="flex flex-col gap-2 items-start text-xs">
                           <div className="flex items-center gap-2 text-white">
                              <CheckCircle2 className="w-3 h-3 text-primary" /> <span>Esperienza Reale</span>
                           </div>
                           <div className="flex items-center gap-2 text-white">
                              <CheckCircle2 className="w-3 h-3 text-primary" /> <span>Dati Dinamici</span>
                           </div>
                           <div className="flex items-center gap-2 text-white">
                              <CheckCircle2 className="w-3 h-3 text-primary" /> <span>Test su Mobile</span>
                           </div>
                        </div>
                    )}
                  </div>
               </div>
            </div>
        </div>

        {/* Text Content */}
        <div className={`order-1 ${isReversed ? 'md:order-1' : 'md:order-2'} space-y-6`}>
          <div className="flex items-center gap-4">
             <span className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full border-2 border-primary text-primary text-xl font-bold font-mono shadow-[0_0_15px_rgba(13,158,172,0.2)]">
                {step.number}
             </span>
             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{step.title}</h2>
          </div>
          
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
            {step.description}
          </p>

          <ul className="space-y-4 mt-6">
            {step.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-neutral-400">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-primary" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Navigation Arrow */}
      {nextStepId && (
        <button
          onClick={() => document.getElementById(nextStepId)?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-neutral-900/50 border border-neutral-700/50 text-neutral-500 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 animate-bounce cursor-pointer z-20 backdrop-blur-sm"
          aria-label="Vai al prossimo step"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default StepCard;