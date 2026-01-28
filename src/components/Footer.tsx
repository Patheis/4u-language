// src/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import { Instagram, Clock, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import logo4u from '../../public/logo-4u-semfundo.png';

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white pt-16 pb-8 border-t-8 border-yellow-400">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-zinc-800 pb-12">

                {/* Coluna 1: 4U LANGUAGE SCHOOL */}
                <div className="space-y-6">
                    <div className="bg-white p-2 rounded-lg inline-block">
                        <Image src={logo4u} alt="4U Logo" width={100} height={100} className="rounded-lg" />
                    </div>
                    <p className="text-zinc-400 text-[13px] font-light leading-relaxed tracking-wide">
                        4U Language School <br />
                        Sua escola de inglês em Mococa. <br />
                        Escola com preparatório para os <br />
                        exames de Cambridge English Qualifications.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-yellow-500 hover:text-zinc-950 transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-yellow-500 hover:text-zinc-950 transition-all">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>


                {/* Coluna 2: ATENDIMENTO */}
                <div>
                    <h4 className="text-[11px] font-semibold text-yellow-400 uppercase tracking-[0.3em] mb-8">Atendimento</h4>
                    <ul className="space-y-5 text-[13px] font-light text-zinc-300">
                        <li className="flex items-start gap-4">
                            <Clock size={16} className="text-yellow-400 mt-1" />
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-100">Segunda a Sexta</span>
                                <span>08:00 às 20:00</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            {/* Espaço reservado para manter o alinhamento sem repetir o ícone se preferir */}
                            <div className="w-4" />
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-100">Sábado</span>
                                <span>08:00 às 12:00</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 opacity-50">
                            <div className="w-4" />
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-400 italic">Domingo</span>
                                <span>Fechado</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Coluna 3: CONTATO */}
                <div>
                    <h4 className="text-[11px] font-semibold text-yellow-400 uppercase tracking-[0.3em] mb-8">Contato</h4>
                    <ul className="space-y-5 text-[13px] font-light text-zinc-300">
                        <li className="flex items-center gap-4">
                            <Phone size={16} className="text-yellow-400" /> (19) 2172-0158
                        </li>
                        <li className="flex items-center gap-4">
                            <Mail size={16} className="text-yellow-400" /> 4U.LANGUAGESCHOOL@GMAIL.COM
                        </li>
                        <li className="flex items-start gap-4">
                            <MapPin size={16} className="text-yellow-400 mt-1" />
                            <span>
                                R. Dr. Adolfo Barreto, 53, <br />
                                Centro, Mococa-SP
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-12 space-y-4">
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-light">
                    © 2026 4U FOR YOU - LANGUAGE SCHOOL
                </p>
                <p className="text-[9px] text-zinc-400 uppercase tracking-[0.15em] font-light">
                    Desenvolvido por{" "}
                    <a
                        href="https://wa.me/551992872451?text=Olá! Vi o site da 4U e gostaria de um orçamento para um projeto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-zinc-300 hover:text-yellow-400 transition-colors underline decoration-yellow-400/30 underline-offset-4"
                    >
                        JOÃO VITOR PATHEIS - CLIQUE PARA SABER MAIS
                    </a>
                </p>
            </div>

            {/* Botão WhatsApp Flutuante - Estilo Premium Senebra */}
            <a
                href="https://wa.me/551921720158?text=Olá! Estava visitando o site da 4U e gostaria de tirar uma dúvida sobre as aulas."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center border-2 border-white"
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </footer>
    );
}