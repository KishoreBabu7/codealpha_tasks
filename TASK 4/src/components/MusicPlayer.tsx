import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import SongInfo from './SongInfo';
import Playlist from './Playlist';
import { Song } from '../types/song';
import { formatTime } from '../utils/formatTime';

interface MusicPlayerProps {
  playlist: Song[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ playlist }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    // Load from localStorage if available
    const savedIndex = localStorage.getItem('currentSongIndex');
    if (savedIndex !== null) {
      setCurrentSongIndex(parseInt(savedIndex, 10));
    }
    
    const savedVolume = localStorage.getItem('volume');
    if (savedVolume !== null) {
      setVolume(parseFloat(savedVolume));
    }
    
    const savedMuted = localStorage.getItem('isMuted');
    if (savedMuted !== null) {
      setIsMuted(savedMuted === 'true');
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('currentSongIndex', currentSongIndex.toString());
    localStorage.setItem('volume', volume.toString());
    localStorage.setItem('isMuted', isMuted.toString());
  }, [currentSongIndex, volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up event listeners
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
      setError(null); // Clear any previous errors
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);
    
    const handleEnded = () => {
      if (currentSongIndex < playlist.length - 1) {
        setCurrentSongIndex(prev => prev + 1);
      } else {
        setCurrentSongIndex(0);
      }
    };

    const handleError = (e: ErrorEvent) => {
      console.error('Audio error:', e);
      setError('Failed to load audio. Please try again later.');
      setIsPlaying(false);
    };

    // Add event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Initial volume
    audio.volume = isMuted ? 0 : volume;

    // Clear error when changing songs
    setError(null);

    // Clean up
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentSongIndex, isPlaying, playlist.length, volume, isMuted]);

  useEffect(() => {
    // Play/pause based on state
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setError('Failed to play audio. Please try again.');
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentSongIndex(prev => 
      prev === 0 ? playlist.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSongIndex(prev => 
      prev === playlist.length - 1 ? 0 : prev + 1
    );
  };

  const handleTimeUpdate = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.volume = !isMuted ? 0 : volume;
    }
  };

  const handleSongSelect = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-800 text-white">
      <audio 
        ref={audioRef} 
        src={currentSong.url} 
        preload="metadata"
      />

      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      <SongInfo song={currentSong} isPlaying={isPlaying} />
      
      <ProgressBar 
        currentTime={currentTime}
        duration={duration}
        onChange={handleTimeUpdate}
        formattedCurrentTime={formatTime(currentTime)}
        formattedDuration={formatTime(duration)}
      />
      
      <PlayerControls 
        isPlaying={isPlaying}
        onPlayPause={togglePlay}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      
      <div className="flex justify-between items-center mt-4">
        <VolumeControl 
          volume={volume}
          isMuted={isMuted}
          onVolumeChange={handleVolumeChange}
          onToggleMute={toggleMute}
        />
        
        <button 
          onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
          className="text-gray-300 hover:text-white transition-colors px-3 py-1 rounded-md bg-gray-800/50 hover:bg-gray-700/50 text-sm"
        >
          {isPlaylistOpen ? 'Hide Playlist' : 'Show Playlist'}
        </button>
      </div>
      
      {isPlaylistOpen && (
        <Playlist 
          songs={playlist}
          currentSongIndex={currentSongIndex}
          onSongSelect={handleSongSelect}
        />
      )}
    </div>
  );
};

export default MusicPlayer;