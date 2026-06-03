import { X, Upload, Home, MapPin, DollarSign, Zap } from 'lucide-react';
import React, { useState } from 'react';

export default function NewPropertyModal({ onClose }: { onClose: () => void }) {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#050505] border border-zinc-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-zinc-900">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Home className="w-5 h-5 text-zinc-400" />
              Novo Imóvel
            </h2>
            <p className="text-sm text-zinc-500 mt-1">A IA processará as fotos e criará a copy automaticamente.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Título (Opcional)</label>
                <input 
                  type="text" 
                  placeholder="Deixe a IA definir..." 
                  className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Localização
                </label>
                <input 
                  type="text" 
                  placeholder="Ex: Itaim Bibi, SP" 
                  className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" /> Preço Estimado
                </label>
                <input 
                  type="text" 
                  placeholder="R$ 0,00" 
                  className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Mídia (Fotos/Vídeos)</label>
              <div 
                className={`border-2 border-dashed border-zinc-800 rounded-xl h-[210px] flex flex-col items-center justify-center gap-3 bg-[#0a0a0a] hover:bg-zinc-900/50 transition-colors cursor-pointer ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={() => setIsUploading(true)}
              >
                {isUploading ? (
                  <>
                    <div className="w-8 h-8 rounded-full border-2 border-t-white border-zinc-700 animate-spin" />
                    <span className="text-sm font-medium text-zinc-400">Processando com IA...</span>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                      <Upload className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-white">Arraste arquivos aqui</p>
                      <p className="text-xs text-zinc-500 mt-1">ou clique para selecionar</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-zinc-900 bg-[#020202] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
            <Zap className="w-3.5 h-3.5 text-yellow-500" />
            1 Crédito IA será consumido
          </div>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Cancelar
            </button>
            <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Processar Cadastro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
