import React from 'react';

interface DisplayProps {
  input: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className="p-4 mb-4 rounded-2xl bg-black bg-opacity-30 overflow-hidden">
      <div className="overflow-x-auto scrollbar-hide">
        <p className="text-white/70 text-right text-lg h-7 overflow-hidden">
          {result && `=${result}`}
        </p>
        <p className="text-white text-right text-3xl font-semibold overflow-hidden">
          {input}
        </p>
      </div>
    </div>
  );
};

export default Display;