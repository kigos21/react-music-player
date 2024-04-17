/* eslint-disable react/prop-types */

import "../styles/Main.css";
import Box from "./Box";

export default function Main({
  musics,
  playlist,
  onAddToPlaylist,
  onRemoveFromPlaylist,
}) {
  return (
    <div className="container" style={{ maxWidth: "1460px", margin: "0 auto" }}>
      {/* MUSIC LIST BOX */}
      <Box>
        <h2>Music List</h2>
        <ul style={{ flexGrow: "1" }}>
          {musics.map((music) => (
            <li key={music.id}>
              <div className="list-item">
                {music.title} by {music.artist} ({music.genre})
                {music.isFavorite ? (
                  <button
                    className="delete-button"
                    onClick={() => onRemoveFromPlaylist(music.id)}
                  >
                    ❌
                  </button>
                ) : (
                  <button onClick={() => onAddToPlaylist(music.id)}>❤️</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Box>
      {/* END OF MUSIC LIST BOX */}

      {/* PLAYLIST BOX */}
      <Box>
        <h2>Playlist</h2>
        <ul style={{ flexGrow: "1" }}>
          {playlist.map((music) => (
            <li key={music.id}>
              <div className="list-item">
                {music.title} by {music.artist}
                <div>
                  <span>⭐</span>&nbsp;<span>{music.rating}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Box>
      {/* END OF PLAYLIST BOX */}
    </div>
  );
}
