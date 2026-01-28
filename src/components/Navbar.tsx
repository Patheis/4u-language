import Image from 'next/image';
import Link from 'next/link';
import logo4u from '../../public/logo-4u-semfundo.png';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-1 py-1 flex justify-between items-center">
                <Link href="/" className="hover:opacity-85 transition-opacity">
                    <Image src={logo4u} alt="4U Logo" width={100} height={180} className="rounded-lg" />
                </Link>

                <div className="hidden md:flex space-x-10">
                    {[  
                        { name: 'Inicio', id: 'home' },
                        { name: 'Cursos', id: 'cursos' },
                        { name: 'Localização', id: 'contato' }, // Conecta com o id do seu Map.tsx
                        { name: 'Sobre nós', id: 'sobre-nos' }, // Conecta com o id do seu About.tsx
                        { name: 'FeedBacks', id: 'feedbacks' }
                    ].map((item) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-[12px] uppercase tracking-[0.2em] font-medium text-zinc-500 hover:text-yellow-600 transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="https://www.cambridgeenglish.org/br/test-your-english/"
                    className="border border-yellow-400 text-zinc-800 text-[11px] px-6 py-2 rounded-full font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-sm"
                >
                    Teste de Nível - Cambridge
                </Link>
            </div>
        </nav>
    );
}