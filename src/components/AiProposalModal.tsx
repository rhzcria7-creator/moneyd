import { X, SearchCheck, Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function AiProposalModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCreate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setStep(2);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#050505] border border-zinc-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-zinc-900">
          <div>
             <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <SearchCheck className="w-5 h-5 text-blue-400" />
              Proposta Automática
            </h2>
            <p className="text-sm text-zinc-500 mt-1">A IA preparou uma aproximação ideal para Roberto Silva.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <div className="space-y-6">
               <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-5">
                 <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Copy Sugerida (WhatsApp)</h4>
                 <div className="text-sm text-zinc-300 leading-relaxed font-medium bg-[#111] p-4 rounded-lg border border-zinc-800">
                    "Olá Roberto, vi que possui interesse em coberturas no Itaim Bibi. Nosso sistema identificou uma unidade off-market que acabou de entrar e atende 92% da sua configuração de busca. Tem disponibilidade para uma visita amanhã às 15h?"
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Tom de Voz</label>
                    <select className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors">
                      <option>Casual e Direto</option>
                      <option>Formal / Institucional</option>
                      <option>Luxury (Exclusivo)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Meio de Envio</label>
                    <select className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors">
                      <option>Disparar via WhatsApp</option>
                      <option>Disparar via E-mail</option>
                    </select>
                  </div>
               </div>
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-2">
                <Send className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Mensagem Enviada!</h3>
              <p className="text-sm text-zinc-400 max-w-sm">
                O MasterSaaS Agent já contatou Roberto Silva e responderá automaticamente em caso de avanço na negociação.
              </p>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-zinc-900 bg-[#020202] flex items-center justify-between">
           <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
             Consome 1 Crédito IA
           </div>
           <div className="flex gap-3">
             {step === 1 ? (
               <>
                 <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                   Ajustar Manualmente
                 </button>
                 <button onClick={handleCreate} disabled={isProcessing} className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2">
                   {isProcessing ? 'Enviando...' : 'Aprovar e Enviar Disparo'}
                 </button>
               </>
             ) : (
                <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors">
                 Fechar
               </button>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
