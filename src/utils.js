import React from "react";
export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export function generateImageObject(url) {
  const rotation = Math.random() * 30 - 15;
  const x_translate = Math.random() * 600;
  const y_translate = Math.random() * 400;

  return { url, rotation, x_translate, y_translate };
}
