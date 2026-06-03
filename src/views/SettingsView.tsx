import { Settings, Bot, Users, Key, Briefcase } from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Configurações do Sistema</h2>
          <p className="text-sm text-zinc-400">Gerencie a autonomia da IA, configurações da imobiliária e integrações.</p>
        </div>
        <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
          Salvar Preferências
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          {[
             { id: 'ai', icon: Bot, label: 'Inteligência Artificial', active: true },
             { id: 'team', icon: Users, label: 'Equipe e Permissões' },
             { id: 'api', icon: Key, label: 'API & Integrações' },
             { id: 'company', icon: Briefcase, label: 'Dados da Imobiliária' }
          ].map(tab => (
            <button 
              key={tab.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${tab.active ? 'bg-zinc-900 border border-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'}`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Autonomia do Agente IA</h3>
            
            <div className="space-y-6">
              {[
                { title: 'Gerar Cópias de Anúncios Automaticamente', desc: 'Permite que a IA reescreva as descrições dos imóveis baseada no desempenho de conversão.', enabled: true },
                { title: 'Qualificação Ativa de Leads (WhatsApp)', desc: 'O Agente pode chamar prospects e fazer perguntas qualificatórias via WhatsApp Business.', enabled: true },
                { title: 'Redação Automática de Contratos', desc: 'A IA preenche as minutas caso todas as condições de negociação sejam batidas.', enabled: false },
                { title: 'Aprovação Direta de Despesas de Ads', desc: 'Permite que a IA remaneje até R$ 1.000,00 por dia entre campanhas para maximizar ROI.', enabled: false }
              ].map((setting, i) => (
                <div key={i} className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{setting.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{setting.desc}</p>
                  </div>
                  <button className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${setting.enabled ? 'bg-green-500' : 'bg-zinc-800'}`}>
                    <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${setting.enabled ? 'translate-x-5' : 'translate-x-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#050505] border border-zinc-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Regras de Atendimento</h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tom de Voz (Agente IA)</label>
                <select className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500">
                  <option>Formal e Corporativo</option>
                  <option>Moderno e Consultivo</option>
                  <option>Exclusivo e Luxuoso</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Limite de Desconto Autorizado (%)</label>
                <input type="number" defaultValue={5} className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
