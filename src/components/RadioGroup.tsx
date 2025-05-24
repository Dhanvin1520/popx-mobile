import React from 'react';
import { motion } from 'framer-motion';

interface RadioGroupProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-5">
      <label className={`block text-popx-text-primary mb-2 ${required ? 'required-field' : ''}`}>
        {label}
      </label>
      <div className="flex gap-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center cursor-pointer">
            <div className="relative flex items-center justify-center w-6 h-6 mr-2">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="opacity-0 absolute w-6 h-6 cursor-pointer"
              />
              <div className="w-6 h-6 border-2 rounded-full border-popx-purple flex items-center justify-center">
                {value === option.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3.5 h-3.5 rounded-full bg-popx-purple"
                  />
                )}
              </div>
            </div>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;