import React from 'react';
import { Song } from '../types/song';
import { Music } from 'lucide-react';

interface PlaylistProps {
  songs: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ 
  songs, 
  currentSongIndex, 
  onSongSelect 
}) => {
  return (
    <div className="mt-6 border-t border-gray-800 pt-4 max-h-60 overflow-y-auto custom-scrollbar">
      <h3 className="text-sm font-medium text-gray-400 mb-2">Playlist</h3>
      <ul className="space-y-2">
        {songs.map((song, index) => (
          <li 
            key={index}
            onClick={() => onSongSelect(index)}
            className={`
              flex items-center p-2 rounded-md cursor-pointer transition-all
              ${currentSongIndex === index 
                ? 'bg-gray-800/80 border-l-2 border-purple-500' 
                : 'hover:bg-gray-800/50'}
            `}
          >
            <div className="w-8 h-8 mr-3 flex-shrink-0 rounded overflow-hidden flex items-center justify-center bg-gray-800">
              {song.coverUrl ? (
                <img 
                  src={song.coverUrl} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Music size={16} className="text-gray-500" />
              )}
            </div>
            
            <div className="overflow-hidden flex-1">
              <p className={`text-sm truncate ${currentSongIndex === index ? 'text-white' : 'text-gray-300'}`}>
                {song.title}
              </p>
              <p className="text-xs text-gray-500 truncate">{song.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;