import { ArrowLeft, CheckCircle2, Shield, Zap, Bot, BarChart, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LiquidChrome from '../components/LiquidChrome';
import BorderGlow from '../components/BorderGlow';
import React from 'react';

export default function FeaturesView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-zinc-800 relative z-10 w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-20 mix-blend-lighten pointer-events-none">
        <LiquidChrome amplitude={0.5} speed={0.3} baseColor={[0.1, 0.1, 0.1]} interactive={false} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-bold text-white hover:text-zinc-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
      </header>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">O Motor da sua <br/><span className="text-blue-400">Operação Imobiliária</span></h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Explore todos os módulos da IA desenvolvidos especificamente para o mercado de alto padrão.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BorderGlow borderRadius={24} colors={['#3b82f6', '#000', '#3b82f6']}>
            <div className="p-10 bg-[#050505]/90 rounded-3xl h-full space-y-6">
              <Bot className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-white">Qualificação de Leads IA</h3>
              <p className="text-zinc-400 leading-relaxed">Atendimento simultâneo de múltiplos clientes por WhatsApp, identificando score de crédito, validando interesses e agendando visitas no CRM sem intervenção humana.</p>
              <ul className="space-y-3 pt-4">
                {['Atendimento 24/7', 'Análise de perfil financeiro', 'Sincronização de agenda'].map((i, key) => (
                  <li key={key} className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> {i}</li>
                ))}
              </ul>
            </div>
          </BorderGlow>

          <BorderGlow borderRadius={24} colors={['#a855f7', '#000', '#a855f7']}>
            <div className="p-10 bg-[#050505]/90 rounded-3xl h-full space-y-6">
              <BarChart className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-white">Otimização de Mídia Dinâmica</h3>
              <p className="text-zinc-400 leading-relaxed">Chega de rasgar dinheiro em Ads. O módulo de marketing ajusta orçamentos diariamente, analisando o CPA e o VGV para as plataformas com maior conversão.</p>
              <ul className="space-y-3 pt-4">
                 {['Meta Ads, Google Ads e TikTok', 'Pausa automática de campanhas ruins', 'A/B Testing de criativos'].map((i, key) => (
                  <li key={key} className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> {i}</li>
                ))}
              </ul>
            </div>
          </BorderGlow>

          <BorderGlow borderRadius={24} colors={['#10b981', '#000', '#10b981']}>
            <div className="p-10 bg-[#050505]/90 rounded-3xl h-full space-y-6">
              <FileText className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white">Minutas e Contratos Automáticos</h3>
              <p className="text-zinc-400 leading-relaxed">Proteção legal completa. A IA puxa os dados do comprador, do imóvel e gera o contrato em PDF, auditando cláusulas pelo compliance nacional.</p>
              <ul className="space-y-3 pt-4">
                 {['Mitigação de risco legal', 'Geração de PDF aprovado', 'Contratos de Compra & Venda e Locação'].map((i, key) => (
                  <li key={key} className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> {i}</li>
                ))}
              </ul>
            </div>
          </BorderGlow>

          <BorderGlow borderRadius={24} colors={['#eab308', '#000', '#eab308']}>
            <div className="p-10 bg-[#050505]/90 rounded-3xl h-full space-y-6">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-white">Copywriting & SEO</h3>
              <p className="text-zinc-400 leading-relaxed">Fotografias processadas para descrição automática e encantadora de imóveis, otimizando o rankeamento no Google de forma orgânica.</p>
              <ul className="space-y-3 pt-4">
                 {['Visão computacional (Imagem para texto)', 'Posicionamento e gatilhos mentais', 'Aumento na busca orgânica'].map((i, key) => (
                  <li key={key} className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 className="w-4 h-4 text-zinc-500" /> {i}</li>
                ))}
              </ul>
            </div>
          </BorderGlow>
        </div>
      </main>
    </div>
  );
}
