import React from "react";
import "./App.css";
import Event from "./Components/event/Event";
import Galery from "./Components/galery/Galery";
import Header from "./Components/header/Header";
import Location from "./Components/location/Location";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Navbar from "./Components/navbar/Navbar";
import Greating from "./Components/greating/Greating";

import AudioPlayer from "./Components/AudioPlayer";
function App() {
  useEffect(function() {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <AudioPlayer />
      <Header />
      <Event />
      <Location />
      <Galery />
      <Greating />
      <footer>
        <p>
          Development by | <span>HopePoint</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
