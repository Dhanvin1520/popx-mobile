import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import FormInput from '../components/FormInput';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login process
    setTimeout(() => {
      navigate('/settings');
      setIsSubmitting(false);
    }, 1000);
  };

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  return (
    <PageTransition>
      <div className="p-8">
        <motion.h1 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Signin to your PopX account
        </motion.h1>
        <motion.p 
          className="text-popx-text-secondary mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
          
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
          
          <motion.button
            type="submit"
            className={isFormValid ? 'btn-primary' : 'btn-disabled'}
            disabled={!isFormValid || isSubmitting}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </motion.button>
        </motion.form>
      </div>
    </PageTransition>
  );
};

export default Login;