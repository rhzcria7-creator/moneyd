import { ArrowLeft, Book, Code, Terminal, Database, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LiquidChrome from '../components/LiquidChrome';
import React from 'react';

export default function ApiDocsView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-zinc-800 flex overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-10 mix-blend-lighten pointer-events-none">
        <LiquidChrome amplitude={0.3} speed={0.2} baseColor={[0.1, 0.1, 0.1]} interactive={false} />
      </div>

      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-zinc-900 bg-[#050505]/80 backdrop-blur-md hidden md:flex flex-col relative z-20">
        <div className="p-6 border-b border-zinc-900">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-sm font-bold text-white hover:text-zinc-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>
          <div className="flex items-center gap-2 text-white">
            <Book className="w-5 h-5" />
            <span className="font-bold tracking-tight">API Docs</span>
          </div>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <nav className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">Introdução</h4>
              <ul className="space-y-1">
                <li><a href="#overview" className="block px-2 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">Visão Geral</a></li>
                <li><a href="#auth" className="block px-2 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">Autenticação</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">Core API</h4>
              <ul className="space-y-1">
                <li><a href="#leads" className="block px-2 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">Leads & CRM</a></li>
                <li><a href="#inventory" className="block px-2 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">Inventário</a></li>
                <li><a href="#contracts" className="block px-2 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">Contratos (Minutas)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">Webhooks</h4>
              <ul className="space-y-1">
                <li><a href="#events" className="block px-2 py-1.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors">Eventos Suportados</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-10 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {/* Mobile Header */}
        <header className="md:hidden p-4 border-b border-zinc-900 flex items-center gap-4 bg-[#050505]">
           <button onClick={() => navigate('/')} className="p-2 bg-zinc-900 rounded-md text-white">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="font-bold text-white tracking-tight">MasterSaaS API Docs</span>
        </header>

        <div className="max-w-4xl max-w-4xl mx-auto p-8 md:p-12 space-y-16 pb-32">
          
          <section id="overview" className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Visão Geral da API</h1>
              <p className="text-lg text-zinc-400">Integre o MasterSaaS Agent ao seu ERP imobiliário, site ou fluxo customizado.</p>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              A API RESTful do MasterSaaS permite que você conecte o motor de Inteligência Artificial diretamente na infraestrutura atual da sua imobiliária. Desde envio de leads para qualificação automática até extração de minutas contratuais redigidas pela IA.
            </p>
            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-4 flex items-center gap-4">
              <Terminal className="w-6 h-6 text-zinc-500" />
              <code className="text-sm font-mono text-zinc-300">Base URL: https://api.mastersaas.com/v1</code>
            </div>
          </section>

          <section id="auth" className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Key className="w-6 h-6 text-blue-400" /> Autenticação
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Todas as requisições devem incluir o header <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-blue-400">Authorization</code> contendo sua chave de API (Bearer Token).
            </p>
            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-2 text-xs font-mono text-zinc-500">Exemplo de Requisição (cURL)</div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300">
{`curl -X GET "https://api.mastersaas.com/v1/ping" \\
  -H "Authorization: Bearer ms_live_xxxxxxxxxxxxx" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>
          </section>

          <section id="leads" className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Database className="w-6 h-6 text-green-400" /> Leads & CRM
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Endpoints para injetar leads no motor de qualificação da IA, onde ocorrerá o contato via WhatsApp e scoring automático.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Criar e Qualificar Lead</h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-400 font-mono text-xs font-bold rounded border border-green-500/20">POST</span>
                <code className="text-zinc-400 font-mono text-sm">/v1/leads</code>
              </div>
              <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden">
                <div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-2 text-xs font-mono text-zinc-500">Payload (JSON)</div>
                <pre className="p-4 overflow-x-auto text-sm font-mono text-[#eab308]">
{`{
  "name": "Roberto Silva",
  "phone": "+5511999999999",
  "source": "facebook_ads",
  "interest_type": "cobertura",
  "auto_contact": true // A IA iniciará a conversa via WhatsApp
}`}
                </pre>
              </div>
            </div>
          </section>

          <section id="contracts" className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Code className="w-6 h-6 text-purple-400" /> Minutas e Contratos
            </h2>
             <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Gerar Contrato (IA)</h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-400 font-mono text-xs font-bold rounded border border-green-500/20">POST</span>
                <code className="text-zinc-400 font-mono text-sm">/v1/contracts/generate</code>
              </div>
              <p className="text-sm text-zinc-500">Forneça os IDs do Lead e do Imóvel. O motor de IA injetará cláusulas personalizadas e devolverá a minuta.</p>
              <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden">
                <div className="bg-zinc-900/50 border-b border-zinc-800 px-4 py-2 text-xs font-mono text-zinc-500">Response 200 OK</div>
                <pre className="p-4 overflow-x-auto text-sm font-mono text-[#eab308]">
{`{
  "contract_id": "ctr_899238",
  "status": "ready",
  "pdf_url": "https://api.mastersaas.com/dl/ctr_899238.pdf",
  "ai_compliance_score": 99
}`}
                </pre>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
