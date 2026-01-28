'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { q: "Qual a idade mínima para começar?", a: "Atendemos alunos a partir dos 4 anos com metodologia lúdica e específica para cada faixa etária." },
  { q: "A escola prepara para certificados internacionais?", a: "Sim, somos especialistas em preparatórios para os exames de Cambridge English Qualifications." },
  { q: "Quais são os horários de aula?", a: "Temos turmas flexíveis de segunda a sexta (08h às 20h) e aos sábados (08h às 12h)." },
  { q: "Preciso comprar material didático à parte?", a: "Trabalhamos com os melhores materiais do mercado. Os detalhes sobre aquisição são passados no ato da matrícula." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-zinc-950 uppercase tracking-tighter mb-12 text-center">
          Dúvidas <span className="text-yellow-500">Frequentes</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-100 rounded-[1.5rem] overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left bg-zinc-50 hover:bg-zinc-100 transition-colors"
              >
                <span className="font-bold text-zinc-800 text-sm md:text-base uppercase tracking-tight">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="text-yellow-600" /> : <Plus size={20} className="text-yellow-500" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white px-6 py-4 text-zinc-600 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}