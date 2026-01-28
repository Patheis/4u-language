'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica se o usuário já aceitou os cookies anteriormente
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[110] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-zinc-950/95 backdrop-blur-md border border-zinc-800 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                Utilizamos cookies para melhorar sua experiência e oferecer conteúdos personalizados de acordo com a nossa 
                <a href="#" className="text-yellow-500 hover:underline ml-1 font-bold">Política de Privacidade</a>. 
                Ao continuar navegando, você concorda com estas condições.
              </p>
            </div>

            <button
              onClick={acceptCookies}
              className="whitespace-nowrap bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg shadow-yellow-500/20"
            >
              Aceitar Cookies
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}