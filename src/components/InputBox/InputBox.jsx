import "./InputBox.css";
import { ArrowRightIcon } from "@phosphor-icons/react";
import designImageOne from "./analyse_accout_name.png";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import RetroErr from "../RetroErr/RetroErr";

export default function InputBox({ show = false, margin = 50 }) {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");

  const [isErr, setIsErr] = useState(false);

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!url) {
        setIsErr(true);
        setMessage("Please paste the URL");

        setTimeout(() => {
          setIsErr(false);
          setMessage("");
        }, 5000); // 🕔 auto-hide after 5 sec

        return;
      } else if (!url.includes("instagram.com")) {
        setIsErr(true);
        setMessage("Only instagram profile links are supported for now");

        setTimeout(() => {
          setIsErr(false);
          setMessage("");
        }, 5000);

        return;
      }

      setIsErr(false);
      setMessage("");

      const response = await axios.post("http://localhost:5000/check-profile", {
        url: url,
      });

      const profileData = response.data;
      navigate("/result", { state: { url, profileData } });
    } catch (err) {
      console.error("Error:", err);
      setIsErr(true);
      setMessage("Something went wrong");

      setTimeout(() => {
        setIsErr(false);
        setMessage("");
      }, 5000);
    }
  };

  let styles = {
    margin: `${margin}px 0`,
  };

  return (
    <div className="h2" style={styles}>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            className="input"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your link here..."
          />
          <button type="submit" className="submit">
            <ArrowRightIcon size={25} />
          </button>

          {show == true ? (
            <img src={designImageOne} className="design-img" />
          ) : (
            ""
          )}
        </div>
      </form>

      {isErr && <RetroErr message={message} />}
    </div>
  );
}
