import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ 
  isPlaying, 
  onPlayPause, 
  onPrevious, 
  onNext 
}) => {
  return (
    <div className="flex justify-center items-center space-x-6 my-4">
      <button 
        onClick={onPrevious}
        className="p-2 rounded-full hover:bg-gray-700/50 transition-all transform hover:scale-110 active:scale-95"
        aria-label="Previous"
      >
        <SkipBack size={24} className="text-gray-200" />
      </button>
      
      <button 
        onClick={onPlayPause}
        className="p-4 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause size={24} fill="currentColor" />
        ) : (
          <Play size={24} fill="currentColor" />
        )}
      </button>
      
      <button 
        onClick={onNext}
        className="p-2 rounded-full hover:bg-gray-700/50 transition-all transform hover:scale-110 active:scale-95"
        aria-label="Next"
      >
        <SkipForward size={24} className="text-gray-200" />
      </button>
    </div>
  );
};

export default PlayerControls;