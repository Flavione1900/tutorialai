import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StepCard from './components/StepCard';
import { StepData } from './types';

const steps: StepData[] = [
  {
    id: 'step-1',
    number: 1,
    title: 'Interazione con l\'IA',
    description: "Il primo passo non è scrivere codice, ma comunicare visivamente. Usa Google AI Studio o ChatGPT come un 'Junior Developer' velocissimo.",
    details: [
      "Fai uno screenshot della tua UI su Figma e incollalo nella chat con l'IA.",
      "In alternativa, usa la 'Dev Mode' di Figma: copia il CSS/struttura e incollalo nel prompt.",
      "Chiedi esplicitamente: 'Converti questa immagine in HTML e Tailwind CSS moderno'.",
      "Specifica il contesto (es. 'Usa Flexbox, font Inter e sfondo dark')."
    ],
    iconName: 'layout',
    color: '#A259FF' // Purple (AI context)
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Iterazione e Fedeltà',
    description: "L'IA raramente è perfetta al primo colpo. Il segreto è l'iterazione. Rifinisci il risultato fino a raggiungere la fedeltà del design originale.",
    details: [
      "Confronta il risultato HTML con il design Figma.",
      "Chiedi correzioni specifiche: 'Aumenta il padding della card', 'Il colore del bottone è errato'.",
      "Incolla nuovamente screenshot delle parti venute male per farle correggere.",
      "Continua finché la pagina (es. la Dashboard) non è pixel-perfect."
    ],
    iconName: 'code',
    color: '#F24E1E' // Orange/Red (Refining heat)
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Espansione e Collegamenti',
    description: "Una volta ottenuta la prima pagina perfetta, scala il progetto. Crea le altre viste e chiedi all'IA di collegarle in un vero prototipo.",
    details: [
      "Ripeti il processo di screenshot/codice per le pagine secondarie (es. Dettaglio, Settings).",
      "Chiedi all'IA: 'Ora crea un router per navigare tra la Home e questa nuova pagina'.",
      "Definisci le transizioni e gli stati attivi della navigazione.",
      "Unisci i vari file in un unico progetto coerente (es. usando React Router)."
    ],
    iconName: 'link',
    color: '#1ABCFE' // Blue (Linking)
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Vantaggi del Codice',
    description: "Perché preferire questo metodo a un prototipo statico su Figma? Perché alla fine ottieni un prodotto reale, non solo un disegno.",
    details: [
      "Logica Reale: Puoi inserire dati veri, form funzionanti e chiamate API.",
      "Responsive Vero: Testi il comportamento su tutti i dispositivi, non solo su frame fissi.",
      "Base per Sviluppo: Il codice generato è il punto di partenza per il software finale.",
      "Fluidità: Le animazioni CSS/JS sono molto più fluide di quelle emulate da Figma."
    ],
    iconName: 'rocket',
    color: '#0ACF83' // Green (Success/Advantages)
  }
];

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-indigo-500/30">
      <Navigation />
      
      <main>
        <Hero />
        
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <StepCard 
              key={step.id} 
              step={step} 
              isReversed={index % 2 !== 0}
              nextStepId={index < steps.length - 1 ? steps[index + 1].id : 'cta-section'}
            />
          ))}
        </div>

        {/* Call to Action Footer */}
        <section id="cta-section" className="py-24 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">Il futuro del design è nel codice.</h2>
                <p className="text-slate-400">Inizia oggi a convertire i tuoi design con l'aiuto dell'Intelligenza Artificiale.</p>
                <button 
                  onClick={() => document.getElementById('step-1')?.scrollIntoView({behavior: 'smooth'})}
                  className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors"
                >
                    Ricomincia il percorso
                </button>
             </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 bg-slate-950">
        <p>© {new Date().getFullYear()} Figma2Code AI Guide.</p>
      </footer>
    </div>
  );
};

export default App;