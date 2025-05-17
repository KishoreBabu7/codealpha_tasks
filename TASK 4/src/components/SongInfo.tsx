import React, { useEffect, useRef } from 'react';
import { Song } from '../types/song';
import { Music } from 'lucide-react';

interface SongInfoProps {
  song: Song;
  isPlaying: boolean;
}

const SongInfo: React.FC<SongInfoProps> = ({ song, isPlaying }) => {
  const equalizerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const equalizer = equalizerRef.current;
    if (!equalizer) return;
    
    // Toggle animation based on playing state
    const bars = equalizer.querySelectorAll('.equalizer-bar');
    bars.forEach(bar => {
      if (isPlaying) {
        (bar as HTMLElement).style.animationPlayState = 'running';
      } else {
        (bar as HTMLElement).style.animationPlayState = 'paused';
      }
    });
  }, [isPlaying]);
  
  return (
    <div className="flex items-center mb-6">
      <div className="relative mr-4 flex-shrink-0">
        {song.coverUrl ? (
          <img 
            src={song.coverUrl} 
            alt={`${song.title} cover`} 
            className="w-20 h-20 rounded-lg object-cover shadow-md"
          />
        ) : (
          <div className="w-20 h-20 rounded-lg bg-gray-800 flex items-center justify-center shadow-md">
            <Music size={32} className="text-gray-400" />
          </div>
        )}
        
        {/* Equalizer overlay */}
        <div 
          ref={equalizerRef}
          className={`absolute bottom-0 left-0 right-0 h-6 flex items-end justify-center space-x-1 p-1 ${isPlaying ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        >
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="equalizer-bar w-1 bg-white opacity-80 rounded-t"
              style={{
                height: '2px',
                animation: `equalizerAnim ${0.5 + (i * 0.2)}s ease-in-out infinite alternate`,
                animationPlayState: isPlaying ? 'running' : 'paused'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="overflow-hidden">
        <h2 className="text-lg font-semibold truncate">{song.title}</h2>
        <p className="text-sm text-gray-400 truncate">{song.artist}</p>
        <p className="text-xs text-gray-500 truncate">{song.album}</p>
      </div>
    </div>
  );
};

export default SongInfo;