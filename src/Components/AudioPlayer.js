import React, { useState } from "react";
export default function AudioPlayer() {
  const [play, setPlay] = useState(true);
  return (
    <div className="audioContainer" onClick={() => setPlay(!play)}>
      {play ? (
        <audio controls autoPlay="autoplay" loop className="audio">
          <source src={process.env.PUBLIC_URL + "song.mp3"} type="audio/mpeg" />
        </audio>
      ) : (
        <audio controls muted loop className="audio">
          <source src={process.env.PUBLIC_URL + "song.mp3"} type="audio/mpeg" />
        </audio>
      )}
      <div className="musicPlayer">
        <img
          src={
            play
              ? process.env.PUBLIC_URL + `sound.svg`
              : process.env.PUBLIC_URL + `pause.svg`
          }
          alt=""
        />
      </div>
    </div>
  );
}
