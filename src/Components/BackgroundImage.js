import React from 'react';

export function BackgroundImage(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.src})`,
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
