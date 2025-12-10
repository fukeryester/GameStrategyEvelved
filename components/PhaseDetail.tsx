import React, { useState } from 'react';
import { Phase } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Zap } from 'lucide-react';

const PhaseDetail: React.FC<{ phase: Phase; isActive: boolean; onClick: () => void }> = ({ phase, isActive, onClick }) => {
  return (
    <div className={`mb-4 transition-all duration-500 ${isActive ? 'scale-[1.02]' : 'scale-100'}`}>
      <motion.button
        onClick={onClick}
        className={`w-full text-left relative overflow-hidden rounded-2xl p-0.5 group`}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
        
        {/* Card Content */}
        <div className="relative bg-cyber-gray rounded-[14px] p-5 border border-white/5">
            <div className="flex justify-between items-start">
                <div>
                    <span className={`inline-block px-2 py-1 rounded text-[10px] font-mono font-bold tracking-wider mb-2 bg-gradient-to-r ${phase.color} text-black`}>
                        {phase.duration}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{phase.title}</h3>
                    <p className="text-slate-400 text-sm">{phase.subtitle}</p>
                </div>
                <motion.div 
                    animate={{ rotate: isActive ? 180 : 0 }}
                    className="text-slate-500"
                >
                    <ChevronDown />
                </motion.div>
            </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-6 space-y-6">
                
                {/* Core Goal */}
                <div className="glass-panel p-4 rounded-xl border-l-4 border-neon-blue">
                    <h4 className="flex items-center gap-2 text-neon-blue font-bold text-sm mb-2">
                        <Zap size={16} /> 核心目标
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{phase.goal}</p>
                </div>

                {/* Key Actions */}
                <div className="space-y-4">
                    {phase.keyActions.map((action, idx) => (
                        <div key={idx}>
                            <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color}`}></span>
                                {action.title}
                            </h5>
                            <ul className="space-y-2 pl-4 border-l border-slate-800 ml-0.5">
                                {action.items.map((item, i) => (
                                    <li key={i} className="text-slate-400 text-sm leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Outcomes */}
                <div>
                    <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">Expected Outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                        {phase.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1.5 border border-white/5">
                                <CheckCircle2 size={12} className="text-neon-green" />
                                <span className="text-xs text-white">{outcome}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhaseDetail;
