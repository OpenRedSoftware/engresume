import { Provider } from "react-redux";
import store from "./store";
import SEO from "../../components/SEO";
import React, { useEffect } from "react";
import Checkout from "./Checkout";
import { logevent } from "../../firebase/firebaseapp";

function CheckoutWrapper() {
  useEffect(() => {
    logevent("view", { name: window.location.pathname });
  });

  return (
    <Provider store={store}>
      <SEO
        title="PineappleResume | Checkout"
        description="Checkout page for PineappleResume. $50 to get your resume reviewed by a professional engineer."
        url="https://pineappleresume.com/checkout"
      />

      <Checkout />
    </Provider>
  );
}

export default CheckoutWrapper;
