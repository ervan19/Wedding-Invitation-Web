import { useState } from "react";

export default function Photo() {
  const [image, setImage] = useState([
    {
      number: 1,
      title: "Gambar-1",
      imageURL: "1.jpeg",
    },
    {
      number: 2,
      title: "Gambar-2",
      imageURL: "2.jpeg",
    },
    {
      number: 3,
      title: "Gambar-3",
      imageURL: "3.jpeg",
    },
    {
      number: 4,
      title: "Gambar-4",
      imageURL: "4.jpeg",
    },
    {
      number: 5,
      title: "Gambar-5",
      imageURL: "5.jpeg",
    },
    {
      number: 6,
      title: "Gambar-6",
      imageURL: "6.jpeg",
    },
  ]);
  return (
    <div className="photoContainer">
      {image.map((e) => {
        return (
          <div className="wrapper-photo" key={e.title} data-aos="zoom-in">
            <img src={process.env.PUBLIC_URL + e.imageURL} alt={e.title} />
            <h3>Rahmat & Lisnawati</h3>
          </div>
        );
      })}
    </div>
  );
}
