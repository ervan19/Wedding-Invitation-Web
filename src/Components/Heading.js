export default function Heading({ title, text }) {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
