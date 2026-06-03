import { UserCircle, CreditCard, Shield, Bell } from 'lucide-react';
import React from 'react';

export default function AccountView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Minha Conta</h2>
        <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
          Salvar Alterações
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Perfil Público</h3>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">GL</span>
              </div>
              <button className="px-4 py-2 border border-zinc-700 text-sm font-medium text-white rounded-lg hover:bg-zinc-900 transition-colors">
                Alterar Foto
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Nome</label>
                <input type="text" defaultValue="Gabriel L." className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-zinc-500" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Cargo</label>
                <input type="text" defaultValue="Broker Principal" className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-zinc-500" />
              </div>
            </div>
          </div>

          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-zinc-400" /> Segurança e Senha
            </h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Senha Atual</label>
                <input type="password" value="********" readOnly className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-500 focus:outline-none opacity-50 cursor-not-allowed" />
              </div>
              <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">Alterar Senha</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-b from-zinc-900 to-[#050505] border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-zinc-400" /> 
              Plano Atual
            </h3>
            <div className="text-3xl font-bold text-white mb-1">MasterSaaS Pro</div>
            <p className="text-sm text-zinc-400 mb-6">Faturamento mensal. Renovação em 12/07/2026.</p>
            
            <div className="space-y-3 mb-6 flex-1">
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-500">Imóveis Ativos</span>
                 <span className="text-white font-medium">124 / 500</span>
               </div>
               <div className="w-full bg-zinc-900 rounded-full h-1.5">
                 <div className="bg-white w-[25%] h-1.5 rounded-full" />
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-500">Créditos de IA (Mês)</span>
                 <span className="text-white font-medium">1.4k / 5k</span>
               </div>
               <div className="w-full bg-zinc-900 rounded-full h-1.5">
                 <div className="bg-blue-500 w-[28%] h-1.5 rounded-full" />
               </div>
            </div>

            <button className="w-full py-2 bg-white text-black font-semibold text-sm rounded-lg hover:bg-zinc-200 transition-colors">
              Fazer Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
