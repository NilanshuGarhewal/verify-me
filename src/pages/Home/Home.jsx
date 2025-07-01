import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div id="container">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;
