import React from "react";
import FAQ from "../../components/FAQ";
import { logevent } from "../../firebase/firebaseapp";
import Carousel from "../../components/Carousel";
import MainJumbo from "../../components/MainJumbo";
import "../index.css";

function Splash() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <main>
      <div>
        <Carousel />
        <MainJumbo />
      </div>

      <FAQ />
    </main>
  );
}

export default Splash;
