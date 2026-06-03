import { Bot, MapPin, DollarSign, ArrowRight, Zap, FileText, Users } from 'lucide-react';
import ShinyText from '../components/ShinyText';
import BorderGlow from '../components/BorderGlow';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AiProposalModal from '../components/AiProposalModal';

const PROPERTIES = [
  { id: 1, title: 'Cobertura Duplex Linear', location: 'Itaim Bibi, SP', price: 'R$ 8.500.000', status: 'Disponível', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Mansão Alphaville Residencial', location: 'Alphaville, SP', price: 'R$ 14.200.000', status: 'Negociação', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600' },
];

const STATS = [
  { label: 'Valor em Estoque (VGV)', value: 'R$ 134M', trend: '+12%', icon: DollarSign },
  { label: 'Leads Qualificados', value: '432', trend: '+5.4%', icon: Users },
  { label: 'Contratos via IA', value: '18', trend: 'Autônomo', icon: FileText },
];

export default function DashboardView() {
  const [showProposalModal, setShowProposalModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STATS.map((stat, i) => (
          <div key={i} className="bg-[#080808] border border-zinc-900 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-800 transition-colors">
            <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <stat.icon className="w-32 h-32" />
            </div>
            <p className="text-sm text-zinc-500 font-medium mb-3">{stat.label}</p>
            <h3 className="text-3xl font-bold text-white mb-3">{stat.value}</h3>
            <div className="flex items-center gap-2 text-xs">
              <span className={`${stat.trend.includes('+') ? 'text-green-500' : 'text-zinc-300'} font-medium`}>{stat.trend}</span>
              <span className="text-zinc-600">vs. mês passado</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Imóveis Column */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Imóveis em Destaque</h2>
            <button className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROPERTIES.map(prop => (
              <div key={prop.id} onClick={() => navigate(`/inventory/PRP-001`)} className="bg-[#080808] border border-zinc-900 rounded-2xl overflow-hidden group hover:border-zinc-800 transition-all cursor-pointer shadow-xl">
                <div className="h-48 overflow-hidden relative">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white uppercase tracking-wider">
                    {prop.status}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg leading-tight truncate">{prop.title}</h3>
                    <div className="flex items-center gap-1.5 text-sm text-zinc-300 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {prop.location}
                    </div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between bg-[#0a0a0a]">
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-0.5">Valor Venda</p>
                    <span className="text-white font-bold text-lg">{prop.price}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights Column */}
        <div className="xl:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Inteligência de Leads</h2>
          </div>
          <BorderGlow
            className="w-full relative rounded-2xl bg-[#080808]"
            edgeSensitivity={60}
            glowColor="0 0 100"
            colors={['#ffffff', '#a1a1aa', '#3f3f46']}
            backgroundColor="#080808"
            borderRadius={16}
            glowRadius={50}
            animated={true}
          >
            <div className="p-6 flex flex-col justify-between h-[340px] relative z-10">
              <div>
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 shadow-inner mb-4">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <ShinyText text="Match Ideal Encontrado" className="text-lg font-semibold block mb-2" speed={3} color="#ffffff" shineColor="#888888" />
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  A IA cruzou os dados do novo lead <strong>Roberto Silva (CEO, Tech)</strong> com a <em>Cobertura Duplex</em>. 
                </p>
                <div className="flex items-center gap-4 bg-[#0a0a0a] p-3 rounded-lg border border-zinc-800">
                  <div className="flex-1">
                    <div className="text-xs text-zinc-500 uppercase font-semibold">Poder de Compra</div>
                    <div className="text-white font-medium text-sm mt-0.5">Validado (Serasa)</div>
                  </div>
                  <div className="flex-1 border-l border-zinc-800 pl-4">
                    <div className="text-xs text-zinc-500 uppercase font-semibold">Afinidade</div>
                    <div className="text-green-400 font-bold text-sm mt-0.5">92% Match</div>
                  </div>
                </div>
              </div>
              <button onClick={() => setShowProposalModal(true)} className="w-full mt-6 py-3 bg-white text-black font-semibold text-sm rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                <Bot className="w-4 h-4" /> Gerar Proposta Automática
              </button>
            </div>
          </BorderGlow>
        </div>
      </div>
      
      {showProposalModal && <AiProposalModal onClose={() => setShowProposalModal(false)} />}
    </div>
  );
}
