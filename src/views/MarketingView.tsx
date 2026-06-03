import { PieChart, TrendingUp, Users, DollarSign, Facebook, Instagram, Search } from 'lucide-react';
import BorderGlow from '../components/BorderGlow';
import { Bot } from 'lucide-react';
import React, { useState } from 'react';
import NewCampaignModal from '../components/NewCampaignModal';

const CAMPAIGNS = [
  { id: 1, name: 'Lançamento Alphaville', platform: 'Meta Ads', spend: 'R$ 4.200,00', leads: 84, costPerLead: 'R$ 50,00', status: 'Ativo', icon: Facebook },
  { id: 2, name: 'Remarketing - Coberturas', platform: 'Instagram', spend: 'R$ 1.800,00', leads: 32, costPerLead: 'R$ 56,25', status: 'Ativo', icon: Instagram },
  { id: 3, name: 'Busca - Galpões Logísticos', platform: 'Google Ads', spend: 'R$ 6.500,00', leads: 41, costPerLead: 'R$ 158,50', status: 'Ativo', icon: Search }
];

export default function MarketingView() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Marketing Inteligente</h2>
          <p className="text-sm text-zinc-400">O Agente IA otimiza e escala as campanhas automaticamente.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
          Nova Campanha
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6">
          <DollarSign className="w-6 h-6 text-zinc-500 mb-4" />
          <h3 className="text-sm font-semibold text-zinc-400 mb-1">Gasto Mensal (Ads)</h3>
          <div className="text-2xl font-bold text-white">R$ 12.500</div>
          <div className="text-xs text-green-400 mt-2 font-medium">+15% comparado ao mês passado</div>
        </div>
        <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6">
          <Users className="w-6 h-6 text-zinc-500 mb-4" />
          <h3 className="text-sm font-semibold text-zinc-400 mb-1">Leads Gerados</h3>
          <div className="text-2xl font-bold text-white">157</div>
          <div className="text-xs text-green-400 mt-2 font-medium">+8% comparado ao mês passado</div>
        </div>
        <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6">
          <TrendingUp className="w-6 h-6 text-zinc-500 mb-4" />
          <h3 className="text-sm font-semibold text-zinc-400 mb-1">CPA Médio (Custo por Lead)</h3>
          <div className="text-2xl font-bold text-white">R$ 79,61</div>
          <div className="text-xs text-red-400 mt-2 font-medium">+2% comparado ao mês passado</div>
        </div>
        
        <BorderGlow className="rounded-2xl" glowColor="100 255 100" colors={['#ffffff', '#00ff00', '#004400']} edgeSensitivity={60} borderRadius={16} glowRadius={50}>
           <div className="bg-[#050505] h-full rounded-2xl p-6 relative z-10 flex flex-col justify-between">
              <div>
                <Bot className="w-6 h-6 text-green-400 mb-4" />
                <h3 className="text-sm font-semibold text-zinc-400 mb-1">Ação Autônoma da IA</h3>
                <div className="text-sm font-medium text-white italic">"Pausando campanha do Google Ads devido a CPA alto ({'>'} R$150). Remanejando orçamento para o Meta Ads."</div>
              </div>
              <button className="text-xs font-semibold text-zinc-400 hover:text-white mt-4 text-left transition-colors">Aprovar Sugestão →</button>
           </div>
        </BorderGlow>
      </div>

      <div className="bg-[#050505] border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-6 gap-4 p-4 border-b border-zinc-900 text-xs font-semibold text-zinc-500 uppercase tracking-wider bg-[#0a0a0a]/50">
          <div className="col-span-2">Campanha & Plataforma</div>
          <div>Gasto</div>
          <div>Leads</div>
          <div>Custo por Lead</div>
          <div className="text-right">Status</div>
        </div>

        <div className="divide-y divide-zinc-900">
          {CAMPAIGNS.map((campaign) => (
            <div key={campaign.id} className="grid grid-cols-6 gap-4 p-4 items-center hover:bg-zinc-900/30 transition-colors">
              <div className="col-span-2 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-zinc-800 flex items-center justify-center shrink-0">
                  <campaign.icon className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{campaign.name}</h4>
                  <div className="text-xs text-zinc-500 mt-0.5">{campaign.platform}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-zinc-300">{campaign.spend}</div>
              <div className="text-sm font-medium text-zinc-300">{campaign.leads}</div>
              <div className="text-sm font-medium text-zinc-300">{campaign.costPerLead}</div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {campaign.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showModal && <NewCampaignModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

