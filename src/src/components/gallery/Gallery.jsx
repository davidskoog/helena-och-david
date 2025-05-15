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
          src="./img/2011-small.webp"
          src2x="./img/2011-big.webp"
          speed={0.25}
        >
          <h2>2011</h2>
          <p>Snöfyllt äventyr i Vemdalen</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2012-2-small.webp"
          src2x="./img/2012-2-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2012</h2>
          <p>Sol och bad på Kreta</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2013-small.webp"
          src2x="./img/2013-big.webp"
          speed={0.25}
        >
          <h2>2013</h2>
          <p>Fest och musik på Way out West</p>
        </GalleryItem>

        <GalleryItem
          src="./img/2014-small.webp"
          src2x="./img/2014-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2014</h2>
          <p>Romantisk weekend i Paris</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2015-small.webp"
          src2x="./img/2015-big.webp"
          speed={0.25}
        >
          <h2>2015</h2>
          <p>Ponchadans på Madeira</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2016-small.webp"
          src2x="./img/2016-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2016</h2>
          <p>70-talsfest i Lidköping</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2017-small.webp"
          src2x="./img/2017-big.webp"
          speed={0.25}
        >
          <h2>2017</h2>
          <p>Bad, bad och mer bad i vackra Kroatien</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2018-small.webp"
          src2x="./img/2018-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2018</h2>
          <p>Köpte ett rosa hus i Mölndal</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2019-small.webp"
          src2x="./img/2019-big.webp"
          speed={0.25}
        >
          <h2>2019</h2>
          <p>Och så kom Otto</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2020-small.webp"
          src2x="./img/2020-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2020</h2>
          <p>Ett frieri på samma plats där vi först sågs</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2021-small.webp"
          src2x="./img/2021-big.webp"
          speed={0.25}
        >
          <h2>2021</h2>
          <p>Knasfamiljen från Mölndal</p>
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
          src="./img/2023-small.webp"
          src2x="./img/2023-big.webp"
          speed={0.25}
        >
          <h2>2023</h2>
          <p>Sommarlov på Skoogsro</p>
        </GalleryItem>
        <GalleryItem
          src="./img/2024-small.webp"
          src2x="./img/2024-big.webp"
          speed={0.25}
          reverse={true}
        >
          <h2>2024</h2>
          <p>Världens bästa familj!</p>
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
