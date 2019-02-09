import React from "react";
import "./App.css";
import woodImg from "./woodLarge.jpg";
import { BackgroundImage } from "./Components/BackgroundImage";
import { PhotoElements } from "./Components/Photo";
import { shuffle, generateImageObject } from "./utils";

let imagesArray = [
  "https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/27747454_1934438389917905_2193220430344533494_o.jpg?_nc_cat=109&_nc_ht=scontent-lht6-1.xx&oh=e1cd9ba08e037b40f06d287d5cad286f&oe=5CE9A189",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37488733_2138082089553533_3588810892273254400_n.jpg?_nc_cat=103&_nc_ht=scontent-lht6-1.xx&oh=088368dbf6c890640e9d48dea109ea56&oe=5CFDA7D8",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37874917_1832645783481886_3307051468468518912_o.jpg?_nc_cat=105&_nc_ht=scontent-lht6-1.xx&oh=f4ebbe9dd7bced91a7cd77240496f326&oe=5CE0B77B",
  "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/37905953_1832649473481517_3502429608072970240_o.jpg?_nc_cat=103&_nc_ht=scontent-lht6-1.xx&oh=a7dc9210579d673040bec46900640a9f&oe=5CFE2F71"
];

let images = shuffle(imagesArray);

let imagesObj = images.map(url => generateImageObject(url));

export default () => {
  return (
    <BackgroundImage src={woodImg}>
      <PhotoElements images={imagesObj} />
    </BackgroundImage>
  );
};
