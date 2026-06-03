import { Building, MapPin, Warehouse, Castle, Search, Filter, MoreHorizontal, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PROPERTIES = [
  { id: 'PRP-001', title: 'Cobertura Duplex', type: 'Residencial', location: 'Itaim Bibi, SP', price: 'R$ 8.500.000', views: 1.240, status: 'Ativo', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80', score: 98 },
  { id: 'PRP-002', title: 'Mansão NeoClássica', type: 'Residencial', location: 'Alphaville, SP', price: 'R$ 14.200.000', views: 890, status: 'Ativo', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80', score: 95 },
  { id: 'PRP-003', title: 'Galpão Logístico Premium', type: 'Comercial', location: 'Extrema, MG', price: 'R$ 28.000.000', views: 420, status: 'Em Negociação', image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c50aab?w=400&q=80', score: 92 },
  { id: 'PRP-004', title: 'Loft Industrial', type: 'Residencial', location: 'Jardins, SP', price: 'R$ 2.100.000', views: 3.100, status: 'Ativo', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&q=80', score: 88 },
  { id: 'PRP-005', title: 'Prédio Comercial Boutique', type: 'Comercial', location: 'Faria Lima, SP', price: 'R$ 45.000.000', views: 210, status: 'Pausado', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80', score: 85 }
];

export default function InventoryView() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Estoque de Imóveis</h2>
          <p className="text-sm text-zinc-400">Gerencie seu portfólio. A IA ajusta os preços e copys automaticamente baseado na demanda.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-zinc-800 bg-[#0a0a0a] text-zinc-300 text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filtros
          </button>
        </div>
      </div>

      <div className="bg-[#050505] border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-zinc-900 bg-[#0a0a0a]/50">
          <div className="flex gap-4 items-center">
            <span className="text-sm font-medium text-white">Todos os Imóveis (124)</span>
            <span className="text-sm font-medium text-zinc-500 hover:text-white cursor-pointer transition-colors">Residenciais (89)</span>
            <span className="text-sm font-medium text-zinc-500 hover:text-white cursor-pointer transition-colors">Comerciais (35)</span>
          </div>
          <div className="flex gap-2 bg-[#050505] p-1 rounded-lg border border-zinc-800">
            <button onClick={() => setViewMode('grid')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${viewMode === 'grid' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}>Grid</button>
            <button onClick={() => setViewMode('table')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${viewMode === 'table' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}>Tabela</button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {PROPERTIES.map((prop) => (
              <div key={prop.id} className="group bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-bold text-white tracking-wider uppercase">
                    {prop.status}
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-500/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-bold text-white tracking-wider">
                    Score IA: {prop.score}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col cursor-pointer" onClick={() => navigate(`/inventory/${prop.id}`)}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-white text-lg">{prop.title}</h3>
                      <p className="text-xs text-zinc-500">{prop.id} • {prop.type}</p>
                    </div>
                    <button className="text-zinc-500 hover:text-white transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-auto pt-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="w-4 h-4 text-zinc-500" /> {prop.location}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                      <span className="font-bold text-white">{prop.price}</span>
                      <span className="text-xs font-medium text-zinc-500">{prop.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-zinc-900">
            <div className="grid grid-cols-12 gap-4 p-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider bg-[#0a0a0a]/50">
              <div className="col-span-5">Imóvel</div>
              <div className="col-span-2">Preço</div>
              <div className="col-span-2">Localização</div>
              <div className="col-span-2 text-center">Score IA</div>
              <div className="col-span-1 text-right">Status</div>
            </div>
            {PROPERTIES.map((prop) => (
              <div key={prop.id} onClick={() => navigate(`/inventory/${prop.id}`)} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-zinc-900/30 transition-colors cursor-pointer">
                <div className="col-span-5 flex items-center gap-4">
                  <img src={prop.image} className="w-12 h-12 rounded-lg object-cover border border-zinc-800" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{prop.title}</h4>
                    <div className="text-xs text-zinc-500 mt-0.5">{prop.id} • {prop.type}</div>
                  </div>
                </div>
                <div className="col-span-2 text-sm font-medium text-white">{prop.price}</div>
                <div className="col-span-2 text-sm text-zinc-400 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{prop.location.split(',')[0]}</div>
                <div className="col-span-2 text-center">
                  <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-blue-500/10 text-blue-400 font-bold text-xs border border-blue-500/20">{prop.score}</span>
                </div>
                <div className="col-span-1 text-right">
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${prop.status === 'Ativo' ? 'text-green-400' : prop.status === 'Em Negociação' ? 'text-yellow-400' : 'text-zinc-500'}`}>
                    {prop.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
