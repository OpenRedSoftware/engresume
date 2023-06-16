import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import { Helmet } from "react-helmet-async";

function Behavioral() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Behavioral Interview Guide | Pineapple Resume</title>
        <meta property="og:title" content="PineappleResume | Success" />
      </Helmet>
      <div>
        Hello, mom!
      </div>
    </>
  );
}

export default Behavioral;
