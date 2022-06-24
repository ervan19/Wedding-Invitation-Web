import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
export default function AudioPlayer() {
  const [play, setPlay] = useState(true);
  return (
    <div className="audioContainer" onClick={() => setPlay(!play)}>
      {play ? (
        <ReactAudioPlayer
          src={process.env.PUBLIC_URL + "song.mp3"}
          autoPlay
          preLoad="metadata"
          className="audio"
        />
      ) : (
        <ReactAudioPlayer
          src={process.env.PUBLIC_URL + "song.mp3"}
          muted
          preLoad="metadata"
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
