'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const depoimentosOriginais = [
    {
        nome: 'Ana Luiza Moraes',
        texto: 'Uma escola de qualidade, que entrega um padrão internacional de ensino para os alunos!',
        estrelas: 5,
        data: 'há 5 meses'
    },
    {
        nome: 'Ricardo Silva',
        texto: 'Foco total em conversação. Finalmente sinto que estou perdendo o medo de falar inglês.',
        estrelas: 5,
        data: 'há 1 mês'
    },
    {
        nome: 'Juliana Costa',
        texto: 'Ambiente acolhedor e material didático de altíssima qualidade. Recomendo para todas as idades!',
        estrelas: 5,
        data: 'há 3 meses'
    },
    {
        nome: 'Marcos Oliveira',
        texto: 'Metodologia inovadora e professores extremamente preparados. A 4U mudou minha visão sobre aprender inglês.',
        estrelas: 5,
        data: 'há 2 meses'
    }
];

// Triplicamos a lista para permitir o loop infinito visual
const depoimentos = [...depoimentosOriginais, ...depoimentosOriginais, ...depoimentosOriginais];

export default function Feedbacks() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
            const itemWidth = clientWidth; // No seu snap-center mobile o item ocupa o clientWidth
            
            let scrollTo = direction === 'left' ? scrollLeft - itemWidth : scrollLeft + itemWidth;

            // Lógica de reset silencioso para o loop infinito
            // Se chegar perto do início (primeiro terço), pula para o meio
            if (scrollTo <= 0 && direction === 'left') {
                scrollRef.current.scrollLeft = scrollWidth / 3;
                scrollTo = (scrollWidth / 3) - itemWidth;
            } 
            // Se chegar perto do fim (último terço), pula para o meio
            else if (scrollTo >= (scrollWidth * 2) / 3 && direction === 'right') {
                scrollRef.current.scrollLeft = scrollWidth / 3 - itemWidth;
                scrollTo = scrollWidth / 3;
            }

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section id="feedbacks" className="py-24 bg-zinc-50 scroll-mt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-950 uppercase tracking-tighter mb-4">
                        O que dizem <span className="text-yellow-500">nossos alunos</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                        <span className="font-bold text-zinc-800">5.0 no Google Maps</span>
                    </div>
                </div>

                <div className="relative group">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-40 bg-white p-3 rounded-full shadow-xl border border-zinc-100 text-zinc-400 hover:text-yellow-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                    >
                        <ChevronLeft size={30} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {depoimentos.map((feedback, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % depoimentosOriginais.length) * 0.1 }}
                                className="min-w-full md:min-w-[calc(33.333%-1.5rem)] snap-center bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 relative group/card hover:shadow-xl transition-all duration-500"
                            >
                                <Quote className="absolute top-6 right-8 text-yellow-500/20 group-hover/card:text-yellow-500/40 transition-colors" size={40} />

                                <div className="flex text-yellow-500 mb-4">
                                    {[...Array(feedback.estrelas)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-zinc-600 font-medium italic mb-6 leading-relaxed">
                                    "{feedback.texto}"
                                </p>

                                <div className="border-t border-zinc-50 pt-4 flex justify-between items-center">
                                    <span className="font-black text-zinc-900 uppercase text-xs tracking-widest">{feedback.nome}</span>
                                    <span className="text-[10px] text-zinc-400 font-bold uppercase">{feedback.data}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-40 bg-white p-3 rounded-full shadow-xl border border-zinc-100 text-zinc-400 hover:text-yellow-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                    >
                        <ChevronRight size={30} />
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="https://www.google.com/search?q=4u+language+school...#lrd=0x94b7b9a75852175d:0xd1a807533b79b450,1,,,,"
                        target="_blank"
                        className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-yellow-600 transition-colors border-b-2 border-transparent hover:border-yellow-500 pb-1"
                    >
                        Ver todas as avaliações no Google
                    </a>
                </div>
            </div>
        </section>
    );
}