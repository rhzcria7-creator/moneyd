import { Users, Phone, Mail, MessageCircle, MoreVertical, Plus, Zap, CheckCircle2, Clock } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedList from '../components/AnimatedList';

const LEADS = [
  { id: 'L-1049', name: 'Roberto Silva', email: 'roberto.silva@exemplo.com', phone: '+55 11 99999-9999', status: 'Qualificado IA', score: 98, interest: 'Cobertura Itaim Bibi', lastAction: 'Abriu email de minutas', date: 'Há 5 min' },
  { id: 'L-1048', name: 'Carla Mendes', email: 'carla@invest.com', phone: '+55 11 98888-8888', status: 'Contato Inicial', score: 85, interest: 'Terreno Alphaville', lastAction: 'Cadastrou no Facebook Ads', date: 'Há 12 min' },
  { id: 'L-1047', name: 'Fernando Costa', email: 'fernando.costa@tech.org', phone: '+55 11 97777-7777', status: 'Visita Agendada', score: 92, interest: 'Loft Jardins', lastAction: 'Confirmou visita para Sábado', date: 'Há 1 hora' },
  { id: 'L-1046', name: 'Renata Santos', email: 'renata.santos@gmail.com', phone: '+55 11 96666-6666', status: 'Proposta Recebida', score: 99, interest: 'Mansão Alphaville', lastAction: 'Enviou proposta R$ 13M', date: 'Há 3 horas' },
  { id: 'L-1045', name: 'Lucas Almeida', email: 'lucas.almeida@startup.co', phone: '+55 11 95555-5555', status: 'Desqualificado', score: 32, interest: 'Studio Pinheiros', lastAction: 'Score de crédito baixo detectado', date: 'Ontem' },
];

const COLUMNS = [
  { id: 'Contato Inicial', color: 'bg-zinc-500' },
  { id: 'Qualificado IA', color: 'bg-blue-500' },
  { id: 'Visita Agendada', color: 'bg-purple-500' },
  { id: 'Proposta Recebida', color: 'bg-yellow-500' },
  { id: 'Contrato Assinado', color: 'bg-green-500' },
];

export default function LeadsView() {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">CRM & Leads</h2>
          <p className="text-sm text-zinc-400">O Agente IA qualifica e nutre seus leads via WhatsApp automaticamente.</p>
        </div>
        <div className="flex gap-2 bg-[#050505] p-1 rounded-lg border border-zinc-800">
          <button onClick={() => setViewMode('kanban')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${viewMode === 'kanban' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}>Kanban</button>
          <button onClick={() => setViewMode('list')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${viewMode === 'list' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}>Lista</button>
        </div>
      </div>

      {viewMode === 'kanban' ? (
        <div className="flex gap-4 overflow-x-auto pb-4 flex-1 scrollbar-thin scrollbar-thumb-zinc-800 items-start">
          {COLUMNS.map(col => (
            <div key={col.id} className="min-w-[300px] w-[300px] bg-[#050505] border border-zinc-900 rounded-2xl p-4 flex flex-col max-h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${col.color}`} />
                  {col.id}
                </h3>
                <span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-full border border-zinc-800">
                  {LEADS.filter(l => l.status === col.id).length}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 scrollbar-hide py-1">
                {LEADS.filter(l => l.status === col.id).map(lead => (
                  <div key={lead.id} onClick={() => navigate(`/leads/${lead.id}`)} className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-4 cursor-pointer hover:border-zinc-700 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="font-bold text-white text-sm">{lead.name}</div>
                        {lead.score > 90 && <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />}
                      </div>
                      <MoreVertical className="w-4 h-4 text-zinc-600" />
                    </div>
                    <div className="text-xs text-zinc-400 mb-3">{lead.interest}</div>
                    <div className="flex gap-1 mb-4">
                      <button className="flex-1 py-1.5 flex justify-center items-center rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 transition-colors"><MessageCircle className="w-3.5 h-3.5" /></button>
                      <button className="flex-1 py-1.5 flex justify-center items-center rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 transition-colors"><Phone className="w-3.5 h-3.5" /></button>
                      <button className="flex-1 py-1.5 flex justify-center items-center rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 transition-colors"><Mail className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500">
                      <span>{lead.lastAction}</span>
                      <span className="font-medium">{lead.date}</span>
                    </div>
                  </div>
                ))}
                {col.id === 'Contato Inicial' && (
                  <AnimatedList 
                    items={["Novo lead processando IA..."]}
                    className="w-full mt-2"
                    itemClassName="text-xs font-medium border border-zinc-800 bg-[#111] py-2 px-3 min-h-0 text-zinc-400"
                    showGradients={false}
                    enableArrowNavigation={false}
                    displayScrollbar={false}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#050505] border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="divide-y divide-zinc-900">
            <div className="grid grid-cols-12 gap-4 p-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider bg-[#0a0a0a]/50">
              <div className="col-span-3">Nome & Contato</div>
              <div className="col-span-3">Interesse</div>
              <div className="col-span-2 text-center">IA Score</div>
              <div className="col-span-2">Última Ação</div>
              <div className="col-span-2 text-right">Fase (Status)</div>
            </div>
            {LEADS.map((lead) => (
              <div key={lead.id} onClick={() => navigate(`/leads/${lead.id}`)} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-zinc-900/30 transition-colors cursor-pointer">
                <div className="col-span-3">
                  <h4 className="text-sm font-semibold text-white">{lead.name}</h4>
                  <div className="text-xs text-zinc-500 mt-0.5">{lead.phone}</div>
                </div>
                <div className="col-span-3 text-sm font-medium text-zinc-300">{lead.interest}</div>
                <div className="col-span-2 text-center flex justify-center">
                   <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ borderColor: `rgba(59, 130, 246, ${lead.score/100})`, color: 'white' }}>
                     {lead.score}
                   </div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs text-zinc-300 line-clamp-1">{lead.lastAction}</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">{lead.date}</div>
                </div>
                <div className="col-span-2 text-right flex justify-end">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider
                    ${lead.status === 'Qualificado IA' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                      lead.status === 'Desqualificado' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                      lead.status === 'Visita Agendada' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                      lead.status === 'Proposta Recebida' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                      'bg-zinc-800 text-zinc-300 border-zinc-700'
                    }`}>
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
