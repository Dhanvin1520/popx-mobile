import React from 'react';
import { motion } from 'framer-motion';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <motion.div 
      className="min-h-screen py-8 px-4 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="app-container">
        {children}
      </div>
    </motion.div>
  );
};

export default AppLayout;