
import React, { useState } from 'react';

interface ProcessAccordionProps {
  process: {
    goal: string;
    challenges: string;
    results: string;
  };
  labels: {
    goal: string;
    challenges: string;
    results: string;
  };
}

const ProcessAccordion: React.FC<ProcessAccordionProps> = ({ process, labels }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const steps = [
    { label: labels.goal, content: process.goal },
    { label: labels.challenges, content: process.challenges },
    { label: labels.results, content: process.results },
  ];

  return (
    <div className="space-y-4">
      {steps.map((step, idx) => (
        <div key={idx} className="border-b border-white/5">
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between py-4 group"
          >
            <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${openIndex === idx ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'}`}>
              0{idx + 1}. {step.label}
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-cyan-400' : 'text-gray-500'}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessAccordion;
