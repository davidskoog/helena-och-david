import Hero from './src/components/hero/hero';
import './App.css';
import Info from './src/components/info/Info';
import Program from './src/components/program/Program';
import Header from './src/components/header/Header.jsx';
import Gallery from './src/components/gallery/Gallery.jsx';
import Fab from './src/components/fab/Fab.jsx';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Program />
      <Gallery />
      <Info />
      <Fab />
    </>
  );
}

export default App;
