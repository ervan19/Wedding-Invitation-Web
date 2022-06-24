import React from "react";
import "./header.css";
import Heading from "../Heading";
import Name from "./Name";
import Circle from "../Circle";
export default function Hero() {
  return (
    <section id="Home" className="header">
      <div data-aos="zoom-in">
        <Heading
          title="Bismillahirahmanirrahim."
          text="Maha Suci Allah yang menciptakan mahluk-Nya berpasang-pasangan. Ya
        Allah, semoga ridho-Mu tercurah mengiringi pernikahan putra-putri kami :"
        />
      </div>
      <div className="content">
        <div className="contentImg" data-aos="zoom-in">
          <img
            src={process.env.PUBLIC_URL + "heroImage.png"}
            alt="wedding foto"
          />
        </div>
        <div className="textContent" data-aos="fade-left">
          <Name />
        </div>
        <div className="time" data-aos="fade-right">
          <h1>Sabtu, 2 Juli 2022</h1>
          <p>
            Kp. Cinisti 003/001, Ds, Cinisti, Kec. <br /> Bayongbong Kab.Garut
          </p>
        </div>
      </div>
      <Circle />
    </section>
  );
}
