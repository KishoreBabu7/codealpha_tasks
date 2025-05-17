import React from 'react';
import { X } from 'lucide-react';

interface HistoryPanelProps {
  history: string[];
  onClose: () => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ history, onClose }) => {
  return (
    <div className="h-full bg-black bg-opacity-20 backdrop-blur-xl rounded-3xl p-5 border border-white/10 shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-medium">History</h2>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      
      {history.length === 0 ? (
        <p className="text-white/50 text-center py-4">No history yet</p>
      ) : (
        <ul className="space-y-2 max-h-[400px] overflow-auto pr-2">
          {history.map((item, index) => (
            <li key={index} className="text-white p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryPanel;