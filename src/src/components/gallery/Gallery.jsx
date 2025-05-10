import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const Gallery = () => {
  return (
    <div id="var-historia" className="gallery">
      <h2>Vår historia</h2>
      <div className="gallery__inner">
        <GalleryItem src="./img/dubbeldejt.jpg" speed={0.25} reverse={true}>
          <h2>Mitt bröllop 2025</h2>
        </GalleryItem>
        <GalleryItem src="./img/dubbeldejt.jpg" speed={0.25}>
          <h2>Mitt bröllop 2025</h2>
        </GalleryItem>
        <GalleryItem src="./img/dubbeldejt.jpg" speed={0.25} reverse={true}>
          <h2>Mitt bröllop 2025</h2>
        </GalleryItem>
        <GalleryItem src="./img/dubbeldejt.jpg" speed={0.25}>
          <h2>Mitt bröllop 2025</h2>
        </GalleryItem>
        <GalleryItem src="./img/dubbeldejt.jpg" speed={0.25} reverse={true}>
          <h2>Mitt bröllop 2025</h2>
        </GalleryItem>
        <GalleryItem src="./img/dubbeldejt.jpg" speed={0.25}>
          <h2>Mitt bröllop 2025</h2>
        </GalleryItem>
        <GalleryItem src="./img/dubbeldejt.jpg" speed={0.25} reverse={true}>
          <h2>Mitt bröllop 2025</h2>
        </GalleryItem>
      </div>
    </div>
  );
};

export default Gallery;
