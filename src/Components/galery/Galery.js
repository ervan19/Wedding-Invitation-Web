import React from "react";
import Circle from "../Circle";
import Heading from "../Heading";
import "./galery.css";
import Photo from "./Photo";
export default function Galery() {
  return (
    <div id="Galeri Foto" className="galeryContainer">
      <div data-aos="zoom-in">
        <Heading
          title="Galeri Foto"
          text="Foto kenangan kebahagiaan kami berdua"
        />
      </div>
      <Photo />
      <Circle />
    </div>
  );
}
