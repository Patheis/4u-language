'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// Certifique-se de importar sua logo de Cambridge aqui
// import cambridgeLogo from '/public/cambridge-logo.png'; 

export default function MapSection() {
  return (
    <section id="contato" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Coluna 1: Informações e Autoridade */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-black text-zinc-950 uppercase tracking-tighter mb-4">
                Onde <span className="text-yellow-500">Estamos</span>
              </h2>
              <p className="text-zinc-600 font-medium max-w-sm">
                Venha conhecer nossa escola e descobrir por que somos a melhor escolha para o seu futuro global.
              </p>
            </div>

            {/* Lista de Contatos com ícones nítidos */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-zinc-100 group-hover:bg-yellow-500 transition-colors">
                  <MapPin size={24} className="text-yellow-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Endereço</p>
                  <p className="text-zinc-900 font-bold">Dr. Adolfo Barreto, 123 - Centro, Mococa - SP</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-zinc-100 group-hover:bg-yellow-500 transition-colors">
                  <Clock size={24} className="text-yellow-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Horário de Funcionamento</p>
                  <p className="text-zinc-900 font-bold">Segunda a Sexta: 08h às 21h</p>
                </div>
              </div>
            </div>

            {/* Selo de Cambridge Reestilizado e Reto */}
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm text-center max-w-[300px]">
              <div className="relative w-[180px] h-[60px] flex items-center justify-center">
                 {/* Substitua pelo componente <Image /> quando tiver o caminho correto */}
                <img 
                  src="/4u-language/cambridge-logo.png" 
                  alt="Cambridge English" 
                  className="object-contain w-full h-full"
                />
              </div>
              
              <div className="w-full border-t border-zinc-100 pt-4">
               
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                  Preparamos nossos alunos para as <br />
                  certificações internacionais de Cambridge.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 2: O Mapa (Moldurado) */}
          <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.6450!2d-47.0000!3d-21.4650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI3JzU0LjAiUyA0N8KwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}