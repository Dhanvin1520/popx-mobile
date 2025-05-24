import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import FormInput from '../components/FormInput';
import RadioGroup from '../components/RadioGroup';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, isAgency: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate registration process
    setTimeout(() => {
      navigate('/settings');
      setIsSubmitting(false);
    }, 1000);
  };

  const isFormValid = 
    formData.fullName.trim() !== '' && 
    formData.phone.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.password.trim() !== '';

  return (
    <PageTransition>
      <div className="p-8">
        <motion.h1 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Create your PopX account
        </motion.h1>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FormInput
            label="Full Name"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          
          <FormInput
            label="Phone number"
            name="phone"
            type="tel"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          
          <FormInput
            label="Email address"
            name="email"
            type="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <FormInput
            label="Company name"
            name="company"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={handleChange}
          />
          
          <RadioGroup
            label="Are you an Agency?"
            name="isAgency"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ]}
            value={formData.isAgency}
            onChange={handleRadioChange}
            required
          />
          
          <motion.button
            type="submit"
            className={isFormValid ? 'btn-primary mt-8' : 'btn-disabled mt-8'}
            disabled={!isFormValid || isSubmitting}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </motion.button>
        </motion.form>
      </div>
    </PageTransition>
  );
};

export default Register;