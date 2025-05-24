import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Settings: React.FC = () => {
  const [imageHover, setImageHover] = useState(false);
  
  return (
    <PageTransition>
      <div className="h-full flex flex-col">
        <motion.div 
          className="p-6 border-b border-popx-border"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-2xl font-semibold">Account Settings</h1>
        </motion.div>
        
        <motion.div 
          className="p-6 flex items-center border-b border-popx-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div 
            className="relative mr-4"
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
          >
            <motion.div
              className="w-20 h-20 rounded-full overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <motion.div 
                className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-200 ${imageHover ? 'opacity-100' : 'opacity-0'}`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <Camera className="text-white" size={24} />
              </motion.div>
            </motion.div>
            <motion.div 
              className="absolute -right-1 -bottom-1 w-8 h-8 bg-popx-purple rounded-full flex items-center justify-center cursor-pointer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Camera className="text-white" size={16} />
            </motion.div>
          </div>
          
          <div>
            <motion.h2 
              className="text-lg font-medium"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Marry Doe
            </motion.h2>
            <motion.p 
              className="text-popx-text-secondary"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Marry@Gmail.Com
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="p-6 border-b border-popx-border"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-popx-text-secondary">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Settings;