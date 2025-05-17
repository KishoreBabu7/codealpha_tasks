import React from 'react';

interface ButtonProps {
  value: string;
  type: 'number' | 'operator' | 'function';
  span?: number;
  color?: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  value, 
  type, 
  span = 1, 
  color,
  onPress 
}) => {
  let baseClasses = "rounded-2xl flex items-center justify-center text-xl font-medium h-16 transition-all duration-150 active:scale-95 select-none";
  
  let typeClasses = "";
  
  if (type === 'number') {
    typeClasses = "bg-white/10 text-white hover:bg-white/20";
  } else if (type === 'operator') {
    typeClasses = color || "bg-purple-500 text-white hover:bg-purple-600";
  } else if (type === 'function') {
    typeClasses = color || "bg-white/5 text-white hover:bg-white/15";
  }
  
  let spanClasses = span === 2 ? "col-span-2" : "";
  
  return (
    <button
      className={`${baseClasses} ${typeClasses} ${spanClasses}`}
      onClick={onPress}
    >
      {value}
    </button>
  );
};

export default Button;