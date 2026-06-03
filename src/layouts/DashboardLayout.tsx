import { useState } from 'react';
import { motion } from 'motion/react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Building, 
  Bot, 
  Settings, 
  Search, 
  Plus, 
  Activity, 
  FileText,
  Send,
  PieChart,
  ChevronRight,
  ChevronLeft,
  UserCircle
} from 'lucide-react';
import LiquidChrome from '../components/LiquidChrome';
import BlurText from '../components/BlurText';
import ClickSpark from '../components/ClickSpark';
import NewPropertyModal from '../components/NewPropertyModal';

const NAV_ITEMS = [
  { icon: Home, label: 'Painel', path: '/dashboard' },
  { icon: Building, label: 'Estoque de Imóveis', path: '/inventory' },
  { icon: Users, label: 'Leads & CRM', path: '/leads' },
  { icon: FileText, label: 'Contratos (IA)', path: '/contracts' },
  { icon: PieChart, label: 'Marketing Vertical', path: '/marketing' },
  { icon: Settings, label: 'Configurações', path: '/settings' },
];

const AGENT_TASKS = [
  "Redigindo minuta para Cobertura Itaim",
  "Cruzando perfil de 43 leads do FB Ads",
  "Otimizando descrições de imóveis",
  "Sincronizando agenda de 12 corretores"
];

const AGENT_EXAMPLES = [
  "Gerar minuta Itaim Bibi",
  "Qualificar leads FB Ads",
  "Analisar mercado Alphaville"
];

