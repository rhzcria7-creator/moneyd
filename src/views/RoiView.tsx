import { ArrowLeft, TrendingUp, DollarSign, Target, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LiquidChrome from '../components/LiquidChrome';
import React from 'react';

export default function RoiView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-zinc-800 relative z-10 w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-20 mix-blend-lighten pointer-events-none">
        <LiquidChrome amplitude={0.7} speed={0.3} baseColor={[0.1, 0.1, 0.1]} interactive={false} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-bold text-white hover:text-zinc-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
      </header>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-white tracking-tight">O impacto no seu <span className="text-green-400">VGV</span></h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Nossos parceiros relatam que o MasterSaaS se paga nas primeiras 48 horas de ativação apenas com economia em anúncios mal direcionados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-[#050505] border border-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
              <TrendingUp className="w-16 h-16 text-green-400 mb-6" />
              <h3 className="text-4xl font-bold text-white mb-2">-42%</h3>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">No Custo por Aquisição</p>
              <p className="text-zinc-400 leading-relaxed text-sm">A realocação contínua do orçamento de Ads impede de torrar verba em campanhas saturadas.</p>
           </div>
           
           <div className="bg-[#050505] border border-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
              <Target className="w-16 h-16 text-blue-400 mb-6" />
              <h3 className="text-4xl font-bold text-white mb-2">3x</h3>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">Volume de Qualificação</p>
              <p className="text-zinc-400 leading-relaxed text-sm">A IA atende o lead em segundos após a conversão, aumentando dramaticamente a taxa de agendamento de visita.</p>
           </div>

           <div className="bg-[#050505] border border-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
              <DollarSign className="w-16 h-16 text-yellow-400 mb-6" />
              <h3 className="text-4xl font-bold text-white mb-2">+R$ 15M</h3>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">VGV Destravado</p>
              <p className="text-zinc-400 leading-relaxed text-sm">Imóveis parados de alto padrão (estoque frio) voltam ao mercado através de copys refeitas e novas fotos tratadas.</p>
           </div>

           <div className="bg-[#050505] border border-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
              <PieChart className="w-16 h-16 text-purple-400 mb-6" />
              <h3 className="text-4xl font-bold text-white mb-2">98%</h3>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">Precisão em Contratos</p>
              <p className="text-zinc-400 leading-relaxed text-sm">Redução absurda no tempo do departamento jurídico por ter minutos criadas pré-auditadas.</p>
           </div>
        </div>
      </main>
    </div>
  );
}
