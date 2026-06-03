import { Bot } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030303] text-white">
      <div className="flex flex-col items-center gap-8">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center relative"
        >
          <Bot className="w-12 h-12 text-blue-400 relative z-10" />
          <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-ping" />
          <div className="absolute inset-[-20px] border border-blue-500/10 rounded-full animate-pulse" />
        </motion.div>
        
        <div className="text-center space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold tracking-[0.3em] uppercase text-white"
          >
            Iniciando IA
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-500 text-sm font-medium"
          >
            Carregando módulos cognitivos...
          </motion.p>
        </div>
        
        <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden mt-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </div>
  );
}
