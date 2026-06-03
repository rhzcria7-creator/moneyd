import { X, Target, DollarSign, PenTool, Sparkles, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function NewCampaignModal({ onClose }: { onClose: () => void }) {
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
              <Target className="w-5 h-5 text-blue-400" />
              Nova Campanha IA
            </h2>
            <p className="text-sm text-zinc-500 mt-1">A IA criará e distribuirá os anúncios nas plataformas.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Imóvel Alvo</label>
                  <select className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors">
                    <option>PRP-001 • Cobertura Duplex Itaim</option>
                    <option>PRP-002 • Mansão NeoClássica</option>
                    <option>PRP-003 • Galpão Logístico Premium</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5" /> Orçamento Diário
                    </label>
                    <input 
                      type="number" 
                      defaultValue={150} 
                      className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <PenTool className="w-3.5 h-3.5" /> Estratégia de Copy
                    </label>
                    <select className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors">
                      <option>Agressiva (Foco em conversão imediata)</option>
                      <option>Emocional (Storytelling do imóvel)</option>
                      <option>Racional (Investimento / ROI)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-400" /> Distribuição Inteligente
                    </label>
                    <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-500">
                      <span className="inline-block h-3 w-3 translate-x-5 transform rounded-full bg-white transition-transform" />
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500">A IA irá dividir o orçamento automaticamente entre Meta Ads, Google Ads e TikTok dependendo da performance diária do CPA.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Campanha Lançada!</h3>
              <p className="text-sm text-zinc-400 max-w-sm">
                O Agente MasterSaaS já configurou os píxels, gerou os criativos em formato carrossel e colocou a campanha no ar.
              </p>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-zinc-900 bg-[#020202] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            VGV estimado de retorno: R$ 4.5M
          </div>
          <div className="flex gap-3">
            {step === 1 ? (
              <>
                <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  Cancelar
                </button>
                <button onClick={handleCreate} disabled={isProcessing} className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2">
                  {isProcessing ? 'Processando IA...' : 'Lançar Campanha IA'}
                </button>
              </>
            ) : (
              <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors">
                Ir para o Dashboard
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
