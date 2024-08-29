// src/components/Playlist.js
import React, { useEffect, useState } from 'react';
import { getPlaylists } from '../api/spotify';

const Playlist = ({ accessToken }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = await getPlaylists(accessToken);
      setPlaylists(data.items);
    };

    if (accessToken) {
      fetchPlaylists();
    }
  }, [accessToken]);

  return (
    <div>
      <h2>My Playlists</h2>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
