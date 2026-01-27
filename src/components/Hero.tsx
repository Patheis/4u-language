// src/components/Hero.tsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    /* Reduzimos o padding-top de 32/40 para 20/24 para subir o conteúdo */
    /* Alteramos min-h-90vh para 80vh para evitar que a seção fique esticada demais */
    <section className="bg-white min-h-[80vh] flex items-center px-8 pt-20 md:pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Lado do Texto: Mais nítido e escuro para leitura facilitada */}
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-light text-zinc-900 leading-tight mb-6 tracking-tight">
            Ainda não é <br/>
            <span className="font-semibold text-yellow-500 italic">nosso aluno?</span>
          </h1>
          <p className="text-base md:text-lg mb-8 text-zinc-600 font-normal leading-relaxed max-w-md">
            Fale com a gente hoje mesmo e comece sua jornada global com uma metodologia exclusiva.
          </p>
          <a 
            href="https://wa.me/551921720158?text=Olá! Estava visitando o site da 4U e gostaria de agendar uma aula experimental." 
            className="bg-yellow-400 text-zinc-900 px-10 py-4 rounded-full font-bold text-[13px] uppercase tracking-[0.15em] hover:shadow-xl hover:shadow-yellow-400/20 transition-all inline-block active:scale-95"
          >
            Quero uma aula experimental
          </a>
        </div>
        
        {/* Lado da Imagem: Com efeito de profundidade e sombra */}
        <div className="relative flex justify-center order-first md:order-last mb-8 md:mb-0">
            {/* Efeito de brilho amarelo ao fundo para destacar a imagem */}
            <div className="absolute inset-0 bg-yellow-100 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
            <img 
              src="/logo-4u.jpg" 
              alt="4U Language School" 
              className="w-full max-w-sm md:max-w-md rounded-[2rem] shadow-2xl transition-all duration-700 hover:rotate-2" 
            />
        </div>
      </motion.div>
    </section>
  );
}   