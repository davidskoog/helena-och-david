import { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './GalleryItem.css';

const GalleryItem = ({
  src,
  width = '100%',
  speed = 0.3,
  alt = '',
  reverse = false,
  children,
}) => {
  const ref = useRef(null);
  const [imageStyles, imageApi] = useSpring(() => ({ y: 0 }));
  const [bgStyles, bgApi] = useSpring(() => ({ y: 0 }));
  const [textStyles, textApi] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top;

      const imageOffset = -elementTop * speed;
      const bgOffset = -elementTop * (speed * 0.5);
      const textOffset = -elementTop * (speed * 0.8);

      imageApi.start({ y: imageOffset });
      bgApi.start({ y: bgOffset });
      textApi.start({ y: textOffset });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [imageApi, bgApi, textApi, speed]);

  return (
    <div
      className={
        reverse ? 'gallery-item gallery-item--reverse' : 'gallery-item'
      }
      ref={ref}
    >
      <div className="gallery-item__inner">
        <animated.div
          style={{
            position: 'absolute',
            top: '-10%',
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#334395',
            transform: bgStyles.y.to(
              y => `translateY(${y}px) rotate(${reverse ? '-5deg' : '5deg'})`
            ),
          }}
        />
        <animated.img
          src={src}
          alt={alt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: imageStyles.y.to(y => `translateY(${y}px)`),
          }}
        />
      </div>
      <animated.div
        style={{
          flex: '1 1 50%',
          padding: '4rem 1rem',
          zIndex: 1,
          color: '#334395',
          fontFamily: 'Bagel Fat One',
          transform: textStyles.y.to(y => `translateY(${y}px)`),
        }}
      >
        {children}
      </animated.div>
    </div>
  );
};

export default GalleryItem;
