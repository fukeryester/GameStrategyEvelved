import React from 'react';
import { TeamMember } from '../types';
import { motion } from 'framer-motion';

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const Icon = member.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel p-4 rounded-xl relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-blue to-transparent opacity-50" />
      
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-white/5 text-neon-blue">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg leading-tight">{member.role}</h3>
          <p className="text-xs text-slate-400">{member.background}</p>
        </div>
      </div>
      
      <div className="space-y-2 mt-4">
        {member.stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 w-12">{stat.label}</span>
            <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${stat.value}%` }}
                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamCard;
