import React from 'react';
import './App.css';
import woodImg from './wood.jpg';

function BackgroundImage(props) {
  return (
    <div style={{
      backgroundImage: `url(${props.src})`,
      width: '100%',
      height: '100vh',
      backgroundSize: '100%',
    }}>
      {props.children}
    </div>
  );
}

function Photo(props) {
  const rotation = (Math.random() * 30) - 15;
  const x_translate = (Math.random() * 600);
  const y_translate = (Math.random() * 400);

  return (
    <span
      style={{
        boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
        width: '600px',
        overflow: 'hidden',
        border: '15px solid white',
        height: '400px',
        position: 'absolute',
        top: `${y_translate}px`,
        left: `${x_translate}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <img
        alt=""
        src={props.img}
        style={{
          width: '100%',
        }}
      />
    </span>
  )
}

let images = [
  "https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/27747454_1934438389917905_2193220430344533494_o.jpg?_nc_cat=109&_nc_ht=scontent-lht6-1.xx&oh=e1cd9ba08e037b40f06d287d5cad286f&oe=5CE9A189",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37488733_2138082089553533_3588810892273254400_n.jpg?_nc_cat=103&_nc_ht=scontent-lht6-1.xx&oh=088368dbf6c890640e9d48dea109ea56&oe=5CFDA7D8",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37874917_1832645783481886_3307051468468518912_o.jpg?_nc_cat=105&_nc_ht=scontent-lht6-1.xx&oh=f4ebbe9dd7bced91a7cd77240496f326&oe=5CE0B77B",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37905953_1832649473481517_3502429608072970240_o.jpg?_nc_cat=103&_nc_ht=scontent-lht6-1.xx&oh=a7dc9210579d673040bec46900640a9f&oe=5CFE2F71",
];

images = shuffle(images);

function PhotoElements(props) {
  const imageEls = images.map(img => <Photo key={img} img={img} />);

  return (
    <>
      {imageEls}
    </>
  );
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default () => {

  return (
    <BackgroundImage
      src={woodImg}
    >
      <PhotoElements />
    </BackgroundImage>
  );
}
