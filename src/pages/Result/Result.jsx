import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import ResultSection from "../../components/ResultSection/ResultSection";
import Footer from "../../components/Footer/Footer";

import "./Result.css";

function Result() {
  const location = useLocation();
  const { url } = location.state || {};

  const [result, setResult] = useState(null);

  useEffect(() => {
    if (url) {
      axios
        .post("http://localhost:5000/check-profile", { url })
        .then((res) => {
          setResult(res.data);
        })
        .catch((err) => {
          console.error("Backend error:", err);
        });
    }
  }, [url]);

  return (
    <div id="container">
      <Navbar />

      <ResultSection result={result} url={url} />

      <Footer />
    </div>
  );
}

export default Result;
