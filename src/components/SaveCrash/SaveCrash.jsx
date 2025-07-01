import "./SaveCrash.css";

export default function SaveCrash({ message }) {
  return (
    <div className="save-crash">
      <b>NOTE: </b>
      &nbsp;
      <p>{message}</p>
    </div>
  );
}
