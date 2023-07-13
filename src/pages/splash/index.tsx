import React from "react";
import FAQ from "../../components/FAQ";
import { logevent } from "../../firebase/firebaseapp";
import Carousel from "../../components/Carousel";
import MainJumbo from "../../components/MainJumbo";
import "../index.css";
import SEO from "../../components/SEO";
import HomeCards from "../../components/HomeCards";
import Refund from "../../components/Refund";

function Splash() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <SEO
        title="PineappleResume | Resume Review by Top Recruiters"
        description="PineappleResume.com - Professional Software Engineer resume reviews."
        url="https://www.pineappleresume.com"
      />
      <div>
        <Carousel />
        <HomeCards />
      </div>

      <FAQ />

      <Refund />

    </>
  );
}

export default Splash;
