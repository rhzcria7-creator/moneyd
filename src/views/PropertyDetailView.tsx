import { ArrowLeft, MapPin, BedDouble, Bath, SquarePlay, Droplets, Car, TrendingUp, Search, PenTool, CheckCircle2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';

export default function PropertyDetailView() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data mapping
  const propertyTitle = id === 'PRP-001' ? 'Cobertura Duplex' : 'Detalhes do Imóvel';
  const propertyImg = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80';

  return (
    <div className="space-y-6 animate-in fade-in duration-500 h-full overflow-y-auto pb-12">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate('/inventory')} className="p-2 bg-[#0a0a0a] rounded-md border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            {propertyTitle}
            <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded-full tracking-wider">
              Ativo
            </span>
          </h2>
          <p className="text-sm text-zinc-500">{id || 'PRP-001'} • Cadastrado em 28 Mai 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gallery & Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#050505] border border-zinc-900 rounded-2xl overflow-hidden shadow-xl">
             <div className="relative h-96 w-full">
               <img src={propertyImg} alt="Imóvel" className="w-full h-full object-cover" />
               <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-bold text-white tracking-wider flex items-center gap-2">
                 <Search className="w-4 h-4 text-blue-400" />
                 1.240 Views Orgânicas
               </div>
             </div>
             <div className="p-8">
               <div className="flex items-start justify-between mb-8 pb-8 border-b border-zinc-900">
                 <div>
                   <div className="text-4xl font-bold text-white mb-2">R$ 8.500.000</div>
                   <div className="flex items-center gap-2 text-zinc-400 text-sm">
                     <MapPin className="w-4 h-4 text-zinc-500" /> Itaim Bibi, São Paulo - SP
                   </div>
                 </div>
                 <div className="flex gap-4 text-zinc-300">
                   <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded-xl border border-zinc-800">
                     <BedDouble className="w-6 h-6 mb-1 text-zinc-500" />
                     <span className="text-sm font-bold">4</span>
                   </div>
                   <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded-xl border border-zinc-800">
                     <Bath className="w-6 h-6 mb-1 text-zinc-500" />
                     <span className="text-sm font-bold">5</span>
                   </div>
                   <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded-xl border border-zinc-800">
                     <Car className="w-6 h-6 mb-1 text-zinc-500" />
                     <span className="text-sm font-bold">4</span>
                   </div>
                   <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded-xl border border-zinc-800">
                     <SquarePlay className="w-6 h-6 mb-1 text-zinc-500" />
                     <span className="text-sm font-bold">450m²</span>
                   </div>
                 </div>
               </div>

               <div>
                 <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <PenTool className="w-5 h-5 text-blue-400" /> Copywriting (Gerado via IA)
                 </h3>
                 <p className="text-zinc-400 leading-relaxed text-sm">
                   Uma obra-prima arquitetônica no coração do Itaim Bibi. Esta cobertura duplex linear redefine o conceito de luxo urbano com seus 450m² inteligentemente distribuídos. A iluminação natural abraça todo o living com pé direito duplo, harmonizando a vista panorâmica da cidade com acabamentos impecáveis de alto padrão.<br/><br/>
                   A área social integra um terraço gourmet espetacular, perfeito para receber confortavelmente ao lado de uma piscina privativa. No piso íntimo, 4 suítes espaçosas trazem refúgio e silêncio, incluindo uma suíte master digna de resorts, com closet duplo e sala de banho majestosa.
                 </p>
               </div>
             </div>
          </div>
        </div>

        {/* Intelligence Sidebar */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6 shadow-xl">
             <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-6">Diagnóstico da Inteligência</h3>
             
             <div className="space-y-6">
               <div className="flex items-center justify-between">
                 <span className="text-sm text-zinc-300">Atratividade Global</span>
                 <span className="text-sm font-bold text-green-400">Excelente (98/100)</span>
               </div>
               
               <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 w-[98%]" />
               </div>

               <div className="space-y-3 pt-4 border-t border-zinc-900">
                 <div className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                   <div>
                     <div className="text-sm font-bold text-white">Preço Competitivo</div>
                     <div className="text-xs text-zinc-500 mt-1">Valor do m² está 4% abaixo do consolidado Itaim. Potencial de liquidez alta.</div>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                   <div>
                     <div className="text-sm font-bold text-white">SEO Optimizado</div>
                     <div className="text-xs text-zinc-500 mt-1">Imagens tratadas e copy rica em palavras-chave "luxo, itaim, duplex".</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
             <div className="flex items-center gap-3 mb-4">
               <TrendingUp className="w-6 h-6 text-blue-400" />
               <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Campanhas Ativas</h3>
             </div>
             <p className="text-xs text-blue-400/80 mb-6 leading-relaxed">
               Este imóvel possui forte aderência no Meta Ads. O Agente está alocando R$ 150/dia neste funil.
             </p>
             <button onClick={() => navigate('/marketing')} className="w-full py-3 bg-blue-500 text-white font-bold text-sm rounded-xl hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]">
               Ver Tráfego Pago
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
