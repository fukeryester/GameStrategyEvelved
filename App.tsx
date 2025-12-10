import React, { useState } from 'react';
import HexBackground from './components/HexBackground';
import Section from './components/Section';
import { TEAM_DATA, PHASES_DATA } from './constants';
import TeamCard from './components/TeamCard';
import PhaseDetail from './components/PhaseDetail';
import CoreLogic from './components/CoreLogic';
import { ArrowDown, TrendingUp, ShieldCheck, Target } from 'lucide-react';

export default function App() {
  const [activePhase, setActivePhase] = useState<string>('phase1');

  return (
    <div className="min-h-screen font-sans text-slate-200 selection:bg-neon-blue selection:text-black pb-24">
      <HexBackground />

      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-10">
        <Section className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-widest text-slate-300 font-mono">Strategic Vision v1.0</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-6">
              GAME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">STRATEGY</span> <br />
              EVOLVED
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-md">
              针对游戏中小开发商的战略细分业务。
              <br />
              资源背书 + 轻量试点 + 生态绑定。
            </p>
        </Section>
        
        <Section delay={0.2} className="mt-8 grid grid-cols-2 gap-3">
             <div className="glass-panel p-4 rounded-xl">
                 <h3 className="text-neon-blue text-2xl font-bold mb-1">0-1</h3>
                 <p className="text-xs text-slate-400">快速落地实操</p>
             </div>
             <div className="glass-panel p-4 rounded-xl">
                 <h3 className="text-neon-purple text-2xl font-bold mb-1">Eco</h3>
                 <p className="text-xs text-slate-400">全生态链条</p>
             </div>
        </Section>

        <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce opacity-50">
            <ArrowDown size={24} />
        </div>
      </header>

      {/* Core Logic Section */}
      <section className="px-6 py-12">
        <Section>
            <h2 className="text-sm font-mono text-neon-blue mb-8 uppercase tracking-widest border-l-2 border-neon-blue pl-3">The Engine</h2>
            <div className="glass-panel p-6 rounded-3xl border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                <h3 className="text-2xl font-bold text-white text-center mb-8">逻辑闭环</h3>
                <CoreLogic />
                <div className="mt-8 text-center bg-black/30 p-4 rounded-xl border border-white/5">
                    <p className="text-sm text-slate-300">
                        <span className="text-neon-blue">获客</span> → 
                        <span className="text-white mx-2">服务</span> → 
                        <span className="text-neon-purple">复购</span> → 
                        <span className="text-neon-green mx-2">扩张</span>
                    </p>
                </div>
            </div>
        </Section>
      </section>

      {/* Team Section */}
      <section className="px-6 py-12">
        <Section>
             <h2 className="text-sm font-mono text-neon-purple mb-8 uppercase tracking-widest border-l-2 border-neon-purple pl-3">Resources & Team</h2>
             <div className="grid gap-4 md:grid-cols-2">
                 {TEAM_DATA.map((member, index) => (
                     <TeamCard key={index} member={member} index={index} />
                 ))}
             </div>
        </Section>
      </section>

      {/* Phases Roadmap */}
      <section className="px-6 py-12">
          <Section>
             <h2 className="text-sm font-mono text-orange-400 mb-8 uppercase tracking-widest border-l-2 border-orange-400 pl-3">Strategic Roadmap</h2>
             <div className="relative">
                 {/* Connecting Line (Visual only, hidden on small screens if too cluttered) */}
                 <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-800 -z-10 hidden sm:block"></div>
                 
                 {PHASES_DATA.map((phase) => (
                     <PhaseDetail 
                        key={phase.id} 
                        phase={phase} 
                        isActive={activePhase === phase.id}
                        onClick={() => setActivePhase(activePhase === phase.id ? '' : phase.id)}
                     />
                 ))}
             </div>
          </Section>
      </section>

      {/* Final CTA/Summary */}
      <section className="px-6 py-20">
          <Section>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500/30 p-8 text-center">
                <div className="absolute top-0 right-0 p-12 bg-neon-blue/20 blur-[60px] rounded-full pointer-events-none"></div>
                
                <Target size={48} className="text-white mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale?</h2>
                <p className="text-slate-300 mb-8">
                    从单一战略服务升级为中小开发者生态服务商。
                </p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg text-left">
                        <TrendingUp className="text-neon-green shrink-0" />
                        <div>
                            <div className="text-xs text-slate-500 uppercase">Target</div>
                            <div className="text-sm font-bold text-white">生态共赢 · 行业壁垒</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg text-left">
                        <ShieldCheck className="text-neon-blue shrink-0" />
                        <div>
                            <div className="text-xs text-slate-500 uppercase">Strategy</div>
                            <div className="text-sm font-bold text-white">低门槛 · 高交付 · 强绑定</div>
                        </div>
                    </div>
                </div>
            </div>
          </Section>
      </section>

      {/* Sticky Bottom Nav (Mobile App feel) */}
      <div className="fixed bottom-0 left-0 w-full bg-cyber-black/80 backdrop-blur-xl border-t border-white/10 p-4 z-50 md:hidden">
          <div className="flex justify-between items-center max-w-sm mx-auto">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
                className="flex flex-col items-center gap-1 text-neon-blue"
              >
                  <div className="w-1 h-1 rounded-full bg-neon-blue"></div>
                  <span className="text-[10px] font-mono">VISION</span>
              </button>
              <div className="h-4 w-[1px] bg-slate-700"></div>
              <span className="text-xs text-slate-500 font-mono">STRATEGY 2025</span>
          </div>
      </div>
    </div>
  );
}
