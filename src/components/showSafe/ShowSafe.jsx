import "./ShowSafe.css";
import good from "./verified_account(1).png";
import bad from "./danger_account.png";

export default function ShowSafe({ isSafe, reason }) {
  return (
    <div className="show-safe">
      {/* {isSafe ? (
        <p className="safe-or-not">
          <img src={good} alt="true" />
          This account looks safe
        </p>
      ) : (
        <p className="safe-or-not">
          <img src={bad} alt="true" />
          This account looks suspicious
        </p>
      )} */}

      {isSafe == "bad" ? (
        <p className="safe-or-not">
          <img src={bad} alt="true" />
          This account looks suspicious
        </p>
      ) : isSafe == "neutral" ? (
        <p className="safe-or-not">:) Looks neutral, can't say anything!</p>
      ) : (
        <p className="safe-or-not">
          <img src={good} alt="true" />
          This account looks safe
        </p>
      )}

      <div className="precautions">
        <p className="but">reason</p>
        <p className="prec">{reason}</p>
      </div>
    </div>
  );
}
