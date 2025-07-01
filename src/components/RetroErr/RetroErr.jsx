import "./RetroErr.css";

export default function RetroErr({ message }) {
  return (
    <div className="retro-err">
      <p>{message}</p>
    </div>
  );
}
