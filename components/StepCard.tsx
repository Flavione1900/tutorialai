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
      case 'layout': return <Layout className="w-12 h-12 text-white" />;
      case 'code': return <Code className="w-12 h-12 text-white" />;
      case 'link': return <Link className="w-12 h-12 text-white" />;
      case 'rocket': return <Rocket className="w-12 h-12 text-white" />;
      default: return null;
    }
  };

  return (
    <div 
      id={step.id} 
      className={`min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div 
        className={`absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none`}
        style={{ 
          background: `radial-gradient(circle at ${isReversed ? '10%' : '90%'} 50%, ${step.color}, transparent 50%)` 
        }} 
      />

      <div className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
        
        {/* Visual Content (Illustration placeholder) */}
        <div className={`order-2 ${isReversed ? 'md:order-2' : 'md:order-1'} group`}>
            <div className={`relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm aspect-video flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]`}>
               <div className={`absolute inset-0 opacity-20 bg-gradient-to-br from-slate-800 to-${step.color.replace('#', '')}/30`}></div>
               
               <div className="relative z-10 text-center p-8">
                  <div className={`inline-flex items-center justify-center p-6 rounded-full mb-6 shadow-lg`} style={{ backgroundColor: step.color }}>
                    <Icon />
                  </div>
                  <div className="text-slate-400 font-mono text-sm">
                    {step.iconName === 'layout' && (
                        <div className="flex flex-col gap-2 items-center text-xs">
                            <span className="bg-slate-900 px-3 py-1 rounded border border-slate-600">Prompt: "Genera HTML/Tailwind da questa img..."</span>
                            <span className="bg-slate-900 px-3 py-1 rounded text-purple-400 border border-slate-600">Input: Screenshot / Figma Dev Mode</span>
                        </div>
                    )}
                    {step.iconName === 'code' && (
                         <div className="text-left bg-slate-900 p-4 rounded text-xs border border-slate-700">
                            <span className="text-gray-500">// Iterazione 2: Fix padding</span><br/>
                            <span className="text-purple-400">className</span>="<span className="text-green-400">p-8</span> <span className="text-red-400 line-through">p-4</span> rounded-xl shadow-lg"
                         </div>
                    )}
                     {step.iconName === 'link' && (
                        <div className="flex gap-4 items-center justify-center">
                            <div className="w-12 h-16 border border-slate-600 rounded bg-slate-800 flex items-center justify-center text-[8px]">Home</div>
                            <div className="h-0.5 w-8 bg-blue-500"></div>
                            <div className="w-12 h-16 border border-blue-500 rounded bg-slate-800 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center text-[8px]">Dash</div>
                        </div>
                    )}
                    {step.iconName === 'rocket' && (
                        <div className="flex flex-col gap-2 items-start text-xs">
                           <div className="flex items-center gap-2 text-green-400">
                              <CheckCircle2 className="w-3 h-3" /> <span>Real Code</span>
                           </div>
                           <div className="flex items-center gap-2 text-green-400">
                              <CheckCircle2 className="w-3 h-3" /> <span>Responsive</span>
                           </div>
                           <div className="flex items-center gap-2 text-green-400">
                              <CheckCircle2 className="w-3 h-3" /> <span>Dynamic Data</span>
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
             <span className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full border-2 text-xl font-bold font-mono" style={{ borderColor: step.color, color: step.color }}>
                {step.number}
             </span>
             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{step.title}</h2>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            {step.description}
          </p>

          <ul className="space-y-4 mt-6">
            {step.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-400">
                <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: step.color }} />
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 animate-bounce cursor-pointer z-20 backdrop-blur-sm"
          aria-label="Vai al prossimo step"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default StepCard;