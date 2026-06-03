import { FileText, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';
import NewContractModal from '../components/NewContractModal';

const CONTRACTS = [
  { id: 'CTR-2026-089', title: 'Compra e Venda - Cobertura Itaim', parties: 'Roberto Silva & Gabriel L.', value: 'R$ 8.500.000', status: 'Revisado pela IA', statusColor: 'text-green-400', date: 'Hoje, 09:30', icon: CheckCircle2 },
  { id: 'CTR-2026-088', title: 'Locação Comercial - Faria Lima', parties: 'Tech Corp & XPTO Investimentos', value: 'R$ 45.000/mês', status: 'Aguardando Assinatura', statusColor: 'text-yellow-400', date: 'Ontem, 14:15', icon: Clock },
  { id: 'CTR-2026-087', title: 'Permuta - Terreno Alphaville', parties: 'Construtora Alpha & Família Mendes', value: 'R$ 2.400.000', status: 'Risco Identificado', statusColor: 'text-red-400', date: '01 Jun, 16:45', icon: AlertCircle },
];

export default function ContractsView() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Central de Contratos</h2>
          <p className="text-sm text-zinc-400">Minutas geradas e auditadas automaticamente pela IA.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2">
          <FileText className="w-4 h-4" /> Gerar Nova Minuta
        </button>
      </div>

      <div className="bg-[#050505] border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-900 text-xs font-semibold text-zinc-500 uppercase tracking-wider bg-[#0a0a0a]/50">
          <div className="col-span-2">Contrato & Partes</div>
          <div>Valor Envolvido</div>
          <div>Status IA</div>
          <div className="text-right">Última Atualização</div>
        </div>

        <div className="divide-y divide-zinc-900">
          {CONTRACTS.map((contract) => (
            <div key={contract.id} className="grid grid-cols-5 gap-4 p-4 items-center hover:bg-zinc-900/30 transition-colors cursor-pointer group">
              <div className="col-span-2 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-zinc-800 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{contract.title}</h4>
                  <div className="text-xs text-zinc-500 mt-0.5">{contract.id} • {contract.parties}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-zinc-300">
                {contract.value}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <contract.icon className={`w-4 h-4 ${contract.statusColor}`} />
                <span className={contract.statusColor}>{contract.status}</span>
              </div>
              <div className="text-right text-sm text-zinc-500">
                {contract.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showModal && <NewContractModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
