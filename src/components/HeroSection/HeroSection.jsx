import "./HeroSection.css";
import InputBox from "../InputBox/InputBox";

export default function HeroSection() {
  
  return (
    <div id="hero-section">
      <span id="hero-box">
        <div className="h1">
          <p>please paste</p>
          <p>
            your <span className="unique">link</span> to verify
          </p>
        </div>

        <InputBox show={true} />

        <div className="h3">
          <p>VerifyMe just provides an opinion, we recommend</p>
          <p>verifying important details yourself too</p>
        </div>
      </span>
    </div>
  );
}
