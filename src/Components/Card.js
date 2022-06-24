export default function Card({ svg, title, desc }) {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + `${svg}`}
          alt="schedule"
          height={36}
          width={36}
        />
        <div>
          <h4>{title}</h4>
          <h4>{desc}</h4>
        </div>
      </div>
    </div>
  );
}
