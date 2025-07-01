import "./Footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <div className="f1">
        <div className="footer-logo">
          <div className="eqlipse"></div>
          <p className="f-logo">VerifyMe</p>

          <p className="rights">© 2025 VerifyMe. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <p className="contact">contact</p>
          <a href="#" className="footer-link">
            instagram
          </a>
          <a href="#" className="footer-link">
            linkedin
          </a>
          <a href="#" className="footer-link">
            github
          </a>
          <a href="#" className="footer-link">
            about me
          </a>
        </div>
      </div>

      <div className="f2">
        <p>
          VerifyMe is not always 100% correct & its just provides an opinion
        </p>
      </div>
    </div>
  );
}
