import React from "react";
import "./App.css";
import woodImg from "./woodLarge.jpg";

function BackgroundImage2(props) {
  return (
    <div
      style={{
        BackgroundImage2: `url(${props.src})`,
        width: "100%",
        minHeight: '100vh',
        height: '100%',
        backgroundSize: "100%",
        backgroundRepeat: "repeat-y"
      }}
    >
      {props.children}
    </div>
  );
}

function Photo(props) {
  return (
    <span
      style={{
        boxShadow:
          "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
        width: "600px",
        overflow: "hidden",
        border: "15px solid white",
        height: "400px",
        position: "absolute",
        top: `${props.y_translate}px`,
        left: `${props.x_translate}px`,
        transform: `rotate(${props.rotation}deg)`
      }}
    >
      <img
        alt=""
        src={props.img}
        style={{
          width: "100%"
        }}
      />
    </span>
  );
}

function generateImageObject(url) {
  const rotation = Math.random() * 30 - 15;
  const x_translate = Math.random() * 600;
  const y_translate = Math.random() * 400;

  return { url, rotation, x_translate, y_translate };
}

let imagesArray = [
  "https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/27747454_1934438389917905_2193220430344533494_o.jpg?_nc_cat=109&_nc_ht=scontent-lht6-1.xx&oh=e1cd9ba08e037b40f06d287d5cad286f&oe=5CE9A189",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37488733_2138082089553533_3588810892273254400_n.jpg?_nc_cat=103&_nc_ht=scontent-lht6-1.xx&oh=088368dbf6c890640e9d48dea109ea56&oe=5CFDA7D8",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37874917_1832645783481886_3307051468468518912_o.jpg?_nc_cat=105&_nc_ht=scontent-lht6-1.xx&oh=f4ebbe9dd7bced91a7cd77240496f326&oe=5CE0B77B",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37905953_1832649473481517_3502429608072970240_o.jpg?_nc_cat=103&_nc_ht=scontent-lht6-1.xx&oh=a7dc9210579d673040bec46900640a9f&oe=5CFE2F71"
];

let images = shuffle(imagesArray);

let imagesObj = images.map(url => generateImageObject(url));

function PhotoElements(props) {
  const imageEls = imagesObj.map(img => (
    <Photo
      key={img.url}
      img={img.url}
      rotation={img.rotation}
      x_translate={img.x_translate}
      y_translate={img.y_translate}
    />
  ));

  return <>{imageEls}</>;
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
    <BackgroundImage2 src={woodImg}>
      <PhotoElements />
    </BackgroundImage2>
  );
};
