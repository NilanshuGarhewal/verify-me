import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="logo">
        <div className="logo-div"></div>
        <p>VerifyMe</p>
      </div>

      <div className="tools">
        <div className="tool-div">
          <a href="#" className="tool-link">
            Enter Manually
          </a>
          <a href="#" className="tool-link">
            History
          </a>
          <a href="#" className="tool-link">
            Refresh
          </a>
        </div>
      </div>
    </div>
  );
}
