'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from 'next/image';

const images = [
    '/logo-4u.jpg',
    '/4u-dentro1.png', 
    '/4u-fachada.png',
    '/4u-porta.png'

];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative bg-white min-h-screen flex items-center px-8 pt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

                {/* LADO DO TEXTO */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-20 text-center md:text-left"
                >
                    <h1 className="text-5xl md:text-7xl font-light text-zinc-950 leading-[1.1] mb-8 tracking-tighter">
                        Ainda não é <br />
                        <span className="font-semibold text-yellow-500 italic">nosso aluno?</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-10 text-zinc-600 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
                        Fale com a gente hoje mesmo e comece sua jornada global com uma metodologia exclusiva e focada em resultados.
                    </p>
                    <a
                        href="https://wa.me/551921720158"
                        className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-zinc-950 px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(242,183,5,0.3)] hover:shadow-[0_20px_40px_rgba(242,183,5,0.4)] hover:-translate-y-1 transition-all duration-300 inline-block active:scale-95 overflow-hidden group"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <span className="relative z-10">Quero uma aula experimental</span>
                    </a>
                </motion.div>

                {/* LADO DA ANIMAÇÃO (AJUSTADO PARA RETÂNGULO) */}
                <div className="relative h-[500px] md:h-[600px] flex items-center justify-center w-full">

                    {/* Brilho de Fundo */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[400px] bg-yellow-200 rounded-full blur-[100px] -z-10"
                    />

                    {/* Camada de Trás */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -8 }}
                        animate={{ opacity: 0.3, rotate: -5, x: 30, y: -15 }}
                        className="absolute w-72 h-52 md:w-[480px] md:h-[320px] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white z-0 bg-white"
                    >
                        <Image src={images[0]} alt="4U Layer" fill className="object-contain p-12 grayscale" />
                    </motion.div>

                    {/* Camada do Meio (Amarela) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: -2, scale: 1, x: -15 }}
                        className="absolute w-72 h-52 md:w-[480px] md:h-[320px] bg-yellow-400 rounded-[3rem] shadow-2xl z-10 flex items-center justify-center border-4 border-white"
                    >
                        <span className="text-white font-black text-8xl opacity-20 uppercase tracking-tighter">4U</span>
                    </motion.div>

                    {/* Camada Principal (Carrossel Retangular) */}
                    <div className="relative w-72 h-52 md:w-[480px] md:h-[320px] z-30">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-4 md:border-8 border-white bg-white"
                            >
                                <Image
                                    src={images[currentIndex]}
                                    alt="4U Language School"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* BALÕES REPOSICIONADOS PARA NÃO SUMIREM */}
                        
                        {/* 1. Metodologia (Canto Inferior Direito) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-4 md:-right-12 bg-white p-3 md:p-4 rounded-2xl shadow-xl z-40 border border-zinc-100 flex items-center gap-3"
                        >
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-800 whitespace-nowrap">Metodologia Exclusiva</span>
                        </motion.div>

                        {/* 2. Aulas Práticas (Topo Esquerdo) */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-8 -left-4 md:-left-16 bg-white p-3 md:p-4 rounded-2xl shadow-xl z-40 border border-zinc-100 flex items-center gap-3"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-800 whitespace-nowrap">Aulas Práticas</span>
                        </motion.div>

                        {/* 3. Todas Idades (Base Esquerda) */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-10 -left-6 md:-left-20 bg-white p-3 md:p-4 rounded-2xl shadow-xl z-40 border border-zinc-100 flex items-center gap-3"
                        >
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-800 whitespace-nowrap">Todas idades</span>
                        </motion.div>

                        {/* 4. Cambridge Prep (Topo Direito) */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-4 -right-2 md:-right-10 bg-white p-3 md:p-4 rounded-2xl shadow-xl z-40 border border-zinc-100 flex items-center gap-3"
                        >
                            <div className="flex -space-x-1">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-75" />
                            </div>
                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-800 whitespace-nowrap">Cambridge Prep</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}