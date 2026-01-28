// src/components/Services.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const programas = [
    {
        title: 'Kids & Juniors',
        age: 'Crianças 3–9 anos',
        image: '/kids-class.jpg', // Certifique-se de adicionar estas fotos na pasta public
        features: ['Aulas presenciais ou ao vivo', 'Aprendizado através de artes e ciências', 'Desenvolvimento da autonomia'],
    },
    {
        title: 'Teens',
        age: 'Adolescentes 10–17 anos',
        image: '/teens-class.jpg',
        features: ['Inglês que conecta com o mundo', 'Foco em pensamento crítico', 'Preparação para o futuro'],
    },
    {
        title: 'Adultos',
        age: '18 anos ou mais',
        image: '/adults-class.jpg',
        features: ['Foco total em conversação', 'Resultados rápidos e reais', 'Inglês para o mercado de trabalho'],
    },
];

export default function Services() {
    return (
        <section id="cursos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center ">

                <h2 className="text-4xl md:text-5xl font-black text-zinc-950 uppercase tracking-tighter mb-4">
                    Nossos <span className="text-yellow-500">Programas</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {programas.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-zinc-50 rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Espaço para a Foto */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-sm py-3 text-center">
                                    <span className="text-white text-[11px] uppercase tracking-[0.2em] font-medium">
                                        {item.age}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-semibold text-zinc-800 mb-6 tracking-tight">
                                    {item.title}
                                </h3>

                                <ul className="space-y-4 mb-8">
                                    {item.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-4 text-[15px] text-zinc-800 font-semibold leading-snug">
                                            <CheckCircle2 size={20} className="text-[#F2B705] flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 border border-yellow-400 text-zinc-800 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-yellow-400 transition-all">
                                    Saiba mais
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}