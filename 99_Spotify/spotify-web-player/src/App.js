import React, { useState } from 'react';
import Playlist from './components/Playlist';
import Player from './components/Player';
import Callback from './components/Callback';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const clientId = "e2bf9e26ecce42d0a5dc80a68ac421f8";
const redirectUri = "http://localhost:3000/callback";
const scopes = 'user-read-private user-read-email';
  
function App() {

  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = authUrl;
  };

  const accessToken = 'BQC7dJFuEcFxNKYLByjrUeeXB5dM6HiRYW3eEYiFTjYHF-mgUl4ATzT8efkRx-CUZAcu_vT5JXkJCvH5tK5yLLeWYBIRYJyBTzIVn6cJnsL4W67-c_VbCZstsq5onmXbwy4LKig76V1Kc4-r4g7IzNq0KoHBf7gpcDSuZghx5kNEZv-pHXjOJhGrR7V_L89NlXP48nAhv0V08V-_LzsoZy6s1cOEapTNgK1wQQ7U'; // 실제 토큰으로 대체
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // 여기서 실제 Spotify API를 통해 재생/일시 정지를 구현합니다.
  };

  const handleNext = () => {
    // 다음 곡으로 이동하는 로직을 추가합니다.
  };

  const handlePrev = () => {
    // 이전 곡으로 이동하는 로직을 추가합니다.
  };

  return (
    <div>
      <Router>
      <div>
        <h1>Spotify OAuth Example</h1>
        <button onClick={handleLogin}>Login with Spotify</button>
        <Routes>
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </Router>
      <h1>Spotify Player</h1>
      <Playlist accessToken={accessToken} setCurrentTrack={setCurrentTrack} />
      <Player
        track={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

export default App;
