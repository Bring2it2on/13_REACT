// src/components/Player.js
import React, { useState } from 'react';

const Player = ({ track, isPlaying, onPlayPause, onNext, onPrev }) => {
  if (!track) return null;

  return (
    <div style={styles.playerContainer}>
      <h2>{track.name}</h2>
      <h4>{track.artists.map(artist => artist.name).join(', ')}</h4>
      <div style={styles.controls}>
        <button onClick={onPrev}>Previous</button>
        <button onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={onNext}>Next</button>
      </div>
      <div style={styles.progressBar}>
        {/* 여기에 재생 바를 추가할 수 있습니다. */}
      </div>
    </div>
  );
};

const styles = {
  playerContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  controls: {
    margin: '10px 0',
  },
  progressBar: {
    height: '5px',
    backgroundColor: '#ddd',
    marginTop: '10px',
  },
};

export default Player;
