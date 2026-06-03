import { ArrowLeft, User, Phone, Mail, MapPin, CheckCircle2, Zap, Clock, FileText, Send } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function LeadDetailView() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Mock data for the specific ID
  const leadData = {
    id: id || 'L-1049',
    name: 'Roberto Silva',
    phone: '+55 11 99999-9999',
    email: 'roberto.silva@exemplo.com',
    status: 'Qualificado IA',
    score: 98,
    interest: 'Cobertura Itaim Bibi',
    budget: 'R$ 8M - R$ 10M',
    location: 'São Paulo, SP',
    source: 'Meta Ads',
    createdAt: '03 Jun 2026, 08:30',
  };

  const aiLogs = [
    { time: '10:05', msg: 'Lead detectou interesse na Cobertura Duplex PRP-001.' },
    { time: '10:06', msg: 'IA puxou dados de score de crédito (Serasa: Excelente).' },
    { time: '10:07', msg: 'IA enviou primeira mensagem via WhatsApp perguntando sobre disponibilidade.' },
    { time: '10:15', msg: 'Lead respondeu solicitando visita amanhã às 15h. IA confirmou no calendário.' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 h-full overflow-y-auto pb-12">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate('/leads')} className="p-2 bg-[#0a0a0a] rounded-md border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            {leadData.name}
            <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded-full tracking-wider">
              {leadData.status}
            </span>
          </h2>
          <p className="text-sm text-zinc-500">ID: {leadData.id} • Adicionado {leadData.createdAt}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Data */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Perfil do Lead</h3>
              <div className="w-12 h-12 rounded-full border-[3px] flex items-center justify-center text-sm font-bold" style={{ borderColor: `rgba(59, 130, 246, ${leadData.score/100})`, color: 'white' }}>
                 {leadData.score}
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-zinc-500 font-medium">WhatsApp</label>
                <div className="text-sm text-white flex items-center gap-2"><Phone className="w-4 h-4 text-zinc-600" /> {leadData.phone}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-zinc-500 font-medium">E-mail</label>
                <div className="text-sm text-white flex items-center gap-2"><Mail className="w-4 h-4 text-zinc-600" /> {leadData.email}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-zinc-500 font-medium">Localização Mapeada</label>
                <div className="text-sm text-white flex items-center gap-2"><MapPin className="w-4 h-4 text-zinc-600" /> {leadData.location}</div>
              </div>
              <div className="pt-4 border-t border-zinc-900 grid grid-cols-2 gap-4">
                 <div>
                   <label className="text-xs text-zinc-500 font-medium">Interesse</label>
                   <div className="text-sm font-medium text-zinc-300">{leadData.interest}</div>
                 </div>
                 <div>
                   <label className="text-xs text-zinc-500 font-medium">Orçamento (IA Est.)</label>
                   <div className="text-sm font-bold text-green-400">{leadData.budget}</div>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6 shadow-xl">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Ações Rápidas</h3>
            <div className="space-y-3">
              <button className="w-full py-3 bg-[#0a0a0a] border border-zinc-800 text-white font-medium text-sm rounded-xl hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Gerar Minuta de Contrato
              </button>
              <button className="w-full py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Zap className="w-4 h-4" /> Sugerir Novo Imóvel (IA)
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interaction History */}
        <div className="lg:col-span-2">
          <div className="bg-[#050505] border border-zinc-900 rounded-2xl overflow-hidden shadow-xl h-full flex flex-col">
            <div className="p-6 border-b border-zinc-900 bg-[#0a0a0a]/50">
               <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                Log de Atendimento Autônomo
               </h3>
               <p className="text-xs text-zinc-500 mt-1">Interações realizadas pelo Agente IA em nome da corretora.</p>
            </div>
            
            <div className="p-6 flex-1 overflow-y-auto space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed" style={{ backgroundSize: '100px 100px', backgroundColor: 'transparent' }}>
              {aiLogs.map((log, i) => (
                <div key={i} className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                     <Bot className="w-4 h-4 text-blue-400" />
                   </div>
                   <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl rounded-tl-none p-4 w-fit max-w-[80%] shadow-lg">
                     <p className="text-sm text-zinc-300 leading-relaxed">{log.msg}</p>
                     <span className="text-[10px] text-zinc-500 font-medium mt-2 block flex items-center gap-1">
                       <Clock className="w-3 h-3" /> {log.time}
                     </span>
                   </div>
                </div>
              ))}

              <div className="flex gap-4 flex-row-reverse">
                 <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                   <User className="w-4 h-4 text-zinc-400" />
                 </div>
                 <div className="bg-zinc-800 border border-zinc-700 rounded-2xl rounded-tr-none p-4 w-fit max-w-[80%] shadow-lg">
                   <p className="text-sm text-white leading-relaxed">Perfeito. Podem me confirmar o endereço exato para eu colocar no Waze?</p>
                   <span className="text-[10px] text-zinc-400 font-medium mt-2 block flex items-center gap-1 justify-end">
                     10:18 <CheckCircle2 className="w-3 h-3 text-blue-400" />
                   </span>
                 </div>
              </div>
            </div>

            <div className="p-4 border-t border-zinc-900 bg-[#0a0a0a]">
               <div className="flex bg-[#050505] border border-zinc-800 rounded-xl overflow-hidden focus-within:border-zinc-600 transition-colors">
                 <input type="text" placeholder="Assumir controle da conversa..." className="flex-1 bg-transparent px-4 py-3 text-sm text-white focus:outline-none" />
                 <button className="px-4 bg-zinc-900 hover:bg-zinc-800 text-white transition-colors border-l border-zinc-800">
                   <Send className="w-4 h-4" />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
