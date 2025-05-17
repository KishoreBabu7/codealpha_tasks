import React from 'react';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onChange: (value: number) => void;
  formattedCurrentTime: string;
  formattedDuration: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onChange,
  formattedCurrentTime,
  formattedDuration
}) => {
  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <div className="mt-4 mb-2">
      <div className="relative h-1 group">
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleChange}
          className="absolute w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:mt-[-4px] hover:[&::-webkit-slider-thumb]:h-4 hover:[&::-webkit-slider-thumb]:w-4 hover:[&::-webkit-slider-thumb]:mt-[-6px] transition-all"
          style={{ zIndex: 10 }}
        />
        <div 
          className="absolute h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="flex justify-between mt-1 text-xs text-gray-400">
        <span>{formattedCurrentTime}</span>
        <span>{formattedDuration}</span>
      </div>
    </div>
  );
};

export default ProgressBar;