import { useNavigate } from 'react-router-dom';
import { Bot, ArrowLeft } from 'lucide-react';
import LiquidChrome from '../components/LiquidChrome';
import React from 'react';

export default function NotFoundView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-zinc-800">
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-lighten pointer-events-none">
        <LiquidChrome amplitude={0.8} speed={0.4} baseColor={[0.1, 0.1, 0.1]} interactive={false} />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 animate-in fade-in zoom-in duration-700">
        <div className="w-32 h-32 bg-zinc-900/50 rounded-full flex items-center justify-center mb-8 border border-zinc-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <Bot className="w-16 h-16 text-zinc-500" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-4 flex items-center gap-4">
          4<span className="text-zinc-800">0</span>4
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-300">
          Setor Não Localizado
        </h2>
        
        <p className="text-zinc-500 mb-10 text-lg max-w-lg mx-auto leading-relaxed">
          A inteligência artificial não conseguiu encontrar esta página em nossos servidores. A rota solicitada pode estar incorreta ou foi desativada.
        </p>
        
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          <ArrowLeft className="w-5 h-5" /> Retornar à Base
        </button>
      </div>
    </div>
  );
}
