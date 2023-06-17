import React from "react";
import FAQ from "../../components/FAQ";
import { logevent } from "../../firebase/firebaseapp";
import Carousel from "../../components/Carousel";
import MainJumbo from "../../components/MainJumbo";
import "../index.css";
import SEO from "../../components/SEO";

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
        <MainJumbo />
      </div>

      <FAQ />
    </>
  );
}

export default Splash;
