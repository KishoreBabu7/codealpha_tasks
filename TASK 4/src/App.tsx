import React, { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import Header from './components/Header';
import Footer from './components/Footer';
import { defaultPlaylist } from './data/playlist';

function App() {
  const [playlist] = useState(defaultPlaylist);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 pt-20 pb-20">
        <MusicPlayer playlist={playlist} />
      </div>
      <Footer />
    </>
  );
}

export default App;