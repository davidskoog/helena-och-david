import Hero from './src/components/hero/Hero.jsx';
import './App.css';
import Gallery from './src/components/gallery/Gallery.jsx';
import Fab from './src/components/fab/Fab.jsx';
import MediaPlayer from './src/components/media-player/MediaPlayer.jsx';
import Footer from './src/components/footer/Footer.jsx';
import InfoFromWedding from './src/components/info-from-wedding/InfoFromWedding.jsx';

function App() {
  return (
    <>
      <Hero />
      <InfoFromWedding />
      <Gallery />
      <MediaPlayer />
      <Footer />
      <Fab />
    </>
  );
}

export default App;
