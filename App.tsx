import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StepCard from './components/StepCard';
import { StepData } from './types';
import { CheckCircle2 } from 'lucide-react';

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
    color: '#0D9EAC'
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
    color: '#0D9EAC'
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
    color: '#0D9EAC'
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Prototipi Realistici',
    description: "Trasforma un'idea statica in un'esperienza d'uso tangibile. Ottieni un prototipo che non si limita a 'sembrare' vero, ma che risponde realmente alle azioni dell'utente.",
    details: [
      "Feedback Immediato: Sperimenta la fluidità reale di hover, transizioni e micro-interazioni.",
      "Dati Dinamici: Testa il layout con testi, immagini e liste reali, non solo segnaposto statici.",
      "User Testing: Condividi un link funzionante per raccogliere feedback accurati sul flusso utente.",
      "Responsività Vera: Verifica come l'interfaccia si adatta a ogni schermo, dal desktop allo smartphone."
    ],
    iconName: 'rocket',
    color: '#0D9EAC'
  }
];

const App: React.FC = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-50 selection:bg-primary selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <div className="flex flex-col bg-neutral-950">
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
        <section id="cta-section" className="py-24 px-6 text-center bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
             <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <div className="inline-flex p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-2">
                   <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Porta i tuoi design in vita.</h2>
                <p className="text-neutral-400">Non limitarti a disegnare. Crea prototipi che i tuoi utenti possono finalmente toccare con mano.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => document.getElementById('step-1')?.scrollIntoView({behavior: 'smooth'})}
                    className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors shadow-[0_0_20px_rgba(13,158,172,0.3)]"
                  >
                      Ricomincia il percorso
                  </button>
                  <a 
                      href="https://aistudio.google.com/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-8 py-3 bg-neutral-900 text-white border border-neutral-800 rounded-full font-bold hover:border-primary transition-all"
                  >
                      Vai a Google AI Studio
                  </a>
                </div>
             </div>
        </section>
      </main>

      <footer className="py-8 text-center text-neutral-600 text-sm border-t border-neutral-900 bg-neutral-950">
        <p>© {new Date().getFullYear()} Figma2Code AI Guide.</p>
      </footer>
    </div>
  );
};

export default App;