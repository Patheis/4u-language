'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

// Configuração da fonte para um visual premium e leve
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'] 
});

export default function Home() {
  return (
    /* Aplicamos a classe da fonte aqui para que todo o site herde a delicadeza */
    <main className={`${montserrat.className} relative min-h-screen bg-white text-zinc-800`}>
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Seções principais do site da 4U */}
        <Hero />
        
        <section className="relative z-10">
          <Services />
          <Map />
        </section>
      </motion.div>

      <Footer />
    </main>
  );
}