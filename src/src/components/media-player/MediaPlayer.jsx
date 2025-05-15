import { useRef, useState, useEffect } from 'react';
import './MediaPlayer.css';

const tracks = [
  {
    title: 'Ett hjärta, två namn – Dansbands-versionen',
    src: './media/dansband.mp3',
  },
  {
    title: 'Ett hjärta, två namn – Indie-versionen',
    src: './media/dansband2.mp3',
  },
];

const MediaPlayer = () => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    <div id="media" className="media-player">
      <div className="container">
        <h2>Media</h2>
        <p>
          När vi inte kunde bestämma oss för vilket efternamn vi skulle ta,
          gjorde vi det enda logiska: vi skrev en låt om det. Varsågoda – ett
          musikaliskt kärleksbrev till vår lilla identitetskris.
        </p>

        <div className="player">
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
            <button onClick={handlePrev}>⏮</button>
            <button onClick={togglePlay}>{isPlaying ? '⏸' : '▶'}</button>
            <button onClick={handleNext}>⏭</button>
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
