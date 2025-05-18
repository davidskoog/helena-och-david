import { useRef, useState, useEffect } from 'react';
import './MediaPlayer.css';
import Icon from '../icon/Icon';

const tracks = [
  {
    title: '1. Ett hjärta, två namn (Indie-versionen)',
    src: './media/helena-och_david-ett_hjarta_tva_namn_indie.mp3',
  },
  {
    title: '2. Ett hjärta, två namn (Dansbands-versionen)',
    src: './media/helena-och_david-ett_hjarta_tva_namn_dansband.mp3',
  },
  {
    title: '3. Ett hjärta, två namn (Skatepunk-versionen)',
    src: './media/helena-och_david-ett_hjarta_tva_namn_skatepunk.mp3',
  },
  {
    title: '4. Ett hjärta, två namn (80-tals-versionen)',
    src: './media/helena-och_david-ett_hjarta_tva_namn_80.mp3',
  },
  {
    title: '5. Ett hjärta, två namn (Boyband-versionen)',
    src: './media/helena-och_david-ett_hjarta_tva_namn_boyband.mp3',
  },
];

const MediaPlayer = () => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const autoNext = () => handleNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', autoNext);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', autoNext);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.load();
    if (isPlaying) {
      audio.play();
    }
    setCurrentTime(0);
  }, [currentTrackIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTrackSelect = index => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex(prev => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentTrackIndex(prev => (prev === tracks.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  const handleSliderChange = e => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div id="musik" className="media-player">
      <div className="container">
        <h2>Musik</h2>
        <p>
          När vi inte kunde bestämma oss för vilket efternamn vi skulle ta,
          gjorde vi det enda logiska: vi skrev en låt om det. Varsågoda – ett
          musikaliskt kärleksbrev till vår lilla identitetskris.
        </p>
        <div className="player">
          <h3>Playlist</h3>
          <ul className="track-list">
            {tracks.map((track, index) => (
              <li
                key={index}
                className={index === currentTrackIndex ? 'active' : ''}
                onClick={() => handleTrackSelect(index)}
              >
                {track.title}
              </li>
            ))}
          </ul>

          <audio ref={audioRef}>
            <source src={currentTrack.src} type="audio/mpeg" />
            Din webbläsare stödjer inte ljuduppspelning.
          </audio>
          <div className="controls">
            <button onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#272cbc"
                viewBox="0 -960 960 960"
              >
                <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z" />
              </svg>
            </button>
            <button onClick={togglePlay}>
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#272cbc"
                  viewBox="0 -960 960 960"
                >
                  <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#272cbc"
                  viewBox="0 -960 960 960"
                >
                  <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              )}
            </button>
            <button onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#272cbc"
                viewBox="0 -960 960 960"
              >
                <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
              </svg>
            </button>
          </div>

          <div className="time-slider">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSliderChange}
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        {!showLyrics && (
          <a href="#text" onClick={() => setShowLyrics(true)}>
            Klicka här för att lära er texten
          </a>
        )}
        {showLyrics && (
          <div id="text" className="lyrics">
            <p>
              <strong>[Vers 1]</strong>
              <br />
              Helena och David
              <br />
              Ett kärleksfullt spår
              <br />
              En saga som börjar där drömmarna var
              <br />
              Men ett dilemma tickar likt en klocka nu
              <br />
              Vilket namn ska vi ta
              <br />
              Vi vet inte hur
            </p>

            <p>
              <strong>[Refräng]</strong>
              <br />
              Är vi Skoog eller Bergander
              <br />
              Vi står mitt emellan
              <br />
              Två världar i strid
              <br />
              Men ändå så snälla
              <br />
              Helena vill en sak
              <br />
              David nåt annat
              <br />
              Men hjärtat slår för oss
              <br />
              Och det är det som stannar
            </p>

            <p>
              <strong>[Vers 2]</strong>
              <br />
              Vi har valt blommor
              <br />
              Klänning och mat
              <br />
              Vi har ringarna redo och bordsplacerat klart
              <br />
              Men evighetens stämpel
              <br />
              Vad ska den bli
              <br />
              Namnet vi bär
              <br />
              Vi är två men ändå vi
            </p>

            <p>
              <strong>[Refräng]</strong>
              <br />
              Är vi Skoog eller Bergander
              <br />
              Vi står mitt emellan
              <br />
              Två världar i strid
              <br />
              Men ändå så snälla
              <br />
              Helena vill en sak
              <br />
              David nåt annat
              <br />
              Men hjärtat slår för oss
              <br />
              Och det är det som stannar
            </p>

            <p>
              <strong>[Brygga]</strong>
              <br />
              Kanske ett nytt namn
              <br />
              Ett steg mot nåt nytt
              <br />
              Vi mixar
              <br />
              Vi blandar
              <br />
              Det känns så försnytt
              <br />
              Bergskoog eller Skoogander
              <br />
              Vad tycker du
              <br />
              För kärlekens val
              <br />
              Det är alltid vi nu
            </p>

            <p>
              <strong>[Refräng]</strong>
              <br />
              Är vi Skoog eller Bergander
              <br />
              Vi står mitt emellan
              <br />
              Två världar i strid
              <br />
              Men ändå så snälla
              <br />
              Helena vill en sak
              <br />
              David nåt annat
              <br />
              Men hjärtat slår för oss
              <br />
              Och det är det som stannar
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPlayer;

// import { useRef, useState, useEffect } from 'react';
// import './MediaPlayer.css';

// const MediaPlayer = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   useEffect(() => {
//     const audio = audioRef.current;

//     const handleTimeUpdate = () => {
//       setCurrentTime(audio.currentTime);
//     };

//     const handleLoadedMetadata = () => {
//       setDuration(audio.duration);
//     };

//     audio.addEventListener('timeupdate', handleTimeUpdate);
//     audio.addEventListener('loadedmetadata', handleLoadedMetadata);

//     return () => {
//       audio.removeEventListener('timeupdate', handleTimeUpdate);
//       audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
//     };
//   }, []);

//   const togglePlay = () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   const handleSliderChange = e => {
//     const newTime = parseFloat(e.target.value);
//     audioRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const formatTime = time => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60)
//       .toString()
//       .padStart(2, '0');
//     return `${minutes}:${seconds}`;
//   };

//   return (
//     <div className="media-player">
//       <div className="container">
//         <h2>Musik</h2>
//         <p>
//           Här hittar du allt du behöver veta – från tider och plats till vår
//           historia, festens innehåll och lite praktiskt smått och gott. Kom och
//           fira med oss!
//         </p>
//         <ul>
//           <li>

//           </li>
//         </ul>
//         <audio ref={audioRef} src="./media/dansband.mp3" />
//         <div className="controls">
//           <button onClick={togglePlay}>
//             {isPlaying ? '⏸ Pausa' : '▶️ Spela'}
//           </button>

//           <div className="time-display">
//             <span>{formatTime(currentTime)}</span>
//             <input
//               type="range"
//               min="0"
//               max={duration}
//               value={currentTime}
//               onChange={handleSliderChange}
//             />
//             <span>{formatTime(duration)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaPlayer;

// // import './MediaPlayer.css';

// // const MediaPlayer = () => {
// //   return (
// //     <div className="media-player">
// //       <h2>Musik</h2>
// //       <audio controls>
// //         <source src="./media/dansband.mp3" type="audio/mpeg" />
// //         Your browser does not support the audio tag.
// //       </audio>
// //     </div>
// //   );
// // };

// // export default MediaPlayer;
