import Image from 'next/image';
import Link from 'next/link';
import logo4u from '../../public/logo-4u.jpg';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Image src={logo4u} alt="4U Logo" width={60} height={60} className="rounded-lg" />
                </Link>
                
                <div className="hidden md:flex space-x-10">
                    {['Cursos', 'Metodologia', 'Contato'].map((item) => (
                        <Link 
                            key={item}
                            href={`#${item.toLowerCase()}`} 
                            className="text-[12px] uppercase tracking-[0.2em] font-medium text-zinc-500 hover:text-yellow-600 transition-all"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <Link
                    href="https://api.whatsapp.com/send/?phone=551921720158"
                    className="border border-yellow-400 text-zinc-800 text-[11px] px-6 py-2 rounded-full font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-sm"
                >
                    Teste de Nível
                </Link>
            </div>
        </nav>
    );
}