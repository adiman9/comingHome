import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import woodImg from './wood.jpg';

const useAudioTime = (audioEl) => {
  const [timestamp, setTimestamp] = useState(0);

  const timeUpdateHandler = () => {
    setTimestamp(audioEl.current.currentTime);
  }

  useEffect(() => {
    if (audioEl.current) {
      audioEl.current.addEventListener('timeupdate', timeUpdateHandler);
      return () => {
        audioEl.current.removeEventListener('timeupdate', timeUpdateHandler);
      }
    }
  }, [audioEl]);

  return timestamp;
}

const useAudioTimeEffect = (audioEl, cb) => {
  const audioTimeStamp = useAudioTime(audioEl);
  useEffect(() => {
    cb(audioTimeStamp);
  });
}

function Audio(props) {
  const audioEl = useRef(null);
  useAudioTimeEffect(audioEl, props.audioTimeHandler);

  useEffect(() => {
    if (props.pause) {
      audioEl.current.pause();
    } else {
      audioEl.current.play();
    }
  }, [props.pause])

  return (
    <audio
      autoPlay={props.autoPlay}
      loop={props.loop}
      src={props.src}
      style={props.style}
      ref={audioEl}
    >
      Your browser does not support the<code>audio</code> element.
    </audio>
  );
}

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

// function BackgroundVideo(props) {
//   return (
//     <video
//       autoPlay
//       muted
//       loop
//       style={{
//         position: 'fixed',
//         right: 0,
//         bottom: 0,
//         minWidth: '100%',
//         minHeight: '100%',
//       }}
//     >
//       <source src={props.video} type="video/mp4" />
//     </video>
//   );
// }

function Photo(props) {
  return (
    <span
      style={{
        boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
        width: '600px',
        overflow: 'hidden',
        border: '15px solid white',
        height: '400px',
        display: 'block',
        margin: '100px auto',
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

export default () => {
  const [paused, setPause] = useState(true);

  const onTimeUpdate = time => {
    console.log('yamum', time);
  }

  return (
    <BackgroundImage
      src={woodImg}
    >
      <button onClick={() => setPause(!paused)}>LKJ</button>
      <Audio
        src="/bubbacominghome.mp3"
        autoPlay={false}
        style={{display: 'block'}}
        loop
        pause={paused}
        audioTimeHandler={onTimeUpdate}
      />
      <Photo img="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/27747454_1934438389917905_2193220430344533494_o.jpg?_nc_cat=109&_nc_ht=scontent-lht6-1.xx&oh=e1cd9ba08e037b40f06d287d5cad286f&oe=5CE9A189" />
    </BackgroundImage>
  );
}
