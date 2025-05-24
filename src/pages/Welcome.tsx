import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition className="flex flex-col justify-between h-full">
      <div className="p-8 flex-grow flex flex-col justify-center">
        <motion.h1 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to PopX
        </motion.h1>
        <motion.p 
          className="text-popx-text-secondary mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </motion.p>
        <div className="space-y-4">
          <motion.button
            className="btn-primary"
            onClick={() => navigate('/register')}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Create Account
          </motion.button>
          <motion.button
            className="btn-secondary"
            onClick={() => navigate('/login')}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Already Registered? Login
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Welcome;