import React from "react";

export function Photo(props) {
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

export function PhotoElements(props) {
  const imageEls = props.images.map(img => (
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
