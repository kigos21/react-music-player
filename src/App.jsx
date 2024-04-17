import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import NumResult from "./components/NumResult";

const tempMusicData = [
  {
    id: 1,
    title: "Pantropiko",
    artist: "Bini",
    genre: "Pop",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 2,
    title: "Alam mo ba girl?",
    artist: "Hev Abi",
    genre: "Hip-Hop",
    isFavorite: false,
    rating: "4",
  },
  {
    id: 3,
    title: "Selos",
    artist: "Shaira",
    genre: "Pop",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 4,
    title: "Tadhana",
    artist: "Ibarra Banda",
    genre: "Rock",
    isFavorite: false,
    rating: "5",
  },
  {
    id: 5,
    title: "Habang Buhay",
    artist: "Basil Valdez",
    genre: "Romantic Ballad",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 6,
    title: "Anak",
    artist: "Freddie Aguilar",
    genre: "Folk Song",
    isFavorite: false,
    rating: "4",
  },
  {
    id: 7,
    title: "Nakapagtataka",
    artist: "Aegis",
    genre: "Pop Rock",
    isFavorite: false,
    rating: "5",
  },
  {
    id: 8,
    title: "Charing",
    artist: "Eraserheads",
    genre: "Alternative Rock",
    isFavorite: false,
    rating: "5",
  },
  {
    id: 9,
    title: "Bahay",
    artist: "Bamboo",
    genre: "Rock",
    isFavorite: false,
    rating: "4",
  },
  {
    id: 10,
    title: "Torete",
    artist: "KZ Tandingan",
    genre: "Pop",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 11,
    title: "Lately",
    artist: "SB19",
    genre: "Pop",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 12,
    title: "Araw-Araw",
    artist: "Ben&Ben",
    genre: "Folk-Pop",
    isFavorite: false,
    rating: "4",
  },
  {
    id: 13,
    title: "Kahit Kailan",
    artist: "Sarah Geronimo",
    genre: "Pop",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 14,
    title: "Pagsubok",
    artist: "Moira Dela Torre",
    genre: "Pop Ballad",
    isFavorite: false,
    rating: "4",
  },
  {
    id: 15,
    title: "Paubaya",
    artist: " Moira Dela Torre",
    genre: "Pop Ballad",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 16,
    title: "Sandali",
    artist: "Jaya",
    genre: "Pop",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 17,
    title: "Walang Hanggan",
    artist: "Sarah Geronimo",
    genre: "Pop",
    isFavorite: false,
    rating: "3",
  },
  {
    id: 18,
    title: "Kung 'Di Rin Lang Ikaw",
    artist: "Aegis",
    genre: "Pop Rock",
    isFavorite: false,
    rating: "5",
  },
  {
    id: 19,
    title: "Magkaibigan",
    artist: "Yeng Constantino",
    genre: "Pop",
    isFavorite: false,
    rating: "5",
  },
  {
    id: 20,
    title: "Narda",
    artist: "Moira Dela Torre",
    genre: "Pop Ballad",
    isFavorite: false,
    rating: "4",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [musics, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState([]);
  const [sortBy, setSortBy] = useState("favorites");

  const handleAddToPlaylist = (musicId) => {
    const inPlaylist = playlist.find((music) => music.id === musicId);

    // Do not add music if it exists in the playlist.
    if (inPlaylist) {
      return;
    }

    // Add the music to the playlist, and update the isFavorite field.
    const music = musics.find((music) => music.id === musicId);
    const updatedPlaylist = [...playlist, { ...music, isFavorite: true }];
    setPlaylist(updatedPlaylist);

    // Update the music object inside the musics[] too.
    const updatedMusics = [...musics];
    const musicIndex = updatedMusics.findIndex((music) => music.id === musicId);

    // Check if music is found in musics array
    if (musicIndex !== -1) {
      updatedMusics[musicIndex].isFavorite = true;
      setMusic(updatedMusics);
    }
  };

  const handleRemoveFromPlaylist = (musicId) => {
    const updatedPlaylist = playlist.filter((music) => music.id !== musicId);
    setPlaylist(updatedPlaylist);

    // Update the isFavorite field of the music in the musics[].
    const updatedMusics = [...musics];
    const musicIndex = updatedMusics.findIndex((music) => music.id === musicId);

    // Check if music is found in musics array
    if (musicIndex !== -1) {
      updatedMusics[musicIndex].isFavorite = false;
      setMusic(updatedMusics);
    }
  };

  const searchMusic = (searchTerm) => {
    if (!searchTerm) {
      return musics;
    }

    const lowercaseSearchTerm = searchTerm.toLowerCase().trim();

    const filteredMusics = musics.filter((music) => {
      const lowerTitle = music.title.toLowerCase();
      const lowerArtist = music.artist.toLowerCase();
      const lowerGenre = music.genre.toLowerCase();

      // Check if search term exists in any of the fields (title, artist, genre)
      return (
        lowerTitle.includes(lowercaseSearchTerm) ||
        lowerArtist.includes(lowercaseSearchTerm) ||
        lowerGenre.includes(lowercaseSearchTerm)
      );
    });

    return filteredMusics;
  };

  const handleSortChange = (value) => {
    const updatedMusics = [...musics];

    if (value === "favorites") {
      updatedMusics.sort((a, b) => b.isFavorite - a.isFavorite);
    } else if (value === "title") {
      updatedMusics.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0; // Titles are equal
      });
    }

    setMusic(updatedMusics);
    setSortBy(value);
  };

  return (
    <>
      <Navbar query={query} setQuery={setQuery}>
        <NumResult musics={searchMusic(query)} />
      </Navbar>
      <div className="options-section">
        <label>Sort By: </label>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="favorites">Favorites</option>
          <option value="title">Title</option>
        </select>
      </div>
      <Main
        musics={searchMusic(query)}
        playlist={playlist}
        onAddToPlaylist={handleAddToPlaylist}
        onRemoveFromPlaylist={handleRemoveFromPlaylist}
      />
    </>
  );
}
