import { X, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import React, { useState } from 'react';

export default function NewContractModal({ onClose }: { onClose: () => void }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [done, setDone] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setDone(true);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#050505] border border-zinc-800 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-zinc-900">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-zinc-400" />
              Gerar Minuta de Contrato
            </h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!done ? (
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Parte Vendedora / Locadora</label>
                <input type="text" defaultValue="Master Imobiliária CNPJ 00.000.000/0001-00" className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-500 focus:outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Parte Compradora / Locatária (Lead)</label>
                <select className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500">
                  <option>Roberto Silva (L-1049)</option>
                  <option>Renata Santos (L-1046)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Imóvel</label>
                <select className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500">
                  <option>Cobertura Duplex Itaim</option>
                  <option>Mansão Alphaville</option>
                </select>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-2 flex gap-3">
                 <ShieldAlert className="w-5 h-5 text-yellow-500 shrink-0" />
                 <div>
                   <h4 className="text-sm font-semibold text-yellow-500">Compliance Automático</h4>
                   <p className="text-xs text-yellow-500/80 mt-1">A IA irá revisar cláusulas de rescisão, foro e multas baseadas na Lei do Inquilinato (Haverá uma fase de auditoria).</p>
                 </div>
              </div>
            </div>
          ) : (
             <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-2">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Minuta Gerada (12 Páginas)</h3>
              <p className="text-sm text-zinc-400 max-w-sm">
                O documento foi gerado com sucesso sem riscos jurídicos detectados.
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors">Visualizar PDF</button>
                <button className="px-4 py-2 bg-[#0a0a0a] border border-zinc-800 text-sm font-medium rounded-lg hover:bg-zinc-900 transition-colors">Enviar para Assinatura</button>
              </div>
            </div>
          )}
        </div>

        {!done && (
          <div className="p-6 border-t border-zinc-900 bg-[#020202] flex items-center justify-end gap-3">
             <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Cancelar
              </button>
              <button onClick={handleGenerate} disabled={isGenerating} className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2">
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-t-black border-zinc-300 animate-spin" />
                    Redigindo Documento...
                  </>
                ) : (
                  'Gerar Minuta (IA)'
                )}
              </button>
          </div>
        )}
      </div>
    </div>
  );
}
