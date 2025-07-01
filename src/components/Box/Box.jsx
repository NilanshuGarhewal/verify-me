import "./Box.css";

export default function Box({ boxName, boxContent = "unknown" }) {
  return (
    <span className="box">
      <p className="box-name">{boxName}</p>
      <p className="box-content">{boxContent}</p>
    </span>
  );
}
