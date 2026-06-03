import { motion } from 'motion/react';
import { ArrowRight, Bot, Building, FileText, Zap, Shield, ChevronRight, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LiquidChrome from '../components/LiquidChrome';
import BlurText from '../components/BlurText';
import ShinyText from '../components/ShinyText';
import ClickSpark from '../components/ClickSpark';
import BorderGlow from '../components/BorderGlow';

export default function LandingView() {
  const navigate = useNavigate();

  return (
    <ClickSpark sparkColor='#ffffff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-zinc-800 relative z-10 w-full overflow-x-hidden">
        {/* GLOBAL BACKGROUND - Liquid Chrome */}
        <div className="fixed inset-0 z-0 opacity-30 mix-blend-lighten pointer-events-none">
          <LiquidChrome amplitude={0.8} speed={0.4} baseColor={[0.1, 0.1, 0.1]} interactive={false} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-[#030303]/80 to-[#030303]" />
        </div>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#030303]/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <Building className="w-5 h-5 text-black" />
          </div>
          <span className="font-bold text-white tracking-tight text-xl">MasterSaaS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <button onClick={() => navigate('/features')} className="hover:text-white transition-colors">Funcionalidades</button>
          <button onClick={() => navigate('/roi')} className="hover:text-white transition-colors">Retorno ROI</button>
          <button onClick={() => navigate('/pricing')} className="hover:text-white transition-colors">Planos</button>
          <button onClick={() => navigate('/docs/api')} className="hover:text-white transition-colors">API Docs</button>
        </nav>
        <button 
          onClick={() => navigate('/dashboard')}
          className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2"
        >
          Acessar Plataforma <ArrowRight className="w-4 h-4" />
        </button>
      </header>

        {/* HERO SECTION */}
        <section className="relative z-10 pt-48 pb-32 px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm mb-8">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Agente Autônomo Imobiliário v2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight max-w-4xl leading-[1.1] mb-6">
            A primeira inteligência <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
              que vende imóveis por você.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Não é apenas um CRM. É um funcionário autônomo. O MasterSaaS Agent prospecta, qualifica leads, redige contratos e otimiza seus anúncios 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => navigate('/pricing')}
              className="px-8 py-4 bg-white text-black text-base font-bold rounded-full hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2"
            >
              Iniciar Teste Gratuito <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/schedule')}
              className="px-8 py-4 bg-[#0a0a0a] border border-zinc-800 text-white text-base font-bold rounded-full hover:bg-zinc-900 transition-all flex items-center gap-2"
            >
              Agendar Demo <Bot className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* BENTO GRID FEATURES */}
        <section id="features" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <BlurText text="COMO FUNCIONA" className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Operação imobiliária no piloto automático</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Large */}
            <BorderGlow className="md:col-span-2 rounded-3xl" glowColor="100 100 255" colors={['#ffffff', '#4f46e5', '#000000']} borderRadius={24}>
              <div className="bg-[#050505]/90 backdrop-blur-md h-full rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -right-8 -top-8 opacity-10">
                  <Bot className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Qualificação Autônoma</h3>
                  <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                    O agente cruza dados de Serasa, imposto de renda e histórico web para dar um score de "match" imediato para cada lead que entra.
                  </p>
                </div>
              </div>
            </BorderGlow>

            {/* Feature 2: Small */}
            <div className="bg-[#050505]/90 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SEO & GEO Targeting</h3>
              <p className="text-zinc-400 leading-relaxed">
                Rankeamento inteligente no Google (SEO) e anúncios ultra-segmentados por geolocalização (GEO) para atrair leads do bairro exato do imóvel.
              </p>
            </div>

            {/* Feature 3: Small */}
            <div className="bg-[#050505]/90 backdrop-blur-md border border-zinc-900 rounded-3xl p-8 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mindset de CEO</h3>
              <p className="text-zinc-400 leading-relaxed">
                Pare de perder tempo com minutas e redação. A IA gerencia o operacional para você focar no relacionamento como um verdadeiro CEO imobiliário.
              </p>
            </div>

            {/* Feature 4: Large */}
            <div className="md:col-span-2 bg-[#050505]/90 backdrop-blur-md border border-zinc-900 rounded-3xl p-10 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-wider">
                    Sucesso Comprovado
                  </div>
                  <h3 className="text-2xl font-bold text-white">Descrições que vendem</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Faça upload de fotos simples. A IA aplica correção de luz, detecta os ambientes e gera copys persuasivas focadas no perfil do cliente ideal daquele bairro.
                  </p>
                </div>
                <div className="flex-1 w-full relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 relative shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600" alt="Imóvel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                       <ShinyText text="R$ 8.5M • Cobertura Itaim" className="text-white font-bold block mb-1" speed={3} />
                       <div className="text-[10px] text-zinc-400 bg-black/60 backdrop-blur-sm p-2 rounded border border-white/10">Copy gerada: "Onde a exclusividade encontra o horizonte paulistano..."</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative z-10 py-24 px-6 bg-[#020202] border-t border-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <BlurText text="RESULTADOS REAIS" className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ouvindo quem está na linha de frente</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Carlos Andrade", role: "CEO, Andrade Imóveis", text: "Com o MasterSaaS Agent reduzimos o Custo por Lead (CPA) em 42% no primeiro mês usando GEO targeting inteligente nas campanhas de Facebook." },
                { name: "Mariana Souza", role: "Corretora Independente", text: "Eu perdia horas redigindo descrições. Hoje, só subo as fotos para o sistema e ele gera anúncios extremamente persuasivos via SEO focado no Google." },
                { name: "Felipe Costa", role: "Diretor Comercial", text: "Minha equipe agora opera com o mindset de um verdadeiro CEO. Eles terceirizaram todo o trabalho braçal de contratos para a Inteligência Artificial e focam apenas no closing." }
              ].map((testimonial, i) => (
                 <div key={i} className="bg-[#050505] border border-zinc-800 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <p className="text-zinc-400 italic mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">{testimonial.name.charAt(0)}</div>
                      <div>
                        <div className="text-sm font-bold text-white">{testimonial.name}</div>
                        <div className="text-xs text-zinc-500">{testimonial.role}</div>
                      </div>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="relative z-10 py-24 px-6 max-w-5xl mx-auto border-t border-zinc-900/50">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seria um crime ser de graça</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">O sistema se paga no seu primeiro contrato fechado. A economia de tempo, dinheiro em Ads reprovados e contratos manuais é brutal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-[#050505] border border-zinc-900 rounded-3xl p-8 hover:border-zinc-800 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Broker Solo</h3>
                <p className="text-zinc-400 text-sm mb-6">Para o corretor focado que quer operar como uma empresa grande.</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-white">R$ 497</span>
                  <span className="text-zinc-500">/mês</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Agente Autônomo Padrão',
                    'Até 50 imóveis no portfólio',
                    'Análise de Score de 100 leads/mês',
                    'Suporte via e-mail'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Shield className="w-4 h-4 text-zinc-600" /> {item}
                    </li>
                  ))}
                </ul>
            <button onClick={() => navigate('/pricing')} className="w-full py-4 bg-zinc-900 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors">
              Garantir meu Assento
            </button>
          </div>

          <div className="bg-gradient-to-b from-zinc-900 to-[#050505] border border-zinc-700 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(255,255,255,0.05)] transform md:-translate-y-4">
            <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
              <span className="bg-white text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                O Queridinho
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Master Imobiliária</h3>
            <p className="text-zinc-400 text-sm mb-6">Apenas para operações com volume massivo. O motor por trás das grandes.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-white">R$ 1.297</span>
              <span className="text-zinc-500">/mês</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Master Agent Personalizado',
                'Imóveis ilimitados',
                'Contratos auditados via IA',
                'Otimização de tráfego pago',
                'Multi-corretores (Até 10)'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white">
                  <Shield className="w-4 h-4 text-blue-400" /> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => navigate('/pricing')}
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Destravar Lucro Maximo
            </button>
          </div>
        </div>
      </section>

        {/* FOOTER */}
        <footer className="relative z-10 py-10 border-t border-zinc-900 text-center text-zinc-500 text-sm mt-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building className="w-4 h-4 text-zinc-400" />
            <span className="font-bold text-zinc-400">MasterSaaS</span>
          </div>
          <p>© 2026 MasterSaaS AI. Todos os direitos reservados.</p>
        </footer>
      </div>
    </ClickSpark>
  );
}
