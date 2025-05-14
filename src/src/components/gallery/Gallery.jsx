import GalleryItem from './GalleryItem';
import './Gallery.css';

const Gallery = () => {
  return (
    <div id="var-historia" className="gallery">
      <h2>Vår historia</h2>
      <div className="gallery__inner">
        <GalleryItem
          src="./img/2010-small.webp"
          src2x="./img/2010-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2010</h2>
          <p>En första dejt på nyårsdagen</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2012-small.webp"
          src2x="./img/2012-big.webp"
          speed={0.25}
        >
          <h2>2012</h2>
          <p>Flyttade till Tredje Långgatan</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2012-2018-small.webp"
          src2x="./img/2012-2018-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2 className="h3">2012-2018</h2>
          <p>Hemmafester och resor</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2018-small.webp"
          src2x="./img/2018-big.webp"
          speed={0.25}
        >
          <h2>2018</h2>
          <p>Köpte ett rosa hus i Mölndal</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2019-small.webp"
          src2x="./img/2019-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2019</h2>
          <p>Och så kom Otto</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2020-small.webp"
          src2x="./img/2020-big.webp"
          speed={0.25}
        >
          <h2>2020</h2>
          <p>Ett frieri på samma plats där vi först sågs</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2022-small.webp"
          src2x="./img/2022-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2022</h2>
          <p>Lillebror Alve presenterar sig</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2025-small.webp"
          src2x="./img/2025-big.webp"
          speed={0.25}
        >
          <h2>2025</h2>
          <p>Nu gifter vi oss!</p>
        </GalleryItem>
      </div>
    </div>
  );
};

export default Gallery;