function TypographyH3({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>{children}</h3>
}

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, role: 'agent', text: 'Analisei os 28 leads de ontem. 3 têm alto potencial de conversão para o Duplex no Itaim Bibi considerando o score de crédito. Posso agendar visitas automaticamente para seus corretores?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAgentMinimized, setIsAgentMinimized] = useState(false);
  const [isNewPropertyModalOpen, setIsNewPropertyModalOpen] = useState(false);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setMessages([...messages, { id: Date.now(), role: 'user', text: chatInput }]);
    setChatInput('');
    // Simulate typing
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now()+1, role: 'agent', text: 'Executando subrotina de agendamento automático. Retornarei quando as confirmações forem recebidas.' }]);
    }, 1000);
  };

  const handleSendExample = (text: string) => {
    setMessages([...messages, { id: Date.now(), role: 'user', text }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now()+1, role: 'agent', text: `Iniciando ação autônoma: "${text}". Retornarei com relatórios em instantes.` }]);
    }, 1000);
  };

  return (
    <ClickSpark sparkColor='#ffffff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
    <div className="flex h-screen bg-[#030303] text-zinc-300 font-sans overflow-hidden selection:bg-zinc-800 relative z-10 w-full">
      {/* GLOBAL BACKGROUND - Liquid Chrome */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-lighten pointer-events-none">
        <LiquidChrome amplitude={0.6} speed={0.5} baseColor={[0.1, 0.1, 0.1]} interactive={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/90 to-[#030303]" />
      </div>

      {/* LEFT SIDEBAR - NAVIGATION */}
      <aside className="w-[260px] bg-[#050505]/80 backdrop-blur-xl border-r border-zinc-900/50 flex flex-col h-full z-20">
        <div className="px-6 py-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Building className="w-5 h-5 text-black" />
            </div>
            <TypographyH3 className="font-bold text-white tracking-tight text-xl">MasterSaaS</TypographyH3>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2 font-medium">Real Estate Vertical AI</p>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 mt-4">
          {NAV_ITEMS.map((item, idx) => (
            <NavLink 
              key={idx} 
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/40'}`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div 
            onClick={() => navigate('/account')}
            className="bg-[#0a0a0a] border border-zinc-900 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:border-zinc-700 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-white text-xs group-hover:bg-zinc-700 transition-colors">
              GL
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Gabriel L.</p>
              <p className="text-[11px] text-zinc-500 truncate">Broker Principal</p>
            </div>
            <UserCircle className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </div>
        </div>
      </aside>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="flex-1 flex flex-col bg-transparent overflow-auto relative z-10 w-full">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-8 sticky top-0 z-10 bg-transparent backdrop-blur-md border-b border-zinc-900/50">
          <div>
            <BlurText text="Bem-vindo de volta, Gabriel" className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-1" animateBy="words" />
            <h1 className="text-2xl font-bold text-white">Visão Geral da Operação</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input type="text" placeholder="Buscar imóveis, contratos, leads..." className="bg-[#0a0a0a] border border-zinc-800 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-zinc-600 focus:bg-[#111] transition-all w-[320px]" />
            </div>
            <button 
              onClick={() => setIsNewPropertyModalOpen(true)}
              className="bg-white text-black px-4 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Novo Imóvel
            </button>
          </div>
        </header>

        {/* Scrollable Content: Rendered by Outlet */}
        <div className="px-10 py-8 max-w-7xl w-full">
          <Outlet />
        </div>
      </main>

      {/* RIGHT SIDEBAR - MASTER AI AGENT */}
      <aside className={`${isAgentMinimized ? 'w-[80px]' : 'w-[420px]'} flex flex-col relative bg-[#050505]/80 backdrop-blur-xl border-l border-zinc-900/50 shadow-2xl z-20 shrink-0 transition-all duration-300 ease-in-out`}>
        {/* Header */}
        <div className={`relative z-10 py-6 border-b border-zinc-900/50 bg-transparent flex items-center ${isAgentMinimized ? 'justify-center px-0' : 'justify-between px-8'}`}>
          {!isAgentMinimized && (
            <div className="flex items-center gap-4 whitespace-nowrap overflow-hidden">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <Bot className="w-6 h-6 text-black" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#050505] rounded-full animate-pulse" />
              </div>
              <div>
                 <h2 className="font-bold text-white text-lg tracking-tight">MasterSaaS Agent</h2>
                 <p className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider mt-0.5">
                   <Activity className="w-3 h-3" /> Operacional
                 </p>
              </div>
            </div>
          )}
          
          <button 
            onClick={() => setIsAgentMinimized(!isAgentMinimized)}
            className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ${isAgentMinimized ? '' : 'ml-4'}`}
          >
            {isAgentMinimized ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        {!isAgentMinimized ? (
          <div className="relative z-10 flex-1 flex flex-col overflow-hidden w-[420px]">
            {/* Active Subroutines */}
            <div className="p-8 pb-4 shrink-0">
               <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-4">Subrotinas Autônomas</h3>
               <ul className="space-y-3">
                 {AGENT_TASKS.map((task, i) => (
                   <li key={i} className="flex items-start gap-3 bg-[#0a0a0a]/80 backdrop-blur-sm border border-zinc-800/80 p-3 rounded-xl shadow-sm">
                     <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping shrink-0" />
                     <span className="text-xs text-zinc-300 font-medium leading-relaxed">{task}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col p-8 pt-4 overflow-hidden">
               <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-4 shrink-0">Central de Comando</h3>
               
               <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin scrollbar-thumb-zinc-800">
                 {messages.map(m => (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     key={m.id} 
                     className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                   >
                     <div className={`max-w-[90%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-zinc-800 text-white rounded-br-none ml-auto' : 'bg-[#0a0a0a] border border-zinc-800 text-zinc-300 rounded-tl-none shadow-md'}`}>
                       <p className="text-[13px] leading-relaxed font-medium">{m.text}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
               
               {/* Examples Area */}
               <div className="mb-4 flex flex-wrap gap-2 shrink-0">
                 {AGENT_EXAMPLES.map((ex, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSendExample(ex)}
                      className="text-[11px] px-3 py-1.5 rounded-full border border-zinc-800 bg-[#0a0a0a] text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors text-left"
                    >
                      {ex}
                    </button>
                 ))}
               </div>

               <div className="relative mt-auto shrink-0 bg-[#0a0a0a] rounded-xl border border-zinc-800 focus-within:border-zinc-500 transition-colors shadow-lg">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Instrua o agente..." 
                    className="w-full bg-transparent py-4 pl-4 pr-12 text-sm text-white focus:outline-none placeholder:text-zinc-600" 
                  />
                  <button 
                    onClick={handleSend}
                    disabled={!chatInput.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white disabled:opacity-50 disabled:bg-zinc-700 rounded-lg text-black hover:bg-zinc-200 transition-colors"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
               </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center py-6 gap-6 relative z-10 w-[80px]">
            <div className="relative cursor-pointer hover:scale-105 transition-transform group" onClick={() => setIsAgentMinimized(false)}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#050505] rounded-full animate-pulse" />
            </div>
            
            <div className="w-[1px] flex-1 bg-zinc-800/50 mx-auto" />
            
            {/* Visual indicators of active tasks */}
            <div className="flex flex-col gap-3 pb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping opacity-75 mx-auto" />
              <div className="w-2 h-2 rounded-full bg-blue-500/50 mx-auto" />
              <div className="w-2 h-2 rounded-full bg-blue-500/50 mx-auto" />
            </div>
          </div>
        )}
      </aside>
      
      {isNewPropertyModalOpen && <NewPropertyModal onClose={() => setIsNewPropertyModalOpen(false)} />}
    </div>
    </ClickSpark>
  );
}
