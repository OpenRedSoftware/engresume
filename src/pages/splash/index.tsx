import React from "react";
import FAQ from "../../components/FAQ";
import { logevent } from "../../firebase/firebaseapp";
import Carousel from "../../components/Carousel";
import MainJumbo from "../../components/MainJumbo";
import "../index.css";
import { Helmet } from 'react-helmet-async';

function Splash() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>PineappleResume | Reviews</title>
        <meta property="og:title" content="PineappleResume | Reviews" />
      </Helmet>
      <div>
        <Carousel />
        <MainJumbo />
      </div>

      <FAQ />
    </>
  );
}

export default Splash;
