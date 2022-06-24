import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
export default function AudioPlayer() {
  const [play, setPlay] = useState(true);
  return (
    <div className="audioContainer" onClick={() => setPlay(!play)}>
      {play ? (
        <audio
          src={process.env.PUBLIC_URL + "song.mp3"}
          autoPlay
          loop
          preload="auto"
          className="audio"
        />
      ) : (
        <audio
          src={process.env.PUBLIC_URL + "song.mp3"}
          muted
          loop
          preLoad="auto"
          className="audio"
        />
      )}
      <div className="musicPlayer">
        <img
          src={
            play
              ? process.env.PUBLIC_URL + `pause.svg`
              : process.env.PUBLIC_URL + `sound.svg`
          }
          alt=""
        />
      </div>
    </div>
  );
}
