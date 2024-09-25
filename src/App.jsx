import React from 'react';
import { artists } from './best-selling-music-artists';
import ArtistDetails from './ArtistDetails';

function App() {
  return (
    <div className="app">
      <h1>Best-Selling Music Artists</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.name}>
            <ArtistDetails artist={artist} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
