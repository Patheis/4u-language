'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const equipeOriginal = [
  {
    nome: 'Teacher Fernanda',
    cargo: 'Coordenadora',
    foto: '/4u-language/equipe-1.png',
    bio: 'Especialista em exames de Cambridge com 10 anos de experiência.',
  },
  {
    nome: 'Teacher Marcos',
    cargo: 'Kids Specialist',
    foto: '/equipe-2.jpg',
    bio: 'Apaixonado por ensinar inglês de forma lúdica para crianças.',
  },
  {
    nome: 'Teacher Laura',
    cargo: 'Adult Conversation Expert',
    foto: '/equipe-3.jpg',
    bio: 'Focada em resultados rápidos e fluência para o mercado de trabalho.',
  },
  {
    nome: 'Teacher Teste',
    cargo: 'Teste',
    foto: '/equipe-4.jpg',
    bio: 'Focada em teste ',
  }
];

// Duplicamos a lista para criar o efeito de loop infinito visual
const equipe = [...equipeOriginal, ...equipeOriginal, ...equipeOriginal];

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      
      // Lógica de Loop: Se chegar ao fim ou início, reseta a posição sem o usuário perceber
      let scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      if (scrollTo <= 0) {
        scrollRef.current.scrollLeft = scrollWidth / 3;
        scrollTo = (scrollWidth / 3) - clientWidth;
      } else if (scrollTo >= scrollWidth - clientWidth) {
        scrollRef.current.scrollLeft = scrollWidth / 3;
        scrollTo = (scrollWidth / 3) + clientWidth;
      }

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre-nos" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 uppercase tracking-tighter mb-4">
            Nossa <span className="text-yellow-500">Equipe</span>
          </h2>
          <p className="text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Conheça os profissionais dedicados que fazem da 4U a melhor experiência de aprendizado em Mococa.
          </p>
        </div>

        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-40 bg-white p-3 rounded-full shadow-xl border border-zinc-100 text-zinc-400 hover:text-yellow-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronLeft size={30} />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {equipe.map((membro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % equipeOriginal.length) * 0.1 }}
                className="min-w-full md:min-w-[calc(33.333%-1.5rem)] snap-center group/card"
              >
                <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-lg border-8 border-white group-hover/card:shadow-2xl transition-all duration-500 mb-8">
                  <Image
                    src={membro.foto}
                    alt={membro.nome}
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left">
                    <p className="text-white text-sm font-medium leading-relaxed italic">
                      "{membro.bio}"
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-zinc-50 border border-zinc-100 py-4 rounded-full shadow-sm flex flex-col items-center group-hover/card:bg-yellow-400 transition-colors duration-300"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 group-hover/card:text-zinc-900 transition-colors mb-1">
                    {membro.cargo}
                  </span>
                  <span className="text-lg font-black text-zinc-800 group-hover/card:text-zinc-950 transition-colors tracking-tight">
                    {membro.nome}
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-40 bg-white p-3 rounded-full shadow-xl border border-zinc-100 text-zinc-400 hover:text-yellow-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}