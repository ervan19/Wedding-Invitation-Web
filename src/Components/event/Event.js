import Circle from "../Circle";
import Card from "../Card";
import Heading from "../Heading";
import "./event.css";
export default function Event() {
  return (
    <section id="Acara" className="eventContainer">
      <div data-aos="zoom-in">
        <Heading
          title="Assalamualaikum Wr.Wb"
          text="Dengan memohon rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan Akad & Resepsi Pernikahan kami yang insya allah akan dilaksanakan pada :"
        />
      </div>
      <div className="event">
        <div className="contract" data-aos="fade-up-right">
          <h1>Akad Nikah</h1>
          <div className="cardContainer">
            <Card svg="schedule.svg" title="Sabtu" desc="2 Juli 2022" />
            <Card svg="clock.svg" title="Pukul" desc="09.00 WIB" />
          </div>
        </div>
        <div className="reseption" data-aos="fade-up-left">
          <h1>Resepsi Nikah</h1>
          <div className="cardContainer">
            <Card svg="schedule.svg" title="Sabtu" desc="2 Juli 2022" />
            <Card svg="clock.svg" title="Pukul" desc="11.00 WIB" />
          </div>
        </div>
      </div>
      <div className="placeContainer" data-aos="zoom-in-down">
        <img src={process.env.PUBLIC_URL + `location.svg`} alt="" />
        <p className="place">Bertempat di kediaman mempelai wanita</p>
      </div>
      <Circle />
    </section>
  );
}
