import Image from 'next/image';
import Link from 'next/link';
import logo4u from '../../public/logo-4u-semfundo.png';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-sm border-b border-zinc-100 shadow-sm">
            {/* Ajustado o padding lateral (px-4) e altura para encaixar melhor em telas pequenas */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
                
                <Link href="/" className="hover:opacity-85 transition-opacity shrink-0">
                    {/* Ajustado o width/height para o logo não "empurrar" o resto da barra no mobile */}
                    <Image 
                        src={logo4u} 
                        alt="4U Logo" 
                        width={90} 
                        height={45} 
                        className="rounded-lg w-auto h-10 md:h-12" 
                    />
                </Link>

                {/* Desktop Menu: Mantido oculto no mobile (hidden) e visível apenas no desktop (md:flex) */}
                <div className="hidden md:flex space-x-6 lg:space-x-10">
                    {[  
                        { name: 'Inicio', id: 'home' },
                        { name: 'Cursos', id: 'cursos' },
                        { name: 'Localização', id: 'contato' },
                        { name: 'Sobre nós', id: 'sobre-nos' },
                        { name: 'FeedBacks', id: 'feedbacks' }
                    ].map((item) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-500 hover:text-yellow-600 transition-all whitespace-nowrap"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Botão de Teste: Ajustado para diminuir a fonte e o padding no mobile para caber na tela */}
                <Link
                    href="https://www.cambridgeenglish.org/br/test-your-english/"
                    className="border border-yellow-400 text-zinc-800 text-[9px] md:text-[11px] px-3 py-2 md:px-6 md:py-2.5 rounded-full font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-sm whitespace-nowrap"
                >
                    Teste de Nível - Cambridge
                </Link>
            </div>
        </nav>
    );
}