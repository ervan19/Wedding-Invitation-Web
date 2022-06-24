import React from "react";
import "./location.css";
import Maps from "./Maps";
import Heading from "../Heading";
import Circle from "../Circle";
export default function Location() {
  return (
    <section id="Lokasi" className="locationContainer">
      <div data-aos="zoom-in">
        <Heading
          title="Lokasi Pernikahan"
          text="Lokasi penikahan bisa anda lihat langsung di Google Maps"
        />
      </div>
      <div className="location" data-aos="zoom-in-up">
        <Maps />
        <a
          href="https://www.google.com/maps/place/7%C2%B016'01.3%22S+107%C2%B049'45.9%22E/@-7.267036,107.8272253,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x1ffef6f51fd485fb!8m2!3d-7.267036!4d107.829414?hl=id"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buka di Google Maps
        </a>
      </div>
      <Circle />
    </section>
  );
}
