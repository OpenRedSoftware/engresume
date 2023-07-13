/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { logevent } from "../../firebase/firebaseapp";
import { Alert } from "react-bootstrap";
import FormComponent from "./FormComponent";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setPaymentId, setPaid } from "./formSlice";

function Checkout() {
  const dev = window.location.hostname === "localhost";

  const { paid, showMustpay } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      dispatch(setPaid(true));
      dispatch(setPaymentId(id));
    }

    logevent("view", { name: window.location.pathname });
  }, [dispatch]);

  return (
    <>
      <FormComponent />
      
      <a
        href={
          paid
            ? "#"
            : dev
            ? "https://buy.stripe.com/test_dR62bE7Py3ks75e7ss"
            : "https://buy.stripe.com/28og1KgbZ3ZG7aE9AA"
        }
        rel="noreferrer"
      >
        <Button
          className={
            !paid ? "btn btn-primary" : "btn btn-secondary"
          }
        >
          {paid ? "Payment Complete" : "Complete Payment"}
        </Button>
      </a>

      {showMustpay && (
        <Alert variant="danger" className="mt-3">
          Please complete payment before submitting.
        </Alert>
      )}

      <p className="text-muted mt-3">
        Need help? Contact us at support@engresume.com
      </p>
    </>
  );
}

export default Checkout;
