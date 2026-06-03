import { ArrowLeft, Calendar, Clock, Bot, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LiquidChrome from '../components/LiquidChrome';
import React, { useState } from 'react';

export default function ScheduleView() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-zinc-800 relative z-10 w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-20 mix-blend-lighten pointer-events-none">
        <LiquidChrome amplitude={0.5} speed={0.4} baseColor={[0.1, 0.1, 0.1]} interactive={false} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-bold text-white hover:text-zinc-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
      </header>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-xl mx-auto">
        <div className="bg-[#050505] border border-zinc-900 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {step === 1 ? (
            <>
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <Bot className="w-8 h-8 text-black" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-3">Agendar Demonstração</h1>
                <p className="text-zinc-400 text-sm">Descubra como o MasterSaaS Agent pode colocar sua operação imobiliária no piloto automático.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">Nome Completo</label>
                    <input required type="text" className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors" placeholder="Ex: Roberto Silva" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">E-mail Corporativo</label>
                    <input required type="email" className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors" placeholder="roberto@suaimobiliaria.com" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">WhatsApp</label>
                    <input required type="tel" className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors" placeholder="(11) 99999-9999" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">Data</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input required type="date" className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors [color-scheme:dark]" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">Horário</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <select required className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none">
                          <option>09:00</option>
                          <option>10:30</option>
                          <option>14:00</option>
                          <option>16:30</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-8">
                  Confirmar Agendamento
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12 flex flex-col items-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Reunião Agendada!</h2>
              <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
                Você receberá um convite no seu e-mail com o link do Google Meet e os detalhes da nossa demonstração.
              </p>
              <button onClick={() => navigate('/')} className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors">
                Voltar ao Início
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
