// src/Callback.js
import React, { useEffect } from 'react';
import axios from 'axios';

function Callback() {
  useEffect(() => {
      const hash = window.location.hash;
      console.log(hash);
      
    let token = null;

    if (hash) {
      token = hash.split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      window.location.hash = ''; // URL에서 해시 제거

      // 액세스 토큰으로 API 요청
      getUserPlaylists(token);
    }
  }, []);

  const getUserPlaylists = async (token) => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };

  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Callback;
