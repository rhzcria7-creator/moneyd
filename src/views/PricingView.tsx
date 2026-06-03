import { ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LiquidChrome from '../components/LiquidChrome';
import React from 'react';

export default function PricingView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-zinc-800 relative z-10 w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-20 mix-blend-lighten pointer-events-none">
        <LiquidChrome amplitude={0.6} speed={0.4} baseColor={[0.1, 0.1, 0.1]} interactive={false} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-bold text-white hover:text-zinc-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
      </header>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white tracking-tight mb-6">O ROI é tão absurdo que sai de graça</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            "Seloko, isso aqui sai é de graça de tão bom. Seria um crime ser grátis." — <span className="italic text-zinc-500">Feedback real de um de nossos clientes.</span><br/>
            Nossos parceiros recuperam o valor da assinatura nas primeiras 48 horas apenas com a economia de CAC e eficiência do Agente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-[#050505] border border-zinc-900 rounded-3xl p-10 hover:border-zinc-800 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Broker Solo</h3>
              <p className="text-zinc-400 mb-8">Para corretores independentes de alto padrão.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-bold text-white">R$ 497</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-5 mb-10 flex-1">
                {[
                  'Agente Autônomo Padrão',
                  'Até 50 imóveis no portfólio',
                  'Análise de Score de 100 leads/mês',
                  'Geração de 20 minutas/mês',
                  'Suporte via e-mail'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <Shield className="w-5 h-5 text-zinc-600" /> {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full py-4 bg-zinc-900 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors"
              >
                Assinar Broker Solo
              </button>
           </div>

           <div className="bg-gradient-to-b from-zinc-900 to-[#050505] border border-zinc-700 rounded-3xl p-10 relative shadow-[0_0_50px_rgba(255,255,255,0.05)] transform md:-translate-y-4 flex flex-col">
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                <span className="bg-white text-black text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-lg">
                  Recomendado para Scale-ups
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Master Imobiliária</h3>
              <p className="text-zinc-400 mb-8">Para operações de alto volume e grandes carteiras.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-bold text-white">R$ 1.297</span>
                <span className="text-zinc-500">/mês</span>
              </div>
              <ul className="space-y-5 mb-10 flex-1">
                {[
                  'Master Agent Personalizado e Treinado',
                  'Imóveis e leads ilimitados',
                  'Contratos auditados via IA ilimitados',
                  'Otimização de tráfego pago inclusa',
                  'Gerenciamento de Múltiplos Corretores (10)',
                  'Suporte dedicado no WhatsApp'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <Shield className="w-5 h-5 text-blue-400" /> {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Assinar Plano Master
              </button>
           </div>
        </div>
      </main>
    </div>
  );
}
