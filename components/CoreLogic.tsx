import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Users, Rocket, Layers } from 'lucide-react';

const CoreLogic = () => {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 border-2 border-dashed border-neon-blue rounded-full"
        />
      </div>

      <div className="grid gap-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-2">
           <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
               <Users size={32} className="text-white" />
           </div>
           <h3 className="font-bold text-white">资源背书</h3>
           <p className="text-xs text-slate-400 max-w-[200px]">已有大厂人脉与独立团队经验</p>
        </div>

        <div className="flex justify-center">
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 40 }}
                className="w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
            />
        </div>

        <div className="flex flex-col items-center text-center space-y-2">
           <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
               <Rocket size={32} className="text-white" />
           </div>
           <h3 className="font-bold text-white">轻量试点</h3>
           <p className="text-xs text-slate-400 max-w-[200px]">低门槛切入，快速出结果</p>
        </div>

        <div className="flex justify-center">
            <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: 40 }}
                className="w-0.5 bg-gradient-to-b from-purple-500 to-amber-500"
            />
        </div>

        <div className="flex flex-col items-center text-center space-y-2">
           <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.5)]">
               <Layers size={32} className="text-white" />
           </div>
           <h3 className="font-bold text-white">生态绑定</h3>
           <p className="text-xs text-slate-400 max-w-[200px]">服务标准化，形成资源壁垒</p>
        </div>
      </div>
    </div>
  );
};

export default CoreLogic;
